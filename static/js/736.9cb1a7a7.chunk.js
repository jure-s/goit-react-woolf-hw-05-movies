"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[736],{736:function(t,e,n){n.r(e),n.d(e,{default:function(){return w}});var r,a,c=n(861),u=n(439),s=n(757),i=n.n(s),o=n(689),p=n(791),f=n(575),l=n(258),d=n(168),h=n(924),v=h.ZP.ul(r||(r=(0,d.Z)(["\n  list-style-type: none;\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  margin-bottom: 20px;\n"]))),m=h.ZP.p(a||(a=(0,d.Z)(["\n  font-weight: 600;\n  font-size: 18px;\n  margin-bottom: 10px;\n"]))),g=n(401),x=n(184),w=function(){var t=(0,o.UO)().movieId,e=(0,p.useState)([]),n=(0,u.Z)(e,2),r=n[0],a=n[1],s=(0,p.useState)(!0),d=(0,u.Z)(s,2),h=d[0],w=d[1];return(0,p.useEffect)((function(){var e=function(){var e=(0,c.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,w(!0),e.next=4,(0,f.wL)(t);case 4:n=e.sent,a(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:return e.prev=11,w(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]),(0,x.jsxs)("div",{children:[h&&(0,x.jsx)(l.Z,{}),(0,x.jsx)("h2",{className:"text-2xl pb-4 font-bold pt-4",children:"Movie Cast"}),(0,x.jsx)(v,{children:r.map((function(t){var e=t.id,n=t.profile_path,r=t.original_name,a=t.name,c=t.character;return(0,x.jsxs)("li",{children:[(0,x.jsx)("img",{width:"200px",height:"300px",src:n?"https://image.tmdb.org/t/p/w500".concat(n):"".concat(g),alt:r}),(0,x.jsx)(m,{children:a}),(0,x.jsxs)(m,{children:["Character: ",c]})]},e)}))})]})}},575:function(t,e,n){n.d(e,{Bt:function(){return l},Ml:function(){return o},Tg:function(){return i},Y5:function(){return p},wL:function(){return f}});var r=n(861),a=n(757),c=n.n(a),u=n(294);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="992758a4802a699e8df27d4d6efc34fb",i=function(){var t=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("trending/movie/day?api_key=".concat(s));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("search/movie?api_key=".concat(s,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(e,"?api_key=").concat(s,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(e,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},401:function(t,e,n){t.exports=n.p+"static/media/noImage.766050a83a9c288363de.png"}}]);
//# sourceMappingURL=736.9cb1a7a7.chunk.js.map