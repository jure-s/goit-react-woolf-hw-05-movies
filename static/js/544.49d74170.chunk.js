"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{146:function(n,t,e){e.d(t,{Z:function(){return h}});var r,a,c,u=e(689),o=e(168),s=e(924),i=e(87),p=e(401),f=s.ZP.ul(r||(r=(0,o.Z)(["\n  list-style-type: none;\n"]))),l=s.ZP.li(a||(a=(0,o.Z)(["\n  font-weight: 600;\n  font-size: 18px;\n  margin-bottom: 10px;\n\n  &:hover {\n    color: #4f46e5;\n  }\n"]))),d=(0,s.ZP)(i.rU)(c||(c=(0,o.Z)(["\n  &:hover::after,\n  &:focus::after {\n    content: '';\n    background-image: ",";\n\n    background-size: cover;\n    width: 400px;\n    height: 560px;\n    display: block;\n    border-radius: 4px;\n    border: 1px solid rgba(43, 134, 197);\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n    position: absolute;\n    top: 20%;\n    left: 50%;\n    z-index: 1;\n    color: #4f46e5;\n  }\n"])),(function(n){return n.cover?"url('https://image.tmdb.org/t/p/w500/".concat(n.cover,"')"):"url(".concat(p,")")})),v=e(184),h=function(n){var t=n.films,e=(0,u.TH)();return(0,v.jsx)(f,{children:t.map((function(n){return(0,v.jsx)(l,{children:(0,v.jsx)(d,{to:"/movies/".concat(n.id),state:{from:e},cover:n.poster_path,children:n.title})},n.id)}))})}},544:function(n,t,e){e.r(t);var r=e(861),a=e(439),c=e(757),u=e.n(c),o=e(791),s=e(146),i=e(575),p=e(258),f=e(184);t.default=function(){var n=(0,o.useState)([]),t=(0,a.Z)(n,2),e=t[0],c=t[1],l=(0,o.useState)(!0),d=(0,a.Z)(l,2),v=d[0],h=d[1];return(0,o.useEffect)((function(){var n=function(){var n=(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,i.Tg)();case 3:t=n.sent,c(t),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:return n.prev=10,h(!1),n.finish(10);case 13:case"end":return n.stop()}}),n,null,[[0,7,10,13]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,f.jsxs)("main",{children:[(0,f.jsx)("h1",{className:"pb-10 mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl",children:"Trending today"}),(0,f.jsx)(s.Z,{films:e}),v&&(0,f.jsx)(p.Z,{})]})}},575:function(n,t,e){e.d(t,{Bt:function(){return l},Ml:function(){return i},Tg:function(){return s},Y5:function(){return p},wL:function(){return f}});var r=e(861),a=e(757),c=e.n(a),u=e(294);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o="992758a4802a699e8df27d4d6efc34fb",s=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/movie/day?api_key=".concat(o));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("search/movie?api_key=".concat(o,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},401:function(n,t,e){n.exports=e.p+"static/media/noImage.766050a83a9c288363de.png"}}]);
//# sourceMappingURL=544.49d74170.chunk.js.map