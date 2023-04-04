from django.db import models

# Create your models here.


class Category(models.Model):
    name = models.CharField(max_length=128)
    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length=256)
    description = models.TextField(null=True, blank=True)
    price = models.DecimalField(max_digits=6 ,decimal_places=2)
    count = models.PositiveIntegerField(default=0)
    image = models.ImageField(upload_to='product_images')
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    is_active = models.BooleanField(default=True)