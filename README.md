# Getting started
This repo is forked from [nestjs realworld example app](https://github.com/lujakob/nestjs-realworld-example-app.git), to be used as my demo project to learn nestjs. The libraries in original repo is a bit outdated, so I upgraded them to the lastest version and add Dockerfile and docker-compose.yml to test project quickly

## Installation
1. First, run docker-compose to build app container and start mysql database 
```
docker-compose -f docker-compose.yml up --build
```

2. Migrate database data 
```
npx prisma migrate dev 
npx prisma migrate deploy
```
The database tables are now set up and the prisma client is generated. For more information see the docs:
- https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project-typescript-mysql

3. Restart docker-compose to run app container 
```
docker-compose -f docker-compose.yml restart
```

----------
## Use  
- API server will run at: http://127.0.0.1:3000
- API docs run at http://127.0.0.1:3000/docs  
- Control Panel for MySQL run at: http://127.0.0.1:8080 (see password in docker-compose.yml)

