# syntax=docker/dockerfile:1
FROM node:latest
WORKDIR /code
COPY . /code/
RUN npm install --force
# RUN npm run start:prod