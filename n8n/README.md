# n8n Workflow

This folder contains the workflow used in the AI Customer Support Bot.

Workflow Features

- Receives webhook from Django
- Sends issue to Google Gemini
- Generates AI summary
- Sends Gmail notification
- Updates Django database

Import Steps

1. Install n8n
2. Open n8n
3. Import customer_support_workflow.json
4. Add Gemini API credentials
5. Add Gmail credentials
6. Activate workflow