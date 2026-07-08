from django.db import models

# Create your models here.
class Order(models.Model):
    order_number = models.CharField(max_length=50)
    customer_name = models.CharField(max_length=100)
    status = models.CharField(max_length=50)
    delivery_date = models.DateField()

    def __str__(self):
        return self.order_number