# Produce/Consume kafka message with kafkajs
## Description this demo

## Download nodejs, docker
- Install [nodejs](https://nodejs.org/en/)
- Install [docker](https://www.docker.com/)

## IDE
__Window__:
 - [Vscode](https://code.visualstudio.com/)
 
 `Configure...`

## Install dependencies
Install [Yarn](https://yarnpkg.com/getting-started/install) if need it:
```
npm install -g yarn
```
Install all dependencies in project:
```
yarn install
```
__or__
```
npm install
```

## Setup
### Docker
Run all container
```
docker compose up
```
- After all container is up
- Login to kafka management web with: `localhost:9000`
- Add new cluster, topic

### Start subscriber
```
npx ts-node .\src\consumer.ts
```

### Publish a message
```
npx ts-node .\src\producer.ts
```