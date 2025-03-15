// Data for each Python library slide
export const pythonLibrariesData = [
  {
    title: "NumPy",
    subtitle: "Числові обчислення",
    description:
      "NumPy — це фундаментальний пакет для наукових обчислень у Python. Він забезпечує підтримку великих багатовимірних масивів і матриць, а також велику колекцію високорівневих математичних функцій для роботи з цими масивами.",
    points: [
      "Потужний об'єкт N-вимірного масиву",
      "Складні функції трансляції",
      "Інструменти для інтеграції коду на C/C++ та Fortran",
      "Можливості лінійної алгебри, перетворення Фур'є та генерації випадкових чисел",
      "Високопродуктивні математичні операції з масивами",
    ],
    demoDescription:
      "Досліджуйте, як NumPy ефективно обробляє операції з масивами порівняно зі стандартними списками Python.",
    codeExample: `import numpy as np

# Create a 2D array (matrix)
arr = np.array([[1, 2, 3], [4, 5, 6]])

# Matrix operations
print(arr.shape)        # Output: (2, 3)
print(arr.T)            # Transpose
print(np.dot(arr, arr.T))  # Matrix multiplication

# Array manipulation
print(arr.reshape(3, 2))  # Reshape
print(arr.sum(axis=0))    # Sum columns`,
    codeSnippets: [
      {
        name: "Основні операції з масивами",
        code: `import numpy as np

# Creating arrays
arr1 = np.array([1, 2, 3, 4, 5])
arr2 = np.arange(5)
arr3 = np.linspace(0, 1, 5)  # 5 evenly spaced values

# Array operations (much faster than Python lists)
print(arr1 + arr2)      # Element-wise addition
print(arr1 * 2)         # Scalar multiplication
print(np.sin(arr1))     # Apply function to each element

# Statistical methods
print(arr1.mean())
print(arr1.std())
print(arr1.min())`,
        language: "python",
      },
      {
        name: "Індексація та нарізка масивів",
        code: `import numpy as np

# Create a 2D array
arr = np.array([[1, 2, 3, 4], 
                [5, 6, 7, 8], 
                [9, 10, 11, 12]])

# Basic slicing
print(arr[0, 1])       # Single element (row 0, col 1)
print(arr[:, 1])       # All rows, column 1
print(arr[1:, :2])     # Rows 1 to end, columns 0 and 1

# Boolean indexing
mask = arr > 5
print(arr[mask])       # All elements > 5

# Fancy indexing
indices = [0, 2]
print(arr[indices])    # Rows 0 and 2`,
        language: "python",
      },
    ],
  },
  {
    title: "Pandas",
    subtitle: "Аналіз і маніпуляція даними",
    description:
      "Pandas — це швидкий, потужний, гнучкий і простий у використанні інструмент аналізу та маніпуляції даними з відкритим кодом, побудований на основі Python. Він пропонує структури даних і операції для маніпуляції числовими таблицями та часовими рядами.",
    points: [
      "Об'єкти DataFrame для маніпуляції даними з інтегрованою індексацією",
      "Інструменти для читання та запису даних у різних форматах",
      "Вирівнювання даних та інтегрована обробка відсутніх даних",
      "Переформування та зведення наборів даних",
      "Інтелектуальне вирівнювання даних і злиття/об'єднання наборів даних",
    ],
    demoDescription:
      "Погляньте, як Pandas полегшує аналіз даних завдяки потужному об'єкту DataFrame.",
    codeExample: `import pandas as pd

# Create a DataFrame
data = {'Name': ['Джон', 'Анна', 'Петер', 'Лінда'],
        'Age': [28, 34, 29, 42],
        'City': ['Нью-Йорк', 'Париж', 'Берлін', 'Лондон']}
        
df = pd.DataFrame(data)
print(df)

# Basic operations
print(df.describe())  # Statistical summary
print(df.sort_values(by='Age'))  # Sort by age
print(df['Age'].mean())  # Mean age`,
    codeSnippets: [
      {
        name: "Обробка даних",
        code: `import pandas as pd

# Reading data
df = pd.read_csv('data.csv')  # Can also read Excel, SQL, JSON, etc.

# Inspecting data
print(df.head())       # First 5 rows
print(df.info())       # Data types and non-null values
print(df.describe())   # Statistical summary

# Data cleaning
df.dropna(inplace=True)            # Drop rows with missing values
df.fillna(value=0, inplace=True)   # Fill missing values with 0
df = df.drop_duplicates()          # Remove duplicate rows

# Data transformation
df['new_column'] = df['existing_column'] * 2
df = df.rename(columns={'old_name': 'new_name'})`,
        language: "python",
      },
      {
        name: "Аналіз даних",
        code: `import pandas as pd
import matplotlib.pyplot as plt

# Sample data
data = {'year': [2010, 2011, 2012, 2013, 2014],
        'sales': [10, 15, 12, 18, 22],
        'expenses': [8, 11, 14, 15, 18]}
df = pd.DataFrame(data)

# Grouping and aggregation
df_grouped = df.groupby('year').sum()
print(df_grouped)

# Filtering
high_sales = df[df['sales'] > 15]
print(high_sales)

# Applying functions
df['profit'] = df['sales'] - df['expenses']

# Visualization
df.plot(x='year', y=['sales', 'expenses', 'profit'], 
       kind='bar', figsize=(10, 6))
plt.title('Ефективність компанії')
plt.ylabel('Сума (млн $)')
plt.show()`,
        language: "python",
      },
    ],
  },
  {
    title: "Matplotlib",
    subtitle: "Бібліотека візуалізації",
    description:
      "Matplotlib — це всеосяжна бібліотека для створення статичних, анімованих та інтерактивних візуалізацій у Python. Вона використовується для створення графіків, діаграм і фігур публікаційної якості в різних форматах.",
    points: [
      "Створення графіків, гістограм, спектрів потужності, стовпчикових діаграм тощо за кілька рядків коду",
      "Висока налаштовуваність із контролем над кожним елементом фігури",
      "Виведення у популярні формати файлів, включаючи PNG, PDF, SVG, EPS тощо",
      "Добре інтегрується з NumPy, Pandas та іншими науковими бібліотеками",
      "Інтерактивні фігури з можливістю масштабування, панорамування та оновлення новими даними",
    ],
    demoDescription:
      "Досліджуйте можливості візуалізації Matplotlib для представлення даних.",
    codeExample: `import matplotlib.pyplot as plt
import numpy as np

# Generate data
x = np.linspace(0, 10, 100)
y = np.sin(x)

# Create a simple plot
plt.figure(figsize=(8, 4))
plt.plot(x, y, label='sin(x)')
plt.title('Синусоїда')
plt.xlabel('x')
plt.ylabel('sin(x)')
plt.grid(True)
plt.legend()
plt.show()`,
    codeSnippets: [
      {
        name: "Базове побудування графіків",
        code: `import matplotlib.pyplot as plt
import numpy as np

# Generate data
x = np.linspace(0, 10, 30)
y1 = np.sin(x)
y2 = np.cos(x)

# Create a figure with subplots
fig, (ax1, ax2) = plt.subplots(2, 1, figsize=(8, 6))

# First subplot
ax1.plot(x, y1, 'b-', linewidth=2, label='sin(x)')
ax1.set_title('Синусоїдальна функція')
ax1.set_xlabel('x')
ax1.set_ylabel('y')
ax1.grid(True)
ax1.legend()

# Second subplot
ax2.plot(x, y2, 'r--', linewidth=2, label='cos(x)')
ax2.set_title('Косинусоїдальна функція')
ax2.set_xlabel('x')
ax2.set_ylabel('y')
ax2.grid(True)
ax2.legend()

# Adjust layout and display
plt.tight_layout()
plt.show()`,
        language: "python",
      },
      {
        name: "Розширені візуалізації",
        code: `import matplotlib.pyplot as plt
import numpy as np

# Generate sample data
categories = ['A', 'B', 'C', 'D', 'E']
values = [22, 35, 14, 28, 19]

# Bar chart with customizations
plt.figure(figsize=(10, 6))
bars = plt.bar(categories, values, color='skyblue', 
               edgecolor='navy', linewidth=1.5)

# Add value labels on top of bars
for bar in bars:
    height = bar.get_height()
    plt.text(bar.get_x() + bar.get_width()/2., 
             height + 0.5, 
             f'{height}', 
             ha='center', va='bottom')

# Customize appearance
plt.title('Зразок стовпчикової діаграми', fontsize=16)
plt.xlabel('Категорія', fontsize=12)
plt.ylabel('Значення', fontsize=12)
plt.ylim(0, max(values) * 1.2)  # Add 20% headroom
plt.grid(axis='y', linestyle='--', alpha=0.7)

# Add annotations
plt.annotate('Найвище значення', 
             xy=(1, 35),  # Position to point to
             xytext=(2, 40),  # Text position
             arrowprops=dict(facecolor='black', shrink=0.05))

plt.tight_layout()
plt.show()`,
        language: "python",
      },
    ],
  },
  {
    title: "Django",
    subtitle: "Веб-фреймворк",
    description:
      "Django — це високорівневий веб-фреймворк на Python, який сприяє швидкій розробці та чистому, прагматичному дизайну. Він дотримується архітектурного шаблону Модель-Представлення-Шаблон і наголошує на повторному використанні та 'підключності' компонентів.",
    points: [
      "Об'єктно-реляційний мапер (ORM) для взаємодії з базою даних",
      "Автоматичний адміністративний інтерфейс для управління вмістом",
      "Система маршрутизації URL з елегантними регулярними виразами",
      "Система шаблонів із успадкуванням та повторно використовуваними компонентами",
      "Функції безпеки, включаючи захист від CSRF та автентифікацію користувачів",
    ],
    demoDescription:
      "Погляньте, як Django спрощує веб-розробку завдяки своїм потужним вбудованим інструментам.",
    codeExample: `# models.py
from django.db import models

class Author(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()

    def __str__(self):
        return self.name

class Article(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    pub_date = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(Author, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.title`,
    codeSnippets: [
      {
        name: "Маршрутизація URL та представлення",
        code: `# urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('articles/', views.article_list, name='article_list'),
    path('articles/<int:article_id>/', views.article_detail, name='article_detail'),
    path('articles/create/', views.article_create, name='article_create'),
]

# views.py
from django.shortcuts import render, get_object_or_404, redirect
from .models import Article, Author
from .forms import ArticleForm

def index(request):
    return render(request, 'blog/index.html')

def article_list(request):
    articles = Article.objects.all().order_by('-pub_date')
    return render(request, 'blog/article_list.html', {'articles': articles})

def article_detail(request, article_id):
    article = get_object_or_404(Article, pk=article_id)
    return render(request, 'blog/article_detail.html', {'article': article})

def article_create(request):
    if request.method == 'POST':
        form = ArticleForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('article_list')
    else:
        form = ArticleForm()
    return render(request, 'blog/article_form.html', {'form': form})`,
        language: "python",
      },
      {
        name: "Шаблони та форми",
        code: `# forms.py
from django import forms
from .models import Article

class ArticleForm(forms.ModelForm):
    class Meta:
        model = Article
        fields = ['title', 'content', 'author']
        widgets = {
            'title': forms.TextInput(attrs={'class': 'form-control'}),
            'content': forms.Textarea(attrs={'class': 'form-control'}),
            'author': forms.Select(attrs={'class': 'form-select'}),
        }

# article_list.html (Template)
{% extends "base.html" %}

{% block content %}
<h1>Статті</h1>
<a href="{% url 'article_create' %}" class="btn btn-primary mb-3">
    Створити нову статтю
</a>

<div class="article-list">
    {% for article in articles %}
    <div class="card mb-3">
        <div class="card-body">
            <h5 class="card-title">{{ article.title }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">
                Автор {{ article.author.name }} | {{ article.pub_date|date:"F j, Y" }}
            </h6>
            <p class="card-text">{{ article.content|truncatewords:30 }}</p>
            <a href="{% url 'article_detail' article.id %}" class="card-link">
                Читати далі
            </a>
        </div>
    </div>
    {% empty %}
    <p>Статей не знайдено.</p>
    {% endfor %}
</div>
{% endblock %}`,
        language: "html",
      },
    ],
  },
  {
    title: "TensorFlow",
    subtitle: "Фреймворк машинного навчання",
    description:
      "TensorFlow — це комплексна платформа з відкритим кодом для машинного навчання. Вона має гнучку екосистему інструментів, бібліотек і ресурсів спільноти, що дозволяє дослідникам розширювати межі машинного навчання, а розробникам легко створювати та розгортати додатки на основі ML.",
    points: [
      "Підтримка як високорівневих, так і низькорівневих API для машинного навчання",
      "Ефективне виконання через обчислювальні графи",
      "Добре масштабується на CPU, GPU та TPU",
      "Розширені інструменти візуалізації з TensorBoard",
      "Підтримка розгортання на різних платформах (мобільні, веб, периферійні пристрої)",
    ],
    demoDescription:
      "Досліджуйте, як TensorFlow можна використовувати для створення та навчання нейронних мереж.",
    codeExample: `import tensorflow as tf
from tensorflow.keras import layers, models

# Define a sequential model
model = models.Sequential([
    layers.Dense(128, activation='relu', input_shape=(784,)),
    layers.Dropout(0.2),
    layers.Dense(64, activation='relu'),
    layers.Dense(10, activation='softmax')
])

# Compile the model
model.compile(optimizer='adam',
              loss='sparse_categorical_crossentropy',
              metrics=['accuracy'])

# Train the model
model.fit(x_train, y_train, epochs=5, batch_size=32)

# Evaluate the model
test_loss, test_acc = model.evaluate(x_test, y_test)
print(f'Точність тесту: {test_acc}')`,
    codeSnippets: [
      {
        name: "Базова нейронна мережа",
        code: `import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers
import numpy as np

# Load and prepare the MNIST dataset
mnist = keras.datasets.mnist
(x_train, y_train), (x_test, y_test) = mnist.load_data()

# Normalize pixel values between 0 and 1
x_train, x_test = x_train / 255.0, x_test / 255.0

# Reshape to fit model input
x_train = x_train.reshape(60000, 784)
x_test = x_test.reshape(10000, 784)

# Build a simple sequential model
model = keras.models.Sequential([
  layers.Dense(128, activation='relu', input_shape=(784,)),
  layers.Dropout(0.2),  # Add dropout to prevent overfitting
  layers.Dense(64, activation='relu'),
  layers.Dense(10, activation='softmax')
])

# Compile the model
model.compile(
    optimizer='adam',
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)

# Train the model
model.fit(x_train, y_train, epochs=5, batch_size=32)

# Evaluate the model
test_loss, test_acc = model.evaluate(x_test, y_test)
print(f'Точність тесту: {test_acc}')`,
        language: "python",
      },
      {
        name: "Згорткова нейронна мережа",
        code: `import tensorflow as tf
from tensorflow.keras import datasets, layers, models
import matplotlib.pyplot as plt

# Load and prepare the CIFAR-10 dataset
(train_images, train_labels), (test_images, test_labels) = datasets.cifar10.load_data()

# Normalize pixel values
train_images, test_images = train_images / 255.0, test_images / 255.0

# Define the CNN model
model = models.Sequential()

# Add convolutional layers
model.add(layers.Conv2D(32, (3, 3), activation='relu', input_shape=(32, 32, 3)))
model.add(layers.MaxPooling2D((2, 2)))
model.add(layers.Conv2D(64, (3, 3), activation='relu'))
model.add(layers.MaxPooling2D((2, 2)))
model.add(layers.Conv2D(64, (3, 3), activation='relu'))

# Add dense layers for classification
model.add(layers.Flatten())
model.add(layers.Dense(64, activation='relu'))
model.add(layers.Dense(10))

# Compile the model
model.compile(
    optimizer='adam',
    loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True),
    metrics=['accuracy']
)

# Train the model
history = model.fit(
    train_images, train_labels, 
    epochs=10, 
    validation_data=(test_images, test_labels)
)

# Plot learning curves
plt.figure(figsize=(12, 4))

plt.subplot(1, 2, 1)
plt.plot(history.history['accuracy'], label='Точність')
plt.plot(history.history['val_accuracy'], label='Валідаційна точність')
plt.xlabel('Епоха')
plt.ylabel('Точність')
plt.legend()

plt.subplot(1, 2, 2)
plt.plot(history.history['loss'], label='Втрати')
plt.plot(history.history['val_loss'], label='Валідаційні втрати')
plt.xlabel('Епоха')
plt.ylabel('Втрати')
plt.legend()

plt.show()`,
        language: "python",
      },
    ],
  },
];
