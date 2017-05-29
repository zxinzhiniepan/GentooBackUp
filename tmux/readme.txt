+-----------------------------------------------------------------------------------------------           
|                                       Tmux
| 一、Tmux的使用
| 二、安装tmuxinator                                                                                   
|                                                                                    
| PS： PREFIX：ctrl+a
|
|
|
------------------------------------------------------------------------------------------------
    
一、Tmux的使用
    1、创建命令会话
       tmux new-sessio -s basic
       tmux new -s basic

    2、列出当前会话
       tmux list-sessions 
       tmux ls
    
    3、重新连接会话 
       tmux attach 
       tmux attach -t second_session
    4、创建新的tmux并在后台运行
       tmux new -s second_sessions
    5、关闭会话
       tmux kill-sessions -t basic
       tmux kill-sessions -t second_sessions
       tmux kill-sessions -a
    6、使用窗口
       tmux new -s windows -n shell ： 命名第一个窗口为shell
       PREFIX c：新建窗口
       PREFIX w：切换窗口（以列表形式）
       PREFIX 0～9：切换窗口0～9
       PREFIX ,：重命名窗口
       PREFIX &：推出当前窗口
      PREFIX p,n：向前或向后移动窗口
    7、使用面板
       PREFIX up：最大化面板
       PREFIX down：最小化面板
       PREFIX -： 新建水平面板
       PREFIX |：新建垂直面板
       PREFIX o：在意打开面板循环移动
       PREFIX x：关闭当前面板
       PREFIX space：循环使用面板布局
       PREFIX h：向左移动
       PREFIX j：向下移动
       PREFIX k：向上移动
       PREFIX l：向右移动
    8、复制模式
       PREFIX Esc：（进入复制模式）
                  v：复制开始   y：复制选择   p：粘贴
    9、使用多重粘贴缓冲区(通过命令)
                list-buffers
                choose-buffer
                
    10、命令模式
       PREFIX :：进入命令模式
                 capture-pane
                 tmux show buffer：显示buffer
                 tmux capture-aone && tmux save-buffer a.txt：保存buffer在a.txt

二、tmuxinator的安装
    1、安装ruby

    2、gem install tmuxinator

    3、展现当前布局
       tmux list-windows：显示当前layout
