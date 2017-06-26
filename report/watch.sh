#!/bin/bash
inotifywait -m . -e modify -e create -e delete -e move |
  while read path action file; do
    make
  done