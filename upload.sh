#!/usr/bin/env bash

tar -czvf - "$1" | sshpass -p Zj19970130. ssh root@120.79.229.197 'cd /home/wwwroot/temp.jing999.cn -rf;tar -xzvf -'

