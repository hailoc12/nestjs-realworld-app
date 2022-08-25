# Getting started
This repo is forked from [nestjs realworld example app](https://github.com/lujakob/nestjs-realworld-example-app.git), to be used as my demo project to learn nestjs. The libraries in original repo is a bit outdated, so I upgraded them to the lastest version and add Dockerfile and docker-compose.yml to test project quickly

## Installation
docker-compose -f docker-compose.yml up --build

----------

## Database

The codebase contains examples of two different database abstractions, namely [TypeORM](http://typeorm.io/) and [Prisma](https://www.prisma.io/). 
    
The branch `master` implements TypeORM with a mySQL database (with Docker ready)

The branch `prisma` implements Prisma with a mySQL database (without Docker)

----------

## Use  
API server will run at: http://127.0.0.1:3000, API docs run at http://127.0.0.1:3000/docs
Control Panel for MySQL run at: http://127.0.0.1:8080 (see password in docker-compose.yml)

