#!/bin/bash

if [ -z  "$1" ]
  then
    echo "destination path required"
    echo "/var/www/fhwrdh.net/html ?"
    exit
fi
targetdir=$1

echo "publishing to ${targetdir}"
# ls $1

# rm -rf everything
cp -R public/* $targetdir





