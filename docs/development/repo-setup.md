# Setup repository for development for the first time

This repository is a mono repo of two main components:

1. src/client: web client code
2. src/server: web server code

## Install hooks

The purpose of the root package.json is to handle development requirements such as installing git hooks

1. Run `yarn install` in root folder. This will automatically add hooks.

## Configure environment variables

1. Configure .env file in src/server

1. Configure .env.local file in src/client

## Install dependencies

1. Run `yarn install` in src/server

1. Run `yarn install` in src/client
