# seal

API build

## Installation

Make sure to have all the necessary stuff to start building this up.

### Pre Requisites
- Node >=18.16.0
- Npm >=9.5.1
- Postgres >= 12
- Docker@last
- DockerCompose@last

```bash
npm i
npx sequelize-cli db:create
npx sequelize-cli db:migrate
```

#### OR using docker
```bash
docker-compose -f docker-compose.yml build
docker-compose -f docker-compose.yml up
docker exec -it seal npx sequelize-cli db:create
docker exec -it seal npx sequelize-cli db:migrate
```