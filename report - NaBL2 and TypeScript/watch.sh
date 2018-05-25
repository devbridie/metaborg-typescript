#!/bin/bash
inotifywait -m sections -e modify -e create -e delete -e move |
  while read path action file; do
    make
  done