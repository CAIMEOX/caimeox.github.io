#!/bin/bash
while true; do

inotifywait -e modify,create,delete -r ./trees && \
make

done