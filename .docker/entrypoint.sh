#!/bin/bash

npm install
npm install --save-dev webpack
npm run build
npx typeorm migration:run
npm run start:dev