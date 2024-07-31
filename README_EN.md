<h1 align="center">
  SaaS Boilerplate Setup and Guide
</h1>

### Introduction
We are using Meteor.js, MongoDB, Redis, React, Tailwind and FlowBite UI.
There are small differences on our approach to Meteor.js. However, learning Meteor.js from its own guide will be
enough to contribute.

### Requirements
- Install NVM
- Install Node.js
- Install [Meteor.js](https://www.meteor.com/developers/install)
- Make sure you have [Docker](https://docs.docker.com/install) and [Docker Compose](https://docs.docker.com/compose/install/) installed and operational.

### Dev environment
Run mongodb (replica set) and redis for development environment

```bash 
npm run dev-env
```

When docker images are up, run the app

```bash 
npm run start
```

> The app should be available at  http://localhost:3001/

You can use `meteor` command to run the application with its build in mongodb, after disabling redis-oplog

To simulate production use

```bash 
npm run simulate-production
```

### Test
```bash 
npm run test
```

```bash 
npm run cypress
```

### Deploy
We are using mup to deploy, so check .deploy folder for details

```bash 
npm run deploy
```
