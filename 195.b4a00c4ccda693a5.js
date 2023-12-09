"use strict";(self.webpackChunkyoutube_client_app=self.webpackChunkyoutube_client_app||[]).push([[195],{2195:(D,u,o)=>{o.r(u),o.d(u,{YoutubeModule:()=>B});var l=o(8474),a=o(6926),c=o(5372),d=o(5477),r=o(9525),b=o(8254),x=o(8870),C=o(6405),t=o(6732),m=o(2083);const p=864e5;let h=(()=>{class i{constructor(s,n){this.elementRef=s,this.renderer=n,this.appColoredBorder=""}ngOnInit(){this.setColor()}getColor(){const s=new Date,n=new Date(this.appColoredBorder).getTime(),e=s.getTime()-n;return e>180*p?"red":e>30*p?"yellow":e>7*p?"green":"blue"}setColor(){this.renderer.setStyle(this.elementRef.nativeElement,"border-bottom",`5px solid ${this.getColor()}`)}static#t=this.\u0275fac=function(n){return new(n||i)(t.Y36(t.SBq),t.Y36(t.Qsj))};static#e=this.\u0275dir=t.lG2({type:i,selectors:[["","appColoredBorder",""]],inputs:{appColoredBorder:"appColoredBorder"}})}return i})(),Z=(()=>{class i{constructor(s,n){this.route=s,this.youtubeService=n,this.destroy$=new b.x}ngOnInit(){this.route.params.pipe((0,x.R)(this.destroy$),(0,C.w)(s=>{const n=s.id;return n?this.youtubeService.getVideos(n):[]})).subscribe(([s])=>{this.selectedVideo=s})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}static#t=this.\u0275fac=function(n){return new(n||i)(t.Y36(r.gz),t.Y36(m.j))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-detailed-information-page"]],decls:39,vars:12,consts:[[1,"video-card"],["routerLink","/youtube","src","assets/back_button.svg","alt","back",1,"back-btn"],[1,"search-item"],[1,"video"],[3,"src","alt"],[1,"right-side",3,"appColoredBorder"],[1,"right-side-header"],[1,"title"],[1,"date"],[1,"right-side-body"],[1,"desc-title"],[1,"desc-text"],[1,"right-side-statistics"],[1,"stats-bar"],[1,"stats-bar-item"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0),t._UZ(1,"img",1),t.TgZ(2,"div",2)(3,"div",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"div",5)(6,"div",6)(7,"div",7),t._uU(8),t.qZA(),t.TgZ(9,"div",8),t._uU(10),t.ALo(11,"date"),t.qZA()(),t.TgZ(12,"div",9)(13,"div",10),t._uU(14,"Description:"),t.qZA(),t.TgZ(15,"div",11),t._uU(16),t.qZA()(),t.TgZ(17,"div",12)(18,"div",13)(19,"div",14)(20,"mat-icon"),t._uU(21,"visibility"),t.qZA(),t.TgZ(22,"span"),t._uU(23),t.qZA()(),t.TgZ(24,"div",14)(25,"mat-icon"),t._uU(26,"thumb_up"),t.qZA(),t.TgZ(27,"span"),t._uU(28),t.qZA()(),t.TgZ(29,"div",14)(30,"mat-icon"),t._uU(31,"thumb_down"),t.qZA(),t.TgZ(32,"span"),t._uU(33,"-"),t.qZA()(),t.TgZ(34,"div",14)(35,"mat-icon"),t._uU(36,"forum"),t.qZA(),t.TgZ(37,"span"),t._uU(38),t.qZA()()()()()()()),2&n&&(t.xp6(4),t.Q6J("src",null==e.selectedVideo||null==e.selectedVideo.snippet||null==e.selectedVideo.snippet.thumbnails||null==e.selectedVideo.snippet.thumbnails.medium?null:e.selectedVideo.snippet.thumbnails.medium.url,t.LSH)("alt",null==e.selectedVideo||null==e.selectedVideo.snippet?null:e.selectedVideo.snippet.title),t.xp6(1),t.Q6J("appColoredBorder",(null==e.selectedVideo||null==e.selectedVideo.snippet?null:e.selectedVideo.snippet.publishedAt)||""),t.xp6(3),t.Oqu(null==e.selectedVideo||null==e.selectedVideo.snippet?null:e.selectedVideo.snippet.title),t.xp6(2),t.hij(" ",t.xi3(11,9,null==e.selectedVideo||null==e.selectedVideo.snippet?null:e.selectedVideo.snippet.publishedAt,"fullDate")," "),t.xp6(6),t.Oqu(null==e.selectedVideo||null==e.selectedVideo.snippet?null:e.selectedVideo.snippet.description),t.xp6(7),t.Oqu(null==e.selectedVideo||null==e.selectedVideo.statistics?null:e.selectedVideo.statistics.viewCount),t.xp6(5),t.Oqu(null==e.selectedVideo||null==e.selectedVideo.statistics?null:e.selectedVideo.statistics.likeCount),t.xp6(10),t.Oqu(null==e.selectedVideo||null==e.selectedVideo.statistics?null:e.selectedVideo.statistics.commentCount))},dependencies:[c.Hw,r.rH,h,l.uU],styles:[".video-card[_ngcontent-%COMP%]{width:1200px;height:461px;margin:45px auto 0;display:flex}.search-item[_ngcontent-%COMP%]{display:flex;width:max-content;filter:drop-shadow(5px 10px 10px rgba(47,128,237,.25))}.video[_ngcontent-%COMP%]{display:flex;width:729px;height:461px}.video[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto;flex-shrink:0;border-radius:0 0 0 5px;background:lightgray 50%/cover no-repeat;box-shadow:5px 10px 20px #33333340}.stats-bar[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding-left:50px;padding-right:50px}.stats-bar-item[_ngcontent-%COMP%]{display:flex;align-items:center;color:#000;font-family:Roboto;font-size:10px;font-style:normal;font-weight:400;line-height:normal}.title[_ngcontent-%COMP%]{color:#000;font-family:Roboto;font-size:24px;font-style:normal;font-weight:700;line-height:normal}.date[_ngcontent-%COMP%]{color:#828282;text-align:right;font-family:Roboto;font-size:10px;font-style:normal;font-weight:400;line-height:normal}.right-side[_ngcontent-%COMP%]{width:436px;height:461px;display:flex;flex-shrink:0;flex-direction:column;justify-content:space-between;padding:30px;border-radius:0 5px 5px 0;background:#e5e5e5;box-shadow:5px 5px 20px #33333340}.right-side-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.back-btn[_ngcontent-%COMP%]{width:32px;height:32px;filter:drop-shadow(-2px 2px 4px rgba(47,128,237,.25));cursor:pointer}.desc-title[_ngcontent-%COMP%]{color:#000;font-family:Roboto;font-size:14px;font-style:normal;font-weight:400;line-height:normal}.desc-text[_ngcontent-%COMP%]{max-width:365px;max-height:280px;color:#828282;font-family:Roboto;font-size:12px;font-style:normal;font-weight:400;line-height:normal;overflow:auto;text-overflow:ellipsis}"]})}return i})();var w=o(4569),T=o(4312);let O=(()=>{class i{static#t=this.\u0275fac=function(n){return new(n||i)};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-search-item"]],inputs:{item:"item"},decls:28,vars:8,consts:[[1,"search-item",3,"appColoredBorder"],[1,"search-item__content"],[3,"src","alt"],[1,"stats-bar"],[1,"stats-bar-item"],[1,"title"],["classNames","more-button",3,"routerLink"]],template:function(n,e){1&n&&(t.TgZ(0,"mat-card",0)(1,"mat-card-content",1),t._UZ(2,"img",2),t.TgZ(3,"div",3)(4,"div",4)(5,"mat-icon"),t._uU(6,"visibility"),t.qZA(),t.TgZ(7,"span"),t._uU(8),t.qZA()(),t.TgZ(9,"div",4)(10,"mat-icon"),t._uU(11,"thumb_up"),t.qZA(),t.TgZ(12,"span"),t._uU(13),t.qZA()(),t.TgZ(14,"div",4)(15,"mat-icon"),t._uU(16,"thumb_down"),t.qZA(),t.TgZ(17,"span"),t._uU(18,"-"),t.qZA()(),t.TgZ(19,"div",4)(20,"mat-icon"),t._uU(21,"forum"),t.qZA(),t.TgZ(22,"span"),t._uU(23),t.qZA()()(),t.TgZ(24,"p",5),t._uU(25),t.qZA(),t.TgZ(26,"app-custom-button",6),t._uU(27,"more..."),t.qZA()()()),2&n&&(t.Q6J("appColoredBorder",e.item.snippet.publishedAt),t.xp6(2),t.Q6J("src",e.item.snippet.thumbnails.medium.url,t.LSH)("alt",e.item.snippet.title),t.xp6(6),t.Oqu(e.item.statistics.viewCount),t.xp6(5),t.Oqu(e.item.statistics.likeCount),t.xp6(10),t.Oqu(e.item.statistics.commentCount),t.xp6(2),t.Oqu(e.item.snippet.title),t.xp6(1),t.Q6J("routerLink",e.item.id))},dependencies:[c.Hw,a.a8,a.dn,d.x,r.rH,h],styles:[".search-item[_ngcontent-%COMP%]{width:300px;height:400px;filter:drop-shadow(2px 2px 4px rgba(0,0,0,.25))}.search-item__content[_ngcontent-%COMP%]{height:100%;padding-top:20px;display:flex;flex-direction:column;align-items:center;justify-content:space-between}img[_ngcontent-%COMP%]{width:100%}.stats-bar[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between;align-items:center;padding:20px 0}.stats-bar-item[_ngcontent-%COMP%]{color:#000;font-family:Roboto;font-size:14px;font-style:normal;font-weight:400;line-height:normal}.title[_ngcontent-%COMP%]{margin:0;font-weight:700;font-size:20px;line-height:23px;text-align:right;color:#4f4f4f}"]})}return i})();function A(i,g){1&i&&t._UZ(0,"app-search-item",2),2&i&&t.Q6J("item",g.$implicit)}let V=(()=>{class i{static#t=this.\u0275fac=function(n){return new(n||i)};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-search-results"]],inputs:{items:"items"},decls:2,vars:1,consts:[[1,"search-results","container"],[3,"item",4,"ngFor","ngForOf"],[3,"item"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0),t.YNc(1,A,1,1,"app-search-item",1),t.qZA()),2&n&&(t.xp6(1),t.Q6J("ngForOf",e.items))},dependencies:[l.sg,O],styles:[".search-results[_ngcontent-%COMP%]{display:flex;justify-content:center;flex-wrap:wrap;gap:29px;padding-top:30px}"]})}return i})(),_=(()=>{class i{transform(s,n){return n?s.filter(e=>e.snippet.title.toLowerCase().includes(n.toLowerCase())):s}static#t=this.\u0275fac=function(n){return new(n||i)};static#e=this.\u0275pipe=t.Yjl({name:"textFilter",type:i,pure:!0})}return i})(),M=(()=>{class i{transform(s,n){return s&&n?[...s].sort((I,R)=>{const f="asc"===n.direction?1:-1,y=this.getValueToSortBy(I,n.active),v=this.getValueToSortBy(R,n.active);return y<v?-1*f:y>v?1*f:0}):s}getValueToSortBy(s,n){switch(n){case"date":return new Date(s.snippet.publishedAt);case"views":return parseInt(s.statistics.viewCount,10);default:return s}}static#t=this.\u0275fac=function(n){return new(n||i)};static#e=this.\u0275pipe=t.Yjl({name:"sortSearchResults",type:i,pure:!0})}return i})();const P=function(){return[]};function S(i,g){if(1&i&&(t._UZ(0,"app-search-results",1),t.ALo(1,"sortSearchResults"),t.ALo(2,"textFilter")),2&i){const s=t.oxw();t.Q6J("items",t.xi3(1,1,t.xi3(2,4,s.searchItems||t.DdM(7,P),s.filteringService.filterWord),s.sortingService.sortOptions))}}const U=[{path:"",component:(()=>{class i{constructor(s,n,e){this.youtubeService=s,this.filteringService=n,this.sortingService=e}ngOnInit(){this.subscription=this.youtubeService.videos$.subscribe(s=>{this.searchItems=s})}ngOnDestroy(){this.subscription?.unsubscribe()}static#t=this.\u0275fac=function(n){return new(n||i)(t.Y36(m.j),t.Y36(w.T),t.Y36(T.$))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-main-page"]],decls:1,vars:1,consts:[[3,"items",4,"ngIf"],[3,"items"]],template:function(n,e){1&n&&t.YNc(0,S,3,8,"app-search-results",0),2&n&&t.Q6J("ngIf",e.youtubeService.showResults)},dependencies:[l.O5,V,_,M]})}return i})()},{path:":id",component:Z}];let q=(()=>{class i{static#t=this.\u0275fac=function(n){return new(n||i)};static#e=this.\u0275mod=t.oAB({type:i});static#i=this.\u0275inj=t.cJS({imports:[r.Bz.forChild(U),r.Bz]})}return i})(),B=(()=>{class i{static#t=this.\u0275fac=function(n){return new(n||i)};static#e=this.\u0275mod=t.oAB({type:i});static#i=this.\u0275inj=t.cJS({imports:[l.ez,c.Ps,a.QW,d.x,q]})}return i})()}}]);