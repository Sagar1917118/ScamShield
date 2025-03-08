# Use Python 3.12 slim image as the base
FROM python:3.12-slim

# Install system dependencies
RUN apt-get update && apt-get install -y build-essential

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file into the container
COPY requirements.txt .

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the app code
COPY . /app

# Remove build-essential to keep the image small
RUN apt-get remove -y build-essential && apt-get autoremove -y

# Expose port 5000 to the outside world
EXPOSE 5000

# Define environment variable
ENV FLASK_APP=app.py
ENV FLASK_RUN_HOST=0.0.0.0

# Run the app directly with Python
CMD ["python", "app.py"]
