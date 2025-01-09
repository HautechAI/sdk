#!/bin/bash

./node_modules/.bin/openapi-generator-cli generate -i http://localhost:3000/swagger.json -g typescript-axios -o ./src/internal
