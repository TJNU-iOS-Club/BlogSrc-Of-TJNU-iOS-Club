#!/bin/bash

set -e

git config --global credential.helper store
git config --global user.email "hawkinszhao@outlook.com"
git config --global user.name "Yiqin Zhao"
git config --global push.default simple

rm -rf deployment
git clone -b master https://yiqinzhao:$GITHUB_TOKEN@github.com/c422/c422.github.io deployment
rsync -av --delete --exclude ".git" public/ deployment
cd deployment
git add -A
# we need the || true, as sometimes you do not have any content changes
# and git woundn't commit and you don't want to break the CI because of that
git commit -m "rebuilding site on `date`, commit ${TRAVIS_COMMIT} and job ${TRAVIS_JOB_NUMBER}" || true
git push

cd ..
rm -rf deployment
