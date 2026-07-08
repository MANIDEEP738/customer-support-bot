from django.shortcuts import render

# Create your views here.
import re
from rest_framework.response import Response
from rest_framework.decorators import api_view
from orders.models import Order
from tickets.models import Ticket
from .gemini_services import ask_gemini
import requests


def generate_ticket_number():

    total = Ticket.objects.count() + 1

    return f"T{total:03}"


@api_view(['POST'])


def chat(request):
    message = request.data.get("message")

    complaint_words = [
        "damaged",
    "damage",
    "broken",
    "break",
    "refund",
    "replace",
    "replacement",
    "issue",
    "problem",
    "battery",
    "drains",
    "drain",
    "slow",
    "not working",
    "defective",
    "fault",
    "cracked",
    "crack",
    "screen",
    "late",
    "delay",
    "missing",
    "wrong",
    "cancel",
    "return"
    ]
    # this is complaint of order  logic
    if any(word in message.lower()
           for word in complaint_words):

        ticket_number = generate_ticket_number()
        ticket = Ticket.objects.create(
            ticket_number = ticket_number,
            issue = message
        )
        requests.post(
             "http://localhost:5678/webhook-test/ticket-created",
             json = {
                  "ticket_id": ticket.ticket_number,
                   "issue": ticket.issue,
                   "status": ticket.status     
             }
        )
        
        prompt = f"""You are a helpful customer support assistant.
        Customer Issue:{message}
        Ticket Number:{ticket.ticket_number}Create a friendly support response."""
        reply = ask_gemini(prompt)

        return Response({
        "reply": reply
        })

    # order related  logic

    match = re.search(r'\d+', message)

    if not match :
        prompt = f"""You are a customer support assistant for an e-commerce company.
        Customer Message:{message}
        Respond politely and professionally.
        If you don't know the answer, ask for more details."""

        reply = ask_gemini(prompt)
        return Response({
        "reply": reply
        })
        
    order_number = match.group()

    try:
        order = Order.objects.get(order_number=order_number)

        prompt =f"""You are a customer support assistant.
        Order Number:{order.order_number}
        Status:{order.status}
        Delivery Date:{order.delivery_date}
        Customer Name:{order.customer_name}
        Create a friendly customer response."""


        reply = ask_gemini(prompt)

        return Response({
             "reply": reply
             })  

    except Order.DoesNotExist:

            return Response({
                "reply": f"sory, i couldn't find order # {order_number}.please check the order number and try again "
            })



@api_view(["POST"])
def update_summary(request):

    ticket_number = request.data.get("ticket_id")

    summary = request.data.get("summary")

    try:

        ticket = Ticket.objects.get(
            ticket_number=ticket_number
        )

        ticket.summary = summary

        ticket.save()

        return Response({

            "message": "Summary Updated"

        })

    except Ticket.DoesNotExist:

        return Response({

            "message": "Ticket Not Found"

        }, status=404)



