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

    # company1 = Company(name="Acme Inc.", description="A manufacturing company", city="New York", address="123 Main St")
    # company2 = Company(name="Global Industries", description="A technology company", city="San Francisco",address="456 Market St")
    # company3 = Company(name="ABC Corporation", description="A consulting firm", city="Chicago", address="789 State St")
    # company4 = Company(name="XYZ Company", description="A software development company", city="Seattle", address="321 First Ave")
    # company5 = Company(name="Sunrise Enterprises", description="A retail company", city="Miami", address="555 Ocean Dr")
    # company6 = Company(name="Big Mountain Corporation", description="A construction company", city="Denver",address="777 Main St")
    # company7 = Company(name="Peak Performance Inc.", description="A sports equipment company", city="Los Angeles",address="888 Sunset Blvd")
    # company8 = Company(name="Redwood Ventures", description="A venture capital firm", city="San Francisco",address="999 Howard St")
    # company9 = Company(name="Phoenix Industries", description="A manufacturing company", city="Houston",address="111 Main St")
    # company10 = Company(name="Evergreen Enterprises", description="A renewable energy company", city="Portland",address="222 Oak St")

# vacancy1 = Vacancy(name="Software Developer", description="Develop web applications using Python and Django",salary=75000.0, company=company4)
# vacancy2 = Vacancy(name="Sales Representative", description="Sell software products to businesses", salary=60000.0,company=company2)
# vacancy3 = Vacancy(name="Marketing Coordinator", description="Assist with marketing campaigns and events",salary=45000.0, company=company3)
# vacancy4 = Vacancy(name="Construction Project Manager",description="Manage construction projects from start to finish", salary=90000.0,company=company6)
# vacancy5 = Vacancy(name="Retail Sales Associate", description="Assist customers with purchases and inquiries",salary=30000.0, company=company5)
# vacancy6 = Vacancy(name="Venture Capital Analyst", description="Assist with due diligence on potential investments",salary=80000.0, company=company8)
# vacancy7 = Vacancy(name="Manufacturing Engineer", description="Design and improve manufacturing processes",salary=85000.0, company=company1)
# vacancy8 = Vacancy(name="Sports Marketing Manager",description="Manage sponsorships and partnerships with sports teams", salary=70000.0,company=company7)
# vacancy9 = Vacancy(name="Renewable Energy Analyst",description="Analyze data to improve renewable energy efficiency", salary=65000.0,company=company10)
# vacancy10 = Vacancy(name="Consulting Analyst",description="Provide analysis and recommendations for consulting clients", salary=55000.0,company=company3)
# vacancy11 = Vacancy(name="Marketing Manager", description="Create and execute marketing campaigns across multiple channels to drive sales", salary=90000.0, company=company2)


# vacancy.save()
