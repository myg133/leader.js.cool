__NUXT_JSONP__("/experience/project/user/bdd", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH){return {data:[{document:{slug:ak,description:"",title:"行为驱动开发实践",position:2114,category:"经验篇-项目",toc:[{id:Q,depth:$,text:Q},{id:R,depth:$,text:R},{id:al,depth:M,text:am},{id:an,depth:M,text:ao},{id:S,depth:$,text:S},{id:T,depth:M,text:T},{id:U,depth:M,text:U},{id:V,depth:M,text:V}],body:{type:"root",children:[{type:b,tag:t,props:{},children:[{type:a,value:"本实践项目源码： "},{type:b,tag:y,props:{href:ap,rel:[W,X,Y],target:Z},children:[{type:a,value:ap}]}]},{type:a,value:f},{type:b,tag:aa,props:{id:Q},children:[{type:b,tag:y,props:{href:"#%E9%85%8D%E7%BD%AE%E6%95%B0%E6%8D%AE%E5%BA%93",ariaHidden:A,tabIndex:G},children:[{type:b,tag:c,props:{className:[H,I]},children:[]}]},{type:a,value:Q}]},{type:a,value:f},{type:b,tag:t,props:{},children:[{type:a,value:"开启 MySQL 和 Redis 服务。"}]},{type:a,value:f},{type:b,tag:t,props:{},children:[{type:a,value:"创建数据库 "},{type:b,tag:u,props:{},children:[{type:a,value:ak}]},{type:a,value:"。根据"},{type:b,tag:u,props:{},children:[{type:a,value:"数据库设计"}]},{type:a,value:"章节创建"},{type:b,tag:u,props:{},children:[{type:a,value:"user"}]},{type:a,value:"、"},{type:b,tag:u,props:{},children:[{type:a,value:"usermeta"}]},{type:a,value:"两张表。"}]},{type:a,value:f},{type:b,tag:aa,props:{id:R},children:[{type:b,tag:y,props:{href:"#%E5%88%9D%E5%A7%8B%E5%8C%96%E9%A1%B9%E7%9B%AE",ariaHidden:A,tabIndex:G},children:[{type:b,tag:c,props:{className:[H,I]},children:[]}]},{type:a,value:R}]},{type:a,value:f},{type:b,tag:C,props:{className:[D]},children:[{type:b,tag:E,props:{className:[F,aq]},children:[{type:b,tag:u,props:{},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"git"}]},{type:a,value:ar},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"npm"}]},{type:a,value:ar}]}]}]},{type:a,value:f},{type:b,tag:N,props:{id:al},children:[{type:b,tag:y,props:{href:"#%E5%AE%89%E8%A3%85-eslint-%E5%92%8C-babel-%E7%8E%AF%E5%A2%83",ariaHidden:A,tabIndex:G},children:[{type:b,tag:c,props:{className:[H,I]},children:[]}]},{type:a,value:am}]},{type:a,value:f},{type:b,tag:C,props:{className:[D]},children:[{type:b,tag:E,props:{className:[F,aq]},children:[{type:b,tag:u,props:{},children:[{type:a,value:"cnpm i --save-dev eslint babel-eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-react\ncnpm i --save babel-register babel-runtime babel-plugin-transform-runtime babel-preset-es2015 babel-preset-es2015-loose babel-preset-stage-1\n"}]}]}]},{type:a,value:f},{type:b,tag:t,props:{},children:[{type:a,value:"Tree："}]},{type:a,value:f},{type:b,tag:C,props:{className:[D]},children:[{type:b,tag:E,props:{className:[F,as]},children:[{type:b,tag:u,props:{},children:[{type:a,value:"├── .babelrc\n├── .eslintignore\n├── .eslintrc.json\n├── .git\n├── .gitignore\n├── README.md\n├── node_modules\n└── package.json\n\n2 directories, 6 files\n"}]}]}]},{type:a,value:f},{type:b,tag:t,props:{},children:[{type:a,value:"参考： "},{type:b,tag:y,props:{href:at,rel:[W,X,Y],target:Z},children:[{type:a,value:at}]}]},{type:a,value:f},{type:b,tag:t,props:{},children:[{type:a,value:"创建配置文件。"}]},{type:a,value:f},{type:b,tag:N,props:{id:an},children:[{type:b,tag:y,props:{href:"#%E9%85%8D%E7%BD%AE-avanyc",ariaHidden:A,tabIndex:G},children:[{type:b,tag:c,props:{className:[H,I]},children:[]}]},{type:a,value:ao}]},{type:a,value:f},{type:b,tag:C,props:{className:[D]},children:[{type:b,tag:E,props:{className:[F,as]},children:[{type:b,tag:u,props:{},children:[{type:a,value:"npm install ava nyc --save-dev\n.\u002Fnode_modules\u002F.bin\u002Fava --init\n"}]}]}]},{type:a,value:f},{type:b,tag:t,props:{},children:[{type:a,value:"Package.json 修改："}]},{type:a,value:f},{type:b,tag:C,props:{className:[D]},children:[{type:b,tag:E,props:{className:[F,O]},children:[{type:b,tag:u,props:{},children:[{type:b,tag:c,props:{className:[d,w,r]},children:[{type:a,value:"\"scripts\""}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:s}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,w,r]},children:[{type:a,value:au}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:s}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"\"NODE_ENV=test .\u002Fnode_modules\u002F.bin\u002Fnyc --reporter=text --reporter=html .\u002Fnode_modules\u002F.bin\u002Fava -v --fail-fast\""}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,w,r]},children:[{type:a,value:"\"nyc\""}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:s}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,w,r]},children:[{type:a,value:"\"lines\""}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:s}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"95"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,w,r]},children:[{type:a,value:"\"functions\""}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:s}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:av}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,w,r]},children:[{type:a,value:"\"branches\""}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:s}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:av}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,w,r]},children:[{type:a,value:"\"check-coverage\""}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:s}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,aw]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,w,r]},children:[{type:a,value:"\"report-dir\""}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:s}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"\".\u002F.nyc_output\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,w,r]},children:[{type:a,value:"\"exclude\""}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:s}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ab}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"\"node_modules\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:au}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"\"test{,-*}.js\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"\"**\u002F*.test.js\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"\"**\u002F__tests__\u002F**\""}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ac}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,w,r]},children:[{type:a,value:"\"ava\""}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:s}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,w,r]},children:[{type:a,value:"\"files\""}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:s}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ab}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"\"test\u002F*.js\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"\"test\u002F**\u002F*.js\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"\"!**\u002F_*\u002F*.js\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"\"!**\u002F_*.js\""}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ac}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,w,r]},children:[{type:a,value:"\"require\""}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:s}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ab}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"\"babel-register\""}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ac}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,w,r]},children:[{type:a,value:"\"babel\""}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:s}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"\"inherit\""}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:K}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:t,props:{},children:[{type:a,value:"参考项目 init 代码： "},{type:b,tag:y,props:{href:ax,rel:[W,X,Y],target:Z},children:[{type:a,value:ax}]}]},{type:a,value:f},{type:b,tag:"adsbygoogle",props:{},children:[{type:a,value:f}]},{type:a,value:f},{type:b,tag:aa,props:{id:S},children:[{type:b,tag:y,props:{href:"#%E7%94%A8%E6%88%B7%E7%99%BB%E9%99%86%E6%8E%A5%E5%8F%A3%E5%AE%9E%E7%8E%B0",ariaHidden:A,tabIndex:G},children:[{type:b,tag:c,props:{className:[H,I]},children:[]}]},{type:a,value:S}]},{type:a,value:f},{type:b,tag:N,props:{id:T},children:[{type:b,tag:y,props:{href:"#%E8%AE%BE%E8%AE%A1",ariaHidden:A,tabIndex:G},children:[{type:b,tag:c,props:{className:[H,I]},children:[]}]},{type:a,value:T}]},{type:a,value:f},{type:b,tag:t,props:{},children:[{type:a,value:"Route： "},{type:b,tag:u,props:{},children:[{type:a,value:"\u002Fuser\u002Flogin"}]}]},{type:a,value:f},{type:b,tag:t,props:{},children:[{type:a,value:"Payload："}]},{type:a,value:f},{type:b,tag:C,props:{className:[D]},children:[{type:b,tag:E,props:{className:[F,O]},children:[{type:b,tag:u,props:{},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,B,r]},children:[{type:a,value:"username"}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:s}]},{type:a,value:ad},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,p,j,q]},children:[{type:a,value:"alternatives"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,L,ae]},children:[{type:a,value:"try"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:af},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,p,j,q]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,p,j,q]},children:[{type:a,value:"email"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,p,j,q]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"32"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:af},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,p,j,q]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,p,j,q]},children:[{type:a,value:"integer"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,p,j,q]},children:[{type:a,value:ag}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"10000000000"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,p,j,q]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"19999999999"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:af},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,p,j,q]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,p,j,q]},children:[{type:a,value:ag}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"3"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,p,j,q]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"16"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,p,j,q]},children:[{type:a,value:ah}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,p,j,q]},children:[{type:a,value:ai}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"'手机号，邮箱，或用户名'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,B,r]},children:[{type:a,value:"password"}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:s}]},{type:a,value:ad},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,p,j,q]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,p,j,q]},children:[{type:a,value:ag}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"6"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,p,j,q]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"255"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,p,j,q]},children:[{type:a,value:ah}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,p,j,q]},children:[{type:a,value:ai}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"'密码，密文'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,B,r]},children:[{type:a,value:"guid"}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:s}]},{type:a,value:ad},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,p,j,q]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,p,j,q]},children:[{type:a,value:ah}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,L,"module"]},children:[{type:a,value:"default"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"''"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,p,j,q]},children:[{type:a,value:ai}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"'设备唯一识别码'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:K}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:t,props:{},children:[{type:a,value:"Result："}]},{type:a,value:f},{type:b,tag:t,props:{},children:[{type:a,value:"登陆成功："}]},{type:a,value:f},{type:b,tag:C,props:{className:[D]},children:[{type:b,tag:E,props:{className:[F,O]},children:[{type:b,tag:u,props:{},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,B,r]},children:[{type:a,value:ay}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:s}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"1"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,B,r]},children:[{type:a,value:"data"}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:s}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,B,r]},children:[{type:a,value:d}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:s}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"'Access Token'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,B,r]},children:[{type:a,value:"expires"}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:s}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"3600"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,aj]},children:[{type:a,value:"\u002F\u002F Access Token有效期"}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:K}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:K}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:N,props:{id:U},children:[{type:b,tag:y,props:{href:"#%E9%80%9A%E7%94%A8%E9%94%99%E8%AF%AF",ariaHidden:A,tabIndex:G},children:[{type:b,tag:c,props:{className:[H,I]},children:[]}]},{type:a,value:U}]},{type:a,value:f},{type:b,tag:C,props:{className:[D]},children:[{type:b,tag:E,props:{className:[F,O]},children:[{type:b,tag:u,props:{},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,B,r]},children:[{type:a,value:ay}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:s}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"0"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,B,r]},children:[{type:a,value:"err_code"}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:s}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"500"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,B,r]},children:[{type:a,value:"error_msg"}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:s}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"'Server Error'"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:K}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:N,props:{id:V},children:[{type:b,tag:y,props:{href:"#%E7%BC%96%E7%A0%81",ariaHidden:A,tabIndex:G},children:[{type:b,tag:c,props:{className:[H,I]},children:[]}]},{type:a,value:V}]},{type:a,value:f},{type:b,tag:t,props:{},children:[{type:a,value:"首先编写测试用例， "},{type:b,tag:u,props:{},children:[{type:a,value:"test\u002Fuser\u002Flogin.js"}]},{type:a,value:"。注意测试的顺序："}]},{type:a,value:f},{type:b,tag:az,props:{},children:[{type:a,value:f},{type:b,tag:x,props:{},children:[{type:a,value:"200 登录成功"}]},{type:a,value:f},{type:b,tag:x,props:{},children:[{type:a,value:"400 参数错误"}]},{type:a,value:f},{type:b,tag:x,props:{},children:[{type:a,value:"401 用户名或密码错误，连续三次"}]},{type:a,value:f},{type:b,tag:x,props:{},children:[{type:a,value:"403 超出限制，正确用户密码登录"}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:t,props:{},children:[{type:a,value:"并且需要注意："}]},{type:a,value:f},{type:b,tag:az,props:{},children:[{type:a,value:f},{type:b,tag:x,props:{},children:[{type:a,value:"测试前需要添加测试数据（测试用户），且信息不能与其他测试用例冲突（并行执行测试）"}]},{type:a,value:f},{type:b,tag:x,props:{},children:[{type:a,value:"测试后要删除测试数据，不要使用清空数据库之类的操作，以免对其他测试用例产生影响"}]},{type:a,value:f},{type:b,tag:x,props:{},children:[{type:a,value:"测试前也需要删除测试数据（以免前一次测试失败数据未删除而产生数据污染）"}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:t,props:{},children:[{type:a,value:"检查测试用例是否覆盖完整，以及测试用例是否写错。"}]},{type:a,value:f},{type:b,tag:t,props:{},children:[{type:a,value:"这时候直接开始跑测试用例的话会报错。"}]},{type:a,value:f},{type:b,tag:t,props:{},children:[{type:a,value:"测试用例参考： "},{type:b,tag:y,props:{href:aA,rel:[W,X,Y],target:Z},children:[{type:a,value:aA}]}]},{type:a,value:f},{type:b,tag:t,props:{},children:[{type:a,value:"根据测试用例，开始编写功能模块代码。"}]},{type:a,value:f},{type:b,tag:t,props:{},children:[{type:a,value:"另外，有一种情况是测试无法覆盖的，就是登录半小时的限制，我们也没有必要让测试用例一直运行等待半个小时再测。可以直接检查 Redis 里的缓存是否正常，以及 TTL 超时是否在合理范围内。"}]},{type:a,value:f},{type:b,tag:t,props:{},children:[{type:a,value:"示例："}]},{type:a,value:f},{type:b,tag:C,props:{className:[D]},children:[{type:b,tag:E,props:{className:[F,O]},children:[{type:b,tag:u,props:{},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"test"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"'Login trial redis ttl'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,L]},children:[{type:a,value:"async"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,"parameter"]},children:[{type:a,value:"t"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,"arrow",k]},children:[{type:a,value:"=\u003E"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,L]},children:[{type:a,value:aB}]},{type:a,value:" value "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aC}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,L,ae]},children:[{type:a,value:aD}]},{type:a,value:aE},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,p,j,q]},children:[{type:a,value:"get"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:aF}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:P}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,aj]},children:[{type:a,value:"\u002F\u002F 循环错误3次，加上已经限制还再继续尝试的1次"}]},{type:a,value:aG},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,p,j,q]},children:[{type:a,value:"is"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:"value"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"4"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:P}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,L]},children:[{type:a,value:aB}]},{type:a,value:" ttl "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aC}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,L,ae]},children:[{type:a,value:aD}]},{type:a,value:aE},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,p,j,q]},children:[{type:a,value:"ttl"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:aF}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:P}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,aj]},children:[{type:a,value:"\u002F\u002F 限制超时应当小于半小时"}]},{type:a,value:aG},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,aw]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:"ttl "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"\u003C="}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"1800"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:P}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:P}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:t,props:{},children:[{type:a,value:"剩下的编码部分就没什么可讲的了。 注意逻辑判断，测试代码覆盖率，没必要的判断不要加。"}]},{type:a,value:f},{type:b,tag:t,props:{},children:[{type:a,value:"注意点："}]},{type:a,value:f},{type:b,tag:"ul",props:{},children:[{type:a,value:f},{type:b,tag:x,props:{},children:[{type:a,value:"数据库连接，使用连接池，并在所有查询完成后释放；"}]},{type:a,value:f},{type:b,tag:x,props:{},children:[{type:a,value:"数据库查询禁止 "},{type:b,tag:u,props:{},children:[{type:a,value:"select field1, (select xxx) as field2"}]},{type:a,value:" 嵌套查询；"}]},{type:a,value:f},{type:b,tag:x,props:{},children:[{type:a,value:"慢 SQL，如多张表"},{type:b,tag:u,props:{},children:[{type:a,value:"JOIN"}]},{type:a,value:"的查询，根据业务逻辑，考虑加 Redis 缓存；"}]},{type:a,value:f},{type:b,tag:x,props:{},children:[{type:a,value:"代码覆盖率要求"},{type:b,tag:u,props:{},children:[{type:a,value:"95%"}]},{type:a,value:"以上，分支覆盖"},{type:b,tag:u,props:{},children:[{type:a,value:"90%"}]},{type:a,value:"以上，只有异常捕获的代码和测试环境下的分支可以 ignore；"}]},{type:a,value:f},{type:b,tag:x,props:{},children:[{type:a,value:"不要用 "},{type:b,tag:u,props:{},children:[{type:a,value:"[].forEach()"}]},{type:a,value:" 方法做轮询，直接用"},{type:b,tag:u,props:{},children:[{type:a,value:"for"}]},{type:a,value:"；"}]},{type:a,value:f},{type:b,tag:x,props:{},children:[{type:a,value:"算法、逻辑细节。"}]},{type:a,value:f}]}]},dir:"\u002Fzh\u002Fexperience\u002Fproject\u002Fuser",path:"\u002Fzh\u002Fexperience\u002Fproject\u002Fuser\u002Fbdd",extension:".md",createdAt:aH,updatedAt:aH,to:"\u002Fexperience\u002Fproject\u002Fuser\u002Fbdd"},prev:{title:"缓存设计",path:"\u002Fzh\u002Fexperience\u002Fproject\u002Fuser\u002Fcache",to:"\u002Fexperience\u002Fproject\u002Fuser\u002Fcache"},next:{title:"代码细节处理",path:"\u002Fzh\u002Fexperience\u002Fproject\u002Fuser\u002Fparticulars",to:"\u002Fexperience\u002Fproject\u002Fuser\u002Fparticulars"}}],fetch:{},mutations:[]}}("text","element","span","token","punctuation","\n"," ","(",")","function","operator","\n  ",".","string",",","method","property-access","property",":","p","code","number","string-property","li","a","\n    ","true","literal-property","div","nuxt-content-highlight","pre","line-numbers",-1,"icon","icon-link","{","}","keyword",3,"h3","language-js",";","配置数据库","初始化项目","用户登陆接口实现","设计","通用错误","编码","nofollow","noopener","noreferrer","_blank","max",2,"h2","[","]"," joi","control-flow","\n    joi","min","required","description","comment","bdd","安装-eslint-和-babel-环境","安装 ESLint 和 Babel 环境","配置-avanyc","配置 ava、nyc","https:\u002F\u002Fcoding.net\u002Fu\u002Fwillin\u002Fp\u002Fbdd-practice\u002Fgit","language-bash"," init\n","language-text","https:\u002F\u002Fgithub.com\u002Fw2fs\u002Fbest-practice","\"test\"","90","boolean","https:\u002F\u002Fcoding.net\u002Fu\u002Fwillin\u002Fp\u002Fbdd-practice\u002Fgit\u002Ftree\u002F5c42541a2985b54619d09372ef05fc999b108f9a","status","ol","https:\u002F\u002Fcoding.net\u002Fu\u002Fwillin\u002Fp\u002Fbdd-practice\u002Fgit\u002Fblob\u002Fmaster\u002Ftest\u002Fuser\u002Flogin.js","const","=","await"," client","'trial:guid-xxx'","\n  t","2022-07-20T02:11:53.794Z")));