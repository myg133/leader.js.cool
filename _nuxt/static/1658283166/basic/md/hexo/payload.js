__NUXT_JSONP__("/basic/md/hexo", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR,aS,aT){return {data:[{document:{slug:"hexo",description:"",title:"Hexo搭建静态博客",position:1501,category:"知识篇-Markdown",toc:[{id:ag,depth:z,text:ah},{id:ai,depth:Q,text:aj},{id:ak,depth:Q,text:al},{id:am,depth:z,text:an},{id:ao,depth:Q,text:ap},{id:aq,depth:Q,text:ar},{id:as,depth:z,text:at},{id:au,depth:z,text:av},{id:aw,depth:z,text:ax},{id:ay,depth:z,text:az},{id:aA,depth:z,text:aB},{id:aC,depth:z,text:aD},{id:aE,depth:z,text:aF}],body:{type:"root",children:[{type:b,tag:A,props:{id:ag},children:[{type:b,tag:i,props:{href:"#1-%E7%8E%AF%E5%A2%83",ariaHidden:p,tabIndex:q},children:[{type:b,tag:d,props:{className:[r,s]},children:[]}]},{type:a,value:ah}]},{type:a,value:c},{type:b,tag:R,props:{id:ai},children:[{type:b,tag:i,props:{href:"#11-%E5%AE%89%E8%A3%85-git",ariaHidden:p,tabIndex:q},children:[{type:b,tag:d,props:{className:[r,s]},children:[]}]},{type:a,value:aj}]},{type:a,value:c},{type:b,tag:R,props:{id:ak},children:[{type:b,tag:i,props:{href:"#12-%E5%AE%89%E8%A3%85-nodejs",ariaHidden:p,tabIndex:q},children:[{type:b,tag:d,props:{className:[r,s]},children:[]}]},{type:a,value:al}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:j,props:{},children:[{type:a,value:"1. 安装 nvm"}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"使用 curl 方式安装："}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"$curl -o- "},{type:b,tag:i,props:{href:aG,rel:[k,l,m],target:n},children:[{type:a,value:aG}]},{type:a,value:" | bash"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"$echo '\\n#alias for cnpm\\nalias cnpm=\"npm --registry="},{type:b,tag:i,props:{href:aH,rel:[k,l,m],target:n},children:[{type:a,value:aH}]},{type:a,value:" \\  --cache=$HOME\u002F.npm\u002F.cache\u002Fcnpm \\ --disturl="},{type:b,tag:i,props:{href:aI,rel:[k,l,m],target:n},children:[{type:a,value:aI}]},{type:a,value:" \\ --userconfig=$HOME\u002F.cnpmrc\"' \u003E\u003E ~\u002F.zshrc && source ~\u002F.zshrc"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:j,props:{},children:[{type:a,value:"2. 使用 nvm 安装 node.js"}]}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"$nvm install node"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"$nvm alias default node"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:A,props:{id:am},children:[{type:b,tag:i,props:{href:"#2-%E9%85%8D%E7%BD%AE-github",ariaHidden:p,tabIndex:q},children:[{type:b,tag:d,props:{className:[r,s]},children:[]}]},{type:a,value:an}]},{type:a,value:c},{type:b,tag:R,props:{id:ao},children:[{type:b,tag:i,props:{href:"#21-%E5%BB%BA%E7%AB%8B-respository",ariaHidden:p,tabIndex:q},children:[{type:b,tag:d,props:{className:[r,s]},children:[]}]},{type:a,value:ap}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"建立与你用户名对应的仓库，仓库名必须为【"},{type:b,tag:j,props:{},children:[{type:a,value:_}]},{type:a,value:".github.io】"}]},{type:a,value:c},{type:b,tag:R,props:{id:aq},children:[{type:b,tag:i,props:{href:"#22-%E9%85%8D%E7%BD%AE-ssh-key",ariaHidden:p,tabIndex:q},children:[{type:b,tag:d,props:{className:[r,s]},children:[]}]},{type:a,value:ar}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"参考："},{type:b,tag:i,props:{href:"http:\u002F\u002Fwww.cnblogs.com\u002Fzhcncn\u002Fp\u002F3787849.html",rel:[k,l,m],target:n},children:[{type:a,value:"Windows 下 Git 安装指南"}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"##3. 安装 Hexo"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"###3.1 Installation\n打开 Git 命令，执行如下命令"}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"$ cnpm install -g hexo"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"###3.2 Quick Start"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:j,props:{},children:[{type:a,value:"1. Setup your blog"}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"在电脑中建立一个名字叫「Hexo」的文件夹（比如我建在了 D:\\Hexo），然后在此文件夹中右键打开 Git Bash。执行下面的命令"}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"$ hexo init"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"[info] Copying data"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"[info] You are almost done! Don't forget to run "},{type:b,tag:w,props:{},children:[{type:a,value:aJ}]},{type:a,value:" before you start blogging with Hexo!"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Hexo 随后会自动在目标文件夹建立网站所需要的文件。然后按照提示，运行 cnpm install（在 \u002FD\u002FHexo 下）"}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:aJ}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"会在 D:\\Hexo 目录中安装 node_modules。"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:j,props:{},children:[{type:a,value:"2. Start the server"}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"运行下面的命令（在 \u002FD\u002FHexo 下）"}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:aK}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:aL},{type:b,tag:i,props:{href:H,rel:[k,l,m],target:n},children:[{type:a,value:H}]},{type:a,value:aM}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"表明 Hexo Server 已经启动了，在浏览器中打开 "},{type:b,tag:i,props:{href:H,rel:[k,l,m],target:n},children:[{type:a,value:H}]},{type:a,value:",这时可以看到 Hexo 已为你生成了一篇 blog。"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"你可以按 Ctrl+C 停止 Server。"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:j,props:{},children:[{type:a,value:"3. Create a new post"}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"新打开一个 git bash 命令行窗口，cd 到\u002FD\u002FHexo 下，执行下面的命令"}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"$ hexo new \"My New Post\""}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"[info] File created at d:\\Hexo\\source_posts\\My-New-Post.md"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"刷新 "},{type:b,tag:i,props:{href:"http:\u002F\u002Flocalhost:4000\u002F%EF%BC%8C%E5%8F%AF%E4%BB%A5%E5%8F%91%E7%8E%B0%E5%B7%B2%E7%94%9F%E6%88%90%E4%BA%86%E4%B8%80%E7%AF%87%E6%96%B0%E6%96%87%E7%AB%A0",rel:[k,l,m],target:n},children:[{type:a,value:"http:\u002F\u002Flocalhost:4000\u002F，可以发现已生成了一篇新文章"}]},{type:a,value:" \"My New Post\"。"}]},{type:a,value:c},{type:b,tag:"adsbygoogle",props:{},children:[{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:j,props:{},children:[{type:a,value:"NOTE:"}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"有一个问题，发现 \"My New Post\" 被发了 2 遍，在 Hexo server 所在的 git bash 窗口也能看到 create 了 2 次。"}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:aK}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:aL},{type:b,tag:i,props:{href:H,rel:[k,l,m],target:n},children:[{type:a,value:H}]},{type:a,value:aM}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:aN}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:aN}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"经验证，在 hexo new \"My New Post\" 时，如果按 Ctrl+C 将 hexo server 停掉，就不会出现发 2 次的问题了。"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"所以，在 hexo new 文章时，需要 stop server。"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:j,props:{},children:[{type:a,value:"4. Generate static files"}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"执行下面的命令，将 markdown 文件生成静态网页。"}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"$ hexo generate"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"该命令执行完后，会在 D:\\Hexo\\public\\ 目录下生成一系列 html，css 等文件。"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:j,props:{},children:[{type:a,value:"5. 编辑文章"}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"hexo new \"My New Post\"会在 D:\\Hexo\\source_posts 目录下生成一个 markdown 文件：My-New-Post.md"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"可以使用一个支持 markdown 语法的编辑器（比如 Sublime Text 2）来编辑该文件。"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:j,props:{},children:[{type:a,value:"6. 部署到 Github"}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"部署到 Github 前需要配置_config.yml 文件，首先找到下面的内容"}]},{type:a,value:c},{type:b,tag:B,props:{className:[C]},children:[{type:b,tag:D,props:{className:[E,G]},children:[{type:b,tag:w,props:{},children:[{type:a,value:"# Deployment\n## Docs: http:\u002F\u002Fhexo.io\u002Fdocs\u002Fdeployment.html\ndeploy:\n type:\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"然后将它们修改为"}]},{type:a,value:c},{type:b,tag:B,props:{className:[C]},children:[{type:b,tag:D,props:{className:[E,G]},children:[{type:b,tag:w,props:{},children:[{type:a,value:"# Deployment\n## Docs: http:\u002F\u002Fhexo.io\u002Fdocs\u002Fdeployment.html\ndeploy:\n type: git\n repository: git@github.com:zhchnchn\u002Fzhchnchn.github.io.git\n branch: master\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:j,props:{},children:[{type:a,value:"NOTE1:"}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Repository：必须是 SSH 形式的 url（"},{type:b,tag:i,props:{href:"mailto:git@github.com"},children:[{type:a,value:"git@github.com"}]},{type:a,value:":zhchnchn\u002Fzhchnchn.github.io.git），而不能是 HTTPS 形式的 url（"},{type:b,tag:i,props:{href:"https:\u002F\u002Fgithub.com\u002Fzhchnchn\u002Fzhchnchn.github.io.git%EF%BC%89%EF%BC%8C%E5%90%A6%E5%88%99%E4%BC%9A%E5%87%BA%E7%8E%B0%E9%94%99%E8%AF%AF%EF%BC%9A",rel:[k,l,m],target:n},children:[{type:a,value:"https:\u002F\u002Fgithub.com\u002Fzhchnchn\u002Fzhchnchn.github.io.git），否则会出现错误："}]}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"$ hexo deploy"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"[info] Start deploying: github"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"[error] "},{type:b,tag:i,props:{href:aO,rel:[k,l,m],target:n},children:[{type:a,value:aO}]},{type:a,value:" is not a valid repositor URL!"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"使用 SSH url，如果电脑没有开放 SSH 端口，会致部署失败。"}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"fatal: Could not read from remote repository."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Please make sure you have the correct access rights\nand the repository exists."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:j,props:{},children:[{type:a,value:"NOTE2:"}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"如果你是为一个项目制作网站，那么需要把 branch 设置为 gh-pages。"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:j,props:{},children:[{type:a,value:"7. 测试"}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"当部署完成后，在浏览器中打开["},{type:b,tag:i,props:{href:"http:\u002F\u002Four_user_name.github.io\u002F%5D(",rel:[k,l,m],target:n},children:[{type:a,value:"http:\u002F\u002Four_user_name.github.io\u002F]("}]},{type:b,tag:i,props:{href:"https:\u002F\u002Four_user_name.github.io\u002F%EF%BC%89",rel:[k,l,m],target:n},children:[{type:a,value:"https:\u002F\u002Four_user_name.github.io\u002F）"}]},{type:a,value:" ，正常显示网页，表明部署成功。"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:j,props:{},children:[{type:a,value:"8. 总结：部署步骤"}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"每次部署的步骤，可按以下三步来进行。"}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"hexo clean"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"hexo generate"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"hexo deploy"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:j,props:{},children:[{type:a,value:"9. 总结：本地调试"}]}]},{type:a,value:c},{type:b,tag:aP,props:{},children:[{type:a,value:c},{type:b,tag:aQ,props:{},children:[{type:a,value:"在执行下面的命令后，"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"$ hexo g #生成"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"$ hexo s #启动本地服务，进行文章预览调试"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"浏览器输入 "},{type:b,tag:i,props:{href:"http:\u002F\u002Flocalhost:4000%EF%BC%8C%E6%9F%A5%E7%9C%8B%E6%90%AD%E5%BB%BA%E6%95%88%E6%9E%9C%E3%80%82%E6%AD%A4%E5%90%8E%E7%9A%84%E6%AF%8F%E6%AC%A1%E5%8F%98%E6%9B%B4%5C_config.yml",rel:[k,l,m],target:n},children:[{type:a,value:"http:\u002F\u002Flocalhost:4000，查看搭建效果。此后的每次变更\\_config.yml"}]},{type:a,value:" 文件或者新建文件都可以先用此命令调试，尤其是当你想调试新添加的主题时。"}]},{type:a,value:c},{type:b,tag:aP,props:{start:z},children:[{type:a,value:c},{type:b,tag:aQ,props:{},children:[{type:a,value:"可以用简化的一条命令"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"hexo s -g"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"###3.3 总结\n####3.3.1 常用命令"}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"hexo new \"postName\" #新建文章"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"hexo new page \"pageName\" #新建页面"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"hexo generate #生成静态页面至 public 目录"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"hexo server #开启预览访问端口（默认端口 4000，'ctrl + c'关闭 server）"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"hexo deploy #将.deploy 目录部署到 GitHub"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"hexo help # 查看帮助"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"hexo version #查看 Hexo 的版本"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"####3.3.2 复合命令"}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"hexo deploy -g #生成加部署"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"hexo server -g #生成加预览"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"命令的简写为："}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"hexo n == hexo new"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"hexo g == hexo generate"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"hexo s == hexo server"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"hexo d == hexo deploy"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"##4. 配置 Hexo"}]},{type:a,value:c},{type:b,tag:"h4",props:{id:"配置参考-httpibruceinfo20131122hexo-your-blog"},children:[{type:b,tag:i,props:{href:"#%E9%85%8D%E7%BD%AE%E5%8F%82%E8%80%83-httpibruceinfo20131122hexo-your-blog",ariaHidden:p,tabIndex:q},children:[{type:b,tag:d,props:{className:[r,s]},children:[]}]},{type:b,tag:i,props:{href:"http:\u002F\u002Fibruce.info\u002F2013\u002F11\u002F22\u002Fhexo-your-blog\u002F",rel:[k,l,m],target:n},children:[{type:a,value:"配置参考: http:\u002F\u002Fibruce.info\u002F2013\u002F11\u002F22\u002Fhexo-your-blog\u002F"}]}]},{type:a,value:c},{type:b,tag:"h1",props:{id:"配合-travis-ci将-hexo-博客自动部署到-github-上"},children:[{type:b,tag:i,props:{href:"#%E9%85%8D%E5%90%88-travis-ci%E5%B0%86-hexo-%E5%8D%9A%E5%AE%A2%E8%87%AA%E5%8A%A8%E9%83%A8%E7%BD%B2%E5%88%B0-github-%E4%B8%8A",ariaHidden:p,tabIndex:q},children:[{type:b,tag:d,props:{className:[r,s]},children:[]}]},{type:a,value:"配合 Travis CI，将 Hexo 博客自动部署到 github 上"}]},{type:a,value:c},{type:b,tag:A,props:{id:as},children:[{type:b,tag:i,props:{href:"#1-%E6%96%B0%E5%BB%BA%E4%BB%A3%E7%A0%81%E4%BB%93%E5%BA%93",ariaHidden:p,tabIndex:q},children:[{type:b,tag:d,props:{className:[r,s]},children:[]}]},{type:a,value:at}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"新建一个代码仓库，有一个注意点，若仓库取名为【"},{type:b,tag:j,props:{},children:[{type:a,value:_}]},{type:a,value:".github.io】，则需要新建一个分支用来放.md 文件，因为 html 文件会自动部署到 master 上。若仓库名只是普通的名称，则可以将.md 文件放到 master 分支上，但这时需要新建一个分支 gh-pages 用来放 html 文件。"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"这里，我们就使用了【"},{type:b,tag:j,props:{},children:[{type:a,value:_}]},{type:a,value:".github.io】这样的仓库名，取名为 Hexo.github.io，新建一个分支，取名为 raw。"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Clone 到本地"}]},{type:a,value:c},{type:b,tag:B,props:{className:[C]},children:[{type:b,tag:D,props:{className:[E,G]},children:[{type:b,tag:w,props:{},children:[{type:a,value:"git clone -b raw \u003C仓库克隆URL\u003E #只Clone出新建的raw分支 保留master分支用于部署\n"}]}]}]},{type:a,value:c},{type:b,tag:A,props:{id:au},children:[{type:b,tag:i,props:{href:"#2-%E5%AE%89%E8%A3%85-nodejs-%E5%92%8C-hexo",ariaHidden:p,tabIndex:q},children:[{type:b,tag:d,props:{className:[r,s]},children:[]}]},{type:a,value:av}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"请参考"},{type:b,tag:i,props:{href:"https:\u002F\u002Fcrabxlab.gitbooks.io\u002Ffs-guide\u002Fcontent\u002Ffront\u002Fhexo_create.html",rel:[k,l,m],target:n},children:[{type:a,value:"2.1 Hexo 搭建"}]}]},{type:a,value:c},{type:b,tag:A,props:{id:aw},children:[{type:b,tag:i,props:{href:"#3-%E4%BD%BF%E7%94%A8-travis-ci",ariaHidden:p,tabIndex:q},children:[{type:b,tag:d,props:{className:[r,s]},children:[]}]},{type:a,value:ax}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"首先我们先打开"},{type:b,tag:i,props:{href:"https:\u002F\u002Ftravis-ci.org\u002F",rel:[k,l,m],target:n},children:[{type:a,value:"Travis CI"}]},{type:a,value:"，可以在右上角找到使用 GitHub 登陆的按钮。\n"},{type:b,tag:o,props:{alt:"travis ci",src:"\u002Fbasic\u002Ftravis\u002Ftravis.png"},children:[]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"授权完成后，你可以在左上角找到 My Repositories 一旁的加号“+”，点击它，它就会列出你所有的仓库，你只需要找到刚才的 hexo.github.io 并把它左侧的开关打开就可以了。"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:o,props:{alt:o,src:"\u002Fbasic\u002Ftravis\u002F04.01.png"},children:[]},{type:a,value:c},{type:b,tag:o,props:{alt:o,src:"\u002Fbasic\u002Ftravis\u002F04.02.png"},children:[]}]},{type:a,value:c},{type:b,tag:A,props:{id:ay},children:[{type:b,tag:i,props:{href:"#4-%E7%94%9F%E6%88%90-github-personal-access-token",ariaHidden:p,tabIndex:q},children:[{type:b,tag:d,props:{className:[r,s]},children:[]}]},{type:a,value:az}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"登录 GitHub，在右上角头像处进入设置。"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:o,props:{alt:o,src:"\u002Fbasic\u002Ftravis\u002F05.00.png"},children:[]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"在左侧找到 Personal access tokens，并点击右上角的 Generate new token。"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:o,props:{alt:o,src:"\u002Fbasic\u002Ftravis\u002F05.01.png"},children:[]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"需要为新的 Token 输入一个名字，这里我们就填入 Travis CI 好了。"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:o,props:{alt:o,src:"\u002Fbasic\u002Ftravis\u002F05.02.png"},children:[]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"确定生成后，Token 将显示在页面上，此时需要将其复制并保存好，并避免泄露。遗忘 Token 后不能找回，只能重新生成。"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:o,props:{alt:o,src:"\u002Fbasic\u002Ftravis\u002F05.03.png"},children:[]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"最后，我们还需要"},{type:b,tag:i,props:{href:"https:\u002F\u002Fwww.random.org\u002Fstrings\u002F?num=10&len=20&digits=on&upperalpha=on&loweralpha=on&unique=on&format=html&rnd=new",rel:[k,l,m],target:n},children:[{type:a,value:"生成随机字符串"}]},{type:a,value:"，并在其中选择一行随机字符串，为下文备用。"}]},{type:a,value:c},{type:b,tag:A,props:{id:aA},children:[{type:b,tag:i,props:{href:"#5-%E9%85%8D%E7%BD%AE-travis-ci",ariaHidden:p,tabIndex:q},children:[{type:b,tag:d,props:{className:[r,s]},children:[]}]},{type:a,value:aB}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"首先在 Travis CI 中找到已经启用自动构建的仓库，并在右侧找到设置按钮。"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:o,props:{alt:o,src:"\u002Fbasic\u002Ftravis\u002F06.00.png"},children:[]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"注意：该图片中的仓库名称为 SumiMakito.github.io，但我们这里的名称应该为 Hexo.github.io。"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"有两处需要设置，首先需要启用 Build only if .travis.yml is present 选项，以避免 master 分支被构建和陷入构建循环的问题。"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"另外，在下方的环境变量设置处，我们需要设置两组变量，并注意保持 Display value in build log 禁用，以免构建日志泄露 Token 等信息。"}]},{type:a,value:c},{type:b,tag:B,props:{className:[C]},children:[{type:b,tag:D,props:{className:[E,G]},children:[{type:b,tag:w,props:{},children:[{type:a,value:"#需要设置的两组变量\nGitHubKEY = 上文生成的GitHub Personal Access Token\nNOTIFY_TOKEN = 上文生成的随机字符串\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:o,props:{alt:o,src:"\u002Fbasic\u002Ftravis\u002F06.01.png"},children:[]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"在每次 Push 后，Travis CI 将检查分支下的 .travis.yml 文件，并以此作为配置进行构建。"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"在分支下新建.travis.yml 和 build.sh。下面是我所使用的 .travis.yml :"}]},{type:a,value:c},{type:b,tag:B,props:{className:[C]},children:[{type:b,tag:D,props:{className:[E,"language-yml"]},children:[{type:b,tag:w,props:{},children:[{type:b,tag:d,props:{className:[f,I,J]},children:[{type:a,value:"language"}]},{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:K}]},{type:a,value:" node_js\n"},{type:b,tag:d,props:{className:[f,I,J]},children:[{type:a,value:"node_js"}]},{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:K}]},{type:a,value:L},{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:x}]},{type:a,value:t},{type:b,tag:d,props:{className:[f,M]},children:[{type:a,value:"'0.12'"}]},{type:a,value:c},{type:b,tag:d,props:{className:[f,I,J]},children:[{type:a,value:"install"}]},{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:K}]},{type:a,value:L},{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:x}]},{type:a,value:" npm install hexo"},{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:x}]},{type:a,value:"cli "},{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:x}]},{type:a,value:"g\n  "},{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:x}]},{type:a,value:" npm install hexo "},{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:x}]},{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:x}]},{type:a,value:"save\n  "},{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:x}]},{type:a,value:" npm install\n"},{type:b,tag:d,props:{className:[f,I,J]},children:[{type:a,value:"script"}]},{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:K}]},{type:a,value:L},{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:x}]},{type:a,value:" chmod +x .\u002Fbuild.sh\n  "},{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:x}]},{type:a,value:" .\u002Fbuild.sh "},{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:$}]},{type:a,value:aa},{type:b,tag:d,props:{className:[f,I,J]},children:[{type:a,value:"branches"}]},{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:K}]},{type:a,value:L},{type:b,tag:d,props:{className:[f,I,J]},children:[{type:a,value:"only"}]},{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:K}]},{type:a,value:O},{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:x}]},{type:a,value:" raw\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"在这里，配置文件限制了自动构建工作只会在 raw 分支下进行。"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"下面是我所使用的 build.sh："}]},{type:a,value:c},{type:b,tag:B,props:{className:[C]},children:[{type:b,tag:D,props:{className:[E,G]},children:[{type:b,tag:w,props:{},children:[{type:a,value:"hexo generate #生成静态整站\ncd .\u002Fpublic #生成的静态页面会存储在public目录下\ngit init\ngit config --global push.default matching\ngit config --global user.email \"username@example.com\" #填入GitHub的邮箱地址\ngit config --global user.name \"username\" #填入GitHub的用户名\ngit add --all .\ngit commit -m \"Travis CI Auto Builder\" #自动构建后的内容将全部以此信息提交\ngit push --quiet --force https:\u002F\u002F${GitHubKEY}@github.com\u002F你的GitHub用户名\u002F你的代码仓库名.git master  #自动构建后的内容将全部以此信息提交\ncurl --connect-timeout 20 --max-time 30 -s http:\u002F\u002F远端服务器URL\u002Fwebhook.php?_=${NOTIFY_TOKEN} #服务器Webhook 将在下文介绍\n"}]}]}]},{type:a,value:c},{type:b,tag:A,props:{id:aC},children:[{type:b,tag:i,props:{href:"#6-%E6%B5%8B%E8%AF%95",ariaHidden:p,tabIndex:q},children:[{type:b,tag:d,props:{className:[r,s]},children:[]}]},{type:a,value:aD}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"还记得之前的 Hexo 文件夹吗？"}]},{type:a,value:c},{type:b,tag:B,props:{className:[C]},children:[{type:b,tag:D,props:{className:[E,G]},children:[{type:b,tag:w,props:{},children:[{type:a,value:"cd .\u002FHexoBlog\nhexo new hello-ci #本地没有Hexo的话可以直接跳过这一步\nvim .\u002Fsource\u002F_posts\u002Fhello-ci.md\ngit add --all .\ngit commit -m \"Hello, CI!\"\ngit push #将代码push到raw分支上\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"登陆相应网址进行效果查看。"}]},{type:a,value:c},{type:b,tag:A,props:{id:aE},children:[{type:b,tag:i,props:{href:"#7-%E9%99%84%E5%8A%A0-%E8%87%AA%E5%8A%A8%E9%83%A8%E7%BD%B2%E8%84%9A%E6%9C%AC",ariaHidden:p,tabIndex:q},children:[{type:b,tag:d,props:{className:[r,s]},children:[]}]},{type:a,value:aF}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"在项目文件夹下新建一个"},{type:b,tag:w,props:{},children:[{type:a,value:aR}]},{type:a,value:"文件（文件名随意），并为其增加执行权限。"}]},{type:a,value:c},{type:b,tag:B,props:{className:[C]},children:[{type:b,tag:D,props:{className:[E,G]},children:[{type:b,tag:w,props:{},children:[{type:a,value:"touch cmd\nchmod +x cmd\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:w,props:{},children:[{type:a,value:aR}]},{type:a,value:"文件源码:"}]},{type:a,value:c},{type:b,tag:B,props:{className:[C]},children:[{type:b,tag:D,props:{className:[E,"language-bash"]},children:[{type:b,tag:w,props:{},children:[{type:b,tag:d,props:{className:[f,"shebang","important"]},children:[{type:a,value:"#!\u002Fbin\u002Fbash"}]},{type:a,value:c},{type:b,tag:d,props:{className:[f,v]},children:[{type:a,value:"pushd"}]},{type:a,value:t},{type:b,tag:d,props:{className:[f,u]},children:[{type:b,tag:d,props:{className:[f,u]},children:[{type:a,value:ab}]},{type:b,tag:d,props:{className:[f,v]},children:[{type:a,value:"dirname"}]},{type:a,value:t},{type:b,tag:d,props:{className:[f,M]},children:[{type:a,value:S},{type:b,tag:d,props:{className:[f,u]},children:[{type:a,value:"${0}"}]},{type:a,value:S}]},{type:b,tag:d,props:{className:[f,u]},children:[{type:a,value:y}]}]},{type:a,value:t},{type:b,tag:d,props:{className:[f,P]},children:[{type:a,value:$}]},{type:a,value:aa},{type:b,tag:d,props:{className:[f,ac,u]},children:[{type:a,value:"DIR"}]},{type:b,tag:d,props:{className:[f,P]},children:[{type:a,value:ad}]},{type:b,tag:d,props:{className:[f,u]},children:[{type:b,tag:d,props:{className:[f,u]},children:[{type:a,value:ab}]},{type:b,tag:d,props:{className:[f,T,U]},children:[{type:a,value:"pwd"}]},{type:a,value:" -L"},{type:b,tag:d,props:{className:[f,u]},children:[{type:a,value:y}]}]},{type:a,value:c},{type:b,tag:d,props:{className:[f,v]},children:[{type:a,value:"popd"}]},{type:a,value:t},{type:b,tag:d,props:{className:[f,P]},children:[{type:a,value:$}]},{type:a,value:aa},{type:b,tag:d,props:{className:[f,ac,u]},children:[{type:a,value:"DATE"}]},{type:b,tag:d,props:{className:[f,P]},children:[{type:a,value:ad}]},{type:b,tag:d,props:{className:[f,u]},children:[{type:b,tag:d,props:{className:[f,u]},children:[{type:a,value:ab}]},{type:b,tag:d,props:{className:[f,v]},children:[{type:a,value:"date"}]},{type:a,value:" +"},{type:b,tag:d,props:{className:[f,M]},children:[{type:a,value:"\"%Y-%m-%d %H:%M\""}]},{type:b,tag:d,props:{className:[f,u]},children:[{type:a,value:y}]}]},{type:a,value:N},{type:b,tag:d,props:{className:[f,V]},children:[{type:a,value:"# get action"}]},{type:a,value:c},{type:b,tag:d,props:{className:[f,ac,u]},children:[{type:a,value:"ACTION"}]},{type:b,tag:d,props:{className:[f,P]},children:[{type:a,value:ad}]},{type:b,tag:d,props:{className:[f,u]},children:[{type:a,value:"$1"}]},{type:a,value:N},{type:b,tag:d,props:{className:[f,V]},children:[{type:a,value:"# help"}]},{type:a,value:c},{type:b,tag:d,props:{className:[f,W,v]},children:[{type:a,value:"usage"}]},{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:X}]},{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:y}]},{type:a,value:t},{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:Y}]},{type:a,value:L},{type:b,tag:d,props:{className:[f,T,U]},children:[{type:a,value:"echo"}]},{type:a,value:t},{type:b,tag:d,props:{className:[f,M]},children:[{type:a,value:"\"Usage: .\u002Fcmd {commit|build|clean}\""}]},{type:a,value:L},{type:b,tag:d,props:{className:[f,T,U]},children:[{type:a,value:"exit"}]},{type:a,value:t},{type:b,tag:d,props:{className:[f,"number"]},children:[{type:a,value:"1"}]},{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:F}]},{type:a,value:c},{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:Z}]},{type:a,value:N},{type:b,tag:d,props:{className:[f,V]},children:[{type:a,value:"# start app"}]},{type:a,value:c},{type:b,tag:d,props:{className:[f,W,v]},children:[{type:a,value:"commit"}]},{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:X}]},{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:y}]},{type:a,value:t},{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:Y}]},{type:a,value:O},{type:b,tag:d,props:{className:[f,v]},children:[{type:a,value:ae}]},{type:a,value:t},{type:b,tag:d,props:{className:[f,v]},children:[{type:a,value:"add"}]},{type:a,value:t},{type:b,tag:d,props:{className:[f,T,U]},children:[{type:a,value:"."}]},{type:a,value:O},{type:b,tag:d,props:{className:[f,v]},children:[{type:a,value:ae}]},{type:a,value:" commit -m "},{type:b,tag:d,props:{className:[f,M]},children:[{type:a,value:"'Post Auto Commit'"}]},{type:a,value:O},{type:b,tag:d,props:{className:[f,v]},children:[{type:a,value:ae}]},{type:a,value:" push\n"},{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:Z}]},{type:a,value:N},{type:b,tag:d,props:{className:[f,W,v]},children:[{type:a,value:"build"}]},{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:X}]},{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:y}]},{type:a,value:t},{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:Y}]},{type:a,value:"\n    hexo d -g\n"},{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:Z}]},{type:a,value:N},{type:b,tag:d,props:{className:[f,V]},children:[{type:a,value:"# stop app"}]},{type:a,value:c},{type:b,tag:d,props:{className:[f,W,v]},children:[{type:a,value:"clean"}]},{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:X}]},{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:y}]},{type:a,value:t},{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:Y}]},{type:a,value:O},{type:b,tag:d,props:{className:[f,v]},children:[{type:a,value:aS}]},{type:a,value:" -rf .deploy_git\n    "},{type:b,tag:d,props:{className:[f,v]},children:[{type:a,value:aS}]},{type:a,value:" -rf public\n"},{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:Z}]},{type:a,value:N},{type:b,tag:d,props:{className:[f,af]},children:[{type:a,value:"case"}]},{type:a,value:t},{type:b,tag:d,props:{className:[f,M]},children:[{type:a,value:S},{type:b,tag:d,props:{className:[f,u]},children:[{type:a,value:"$ACTION"}]},{type:a,value:S}]},{type:a,value:t},{type:b,tag:d,props:{className:[f,af]},children:[{type:a,value:"in"}]},{type:a,value:"\n  commit"},{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:y}]},{type:a,value:"\n    commit\n  "},{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:F}]},{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:F}]},{type:a,value:"\n  build"},{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:y}]},{type:a,value:"\n    build\n  "},{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:F}]},{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:F}]},{type:a,value:"\n  clean"},{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:y}]},{type:a,value:"\n    clean\n  "},{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:F}]},{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:F}]},{type:a,value:"\n  *"},{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:y}]},{type:a,value:"\n    usage\n  "},{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:F}]},{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:F}]},{type:a,value:c},{type:b,tag:d,props:{className:[f,af]},children:[{type:a,value:"esac"}]},{type:a,value:c}]}]}]}]},dir:"\u002Fzh\u002Fbasic\u002Fmd",path:"\u002Fzh\u002Fbasic\u002Fmd\u002Fhexo",extension:".md",createdAt:aT,updatedAt:aT,to:"\u002Fbasic\u002Fmd\u002Fhexo"},prev:{title:"Node.js CPU调度优化",path:"\u002Fzh\u002Fbasic\u002Fnode\u002Fcpu",to:"\u002Fbasic\u002Fnode\u002Fcpu"},next:{title:"Gitbook 迁移到 Docsify",path:"\u002Fzh\u002Fbasic\u002Fmd\u002Fgitbook-to-docsify",to:"\u002Fbasic\u002Fmd\u002Fgitbook-to-docsify"}}],fetch:{},mutations:[]}}("text","element","\n","span","p","token","punctuation","blockquote","a","strong","nofollow","noopener","noreferrer","_blank","img","true",-1,"icon","icon-link"," ","variable","function","code","-",")",2,"h2","div","nuxt-content-highlight","pre","line-numbers",";","language-text","http:\u002F\u002Flocalhost:4000\u002F","key","atrule",":","\n  ","string","\n\n","\n    ","operator",3,"h3","\"","builtin","class-name","comment","function-name","(","{","}","your_user_name","\u003E"," \u002Fdev\u002Fnull\n","$(","assign-left","=","git","keyword","1-环境","1. 环境","11-安装-git","1.1 安装 Git","12-安装-nodejs","1.2 安装 node.js","2-配置-github","2. 配置 Github","21-建立-respository","2.1 建立 Respository","22-配置-ssh-key","2.2 配置 SSH-Key","1-新建代码仓库","1. 新建代码仓库","2-安装-nodejs-和-hexo","2. 安装 Node.js 和 Hexo","3-使用-travis-ci","3. 使用 Travis CI","4-生成-github-personal-access-token","4. 生成 GitHub Personal Access Token","5-配置-travis-ci","5. 配置 Travis CI","6-测试","6. 测试","7-附加-自动部署脚本","7. 附加 自动部署脚本","https:\u002F\u002Fraw.githubusercontent.com\u002Fcreationix\u002Fnvm\u002Fv0.30.1\u002Finstall.sh","https:\u002F\u002Fregistry.npm.taobao.org","https:\u002F\u002Fnpm.taobao.org\u002Fdist","cnpm install","$ hexo server","[info] Hexo is running at ",". Press Ctrl+C to stop.","[create] d:\\Hexo\\source_posts\\My-New-Post.md","https:\u002F\u002Fgithub.com\u002Fzhchnchn\u002Fzhchnchn.github.io","ol","li","cmd","rm","2022-07-20T02:11:53.790Z")));