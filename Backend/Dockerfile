# 1. Use an official Python runtime as a parent image
FROM python:3.11-slim

# 2. Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1  
ENV PYTHONUNBUFFERED=1          

# 3. Set the working directory inside the container
WORKDIR /app

# 4. Copy the requirements file to the container
COPY ./requirements.txt /app/requirements.txt

# 5. Install any necessary dependencies
RUN pip install --upgrade pip && \
    pip install -r /app/requirements.txt

# 6. Copy the current directory contents into the container at /app
COPY . /app

# 7. Expose the port Django will run on
EXPOSE 8000

# 8. Run any commands necessary for setup, like database migrations
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
