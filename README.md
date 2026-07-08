# 🤖 AI Customer Support Bot
An AI-powered Customer Support Bot built using **React, Django REST Framework, SQLite, Google Gemini API, and n8n**.

The application allows customers to submit support requests through a chat interface. The backend creates support tickets, AI automatically summarizes customer issues, n8n automates notifications, and the ticket information is stored for support teams.

---

# 📌 Project Demo

## Customer Workflow

Customer
↓

React Chat Interface
↓

Django REST API
↓

SQLite Database
↓

n8n Webhook
↓

Google Gemini AI
↓

AI Summary Generated
↓

Email Notification Sent
↓

Summary Saved Back to Django

---

# 🚀 Features

## Customer Side

- AI-powered customer support chatbot
- Create support tickets
- Automatic ticket generation
- Real-time chatbot responses
- Clean React UI

---

## Backend

- Django REST Framework APIs
- SQLite database
- Ticket Management
- AI Summary Storage
- Django Admin Dashboard

---

## AI Features

- Google Gemini API Integration
- Automatic issue summarization
- Professional AI-generated support summaries

Example

Customer:

> My laptop battery drains quickly.

Gemini Summary:

> Customer reports rapid laptop battery drain.

---

## n8n Automation

When a ticket is created:

Customer Message
↓

Create Ticket
↓

Trigger Webhook
↓

Google Gemini
↓

Generate Summary
↓

Send Gmail Notification
↓

Update Django Database

---

## Email Automation

Every new support ticket automatically sends an email containing:

- Ticket Number
- Customer Issue
- AI Summary
- Ticket Status

---

# 🛠 Tech Stack

## Frontend

- React
- Axios
- Vite
- CSS

---

## Backend

- Python
- Django
- Django REST Framework (DRF)

---

## Database

- SQLite

---

## AI

- Google Gemini API

---

## Automation

- n8n

---

## Version Control

- Git
- GitHub

---

# 📂 Project Structure

```
customer_support_bot/

│
├── backend/
│   ├── chatbot/
│   ├── tickets/
    |-- orders/
│   ├── manage.py
│   ├── db.sqlite3
│   ├── requirements.txt
│   └── .env
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── .env
│
├── n8n/
│   ├── workflows/
│   │     customer_support_workflow.json
│   └── README.md
│
├── screenshots/
│   ├── actual page.png
│   ├── chat1.png
    |-- chat2.png
    |-- chat3.png
│   ├── django admin.png
    |-- django created all tickets.png
    |--ticket propoerty.png
│   ├── workflow of n8n.png
│   └── recieved mail.png
│
├── README.md
└── .gitignore
```

---

# ⚙️ Installation

## 1. Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/customer-support-bot.git

cd customer-support-bot
```

---

# Backend Setup

```bash
cd backend
```

Create virtual environment

```bash
python -m venv venv
```

Activate

Windows

```bash
venv\Scripts\activate
```

Install packages

```bash
pip install -r requirements.txt
```

Run migrations

```bash
python manage.py migrate
```

Run server

```bash
python manage.py runserver
```

Backend runs at

```
http://127.0.0.1:8000
```

---

# Frontend Setup

Open another terminal

```bash
cd frontend
```

Install packages

```bash
npm install
```

Run frontend

```bash
npm run dev
```

Frontend runs at

```
http://localhost:5173
```

---

# n8n Setup

Install n8n

```bash
npm install -g n8n
```

Run

```bash
n8n
```

Open

```
http://localhost:5678
```

Import

```
customer_support_workflow.json
```

Configure

- Google Gemini Credentials
- Gmail Credentials

Activate Workflow

---

# API Endpoints

## Chat

```
POST /api/chat/
```

Request

```json
{
    "message":"My laptop battery drains quickly."
}
```

---

## Update AI Summary

```
POST /api/update-summary/
```

Request

```json
{
    "ticket_id":"T048",
    "summary":"Customer reports battery issue."
}
```

---

# Django Admin

Open

```
http://127.0.0.1:8000/admin
```

Features

- View Tickets
- Search Tickets
- Filter by Status
- View AI Summaries
- Manage Support Tickets

---

# AI Workflow

```
Customer

↓

React

↓

Django REST API

↓

SQLite

↓

Webhook

↓

Google Gemini

↓

Generate Summary

↓

Send Gmail

↓

Update Django Database
```

---

# Screenshots

Add screenshots inside

```
screenshots/
```

Example

- Home Page
- Chat Interface
- Django Admin
- n8n Workflow
- Gmail Notification

---

# Future Improvements

- JWT Authentication
- Role-based Access
- PostgreSQL
- Docker Deployment
- CI/CD Pipeline
- WhatsApp Integration
- Slack Notifications
- Multi-language Support
- RAG-based Knowledge Base
- FAQ Search using Vector Database
- Live Chat Dashboard

---

# Skills Demonstrated

- Full Stack Development
- REST API Development
- React
- Django
- Django REST Framework
- SQLite
- AI Integration
- Google Gemini API
- Workflow Automation
- n8n
- Gmail Automation
- HTTP APIs
- Git
- GitHub

---

# Learning Outcomes

This project demonstrates:

✅ Full Stack Development

✅ REST API Design

✅ AI Integration

✅ Workflow Automation

✅ Backend Development

✅ Database Management

✅ API Communication

✅ Professional Project Structure

---

# Author

**Manideep Malla**

B.Tech (Artificial Intelligence & Machine Learning)

GitHub:
https://github.com/MANIDEEP738

LinkedIn:
https://linkedin.com/in/MANIDEEPMALLA

---

=======
# customer-support-bot
AI-powered Customer Support Bot using React, Django, DRF, Gemini API, SQLite and n8n.

