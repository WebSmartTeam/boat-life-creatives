#!/usr/bin/env node

import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://yiffafrjaoztveqgvjlk.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlpZmZhZnJqYW96dHZlcWd2amxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgwMzM1NTEsImV4cCI6MjA2MzYwOTU1MX0.jG1Hth8Xqa8IoSXz-zij1_PapxFnXZJpWOJ3d6LWPH0'
);

const PROJECT_ID = 'BOAT-LIFE-CREATIVES-001';
const MASTER_CLAUDE_ID = 'ANISH-MASTER-001';

async function sendMessage(message, type = 'general') {
  console.log(`📤 Sending ${type} to parent farm...`);

  const { data, error } = await supabase
    .from('mcs_child_updates')
    .insert({
      target_project_id: MASTER_CLAUDE_ID,
      created_by: PROJECT_ID,
      message: message,
      directive_type: type,
      priority: type === 'urgent' ? 'high' : 'normal',
      metadata: {
        sender: PROJECT_ID,
        timestamp: new Date().toISOString(),
        farmer_type: 'boat-life-creatives'
      }
    });

  if (error) {
    console.error('❌ Error sending message:', error.message);
  } else {
    console.log('✅ Message sent to parent farm successfully!');
  }
}

async function checkMessages() {
  console.log('📥 Checking for messages from parent farm...\n');

  const { data, error } = await supabase
    .from('mcs_child_updates')
    .select('*')
    .eq('target_project_id', PROJECT_ID)
    .eq('status', 'pending')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('❌ Error checking messages:', error.message);
    return;
  }

  if (!data || data.length === 0) {
    console.log('📭 No new messages from parent farm');
    return;
  }

  console.log(`📬 Found ${data.length} messages from parent:\n`);

  for (const msg of data) {
    console.log('─────────────────────────────────────');
    console.log(`From: ${msg.created_by || 'Parent Farm'}`);
    console.log(`Type: ${msg.directive_type}`);
    console.log(`Priority: ${msg.priority}`);
    console.log(`Time: ${new Date(msg.created_at).toLocaleString()}`);
    console.log(`\nMessage:\n${msg.message}`);
    console.log('─────────────────────────────────────\n');

    await supabase
      .from('mcs_child_updates')
      .update({
        status: 'acknowledged',
        acknowledged_at: new Date().toISOString()
      })
      .eq('id', msg.id);
  }
}

const command = process.argv[2];
const args = process.argv.slice(3).join(' ');

switch(command) {
  case 'send':
    if (!args) {
      console.log('Usage: node communicate.js send "your message"');
      break;
    }
    sendMessage(args);
    break;

  case 'check':
    checkMessages();
    break;

  case 'status':
    sendMessage(args || 'Status update from BOAT-LIFE-CREATIVES-001', 'status');
    break;

  case 'urgent':
    sendMessage(args || 'Urgent message from BOAT-LIFE-CREATIVES-001', 'urgent');
    break;

  case 'complete':
    sendMessage(`Task completed: ${args}`, 'completion');
    break;

  case 'stuck':
    sendMessage(`Need assistance: ${args}`, 'urgent');
    break;

  case 'deploy':
    sendMessage(`NETLIFY DEPLOYMENT REQUEST: ${args}`, 'deployment');
    break;

  default:
    console.log(`
🎨 BOAT-LIFE-CREATIVES-001 Communication System

Commands:
  node communicate.js check           # Check for messages from parent
  node communicate.js send "message"  # Send update to parent farm
  node communicate.js status "text"   # Send status update
  node communicate.js urgent "help!"  # Send urgent message
  node communicate.js complete "task" # Report task completion
  node communicate.js stuck "problem" # Request help when blocked
  node communicate.js deploy "ready"  # Request Netlify deployment

Farmer ID: ${PROJECT_ID}
Reports to: ${MASTER_CLAUDE_ID}
Project: Boat Life Creatives Website
    `);
}