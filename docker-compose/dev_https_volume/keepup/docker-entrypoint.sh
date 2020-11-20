#!/bin/bash

set -e
result=1

wait_for()
{
  while [ $result -eq 1 ]
  do
    sleep 5
    echo "daemon app is now running"
  done
  return 0
}

until wait_for == 0 
do
  echo "unknown error"
  sleep 10
done

echo "不可能走到這裡"
exec "$@"