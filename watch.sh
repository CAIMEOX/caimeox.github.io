#!/bin/bash

make

fswatch -o trees/ | while read -r; \
  do \
    echo "Rebuilding forest"
    time make
    echo "Done"
    echo
  done
