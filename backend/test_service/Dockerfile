
FROM python:3.12-alpine

WORKDIR /test_service

ENV PYTHONDONTWRITTEDBYTECODE=1 \
    PYTHONUNBUFFERED=1

RUN apk add --no-cache postgresql-dev gcc python3-dev musl-dev

RUN python3 -m pip install --upgrade pip
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD ["sh", "-c", "python manage.py migrate && gunicorn test_service.wsgi:application --bind 0.0.0.0:80 --workers 3"]

