(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{195:function(M,e,t){"use strict";t.r(e),t.d(e,"default",function(){return i}),t.d(e,"query",function(){return I});t(29),t(30),t(13),t(50),t(41);var N=t(0),D=t.n(N),a=t(197),g=t(210),j=(t(259),t(208));var i=function(M){var e,t;function N(e){var t;(t=M.call(this,e)||this).isGrouped=!1;var N={lists:{brief:"我的书影音游戏档案"},projects:{brief:"我自己设计开发的一些网站。"},tools:{brief:"我做的一些小工具。"},creative:{brief:"一些脑洞大开的小创意。"},writing:{brief:"我写的文章和电子书。"},painting:{brief:"我画的画。"}},D=t.props.data.allMarkdownRemark.edges;return t.isGrouped||(D.map(function(M){var e=M.node,t=e.fields.slug.split("/")[1];N[t].posts?N[t].posts.push(e):N[t].posts=[e]}),t.state={groupedPosts:N},t.isGrouped=!0),t}return t=M,(e=N).prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t,N.prototype.render=function(){var M=this.state.groupedPosts;return D.a.createElement(g.a,{location:this.props.location},D.a.createElement(j.a,{title:"首页"}),D.a.createElement("div",{className:"layout-home container"},D.a.createElement("div",{className:"home-anchor"},D.a.createElement("a",{href:"#lists"},"人生清单"),D.a.createElement("a",{href:"#projects"},"项目"),D.a.createElement("a",{href:"#tools"},"工具"),D.a.createElement("a",{href:"#creative"},"脑洞"),D.a.createElement("a",{href:"#writing"},"写作"),D.a.createElement("a",{href:"#painting"},"画画")),Object.keys(M).map(function(e){return D.a.createElement("div",{className:"home-section",id:e,key:e},D.a.createElement("h1",{className:"section-title"},e),D.a.createElement("p",{className:"section-description"},M[e].brief),D.a.createElement("ul",{className:"section-items"},M[e].posts.map(function(M){return D.a.createElement("li",{className:"section-item",key:M.id},D.a.createElement(a.a,{to:M.fields.slug,className:"item-card"},D.a.createElement("div",{className:"card-cover"},D.a.createElement("img",{src:Object(a.b)("heros/"+M.frontmatter.cover),alt:M.frontmatter.title})),D.a.createElement("p",{className:"card-title"},M.frontmatter.title)))})))})))},N}(D.a.Component),I="2086594907"},197:function(M,e,t){"use strict";var N=t(0),D=t.n(N),a=t(66),g=t.n(a);t.d(e,"a",function(){return g.a}),t.d(e,"b",function(){return a.withPrefix});t(199),t(9).default.enqueue,D.a.createContext({})},199:function(M,e,t){var N;M.exports=(N=t(202))&&N.default||N},200:function(M,e,t){M.exports=t.p+"static/avatar-694034a6843d9430d163ec17713070dc.png"},201:function(M,e,t){"use strict";var N,D=t(0),a=t.n(D),g=t(200),j=t.n(g),i=(t(203),t(204),t(205)),I=t.n(i),z=(t(206),t(207)),c=t.n(z);t(213);var u=function(M){var e,t;function D(){for(var e,t=arguments.length,D=new Array(t),a=0;a<t;a++)D[a]=arguments[a];return(e=M.call.apply(M,[this].concat(D))||this).state={mailActiveClass:""},e.onClickWechat=function(M){M.preventDefault()},e.onClickWMail=function(M){M.preventDefault(),N&&clearTimeout(N);var t=document.createElement("input");t.setAttribute("readonly","readonly"),t.setAttribute("value","artinhuangcn@gmail.com"),document.body.appendChild(t),t.setSelectionRange(0,9999),t.select(),document.execCommand("copy")&&document.execCommand("copy"),e.setState({mailActiveClass:"active"}),N=setTimeout(function(){e.setState({mailActiveClass:""}),clearTimeout(N)},2e3),document.body.removeChild(t)},e}return t=M,(e=D).prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t,D.prototype.render=function(){var M=this.state.mailActiveClass,e=this.props,t=e.hasAvatar,N=e.intro;return a.a.createElement("div",{className:"layout-bio container"},t&&a.a.createElement("div",{className:"bio-avatar"},a.a.createElement("img",{src:j.a,alt:"头像"})),a.a.createElement("div",{className:"bio-social"},a.a.createElement("a",{href:"https://github.com/artinhuang",title:"Github",target:"_blank",rel:"noopener noreferrer"},a.a.createElement("img",{src:I.a,alt:"Github"})),a.a.createElement("a",{href:"#mail",title:"邮箱",target:"_blank",rel:"noopener noreferrer",onClick:this.onClickWMail},a.a.createElement("img",{src:c.a,alt:"邮箱"}),a.a.createElement("div",{className:"social-mail "+M},"已复制邮箱"))),a.a.createElement("div",{className:"bio-intro"},a.a.createElement("b",null,N||" 嗨！我是 ArtinHuang，网名：太宅夜。"),a.a.createElement("br",null),N||"想了解我？往下浏览本站吧！顺便征集女票~😏"))},D}(a.a.Component);e.a=u},202:function(M,e,t){"use strict";t.r(e);t(14);var N=t(0),D=t.n(N),a=t(92);e.default=function(M){var e=M.location,t=M.pageResources;return t?D.a.createElement(a.a,Object.assign({location:e,pageResources:t},t.json)):null}},203:function(M,e){M.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4IiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTIuMTgxMSA1LjUzOTE3QzEyLjM5MDUgNS41MzkxNyAxMi41OTM1IDUuNTQ5MjEgMTIuNzk2NCA1LjU3NTk5QzEyLjI1MzEgMi45NTE1NyA5LjUwMDczIDEgNi4zNzIgMUMyLjg2MzY0IDEgMCAzLjQzNjk2IDAgNi41MzY3MUMwIDguMzI0MjYgMC45NTg5MDkgOS44MDA0OSAyLjU0OTQ1IDEwLjk0MkwxLjkxNzgyIDEyLjkwMzZMNC4xNDMyNyAxMS43NjIxQzQuOTQxODIgMTEuOTIyOCA1LjU3NjczIDEyLjA4NjggNi4zNzUyNyAxMi4wODY4QzYuNTc4MTggMTIuMDg2OCA2Ljc3MTI3IDEyLjA3NjggNi45NzQxOCAxMi4wNkM2Ljg0MzI3IDExLjYyODIgNi43NzEyNyAxMS4xNjk2IDYuNzcxMjcgMTAuNjk0M0M2Ljc2OCA3Ljg1MjI2IDkuMTU3MDkgNS41MzkxNyAxMi4xODExIDUuNTM5MTdWNS41MzkxN1pNOC43NjEwOSAzLjc2ODM2QzkuMjM1NjQgMy43NjgzNiA5LjU1MzA5IDQuMDkzMDYgOS41NTMwOSA0LjU4NTE0QzkuNTUzMDkgNS4wNzA1MiA5LjIzNTY0IDUuMzk1MjIgOC43NjEwOSA1LjM5NTIyQzguMjc2NzMgNS4zOTUyMiA3LjgwMjE4IDUuMDcwNTIgNy44MDIxOCA0LjU4NTE0QzcuODA1NDUgNC4wOTMwNiA4LjI4IDMuNzY4MzYgOC43NjEwOSAzLjc2ODM2Wk00LjI5NzA5IDUuMzk1MjJDMy44MjI1NSA1LjM5NTIyIDMuMzM4MTggNS4wNzA1MiAzLjMzODE4IDQuNTg1MTRDMy4zMzgxOCA0LjA4OTcxIDMuODIyNTUgMy43NjgzNiA0LjI5NzA5IDMuNzY4MzZDNC43ODE0NSAzLjc2ODM2IDUuMDk1NjQgNC4wOTMwNiA1LjA5NTY0IDQuNTg1MTRDNS4wOTU2NCA1LjA3Mzg3IDQuNzgxNDUgNS4zOTUyMiA0LjI5NzA5IDUuMzk1MjJaTTE4IDEwLjYyMDZDMTggOC4wMTI5NCAxNS40NTA1IDUuODkwNjUgMTIuNTg2OSA1Ljg5MDY1QzkuNTUzMDkgNS44OTA2NSA3LjE3MzgyIDguMDEyOTQgNy4xNzM4MiAxMC42MjA2QzcuMTczODIgMTMuMjI4MyA5LjU1NjM2IDE1LjM1MDYgMTIuNTg2OSAxNS4zNTA2QzEzLjIxODUgMTUuMzUwNiAxMy44NiAxNS4xNzk5IDE0LjUwNDcgMTUuMDE5MkwxNi4yNTI0IDE2TDE1Ljc2OCAxNC4zNzMxQzE3LjA1MDkgMTMuMzg5IDE4IDEyLjA4NjggMTggMTAuNjIwNlpNMTAuODI5NSA5LjgwMDQ5QzEwLjUxMiA5LjgwMDQ5IDEwLjE5NzggOS40NzU3OSAxMC4xOTc4IDkuMTQ0MzlDMTAuMTk3OCA4LjgxOTY4IDEwLjUxNTMgOC40OTgzMyAxMC44Mjk1IDguNDk4MzNDMTEuMzEzOCA4LjQ5ODMzIDExLjYyOCA4LjgyMzAzIDExLjYyOCA5LjE0NDM5QzExLjYyOCA5LjQ3OTEzIDExLjMxMDUgOS44MDA0OSAxMC44Mjk1IDkuODAwNDlaTTE0LjMzNDUgOS44MDA0OUMxNC4wMTcxIDkuODAwNDkgMTMuNzAyOSA5LjQ3NTc5IDEzLjcwMjkgOS4xNDQzOUMxMy43MDI5IDguODE5NjggMTQuMDIwNCA4LjQ5ODMzIDE0LjMzNDUgOC40OTgzM0MxNC44MDkxIDguNDk4MzMgMTUuMTMzMSA4LjgyMzAzIDE1LjEzMzEgOS4xNDQzOUMxNS4xMzY0IDkuNDc5MTMgMTQuODA5MSA5LjgwMDQ5IDE0LjMzNDUgOS44MDA0OVoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo="},204:function(M,e,t){M.exports=t.p+"static/qrcode-09e9822f988a74a98634d9c9b090cdbb.jpg"},205:function(M,e){M.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4IiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNi4wMjA1NiAxNC4xODg0QzYuMDIwNTYgMTQuMjU4NyA1LjkzNzEgMTQuMzE0OSA1LjgzMTg1IDE0LjMxNDlDNS43MTIxIDE0LjMyNTUgNS42Mjg2MyAxNC4yNjkyIDUuNjI4NjMgMTQuMTg4NEM1LjYyODYzIDE0LjExODEgNS43MTIxIDE0LjA2MTggNS44MTczNCAxNC4wNjE4QzUuOTI2MjEgMTQuMDUxMyA2LjAyMDU2IDE0LjEwNzUgNi4wMjA1NiAxNC4xODg0Wk00Ljg5MTk0IDE0LjAzMDJDNC44NjY1MyAxNC4xMDA1IDQuOTM5MTEgMTQuMTgxMyA1LjA0Nzk4IDE0LjIwMjRDNS4xNDIzNCAxNC4yMzc2IDUuMjUxMjEgMTQuMjAyNCA1LjI3Mjk4IDE0LjEzMjFDNS4yOTQ3NiAxNC4wNjE4IDUuMjI1ODEgMTMuOTgxIDUuMTE2OTQgMTMuOTQ5M0M1LjAyMjU4IDEzLjkyNDcgNC45MTczNCAxMy45NTk5IDQuODkxOTQgMTQuMDMwMlpNNi40OTU5NyAxMy45NzA0QzYuMzkwNzMgMTMuOTk1IDYuMzE4MTQgMTQuMDYxOCA2LjMyOTAzIDE0LjE0MjdDNi4zMzk5MiAxNC4yMTMgNi40MzQyNyAxNC4yNTg3IDYuNTQzMTUgMTQuMjM0MUM2LjY0ODM5IDE0LjIwOTUgNi43MjA5NyAxNC4xNDI3IDYuNzEwMDggMTQuMDcyNEM2LjY5OTE5IDE0LjAwNTYgNi42MDEyMSAxMy45NTk5IDYuNDk1OTcgMTMuOTcwNFpNOC44ODM4NyAwLjVDMy44NTA0IDAuNSAwIDQuMjAxNTYgMCA5LjA3NzIxQzAgMTIuOTc1NiAyLjUzMzA2IDE2LjMxMTYgNi4xNTEyMSAxNy40ODU3QzYuNjE1NzMgMTcuNTY2NSA2Ljc3OTAzIDE3LjI4ODggNi43NzkwMyAxNy4wNjAzQzYuNzc5MDMgMTYuODQyNCA2Ljc2ODE0IDE1LjY0MDIgNi43NjgxNCAxNC45MDJDNi43NjgxNCAxNC45MDIgNC4yMjc4MiAxNS40MjkzIDMuNjk0MzUgMTMuODU0NEMzLjY5NDM1IDEzLjg1NDQgMy4yODA2NSAxMi44MzE1IDIuNjg1NDggMTIuNTY3OEMyLjY4NTQ4IDEyLjU2NzggMS44NTQ0NCAxMi4wMTYgMi43NDM1NSAxMi4wMjY1QzIuNzQzNTUgMTIuMDI2NSAzLjY0NzE4IDEyLjA5NjggNC4xNDQzNSAxMi45MzM0QzQuOTM5MTEgMTQuMjkwMyA2LjI3MDk3IDEzLjkwMDEgNi43ODk5MiAxMy42NjgxQzYuODczMzkgMTMuMTA1NyA3LjEwOTI3IDEyLjcxNTUgNy4zNzA1NiAxMi40ODM1QzUuMzQxOTQgMTIuMjY1NSAzLjI5NTE2IDExLjk4MDggMy4yOTUxNiA4LjU5OTEzQzMuMjk1MTYgNy42MzI0NCAzLjU3MDk3IDcuMTQ3MzMgNC4xNTE2MSA2LjUyODY1QzQuMDU3MjYgNi4zMDAxNiAzLjc0ODc5IDUuMzU4MDcgNC4yNDU5NyA0LjE0MThDNS4wMDQ0NCAzLjkxMzMxIDYuNzUgNS4wOTA5MSA2Ljc1IDUuMDkwOTFDNy40NzU4MSA0Ljg5NDA2IDguMjU2MDUgNC43OTIxMiA5LjAyOTAzIDQuNzkyMTJDOS44MDIwMiA0Ljc5MjEyIDEwLjU4MjMgNC44OTQwNiAxMS4zMDgxIDUuMDkwOTFDMTEuMzA4MSA1LjA5MDkxIDEzLjA1MzYgMy45MDk3OSAxMy44MTIxIDQuMTQxOEMxNC4zMDkzIDUuMzYxNTkgMTQuMDAwOCA2LjMwMDE2IDEzLjkwNjUgNi41Mjg2NUMxNC40ODcxIDcuMTUwODUgMTQuODQyNyA3LjYzNTk1IDE0Ljg0MjcgOC41OTkxM0MxNC44NDI3IDExLjk5MTMgMTIuNzA1MiAxMi4yNjIgMTAuNjc2NiAxMi40ODM1QzExLjAxMDUgMTIuNzYxMiAxMS4yOTM1IDEzLjI4ODUgMTEuMjkzNSAxNC4xMTQ2QzExLjI5MzUgMTUuMjk5MiAxMS4yODI3IDE2Ljc2NTEgMTEuMjgyNyAxNy4wNTMzQzExLjI4MjcgMTcuMjgxOCAxMS40NDk2IDE3LjU1OTUgMTEuOTEwNSAxNy40Nzg2QzE1LjUzOTUgMTYuMzExNiAxOCAxMi45NzU2IDE4IDkuMDc3MjFDMTggNC4yMDE1NiAxMy45MTczIDAuNSA4Ljg4Mzg3IDAuNVpNMy41Mjc0MiAxMi42MjQxQzMuNDgwMjQgMTIuNjU5MiAzLjQ5MTEzIDEyLjc0MDEgMy41NTI4MiAxMi44MDY5QzMuNjEwODkgMTIuODYzMSAzLjY5NDM1IDEyLjg4NzcgMy43NDE1MyAxMi44NDJDMy43ODg3MSAxMi44MDY5IDMuNzc3ODIgMTIuNzI2IDMuNzE2MTMgMTIuNjU5MkMzLjY1ODA2IDEyLjYwMyAzLjU3NDYgMTIuNTc4NCAzLjUyNzQyIDEyLjYyNDFaTTMuMTM1NDggMTIuMzM5NEMzLjExMDA4IDEyLjM4NTEgMy4xNDYzNyAxMi40NDEzIDMuMjE4OTUgMTIuNDc2NUMzLjI3NzAyIDEyLjUxMTYgMy4zNDk2IDEyLjUwMTEgMy4zNzUgMTIuNDUxOEMzLjQwMDQgMTIuNDA2MSAzLjM2NDExIDEyLjM0OTkgMy4yOTE1MyAxMi4zMTQ3QzMuMjE4OTUgMTIuMjkzNyAzLjE2MDg5IDEyLjMwNDIgMy4xMzU0OCAxMi4zMzk0Wk00LjMxMTI5IDEzLjU5MDhDNC4yNTMyMyAxMy42MzY1IDQuMjc1IDEzLjc0MTkgNC4zNTg0NyAxMy44MDg3QzQuNDQxOTQgMTMuODg5NiA0LjU0NzE4IDEzLjkwMDEgNC41OTQzNSAxMy44NDM5QzQuNjQxNTMgMTMuNzk4MiA0LjYxOTc2IDEzLjY5MjcgNC41NDcxOCAxMy42MjU5QzQuNDY3MzQgMTMuNTQ1MSA0LjM1ODQ3IDEzLjUzNDUgNC4zMTEyOSAxMy41OTA4Wk0zLjg5NzU4IDEzLjA3NEMzLjgzOTUyIDEzLjEwOTIgMy44Mzk1MiAxMy4yMDA2IDMuODk3NTggMTMuMjgxNEMzLjk1NTY1IDEzLjM2MjMgNC4wNTM2MyAxMy4zOTc0IDQuMTAwODEgMTMuMzYyM0M0LjE1ODg3IDEzLjMxNjYgNC4xNTg4NyAxMy4yMjUyIDQuMTAwODEgMTMuMTQ0M0M0LjA1IDEzLjA2MzUgMy45NTU2NSAxMy4wMjgzIDMuODk3NTggMTMuMDc0WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg=="},206:function(M,e){M.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4IiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTkgMEMxMy45NzA2IDAgMTggNC4wMjk0NCAxOCA5QzE4IDEzLjk3MDYgMTMuOTcwNiAxOCA5IDE4QzQuMDI5NDQgMTggMCAxMy45NzA2IDAgOUMwIDQuMDI5NDQgNC4wMjk0NCAwIDkgMFpNNy4xNzkxMSAxNEM3LjkxMzY3IDEzLjkzMjUgOC42MzI2OCAxMy43MzkzIDkuMTYyMDYgMTMuNTQ3OUM5LjY5MTg4IDEzLjM1NiAxMC4xMjc2IDEzLjEwOTYgMTAuNDcgMTIuODA3NkMxMC44MDgxIDEyLjUxMiAxMS4wNjkyIDEyLjEzODYgMTEuMjMwNyAxMS43MTk1QzExLjM5NSAxMS4yOTU4IDExLjQ3NzIgMTAuODA2OSAxMS40NzcyIDEwLjI1MjZWNy41MTUxMUMxMS40NzcyIDYuODk3OCAxMS40Nzk0IDYuMzYyNjQgMTEuNDgzOSA1LjkxMDFDMTEuNDg4MyA1LjQ1NzEgMTEuNDkxIDUuMDQ4NTIgMTEuNDkxIDQuNjgzMDJMMTEuMDQ0MiA0SDguMzk5NTNDOC40MDM5NyA0LjM2OTUgOC40MDkzIDQuNzY2OTggOC40MTY0IDUuMTkyODhDOC40MjMwNiA1LjYxODc4IDguNDI2MTcgNi4xOTIxMyA4LjQyNjE3IDYuOTEzMzZDOC40MjYxNyA3LjMyNzcxIDguNDI1MjggNy43MzAwOCA4LjQyMzA2IDguMTE5NTZDOC40MjA4NCA4LjUwOTQ5IDguNDE5NTEgOC44Nzk4OCA4LjQxOTUxIDkuMjMxNjFDOC40MTk1MSA5LjY2ODYyIDguMzYyMjIgMTAuMDE5OSA4LjI0NzY0IDEwLjI4NTlDOC4xMzIxNyAxMC41NTIgNy45NjIwOCAxMC43NzI3IDcuNzM2OTEgMTAuOTQ4MUM3LjUxNTM4IDExLjExNSA3LjI2MjU2IDExLjIzNTcgNi45OTM0NyAxMS4zMDI5QzYuNjY2NzcgMTEuMzg1MiA2LjMzNDg0IDExLjQ0NTIgNiAxMS40ODI0TDYuNjY0MDQgMTMuNjYwM0w3LjE3OTExIDE0WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg=="},207:function(M,e){M.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4IiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTYuNjk2OSA3LjEwOTI2QzE2LjgxODcgNy4wMDg4IDE3IDcuMTAyNzggMTcgNy4yNjE1N1YxMy44ODg5QzE3IDE0Ljc0NzcgMTYuMzI4MSAxNS40NDQ0IDE1LjUgMTUuNDQ0NEgyLjVDMS42NzE4OCAxNS40NDQ0IDEgMTQuNzQ3NyAxIDEzLjg4ODlWNy4yNjQ4MUMxIDcuMTAyNzggMS4xNzgxMiA3LjAxMjA0IDEuMzAzMTIgNy4xMTI1QzIuMDAzMTIgNy42NzYzOSAyLjkzMTI1IDguMzkyNTkgNi4xMTg3NSAxMC43OTRDNi43NzgxMyAxMS4yOTMxIDcuODkwNjIgMTIuMzQzMSA5IDEyLjMzNjZDMTAuMTE1NiAxMi4zNDYzIDExLjI1IDExLjI3MzYgMTEuODg0NCAxMC43OTRDMTUuMDcxOSA4LjM5MjU5IDE1Ljk5NjkgNy42NzMxNSAxNi42OTY5IDcuMTA5MjZaTTkgMTEuMjk2M0M5LjcyNSAxMS4zMDkzIDEwLjc2ODcgMTAuMzUgMTEuMjkzNyA5Ljk1NDYzQzE1LjQ0MDYgNi44MzM4IDE1Ljc1NjIgNi41NjE1NyAxNi43MTI1IDUuNzgzOEMxNi44OTM3IDUuNjM3OTYgMTcgNS40MTExMSAxNyA1LjE3MTNWNC41NTU1NkMxNyAzLjY5Njc2IDE2LjMyODEgMyAxNS41IDNIMi41QzEuNjcxODggMyAxIDMuNjk2NzYgMSA0LjU1NTU2VjUuMTcxM0MxIDUuNDExMTEgMS4xMDYyNSA1LjYzNDcyIDEuMjg3NSA1Ljc4MzhDMi4yNDM3NSA2LjU1ODMzIDIuNTU5MzggNi44MzM4IDYuNzA2MjUgOS45NTQ2M0M3LjIzMTI1IDEwLjM1IDguMjc1IDExLjMwOTMgOSAxMS4yOTYzWiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg=="},208:function(M,e,t){"use strict";var N=t(209),D=t(0),a=t.n(D),g=t(215),j=t.n(g);function i(M){var e=M.description,t=M.lang,D=M.meta,g=M.keywords,i=M.title,I=N.data.site,z=e||I.siteMetadata.description;return a.a.createElement(j.a,{htmlAttributes:{lang:t},title:i,titleTemplate:"%s | "+I.siteMetadata.title,meta:[{name:"description",content:z},{property:"og:title",content:i},{property:"og:description",content:z},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:I.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:z}].concat(g.length>0?{name:"keywords",content:g.join(", ")}:[]).concat(D)})}i.defaultProps={lang:"zh",meta:[],keywords:["framer","figma","Codesigner","刷朋友圈的小利器","选个电影","脑洞没边儿","程序猿的婚礼邀请函","即刻 Sketch 插件","爱长沙的 26 个理由"]},e.a=i},209:function(M){M.exports={data:{site:{siteMetadata:{title:"太宅夜的作品博物馆",description:"我的作品博物馆。",author:"ArtinHuang"}}}}},210:function(M,e,t){"use strict";var N=t(0),D=t.n(N),a=t(197),g=(t(211),function(){return D.a.createElement("footer",{className:"footer container"},D.a.createElement("div",{className:"footer-wrapper"},"Copyright © ",(new Date).getFullYear()," ArtinHuang, Built with ",D.a.createElement("a",{href:"https://www.gatsbyjs.org",target:"_blank",rel:"noopener noreferrer"},"Gatsby"),D.a.createElement("span",{className:"stretched-box"}),D.a.createElement(a.a,{to:"/",className:"footer-link"},"首页"),D.a.createElement(a.a,{to:"/about",className:"footer-link"},"关于我")))}),j=t(200),i=t.n(j);t(212);var I=function(M){var e,t;function N(e){var t;(t=M.call(this,e)||this).headerClassName=function(M){return t.state.isHome?"header "+(M?"header-visible":""):"header header-visible"};var N="/"===t.props.location.pathname;return t.state={headerVisible:!1,isHome:N},t}t=M,(e=N).prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t;var g=N.prototype;return g.componentDidMount=function(){var M=this;if(this.state.isHome){window.pageYOffset;window.onscroll=function(){window.pageYOffset>230?M.setState({headerVisible:!0}):M.setState({headerVisible:!1})}}},g.componentWillUnmount=function(){window.onscroll=null},g.render=function(){var M=this.state,e=M.isHome,t=M.headerVisible;return D.a.createElement("header",{className:this.headerClassName(t)},D.a.createElement("nav",{className:"container"},D.a.createElement(a.a,{className:"header-logo",to:"/",rel:"home"},D.a.createElement("img",{src:i.a,alt:"我的头像"})),D.a.createElement("div",{className:"header-anchors "+(e?"anchors-visible":"")},D.a.createElement("a",{href:"#projects"},"项目"),D.a.createElement("a",{href:"#tools"},"工具"),D.a.createElement("a",{href:"#creative"},"脑洞"),D.a.createElement("a",{href:"#writing"},"写作"),D.a.createElement("a",{href:"#painting"},"画画")),D.a.createElement("div",{className:"header-links"},D.a.createElement(a.a,{to:"/",rel:"home"},"首页"),D.a.createElement(a.a,{to:"/about",rel:"about"},"关于我"))))},N}(D.a.Component),z=t(201);t(214);var c=function(M){var e,t;function N(){return M.apply(this,arguments)||this}return t=M,(e=N).prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t,N.prototype.render=function(){var M=this.props,e=M.location,t=M.children,N="/"===e.pathname;return D.a.createElement("div",{className:"default-layout"},D.a.createElement(I,{location:e}),N&&D.a.createElement(z.a,{hasAvatar:!0}),t,D.a.createElement(g,null))},N}(D.a.Component);e.a=c}}]);
//# sourceMappingURL=component---src-pages-index-js-d7167d86b8e817b87472.js.map