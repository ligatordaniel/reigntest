(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"jR+n":function(n,l,t){"use strict";t.r(l);var o=t("8Y7J");class e{}var i=t("pMnS"),r=t("SVse"),u=t("pxmp"),a=t("aTpZ"),s=t("iInd"),c=t("mrSG");class p{constructor(n){this.storage=n,this.allFavoriteNews=[],this.showMessageNoFavorites=!0}ngOnInit(){return c.a(this,void 0,void 0,(function*(){this.getFavoritesNews()}))}getFavoritesNews(){return c.a(this,void 0,void 0,(function*(){let n=yield this.storage.get("favorites");if(n=JSON.parse(n),0!==n.length&&n)return n.length>0||n?(this.allFavoriteNews=n,void(this.showMessageNoFavorites=!1)):void 0;this.showMessageNoFavorites=!0}))}deleteFavorite(n){return c.a(this,void 0,void 0,(function*(){let l=this.allFavoriteNews,t=l.findIndex(l=>l.objectID===n.objectID);l.splice(t,1),yield this.storage.set("favorites",JSON.stringify(l)),this.getFavoritesNews()}))}goToUrl(n){window.open(n,"_blank")}}var g=t("sZT+"),d=o.lb({encapsulation:0,styles:[[".AllContainer[_ngcontent-%COMP%]{background-color:#fff;min-height:100%}.dropDownPosition[_ngcontent-%COMP%]{margin:63px 114px 1px 150px}@media only screen and (max-width:600px){.dropDownPosition[_ngcontent-%COMP%]{margin:20px}}.dropbtn[_ngcontent-%COMP%]{background-color:#fff;color:#343434;font-size:12px;cursor:pointer;width:240px;height:32px;text-align:left;border-radius:5px;border:1px solid #2e2e2e}.svgPosition[_ngcontent-%COMP%]{float:right}.dropdown[_ngcontent-%COMP%]{position:relative;display:inline-block;border-radius:5px;background-color:#fff}.dropSpan[_ngcontent-%COMP%]{font-size:14px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.57;letter-spacing:normal;color:#343434;margin-left:10px}.dropdown-content[_ngcontent-%COMP%]{display:none;position:absolute;background-color:#f9f9f9;min-width:160px;box-shadow:0 4px 8px 0 rgba(0,0,0,.2);z-index:1;width:240px}.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000;padding:12px 16px;text-decoration:none;display:block}.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#f1f1f1}.dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%]{display:block}.dropdown[_ngcontent-%COMP%]:hover   .dropbtn[_ngcontent-%COMP%]{background-color:#fff}.grid-responsive[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:2rem;padding:25px 150px}@media only screen and (max-width:1000px){.grid-responsive[_ngcontent-%COMP%]{grid-template-columns:1fr;padding:15px 100px}}@media only screen and (max-width:650px){.grid-responsive[_ngcontent-%COMP%]{grid-template-columns:1fr;padding:15px}}.gridBox[_ngcontent-%COMP%]{border-radius:6px;border:1px solid #979797}.gridBox[_ngcontent-%COMP%]:hover{box-shadow:2px 2px 5px #999}.sub-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:85% 15%}.logoTime[_ngcontent-%COMP%]{margin-left:20px}span[_ngcontent-%COMP%]{font-size:11px;font-weight:400;font-stretch:normal;font-style:normal;line-height:normal;letter-spacing:normal;color:#767676;margin:20px 20px 20px 2px}.mainText[_ngcontent-%COMP%]{margin:20px;font-family:Roboto;font-size:12px;font-weight:500;font-stretch:normal;font-style:normal;line-height:1.43;letter-spacing:.25px;color:#6b6b6b}.heartBox[_ngcontent-%COMP%]{background-color:#f5f5f5;display:flex;justify-content:center;align-items:center;border-radius:0 10% 10% 0}.loadingStyle[_ngcontent-%COMP%]{position:absolute;top:50%;left:47%}.noFavorites[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-top:70px}.noFavorites[_ngcontent-%COMP%]   .noFavoritesText[_ngcontent-%COMP%]{font-family:Roboto;font-size:16px;font-stretch:normal;font-style:normal;line-height:1.75;letter-spacing:normal;text-align:center;color:#606060;font-weight:500}"]],data:{}});function f(n){return o.Cb(0,[(n()(),o.nb(0,0,null,null,2,"div",[["class","noFavorites"]],null,null,null,null,null)),(n()(),o.nb(1,0,null,null,1,"p",[["class","noFavoritesText"]],null,null,null,null,null)),(n()(),o.Ab(-1,null,[" You have no faves... "]))],null,null)}function b(n){return o.Cb(0,[(n()(),o.nb(0,0,null,null,11,"div",[["class","gridBox"]],null,null,null,null,null)),(n()(),o.nb(1,0,null,null,10,"div",[["class","sub-grid"]],null,null,null,null,null)),(n()(),o.nb(2,0,null,null,6,"div",[],null,[[null,"click"]],(function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.goToUrl(n.context.$implicit.story_url)&&o),o}),null,null)),(n()(),o.nb(3,0,null,null,0,"img",[["alt","iconWatch"],["class","logoTime"],["src","../../../../../assets/logos/iconWatch.png"]],null,null,null,null,null)),(n()(),o.nb(4,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),o.Ab(5,null,[" ",""])),(n()(),o.nb(6,0,null,null,2,"p",[["class","mainText"]],null,null,null,null,null)),(n()(),o.Ab(7,null,[""," "])),o.yb(0,r.n,[]),(n()(),o.nb(9,0,null,null,2,"div",[["class","heartBox"]],null,null,null,null,null)),(n()(),o.nb(10,0,null,null,1,"div",[["class","heart"]],null,null,null,null,null)),(n()(),o.nb(11,0,null,null,0,"img",[["alt","heartLogo"],["src","../../../../../assets/logos/redheart.png"]],null,[[null,"click"]],(function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.deleteFavorite(n.context.$implicit)&&o),o}),null,null))],null,(function(n,l){n(l,5,0,l.context.$implicit.created_at),n(l,7,0,o.Bb(l,7,0,o.xb(l,8).transform(l.context.$implicit.story_title,0,50)))}))}function x(n){return o.Cb(0,[(n()(),o.nb(0,0,null,null,2,"div",[["class","grid-responsive"]],null,null,null,null,null)),(n()(),o.cb(16777216,null,null,1,null,b)),o.mb(2,278528,null,0,r.h,[o.L,o.I,o.q],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){n(l,2,0,l.component.allFavoriteNews)}),null)}function h(n){return o.Cb(0,[(n()(),o.nb(0,0,null,null,6,"div",[["class","AllContainer"]],null,null,null,null,null)),(n()(),o.nb(1,0,null,null,1,"app-options-buttons",[],null,null,null,u.b,u.a)),o.mb(2,114688,null,0,a.a,[s.k],null,null),(n()(),o.cb(16777216,null,null,1,null,f)),o.mb(4,16384,null,0,r.i,[o.L,o.I],{ngIf:[0,"ngIf"]},null),(n()(),o.cb(16777216,null,null,1,null,x)),o.mb(6,16384,null,0,r.i,[o.L,o.I],{ngIf:[0,"ngIf"]},null)],(function(n,l){var t=l.component;n(l,2,0),n(l,4,0,t.showMessageNoFavorites),n(l,6,0,t.allFavoriteNews)}),null)}function m(n){return o.Cb(0,[(n()(),o.nb(0,0,null,null,1,"app-favorites",[],null,null,null,h,d)),o.mb(1,114688,null,0,p,[g.a],null,null)],(function(n,l){n(l,1,0)}),null)}var v=o.jb("app-favorites",p,m,{},{},[]);class w{}var C=t("PCNd");t.d(l,"PagesModuleNgFactory",(function(){return M}));var M=o.kb(e,[],(function(n){return o.vb([o.wb(512,o.j,o.V,[[8,[i.a,v]],[3,o.j],o.v]),o.wb(4608,r.k,r.j,[o.s,[2,r.r]]),o.wb(1073742336,r.b,r.b,[]),o.wb(1073742336,s.l,s.l,[[2,s.q],[2,s.k]]),o.wb(1073742336,w,w,[]),o.wb(1073742336,C.a,C.a,[]),o.wb(1073742336,e,e,[]),o.wb(1024,s.i,(function(){return[[{path:"",component:p}]]}),[])])}))}}]);