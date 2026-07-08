from django.contrib import admin
from .models import Ticket
# Register your models here.
@admin.register(Ticket)

class TicketAdmin(admin.ModelAdmin):

    list_display =(
        'ticket_number',
        'status',
        'created_at',
        'summary',
    )

    list_editable=(
        'status',
    )

    search_fields = (
        'ticket_number',
        'issue',
        'summary',
    )

    list_filter =(
        'status',
    )

    ordering = (
        '-created_at',
    )

    readonly_fields = (
        'ticket_number',
        'created_at',
    )


