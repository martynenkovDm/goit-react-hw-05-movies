"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[132],{132:function(n,e,r){r.r(e),r.d(e,{default:function(){return G}});var t,a,o,s,i,c,u,l,p,d,v=r(861),h=r(439),f=r(757),x=r.n(f),m=r(818),g=r(689),w=r(791),Z=r(168),b=r(444),j=r(87),k=b.ZP.h1(t||(t=(0,Z.Z)([""]))),y=b.ZP.h2(a||(a=(0,Z.Z)([""]))),_=b.ZP.p(o||(o=(0,Z.Z)([""]))),P=b.ZP.ul(s||(s=(0,Z.Z)(["\n  list-style: none;\n  display: flex;\n  gap: 20px;\n  padding-left: 0px;\n"]))),O=b.ZP.li(i||(i=(0,Z.Z)([""]))),E=(0,b.ZP)(j.OL)(c||(c=(0,Z.Z)(["\n  display: inline-block;\n  padding: 7px;\n  margin-bottom: 5px;\n  border: 1px solid black;\n  background-color: lightblue;\n  text-decoration: none;\n  border-radius: 10px;\n  color: black;\n  &:hover {\n    color: tomato;\n  }\n"]))),S=b.ZP.button(u||(u=(0,Z.Z)(["\n  display: inline-block;\n  padding: 10px;\n  margin: 10px 0px 10px 10px;\n  border: 1px solid black;\n  background-color: lightblue;\n  text-decoration: none;\n  border-radius: 10px;\n  color: black;\n\n  &:hover {\n    color: tomato;\n  }\n"]))),U=b.ZP.div(l||(l=(0,Z.Z)(["\n  display: flex;\n  flex-direction: row;\n  gap: 15px;\n"]))),C=b.ZP.div(p||(p=(0,Z.Z)(["\n  height: 60vh;\n"]))),L=b.ZP.img(d||(d=(0,Z.Z)(["\n  width: 500px;\n  height: 100%;\n  border-radius: 18px;\n  object-position: center;\n  padding-left: 10px;\n"]))),q=r(184);var G=function(){var n,e,r,t,a=(0,w.useState)([]),o=(0,h.Z)(a,2),s=o[0],i=o[1],c=(0,g.UO)(),u=(0,g.s0)(),l=(0,g.TH)(),p=null!==(n=null===(e=l.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";(0,w.useEffect)((function(){try{var n=function(){var n=(0,v.Z)(x().mark((function n(){var e;return x().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,m.fh)(c.movieId);case 2:e=n.sent,i(e);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}catch(e){console.log(e)}}),[c]);var d=s.poster_path,f=s.title,Z=s.release_date,b=s.vote_average,j=s.overview,G=s.genres;return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(S,{type:"button",onClick:function(){return u(p)},children:"Go-back"}),(0,q.jsxs)(U,{children:[d&&(0,q.jsx)(L,{src:"https://image.tmdb.org/t/p/original".concat(d)}),(0,q.jsxs)(C,{children:[(0,q.jsxs)(k,{children:[s&&f," (",s&&parseInt(Z),")"]}),(0,q.jsxs)(_,{children:["Userscore: ",b&&b]}),(0,q.jsx)(y,{children:"Overview"}),(0,q.jsx)(_,{children:j&&j}),(0,q.jsx)(y,{children:"Genres"}),(0,q.jsx)(_,{children:G&&G.map((function(n){return n.name})).join(" & ")}),(0,q.jsxs)(C,{children:[(0,q.jsx)(y,{children:"See more"}),(0,q.jsxs)(P,{children:[(0,q.jsx)(O,{children:(0,q.jsx)(E,{to:"cast",state:{from:null===(r=l.state)||void 0===r?void 0:r.from},children:"Cast"})}),(0,q.jsx)(O,{children:(0,q.jsx)(E,{to:"reviews",state:{from:null===(t=l.state)||void 0===t?void 0:t.from},children:"Reviews"})})]})]})]})]}),(0,q.jsx)(w.Suspense,{fallback:(0,q.jsx)("div",{children:"Loading..."}),children:(0,q.jsx)(g.j3,{})})]})}},818:function(n,e,r){r.d(e,{Wf:function(){return i},XT:function(){return c},fh:function(){return l},q5:function(){return d},yo:function(){return p}});var t=r(861),a=r(757),o=r.n(a),s=r(243);s.Z.defaults.baseURL="https://api.themoviedb.org/3",s.Z.defaults.params={api_key:"7936da9f8864de7ea98146d0f43f51e5",include_adult:!1,language:"en-US"};var i=function(){var n=(0,t.Z)(o().mark((function n(){var e,r,t,a,i=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=i.length>0&&void 0!==i[0]?i[0]:"",n.prev=1,r=e?"/search/movie?&query=".concat(e):"/movie/upcoming",n.next=5,s.Z.get(r);case 5:return t=n.sent,a=t.data,n.abrupt("return",a.results);case 10:throw n.prev=10,n.t0=n.catch(1),new Error("Oops, there is no movie");case 13:case"end":return n.stop()}}),n,null,[[1,10]])})));return function(){return n.apply(this,arguments)}}();function c(){return u.apply(this,arguments)}function u(){return(u=(0,t.Z)(o().mark((function n(){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.get("/trending/movie/day");case 3:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 8:throw n.prev=8,n.t0=n.catch(0),new Error("Oops, there is no movies");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}var l=function(){var n=(0,t.Z)(o().mark((function n(e){var r,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.get("movie/".concat(e));case 3:return r=n.sent,t=r.data,n.abrupt("return",t);case 8:throw n.prev=8,n.t0=n.catch(0),new Error("Oops, there is no cast movie");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(o().mark((function n(e){var r,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.get("movie/".concat(e,"/credits"),{params:{id:e,language:"en-US"}});case 3:return r=n.sent,t=r.data,n.abrupt("return",t.cast);case 8:throw n.prev=8,n.t0=n.catch(0),new Error("Oops, there is no cast movie");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(o().mark((function n(e){var r,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.get("movie/".concat(e,"/reviews"),{params:{id:e,language:"en-US"}});case 3:return r=n.sent,t=r.data,n.abrupt("return",t.results);case 8:throw n.prev=8,n.t0=n.catch(0),new Error("Oops, we don`t have any reviews");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=132.8535fe9f.chunk.js.map