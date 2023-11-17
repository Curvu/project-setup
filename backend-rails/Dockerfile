FROM ruby:3.2.2-bullseye as development

RUN apt-get update -qq \
    && apt-get install -yq --no-install-recommends \
    build-essential \
    postgresql-client

WORKDIR /app
