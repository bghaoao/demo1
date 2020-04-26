<!--
git的使用
初始化
  项目 npm init -y
  git仓库 git init
配置gitDir
    git config --方式 user.name " "
    user.email " "
readme.md 文件本身为(工作区)
将项目配置储存到readme.md(暂存区)中 git add ./readme.md
将项目提交到仓库(版本库)中 git commit -m "加入项目说明"
将项目目录中所有的项目文件添加到缓存区中   git add ./
将所有文件一次性提交到版本库中 git commit --all
查看当前项目存储状态 git status
查看版本库历史日志 git log
查看简洁版历史日志 git log --oneline
通过版本回退,荡下版本库中的代码文件 git reset --hard Head~0 (会从历史日志Dir的检索下标数(index)中获取代码文件),表示回退到指定提交版本号的文件状态;
查看所有版本库中版本号切换的日志 git reflog
创建分支(branch) git branch "分支名称"
查看已创建的分支(branch) git branch
切换到分支(branch)目录中git checkout "分支名称"
将分支(branch)添加到总仓库(版本库)中 git add ./ 再提交
git log --online 可查看简洁的历史版本目录(不含分支目录)
git reflog 可查看所有历史目录(含分支目录)
再次切换到分支目录(branchDir)
将所有的分支(branch)于总仓库(master)进行合并 git merge "分支名称"
-->
