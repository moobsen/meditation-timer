#!/bin/bash
rsync --progress --delete -r ./www/* root@moobsen.com:/var/www/moobsen.com/meditate/
