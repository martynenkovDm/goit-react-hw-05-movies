"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[621],{621:function(r,n,e){e.r(n),e.d(n,{default:function(){return k}});var t,a,u,c,o,s=e(861),i=e(439),p=e(757),f=e.n(p),l=e(791),h=e(689),d=e(818),v=e(168),w=e(444),g=w.ZP.div(t||(t=(0,v.Z)(["\n  display: block;\n"]))),m=w.ZP.ul(a||(a=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n"]))),x=w.ZP.li(u||(u=(0,v.Z)(["\n  border: 1px solid gray;\n  border-radius: 20px;\n  padding-left: 20px;\n  padding-right: 20px;\n  background-color: wheat;\n  transition: background-color 250ms linear;\n  &:hover {\n    background-color: gray;\n    transition: background-color 250ms linear;\n  }\n"]))),Z=w.ZP.h3(c||(c=(0,v.Z)([""]))),y=w.ZP.p(o||(o=(0,v.Z)([""]))),b=e(184);var k=function(){var r=(0,l.useState)(),n=(0,i.Z)(r,2),e=n[0],t=n[1],a=(0,h.UO)();return(0,l.useEffect)((function(){function r(){return(r=(0,s.Z)(f().mark((function r(){var n;return f().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,d.q5)(a.movieId);case 2:n=r.sent,t(n);case 4:case"end":return r.stop()}}),r)})))).apply(this,arguments)}!function(){r.apply(this,arguments)}()}),[a]),(0,b.jsx)(g,{children:(0,b.jsx)(m,{children:e&&0!==e.length?e.map((function(r){return(0,b.jsxs)(x,{children:[(0,b.jsxs)(Z,{children:["Author: ",r.author]}),(0,b.jsx)(y,{children:r.content})]},r.id)})):(0,b.jsx)(Z,{children:"Author: There is no reviews"})})})}},818:function(r,n,e){e.d(n,{Wf:function(){return o},XT:function(){return s},fh:function(){return p},q5:function(){return l},yo:function(){return f}});var t=e(861),a=e(757),u=e.n(a),c=e(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.params={api_key:"7936da9f8864de7ea98146d0f43f51e5",include_adult:!1,language:"en-US"};var o=function(){var r=(0,t.Z)(u().mark((function r(){var n,e,t,a,o=arguments;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=o.length>0&&void 0!==o[0]?o[0]:"",r.prev=1,e=n?"/search/movie?&query=".concat(n):"/movie/upcoming",r.next=5,c.Z.get(e);case 5:return t=r.sent,a=t.data,r.abrupt("return",a.results);case 10:throw r.prev=10,r.t0=r.catch(1),new Error("Oops, there is no movie");case 13:case"end":return r.stop()}}),r,null,[[1,10]])})));return function(){return r.apply(this,arguments)}}();function s(){return i.apply(this,arguments)}function i(){return(i=(0,t.Z)(u().mark((function r(){var n,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,c.Z.get("/trending/movie/day");case 3:return n=r.sent,e=n.data,r.abrupt("return",e.results);case 8:throw r.prev=8,r.t0=r.catch(0),new Error("Oops, there is no movies");case 11:case"end":return r.stop()}}),r,null,[[0,8]])})))).apply(this,arguments)}var p=function(){var r=(0,t.Z)(u().mark((function r(n){var e,t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,c.Z.get("movie/".concat(n));case 3:return e=r.sent,t=e.data,r.abrupt("return",t);case 8:throw r.prev=8,r.t0=r.catch(0),new Error("Oops, there is no cast movie");case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(n){return r.apply(this,arguments)}}(),f=function(){var r=(0,t.Z)(u().mark((function r(n){var e,t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,c.Z.get("movie/".concat(n,"/credits"),{params:{id:n,language:"en-US"}});case 3:return e=r.sent,t=e.data,r.abrupt("return",t.cast);case 8:throw r.prev=8,r.t0=r.catch(0),new Error("Oops, there is no cast movie");case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(n){return r.apply(this,arguments)}}(),l=function(){var r=(0,t.Z)(u().mark((function r(n){var e,t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,c.Z.get("movie/".concat(n,"/reviews"),{params:{id:n,language:"en-US"}});case 3:return e=r.sent,t=e.data,r.abrupt("return",t.results);case 8:throw r.prev=8,r.t0=r.catch(0),new Error("Oops, we don`t have any reviews");case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(n){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=621.ebf2744d.chunk.js.map