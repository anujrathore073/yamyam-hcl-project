# ReviewMaster: Product Review & Rating Platform

## 🛒 Domain
E-commerce

## 📋 Project Synopsis
**ReviewMaster** is a Django-based product review and rating platform that allows customers to:
- Submit reviews on products
- Rate their purchases
- View aggregated feedback for better decision-making

## 💻 Technology Stack
- Python (Django Framework)
- MySQL (Database)

## 🔧 Key Modules
- **Review Submission and Moderation**: Users can post reviews; admins can moderate content.
- **Rating and Feedback Aggregation**: Collects and displays average ratings.
- **Product Ranking and Filtering**: Helps users sort and discover products based on review scores.
- **User Profiles**: Manages user information and their submitted reviews.

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/anujrathore073/yamyam-hcl-project.git
cd yamyam-hcl-project
```

### 2. Set Up Virtual Environment
```bash
python -m venv venv
source venv/bin/activate   # On Windows: venv\Scripts\activate
```

### 3. Install Dependencies
```bash
pip install -r requirements.txt
```

### 4. Configure MySQL Database
- Create a database in MySQL.
- Update `settings.py` with your MySQL credentials:
```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'your_db_name',
        'USER': 'your_username',
        'PASSWORD': 'your_password',
        'HOST': 'localhost',
        'PORT': '3306',
    }
}
```

### 5. Run Migrations
```bash
python manage.py makemigrations
python manage.py migrate
```

### 6. Create Superuser (for admin access)
```bash
python manage.py createsuperuser
```

### 7. Run the Development Server
```bash
python manage.py runserver
```

---

## 📁 Repository
GitHub: [https://github.com/anujrathore073/yamyam-hcl-project](https://github.com/anujrathore073/yamyam-hcl-project)

## 🧑‍💻 Author
- [Anuj Rathore](https://github.com/anujrathore073)

---

Contributions, stars, and forks are welcome! ⭐
