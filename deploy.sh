#!/bin/bash

set -e

git config --global credential.helper store
git config --global user.email "kim_yang95@163.com"
git config --global user.name "KimYangOfCat"
git config --global push.default simple

rm -rf deployment
git clone -b master https://KimYangOfCat:$GITHUB_TOKEN@github.com/TJNU-iOS-Club/TJNU-iOS-Club.github.io deployment
rsync -av --delete --exclude ".git" --exclude "CNAME"  public/ deployment
# 在构建新的页面之前会将之前的界面全部删除（delete），exclude是排除一些不删除的选项！
cd deployment
git add -A
# we need the || true, as sometimes you do not have any content changes
# and git woundn't commit and you don't want to break the CI because of that
git commit -m "rebuilding site on `date`, commit ${TRAVIS_COMMIT} and job ${TRAVIS_JOB_NUMBER}" || true
git push

cd ..
rm -rf deployment
