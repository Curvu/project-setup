FROM python:3.7-alpine as development

RUN apk update && apk add --no-cache \
  build-base \
  postgresql \
  postgresql-dev

WORKDIR /app

COPY requirements.txt /app
RUN pip3 install -r requirements.txt --no-cache-dir

COPY . /app

EXPOSE 3000
