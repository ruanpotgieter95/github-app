(this["webpackJsonpgithub-app"]=this["webpackJsonpgithub-app"]||[]).push([[0],{106:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){},204:function(e,t,a){},205:function(e,t,a){},206:function(e,t,a){},207:function(e,t,a){},208:function(e,t,a){},209:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),l=a(10),o=a(2),i=function(){return r.a.createElement(l.a,null,r.a.createElement(o.d,null,r.a.createElement(p,{exact:!0,path:"/login"},r.a.createElement(x,null)),r.a.createElement(m,{exact:!0,path:"/repositories"},r.a.createElement(O,null),r.a.createElement(L,null,r.a.createElement(I,null),r.a.createElement(z,null),r.a.createElement(z,null),r.a.createElement(z,null))),r.a.createElement(m,{exact:!0,path:"/repositories/:search"},r.a.createElement(O,null),r.a.createElement(L,null,r.a.createElement(I,null),r.a.createElement(A,null))),r.a.createElement(m,{exact:!0,path:"/repo/:comp/:proj/issues/:filter"},r.a.createElement(O,null),r.a.createElement(G,null)),r.a.createElement(o.a,{to:"/repositories"})))},u=a(30),s=a(3),m=function(e){var t=e.children,a=Object(u.a)(e,["children"]),n=Object(s.d)((function(e){return e.auth.isAuthenticated})),c=Object(o.h)(),l=c.pathname,i=c.search;return r.a.createElement(o.b,a,n?t:r.a.createElement(o.a,{to:"/login?redirect=".concat(l).concat(i)}))},p=function(e){var t=e.children,a=Object(u.a)(e,["children"]),n=Object(s.d)((function(e){return e.auth.isAuthenticated})),c=Object(o.h)();return r.a.createElement(o.b,a,n?r.a.createElement(o.a,{to:"".concat(c.search.split("=")[1])}):t)},d=function(){return r.a.createElement(i,null)},E=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{type:"LOGIN",isFetching:e,isAuthenticated:t}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{type:"SET_REPOSITORY_LIST",list:e}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return{type:"REPOSITORY_LOADING",loading:e}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{type:"SET_REPOSITORY_ISSUES",issues:e}},b=a(28),g=a.n(b),O=(a(86),function(){var e=Object(s.c)(),t=Object(o.g)();return r.a.createElement("nav",null,r.a.createElement("div",null,r.a.createElement("img",{src:g.a,alt:""}),r.a.createElement("span",{className:"hover button",onClick:function(){return t.push("/repositories")}},"Repositories")),r.a.createElement("span",{className:"hover",onClick:function(){return e(E(!1,!1))}},"Logout"))}),j=(a(87),function(e){var t=e.children,a=e.onClick;return r.a.createElement("div",{className:"card",onClick:a},t)}),_=(a(88),function(e){var t=e.imgURL,a=e.onClick;return r.a.createElement("img",{className:"avatar hover",src:t,alt:"",onClick:a})}),y=a(29),S=a(73),N=a.n(S),w=a(19),k=a.n(w),C=a(46),T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return function(){var t=Object(C.a)(k.a.mark((function t(a){var n;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(h(!0)),t.prev=1,t.next=4,R.get("/search/repositories?q=".concat(e));case 4:n=t.sent,a(f(n.data)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.error("An error occured",t.t0);case 11:a(h(!1));case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},R=N.a.create({baseURL:"https://api.github.com/",timeout:1e4}),I=(a(106),function(){var e=Object(s.c)(),t=Object(o.g)(),a=Object(o.i)().search,c=Object(n.useState)(a||""),l=Object(y.a)(c,2),i=l[0],u=l[1];return r.a.createElement("form",{className:"searchBar",onSubmit:function(a){a.preventDefault(),e(T(i)),t.push("/repositories/".concat(i))}},r.a.createElement("input",{placeholder:"search repositories",value:i,onChange:function(e){var t=e.target;return u(t.value)}}),r.a.createElement("button",{type:"submit"},"Search"))}),L=(a(107),function(e){var t=e.children;return r.a.createElement("div",{className:"page"},t)}),x=(a(108),function(){var e=Object(s.c)();return r.a.createElement("div",{className:"login"},r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e(E(!1,!0))}},r.a.createElement("img",{src:g.a,alt:""}),r.a.createElement("h3",null,"Login"),r.a.createElement("sub",null,"Only used to show private/public routes"),r.a.createElement("sub",null,"Type a fake email and password"),r.a.createElement("input",{type:"email",required:!0,placeholder:"email"}),r.a.createElement("input",{type:"password",required:!0,placeholder:"password"}),r.a.createElement("button",null,"Login")))}),A=(a(109),function(){var e=Object(s.c)(),t=Object(o.i)().search,a=Object(s.d)((function(e){return{repositoryList:e.repository.list.items,repositoryTotal:e.repository.list.total_count,loading:e.repository.loading}}),s.b),c=a.repositoryList,l=a.loading,i=a.repositoryTotal;return Object(n.useEffect)((function(){e(T(t))}),[]),r.a.createElement("div",{className:"repository_list"},!l&&r.a.createElement("h2",null,"Found ",i," results"),l&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Loading..."),r.a.createElement(z,null),r.a.createElement(z,null),r.a.createElement(z,null)),!l&&0===c.length&&r.a.createElement("h3",null,"No Results found"),!l&&c.map((function(e){return r.a.createElement(P,{key:e.node_id,repository:e})})))}),Y=a(42),U=a.n(Y),F=function(e){return U()(e).format("DD MMM YYYY HH:mm")},P=(a(110),function(e){var t=e.repository,a=Object(o.g)(),c=Object(n.useState)(!1),l=Object(y.a)(c,2),i=l[0],u=l[1],s=t.full_name.split("/"),m=s[0],p=s[1];return r.a.createElement(j,null,r.a.createElement("div",{className:"repository_card"},r.a.createElement("header",{className:"header"},r.a.createElement(_,{imgURL:t.owner.avatar_url,onClick:function(){return window.open(t.html_url)}}),r.a.createElement("div",null,r.a.createElement("h3",null,t.name),r.a.createElement("sub",null,t.full_name)),r.a.createElement("button",{onClick:function(){return a.push("/repo/".concat(m,"/").concat(p,"/issues/all"))}},"Issues")),r.a.createElement("main",null,r.a.createElement("span",null,"Created: ",F(t.date_created)),r.a.createElement("p",null,t.description)),r.a.createElement("footer",{className:"hover",onClick:function(){return u(!i)}},!i&&r.a.createElement("span",null,"Show more"),i&&r.a.createElement(H,{details:t}))))}),D=a(74),q=(a(204),{title:{display:!0,text:"Current Issues",fontSize:20},legend:{display:!0,position:"top"},maintainAspectRatio:!1}),G=function(){var e=Object(s.c)(),t=Object(o.i)(),a=t.comp,c=t.proj,l=t.filter,i=Object(s.d)((function(e){return e.repository.issues})),u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=e.length,a=0,n=0;return e.forEach((function(e){"open"===e.state?a+=1:"closed"===e.state&&(n+=1)})),{total:t,openTotal:a,closeTotal:n}}(i),m={labels:["Open","Closed"],datasets:[{label:"Issues",data:[u.openTotal,u.closeTotal],backgroundColor:["#3bde00","#b21f00"],borderColor:"#ffffff"}]};return Object(n.useEffect)((function(){e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"all";return function(){var n=Object(C.a)(k.a.mark((function n(r){var c;return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(h(!0)),n.prev=1,n.next=4,R.get("/repos/".concat(e,"/").concat(t,"/issues?state=").concat(a));case 4:c=n.sent,r(v(c.data)),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),console.error("An error occured",n.t0);case 11:r(h(!1));case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}()}(a,c,l))}),[a,c,l,e]),r.a.createElement("div",{className:"repository_issues"},r.a.createElement(M,null),r.a.createElement("h3",null,'"',l,'" Repository issues for ',a,"/",c),r.a.createElement("sub",null,"Total: ",u.total,"  Open: ",u.openTotal," Closed: ",u.closeTotal),r.a.createElement("div",{className:"pie"},r.a.createElement(D.Pie,{data:m,options:q,width:400,height:400})),i.map((function(e){return r.a.createElement(J,{key:e.node_id,issue:e})})))},J=(a(205),function(e){var t=e.issue;return r.a.createElement(j,null,r.a.createElement("div",{className:"repository_issue_card_header"},r.a.createElement(_,{imgURL:t.user.avatar_url,onClick:function(){return window.open(t.user.html_url)}}),r.a.createElement("div",{className:"title"},r.a.createElement("span",null,"State: ",t.state),r.a.createElement("sub",null,t.title)),r.a.createElement("button",{className:"hover",onClick:function(){return window.open(t.html_url)}},"View")),r.a.createElement("div",{className:"repository_issue_card_footer"},r.a.createElement("div",{className:"dates"},r.a.createElement("span",null,"Created: ",F(t.created_at)),r.a.createElement("span",null,"Updated: ",F(t.updated_at)),t.closed_at&&r.a.createElement("span",null,"Closed: ",F(t.closed_at))),r.a.createElement("span",null,"Comments: ",t.comments)))}),z=function(){return r.a.createElement(j,null)},M=(a(206),function(){var e=Object(o.g)(),t=Object(o.i)(),a=t.comp,n=t.proj,c=t.filter,l=function(t){e.push("/repo/".concat(a,"/").concat(n,"/issues/").concat(t))};return r.a.createElement("div",{className:"issue_filters"},r.a.createElement("button",{className:"".concat("all"===c&&"button_active"),value:"all",onClick:function(e){var t=e.target;return l(t.value)}},"All"),r.a.createElement("button",{className:"".concat("open"===c&&"button_active"),value:"open",onClick:function(e){var t=e.target;return l(t.value)}},"Open"),r.a.createElement("button",{className:"".concat("closed"===c&&"button_active"),value:"closed",onClick:function(e){var t=e.target;return l(t.value)}},"Closed"))}),H=(a(207),function(e){var t=e.details;return r.a.createElement("div",{className:"repository_show_more"},r.a.createElement("div",null,r.a.createElement("span",null,"Forks: ",t.forks),r.a.createElement("span",null,"Language: ",t.language)),r.a.createElement("div",null,r.a.createElement("span",null,"Stargazers: ",t.stargazers_count),r.a.createElement("span",null,"Watchers: ",t.watchers)),r.a.createElement("span",null,"URL: ",t.url))}),B=a(8),V=a(15),W=a(75),K={isFetching:!1,isAuthenticated:!1},Q={list:{items:[],total_count:0},issues:[],loading:!1},X=Object(V.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return Object(B.a)(Object(B.a)({},e),{},{isFetching:t.isFetching,isAuthenticated:t.isAuthenticated});default:return e}},repository:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_REPOSITORY_LIST":return Object(B.a)(Object(B.a)({},e),{},{list:t.list});case"REPOSITORY_LOADING":return Object(B.a)(Object(B.a)({},e),{},{loading:t.loading});case"SET_REPOSITORY_ISSUES":return Object(B.a)(Object(B.a)({},e),{},{issues:t.issues});default:return e}}}),Z=function(e){var t=e.children,a=e.initialState,n=void 0===a?function(){try{var e=window.sessionStorage.getItem("state");return null===e?{}:JSON.parse(e)}catch(t){return console.warn(t),{}}}():a,c=Object(V.d)(X,n,Object(V.a)(W.a));return c.subscribe((function(){return function(e){try{var t=JSON.stringify(e);sessionStorage.setItem("state",t)}catch(a){console.warn(a)}}(Object(B.a)({},c.getState().auth.isAuthenticated&&{auth:c.getState().auth,repository:c.getState().repository}))})),r.a.createElement(s.a,{store:c},t)};a(208);Object(c.render)(r.a.createElement(Z,null,r.a.createElement(d,null)),document.querySelector("#root"))},28:function(e,t,a){e.exports=a.p+"static/media/Octocat.0ba2aa20.png"},76:function(e,t,a){e.exports=a(209)},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){}},[[76,1,2]]]);
//# sourceMappingURL=main.88772f04.chunk.js.map