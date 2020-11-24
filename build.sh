#!/bin/bash

set -euxo pipefail

ng build --prod
docker build -t originalapp-angular .
docker run -d --rm -p 4200:80 originalapp-angular
