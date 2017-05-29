#!/bin/bash
[[ -f ~/.Xresources ]] && xrdb -merge ~/.Xresources
#sh /home/zhanghua/.usr/launch.sh &
export XMODIFIERS=@im=fcitx
export QT_IM_MODULE=fcitx
export GTK_IM_MODULE=fcitx
# Here Xfce is kept as default
session=${1:-xfce}

#exec ck-launch-session dbus-launch --sh-syntax --exit-with-session awesome;
exec ck-launch-session dbus-launch --sh-syntax --exit-with-session i3;
