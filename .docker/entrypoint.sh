#!/bin/bash

npm install
npm install --save-dev webpack
npm run build
npx typeorm migration:run -d dist/database.providers.js
npm run start:dev