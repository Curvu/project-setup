FROM python:3.7-alpine as development

RUN apk update && apk add --no-cache \
  build-base \
  postgresql \
  postgresql-dev

WORKDIR /app

COPY requirements.txt /app
RUN pip3 install -r requirements.txt --no-cache-dir

COPY . /app

# Alias for python - py
RUN ln -s $(which python) /usr/bin/py

# Alias for db:migrate
RUN echo -e "#!/bin/sh\npython manage.py migrate" > /usr/bin/db:migrate && chmod +x /usr/bin/db:migrate

# Alias for db:create
RUN echo -e "#!/bin/sh\npython manage.py makemigrations" > /usr/bin/db:create && chmod +x /usr/bin/db:create
