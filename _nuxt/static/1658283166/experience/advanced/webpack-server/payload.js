__NUXT_JSONP__("/experience/advanced/webpack-server", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO){return {data:[{document:{slug:"webpack-server",description:"",title:"服务器端代码打包",position:2409,category:"经验篇-进阶",toc:[{id:O,depth:P,text:O},{id:Q,depth:P,text:Q},{id:R,depth:ab,text:R},{id:al,depth:ab,text:am},{id:S,depth:P,text:S},{id:T,depth:ab,text:T},{id:an,depth:P,text:ao}],body:{type:"root",children:[{type:b,tag:U,props:{id:O},children:[{type:b,tag:u,props:{href:"#%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F",ariaHidden:w,tabIndex:x},children:[{type:b,tag:c,props:{className:[y,z]},children:[]}]},{type:a,value:O}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"之前,我们在项目里会经常使用 "},{type:b,tag:i,props:{},children:[{type:a,value:"process.env.NODE_ENV"}]},{type:a,value:", 但这个变量对于 "},{type:b,tag:i,props:{},children:[{type:a,value:V}]},{type:a,value:"打包是有影响的, 在 "},{type:b,tag:i,props:{},children:[{type:a,value:ap}]},{type:a,value:" 的时候是有优化的."}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"所以, 我们将改用其他的环境变量来区别:"}]},{type:a,value:f},{type:b,tag:A,props:{className:[B]},children:[{type:b,tag:C,props:{className:[D,E]},children:[{type:b,tag:i,props:{},children:[{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:L}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,M]},children:[{type:a,value:V},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"DefinePlugin"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aq}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,ar,as]},children:[{type:a,value:"'process.env.NODE_ENV'"}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:at}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"'\"production\"'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:X}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,ar,as]},children:[{type:a,value:"'process.env.API_ENV'"}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:at}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,I]},children:[{type:b,tag:c,props:{className:[d,o,g]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:au}]},{type:b,tag:c,props:{className:[d,J]},children:[{type:b,tag:c,props:{className:[d,q,e]},children:[{type:a,value:K}]},{type:a,value:av},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:ac}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,N]},children:[{type:a,value:aw}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:ad}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ae}]},{type:b,tag:c,props:{className:[d,q,e]},children:[{type:a,value:v}]}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:au}]},{type:b,tag:c,props:{className:[d,o,g]},children:[{type:a,value:p}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"像这样, "},{type:b,tag:i,props:{},children:[{type:a,value:ax}]},{type:a,value:" 始终为 "},{type:b,tag:i,props:{},children:[{type:a,value:ap}]},{type:a,value:j}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"而我们实际开发\u002F产品环境, 用 "},{type:b,tag:i,props:{},children:[{type:a,value:"process.env.API_ENV"}]},{type:a,value:" 变量来使用(由于该项目是一个 koa 接口服务项目, 所以这样进行命名, 可以改成任意的, 你开心就好)."}]},{type:a,value:f},{type:b,tag:ay,props:{},children:[{type:a,value:f}]},{type:a,value:f},{type:b,tag:ay,props:{},children:[{type:a,value:f}]},{type:a,value:f},{type:b,tag:U,props:{id:Q},children:[{type:b,tag:u,props:{href:"#%E5%8A%A8%E6%80%81%E9%85%8D%E7%BD%AE%E6%89%93%E5%8C%85",ariaHidden:w,tabIndex:x},children:[{type:b,tag:c,props:{className:[y,z]},children:[]}]},{type:a,value:Q}]},{type:a,value:f},{type:b,tag:af,props:{id:R},children:[{type:b,tag:u,props:{href:"#%E6%B3%A8%E6%84%8F",ariaHidden:w,tabIndex:x},children:[{type:b,tag:c,props:{className:[y,z]},children:[]}]},{type:a,value:R}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"我们以前在 node.js 后端项目中, 动态配置加载一般是这样写:"}]},{type:a,value:f},{type:b,tag:A,props:{className:[B]},children:[{type:b,tag:C,props:{className:[D,E]},children:[{type:b,tag:i,props:{},children:[{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:Y}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,N]},children:[{type:a,value:ag}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:F}]},{type:a,value:" process"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:ac}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,N]},children:[{type:a,value:ax}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:ad}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ae}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,G]},children:[{type:a,value:az}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:Y}]},{type:a,value:aA},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:F}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,H]},children:[{type:a,value:ah}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,I]},children:[{type:b,tag:c,props:{className:[d,o,g]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:aB}]},{type:b,tag:c,props:{className:[d,J]},children:[{type:b,tag:c,props:{className:[d,q,e]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,N]},children:[{type:a,value:ag}]},{type:b,tag:c,props:{className:[d,q,e]},children:[{type:a,value:v}]}]},{type:b,tag:c,props:{className:[d,o,g]},children:[{type:a,value:p}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:aC},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:aD}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:F}]},{type:a,value:aE},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"为了提高阅读性, 和可能存在"},{type:b,tag:i,props:{},children:[{type:a,value:ag}]},{type:a,value:"的复用, 我们会单独定义一个变量."}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"在 webpack 打包的项目中直接这样做的话, 会产生一个问题. 比如我现在有多个配置:"}]},{type:a,value:f},{type:b,tag:"ul",props:{},children:[{type:a,value:f},{type:b,tag:Z,props:{},children:[{type:a,value:"_develpment.js"}]},{type:a,value:f},{type:b,tag:Z,props:{},children:[{type:a,value:"_test.js"}]},{type:a,value:f},{type:b,tag:Z,props:{},children:[{type:a,value:"_production.js"}]},{type:a,value:f},{type:b,tag:Z,props:{},children:[{type:a,value:"_staging.js"}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"即便我传入的当前环境为 "},{type:b,tag:i,props:{},children:[{type:a,value:"development"}]},{type:a,value:", 依然所有的配置文件会被全部打包进来(只是永远不会被执行). 那么这样的话, 就存在敏感信息泄露的风险."}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"正确的姿势应该是这样的:"}]},{type:a,value:f},{type:b,tag:af,props:{id:al},children:[{type:b,tag:u,props:{href:"#configindexjs",ariaHidden:w,tabIndex:x},children:[{type:b,tag:c,props:{className:[y,z]},children:[]}]},{type:a,value:am}]},{type:a,value:f},{type:b,tag:A,props:{className:[B]},children:[{type:b,tag:C,props:{className:[D,E]},children:[{type:b,tag:i,props:{},children:[{type:b,tag:c,props:{className:[d,G]},children:[{type:a,value:az}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:Y}]},{type:a,value:aA},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:F}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,H]},children:[{type:a,value:ah}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,I]},children:[{type:b,tag:c,props:{className:[d,o,g]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:aB}]},{type:b,tag:c,props:{className:[d,J]},children:[{type:b,tag:c,props:{className:[d,q,e]},children:[{type:a,value:K}]},{type:a,value:av},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:ac}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,N]},children:[{type:a,value:aw}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:ad}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ae}]},{type:b,tag:c,props:{className:[d,q,e]},children:[{type:a,value:v}]}]},{type:b,tag:c,props:{className:[d,o,g]},children:[{type:a,value:p}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:aC},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:aD}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:F}]},{type:a,value:aE},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:U,props:{id:S},children:[{type:b,tag:u,props:{href:"#%E6%A8%A1%E5%9D%97%E5%8C%96%E6%89%93%E5%8C%85",ariaHidden:w,tabIndex:x},children:[{type:b,tag:c,props:{className:[y,z]},children:[]}]},{type:a,value:S}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"比如, 我在项目中有很多个模块, 处于负载均衡的需求, 或者是对于客户定制模块化产品的需求, 我们需要分模块进行打包, 避免其他模块(永远不会被执行的)被打包进 webpack bundle."}]},{type:a,value:f},{type:b,tag:A,props:{className:[B]},children:[{type:b,tag:C,props:{className:[D,E]},children:[{type:b,tag:i,props:{},children:[{type:b,tag:c,props:{className:[d,G]},children:[{type:a,value:"\u002F\u002F config\u002F_development.js"}]},{type:a,value:"\nexports"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:ai}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:F}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"["}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"'user'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:X}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"'demo'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"]"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,G]},children:[{type:a,value:"\u002F\u002F 可能 src 目录下 还有其他模块目录, 如 'manage' 等"}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"在服务端加载的时候, 是这样子的:"}]},{type:a,value:f},{type:b,tag:A,props:{className:[B]},children:[{type:b,tag:C,props:{className:[D,E]},children:[{type:b,tag:i,props:{},children:[{type:b,tag:c,props:{className:[d,G]},children:[{type:a,value:"\u002F\u002F src\u002Fserver.js"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,G]},children:[{type:a,value:"\u002F\u002F 动态加载启用的模块"}]},{type:a,value:"\nenabledModules"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,_,H,s]},children:[{type:a,value:"forEach"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,"parameter"]},children:[{type:a,value:aF}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,"arrow",l]},children:[{type:a,value:"=\u003E"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aq}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,G]},children:[{type:a,value:"\u002F* eslint-disable global-require,import\u002Fno-dynamic-require *\u002F"}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:Y}]},{type:a,value:" routes "},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:F}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,H]},children:[{type:a,value:ah}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,I]},children:[{type:b,tag:c,props:{className:[d,o,g]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:".\u002F"}]},{type:b,tag:c,props:{className:[d,J]},children:[{type:b,tag:c,props:{className:[d,q,e]},children:[{type:a,value:K}]},{type:a,value:aF},{type:b,tag:c,props:{className:[d,q,e]},children:[{type:a,value:v}]}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"\u002Froute"}]},{type:b,tag:c,props:{className:[d,o,g]},children:[{type:a,value:p}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:"\n  routes"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,_,H,s]},children:[{type:a,value:"middleware"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"|"}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"\u003E"}]},{type:a,value:" app"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"use"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"那么就需要 "},{type:b,tag:i,props:{},children:[{type:a,value:aj}]},{type:a,value:" 插件来支持了."}]},{type:a,value:f},{type:b,tag:A,props:{className:[B]},children:[{type:b,tag:C,props:{className:[D,E]},children:[{type:b,tag:i,props:{},children:[{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:L}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,M]},children:[{type:a,value:V},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:aj}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,aG]},children:[{type:b,tag:c,props:{className:[d,$]},children:[{type:a,value:aa}]},{type:b,tag:c,props:{className:[d,aH,aI]},children:[{type:a,value:ak}]},{type:b,tag:c,props:{className:[d,$]},children:[{type:a,value:aa}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:X}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:L}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,M]},children:[{type:a,value:aJ}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,I]},children:[{type:b,tag:c,props:{className:[d,o,g]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"^.\u002F("}]},{type:b,tag:c,props:{className:[d,J]},children:[{type:b,tag:c,props:{className:[d,q,e]},children:[{type:a,value:K}]},{type:a,value:ai},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,_,H,s]},children:[{type:a,value:aK}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:aL}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,q,e]},children:[{type:a,value:v}]}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:aM}]},{type:b,tag:c,props:{className:[d,o,g]},children:[{type:a,value:p}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:af,props:{id:T},children:[{type:b,tag:u,props:{href:"#%E8%BF%9B%E9%98%B6%E4%BD%BF%E7%94%A8",ariaHidden:w,tabIndex:x},children:[{type:b,tag:c,props:{className:[y,z]},children:[]}]},{type:a,value:T}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"比如,"},{type:b,tag:i,props:{},children:[{type:a,value:ak}]},{type:a,value:"目录下除了各个模块的目录, 还有一些通用方法类,钩子的目录, 如: "},{type:b,tag:i,props:{},children:[{type:a,value:"lib"}]},{type:a,value:" 和 "},{type:b,tag:i,props:{},children:[{type:a,value:"hook"}]},{type:a,value:". 这两个目录是可能被其他子模块共同引用的. 在插件正则中修改:"}]},{type:a,value:f},{type:b,tag:A,props:{className:[B]},children:[{type:b,tag:C,props:{className:[D,E]},children:[{type:b,tag:i,props:{},children:[{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:L}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,M]},children:[{type:a,value:V},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:aj}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,aG]},children:[{type:b,tag:c,props:{className:[d,$]},children:[{type:a,value:aa}]},{type:b,tag:c,props:{className:[d,aH,aI]},children:[{type:a,value:ak}]},{type:b,tag:c,props:{className:[d,$]},children:[{type:a,value:aa}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:X}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:L}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,M]},children:[{type:a,value:aJ}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,I]},children:[{type:b,tag:c,props:{className:[d,o,g]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"^.\u002F(lib|hook|"}]},{type:b,tag:c,props:{className:[d,J]},children:[{type:b,tag:c,props:{className:[d,q,e]},children:[{type:a,value:K}]},{type:a,value:ai},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,_,H,s]},children:[{type:a,value:aK}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:aL}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,q,e]},children:[{type:a,value:v}]}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:aM}]},{type:b,tag:c,props:{className:[d,o,g]},children:[{type:a,value:p}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:U,props:{id:an},children:[{type:b,tag:u,props:{href:"#%E5%8E%8B%E7%BC%A9%E4%BB%A3%E7%A0%81-%E5%B9%B6%E6%B7%BB%E5%8A%A0-source-map-%E6%94%AF%E6%8C%81",ariaHidden:w,tabIndex:x},children:[{type:b,tag:c,props:{className:[y,z]},children:[]}]},{type:a,value:ao}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:"Uglifyjs"}]},{type:a,value:" 或 "},{type:b,tag:i,props:{},children:[{type:a,value:"Uglify-es"}]},{type:a,value:" 其实对于服务器端代码打包并不友好, 可能会导致打包的失败, 用 "},{type:b,tag:i,props:{},children:[{type:a,value:"babel-minify-webpack-plugin"}]},{type:a,value:" 插件来替代."}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"配合 "},{type:b,tag:i,props:{},children:[{type:a,value:"source-map-support"}]},{type:a,value:" 插件来支持源码的问题定位."}]},{type:a,value:f},{type:b,tag:"hr",props:{},children:[]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"示例项目源码: "},{type:b,tag:u,props:{href:aN,rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:aN}]}]}]},dir:"\u002Fzh\u002Fexperience\u002Fadvanced",path:"\u002Fzh\u002Fexperience\u002Fadvanced\u002Fwebpack-server",extension:".md",createdAt:aO,updatedAt:aO,to:"\u002Fexperience\u002Fadvanced\u002Fwebpack-server"},prev:{title:"手把手教你发布一个Vue组件",path:"\u002Fzh\u002Fexperience\u002Fadvanced\u002Fvue-components",to:"\u002Fexperience\u002Fadvanced\u002Fvue-components"},next:{title:"MySQL 向 GraphQL 迁移",path:"\u002Fzh\u002Fexperience\u002Fgraphql\u002Fmysql",to:"\u002Fexperience\u002Fgraphql\u002Fmysql"}}],fetch:{},mutations:[]}}("text","element","span","token","punctuation","\n","string"," ","code",".","p","operator","(",")","template-punctuation","`","interpolation-punctuation",";","property-access","keyword","a","}","true",-1,"icon","icon-link","div","nuxt-content-highlight","pre","language-js","line-numbers","=","comment","function","template-string","interpolation","${","new","class-name","constant","环境变量",2,"动态配置打包","注意","模块化打包","进阶使用","h2","webpack","\n  ",",","const","li","method","regex-delimiter","\u002F",3,"env","||","'development'","h3","ENV","require","enabledModules","ContextReplacementPlugin","src","configindexjs","config\u002Findex.js","压缩代码-并添加-source-map-支持","压缩代码, 并添加 source-map 支持","production","{","string-property","property",":","\"","process","API_ENV","NODE_ENV","adsbygoogle","\u002F\u002F eslint-disable-next-line import\u002Fno-dynamic-require"," options ",".\u002F_","\n\nmodule","exports"," options","mod","regex","regex-source","language-regex","RegExp","join","'|'",")\u002F.*$","https:\u002F\u002Fgithub.com\u002FAirDwing\u002Fwebpack-server-bundle","2022-07-20T02:11:53.794Z")));