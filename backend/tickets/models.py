from django.db import models

# Create your models here.
class Ticket(models.Model):
    ticket_number = models.CharField(
        max_length= 20,
        unique = True
    )

    issue = models.TextField()

    summary = models.TextField(
        blank =True,
        default = ""
    )

    status = models.CharField(
        max_length=50,
        default = "open"
    )

    created_at = models.DateTimeField(
        auto_now_add=True
        )


    def __str__(self):
        return self.status
    
