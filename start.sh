#!/bin/sh

printf "\033[1;31mGet them calories\033[0m\n"
docker-compose build --no-cache

printf "\033[1;31mLets go for a treat...\033[0m\n"
docker-compose up
