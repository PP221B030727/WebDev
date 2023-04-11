from django.db import models

# Create your models here.


class Company(models.Model):
    name = models.CharField(max_length=128)
    description = models.TextField(null=True, blank=True)
    city = models.CharField(max_length=128, null=True, blank=True)
    address = models.TextField(null=True, blank=True)

    def to_json(self):
        return {
            'name': self.name,
            'description': self.description,
            'city': self.city,
            'address': self.address
        }

class Vacancy(models.Model):
    name = models.CharField(max_length=256)
    description = models.TextField(null=True, blank=True)
    salary = models.FloatField(null=True, blank=True)
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    def to_json(self):
        return {
            'name': self.name,
            'description': self.description,
            'salary': self.salary,
            'company': self.company.to_json()
        }