#!/bin/bash
udiskie &
# 壁纸须先安装feh，并在此指定路径
#exec --no-startup-id feh --bg-scale "/home/zhanghua/MultiMedia/picture/wallpaper/aimiliya02.jpg" &
/home/zhanghua/MultiMedia/picture/wallpaper
sh /home/zhanghua/Win/Programs/NecessarySoftware/Proxy/XX-Net/start &
volumeicon &
fcitx-autostart &
xcompmgr -Ss -n -Cc -fF -I-10 -O-10 -D1 -t-3 -l-4 -r4 &
gtk-redshift &
devmon 2>&1 > /dev/null &
