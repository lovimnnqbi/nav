import{Ca as X,F as D,Hb as J,Ib as Q,Jb as Y,Ya as Z,_ as U,aa as G,ab as W,bb as q}from"./chunk-5WVW4WOB.js";import{$b as x,Aa as V,Bb as E,Ca as A,Db as m,Dc as H,Ec as O,Fa as B,Jb as l,Kb as g,Lb as u,Mb as j,Nb as $,Sb as b,Ub as h,Vb as N,Wb as y,Xb as r,Yb as s,Zb as f,_b as I,a as T,b as L,ba as R,bc as v,ec as d,gc as p,ha as P,hb as F,l as M,lb as c,ma as k,rd as K,xa as C,xb as w,ya as z}from"./chunk-5TXTCJIY.js";var tt=(e,o)=>({$implicit:e,data:o}),nt=e=>({$implicit:e});function et(e,o){}function it(e,o){if(e&1&&m(0,et,0,0,"ng-template",1),e&2){let t=p();l("ngTemplateOutlet",t.instance.template)("ngTemplateOutletContext",O(2,tt,t,t.instance.options==null?null:t.instance.options.nzData))}}function ot(e,o){e&1&&f(0,"nz-icon",6)}function at(e,o){e&1&&f(0,"nz-icon",7)}function ct(e,o){e&1&&f(0,"nz-icon",8)}function rt(e,o){e&1&&f(0,"nz-icon",9)}function st(e,o){if(e&1&&(I(0),f(1,"div",15),x()),e&2){let t=p(2);c(),l("innerHTML",t.instance.title,F)}}function lt(e,o){if(e&1&&(I(0),f(1,"div",15),x()),e&2){let t=p(2);c(),l("innerHTML",t.instance.content,F)}}function pt(e,o){}function mt(e,o){if(e&1&&(r(0,"span",14),m(1,pt,0,0,"ng-template",1),s()),e&2){let t=p(2);c(),l("ngTemplateOutlet",o)("ngTemplateOutletContext",H(2,nt,t))}}function ft(e,o){if(e&1&&(r(0,"div",2)(1,"div",2)(2,"div"),m(3,ot,1,0,"nz-icon",6)(4,at,1,0,"nz-icon",7)(5,ct,1,0,"nz-icon",8)(6,rt,1,0,"nz-icon",9),r(7,"div",10),m(8,st,2,1,"ng-container",11),s(),r(9,"div",12),m(10,lt,2,1,"ng-container",13),s(),m(11,mt,2,4,"span",14),s()()()),e&2){let t,i,n=p();c(2),u("ant-notification-notice-with-icon",n.instance.type!=="blank"),c(),b((t=n.instance.type)==="success"?3:t==="info"?4:t==="warning"?5:t==="error"?6:-1),c(5),l("nzStringTemplateOutlet",n.instance.title),c(2),l("nzStringTemplateOutlet",n.instance.content)("nzStringTemplateOutletContext",O(7,tt,n,n.instance.options==null?null:n.instance.options.nzData)),c(),b((i=n.instance.options==null?null:n.instance.options.nzButton)?11:-1,i)}}function dt(e,o){if(e&1&&(I(0),f(1,"nz-icon",16),x()),e&2){let t=o.$implicit;c(),l("nzType",t)}}function ut(e,o){if(e&1&&m(0,dt,2,1,"ng-container",11),e&2){let t=p();l("nzStringTemplateOutlet",t.instance.options==null?null:t.instance.options.nzCloseIcon)}}function _t(e,o){e&1&&f(0,"nz-icon",5)}function Ct(e,o){if(e&1){let t=v();r(0,"nz-notification",7),d("destroyed",function(n){C(t);let a=p();return z(a.remove(n.id,n.userAction))}),s()}if(e&2){let t=o.$implicit;l("instance",t)("placement","topLeft")}}function zt(e,o){if(e&1){let t=v();r(0,"nz-notification",7),d("destroyed",function(n){C(t);let a=p();return z(a.remove(n.id,n.userAction))}),s()}if(e&2){let t=o.$implicit;l("instance",t)("placement","topRight")}}function gt(e,o){if(e&1){let t=v();r(0,"nz-notification",7),d("destroyed",function(n){C(t);let a=p();return z(a.remove(n.id,n.userAction))}),s()}if(e&2){let t=o.$implicit;l("instance",t)("placement","bottomLeft")}}function ht(e,o){if(e&1){let t=v();r(0,"nz-notification",7),d("destroyed",function(n){C(t);let a=p();return z(a.remove(n.id,n.userAction))}),s()}if(e&2){let t=o.$implicit;l("instance",t)("placement","bottomRight")}}function Nt(e,o){if(e&1){let t=v();r(0,"nz-notification",7),d("destroyed",function(n){C(t);let a=p();return z(a.remove(n.id,n.userAction))}),s()}if(e&2){let t=o.$implicit;l("instance",t)("placement","top")}}function yt(e,o){if(e&1){let t=v();r(0,"nz-notification",7),d("destroyed",function(n){C(t);let a=p();return z(a.remove(n.id,n.userAction))}),s()}if(e&2){let t=o.$implicit;l("instance",t)("placement","bottom")}}var vt=(()=>{class e extends Y{instance;index;placement;destroyed=new B;ngOnDestroy(){super.ngOnDestroy(),this.instance.onClick.complete()}onClick(t){this.instance.onClick.next(t)}close(){this.destroy(!0)}get state(){if(this.instance.state==="enter")switch(this.placement){case"topLeft":case"bottomLeft":return"enterLeft";case"topRight":case"bottomRight":return"enterRight";case"top":return"enterTop";case"bottom":return"enterBottom";default:return"enterRight"}else return this.instance.state}static \u0275fac=(()=>{let t;return function(n){return(t||(t=V(e)))(n||e)}})();static \u0275cmp=w({type:e,selectors:[["nz-notification"]],inputs:{instance:"instance",index:"index",placement:"placement"},outputs:{destroyed:"destroyed"},exportAs:["nzNotification"],features:[E],decls:7,vars:7,consts:[[1,"ant-notification-notice","ant-notification-notice-closable",3,"click","mouseenter","mouseleave"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"ant-notification-notice-content"],["tabindex","0",1,"ant-notification-notice-close",3,"click"],[1,"ant-notification-notice-close-x"],["nzType","close",1,"ant-notification-close-icon"],["nzType","check-circle",1,"ant-notification-notice-icon","ant-notification-notice-icon-success"],["nzType","info-circle",1,"ant-notification-notice-icon","ant-notification-notice-icon-info"],["nzType","exclamation-circle",1,"ant-notification-notice-icon","ant-notification-notice-icon-warning"],["nzType","close-circle",1,"ant-notification-notice-icon","ant-notification-notice-icon-error"],[1,"ant-notification-notice-message"],[4,"nzStringTemplateOutlet"],[1,"ant-notification-notice-description"],[4,"nzStringTemplateOutlet","nzStringTemplateOutletContext"],[1,"ant-notification-notice-btn"],[3,"innerHTML"],[3,"nzType"]],template:function(i,n){i&1&&(r(0,"div",0),d("@notificationMotion.done",function(_){return n.animationStateChanged.next(_)})("click",function(_){return n.onClick(_)})("mouseenter",function(){return n.onEnter()})("mouseleave",function(){return n.onLeave()}),m(1,it,1,5,null,1)(2,ft,12,10,"div",2),r(3,"a",3),d("click",function(){return n.close()}),r(4,"span",4),m(5,ut,1,1,"ng-container")(6,_t,1,0,"nz-icon",5),s()()()),i&2&&(j((n.instance.options==null?null:n.instance.options.nzStyle)||null),$((n.instance.options==null?null:n.instance.options.nzClass)||""),l("@notificationMotion",n.state),c(),b(n.instance.template?1:2),c(4),b(n.instance.options!=null&&n.instance.options.nzCloseIcon?5:6))},dependencies:[G,U,q,W,K],encapsulation:2,data:{animation:[Z]}})}return e})(),S="notification",Tt={nzTop:"24px",nzBottom:"24px",nzPlacement:"topRight",nzDuration:4500,nzMaxStack:8,nzPauseOnHover:!0,nzAnimate:!0,nzDirection:"ltr"},bt=(()=>{class e extends Q{dir=this.nzConfigService.getConfigForComponent(S)?.nzDirection||"ltr";bottom;top;topLeftInstances=[];topRightInstances=[];bottomLeftInstances=[];bottomRightInstances=[];topInstances=[];bottomInstances=[];constructor(){super(),this.updateConfig()}create(t){let i=this.onCreate(t),n=i.options.nzKey,a=this.instances.find(_=>_.options.nzKey===t.options.nzKey);return n&&a?this.replaceNotification(a,i):(this.instances.length>=this.config.nzMaxStack&&(this.instances=this.instances.slice(1)),this.instances=[...this.instances,i]),this.readyInstances(),i}onCreate(t){return t.options=this.mergeOptions(t.options),t.onClose=new M,t.onClick=new M,t}subscribeConfigChange(){this.nzConfigService.getConfigChangeEventForComponent(S).pipe(R(this.destroy$)).subscribe(()=>{this.updateConfig(),this.dir=this.nzConfigService.getConfigForComponent(S)?.nzDirection||this.dir})}updateConfig(){this.config=T(T(T({},Tt),this.config),this.nzConfigService.getConfigForComponent(S)),this.top=D(this.config.nzTop),this.bottom=D(this.config.nzBottom),this.cdr.markForCheck()}replaceNotification(t,i){t.title=i.title,t.content=i.content,t.template=i.template,t.type=i.type,t.options=i.options}readyInstances(){let t={topLeft:[],topRight:[],bottomLeft:[],bottomRight:[],top:[],bottom:[]};this.instances.forEach(i=>{switch(i.options.nzPlacement){case"topLeft":t.topLeft.unshift(i);break;case"topRight":t.topRight.unshift(i);break;case"bottomLeft":t.bottomLeft.unshift(i);break;case"bottomRight":t.bottomRight.unshift(i);break;case"top":t.top.unshift(i);break;case"bottom":t.bottom.unshift(i);break;default:t.topRight.unshift(i)}}),this.topLeftInstances=t.topLeft,this.topRightInstances=t.topRight,this.bottomLeftInstances=t.bottomLeft,this.bottomRightInstances=t.bottomRight,this.topInstances=t.top,this.bottomInstances=t.bottom,this.cdr.detectChanges()}mergeOptions(t){let{nzDuration:i,nzAnimate:n,nzPauseOnHover:a,nzPlacement:_}=this.config;return T({nzDuration:i,nzAnimate:n,nzPauseOnHover:a,nzPlacement:_},t)}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=w({type:e,selectors:[["nz-notification-container"]],exportAs:["nzNotificationContainer"],features:[E],decls:18,vars:40,consts:[[1,"ant-notification","ant-notification-topLeft"],[3,"instance","placement"],[1,"ant-notification","ant-notification-topRight"],[1,"ant-notification","ant-notification-bottomLeft"],[1,"ant-notification","ant-notification-bottomRight"],[1,"ant-notification","ant-notification-top"],[1,"ant-notification","ant-notification-bottom"],[3,"destroyed","instance","placement"]],template:function(i,n){i&1&&(r(0,"div",0),N(1,Ct,1,2,"nz-notification",1,h),s(),r(3,"div",2),N(4,zt,1,2,"nz-notification",1,h),s(),r(6,"div",3),N(7,gt,1,2,"nz-notification",1,h),s(),r(9,"div",4),N(10,ht,1,2,"nz-notification",1,h),s(),r(12,"div",5),N(13,Nt,1,2,"nz-notification",1,h),s(),r(15,"div",6),N(16,yt,1,2,"nz-notification",1,h),s()),i&2&&(g("top",n.top)("left","0px"),u("ant-notification-rtl",n.dir==="rtl"),c(),y(n.topLeftInstances),c(2),g("top",n.top)("right","0px"),u("ant-notification-rtl",n.dir==="rtl"),c(),y(n.topRightInstances),c(2),g("bottom",n.bottom)("left","0px"),u("ant-notification-rtl",n.dir==="rtl"),c(),y(n.bottomLeftInstances),c(2),g("bottom",n.bottom)("right","0px"),u("ant-notification-rtl",n.dir==="rtl"),c(),y(n.bottomRightInstances),c(2),g("top",n.top)("left","50%")("transform","translateX(-50%)"),u("ant-notification-rtl",n.dir==="rtl"),c(),y(n.topInstances),c(2),g("bottom",n.bottom)("left","50%")("transform","translateX(-50%)"),u("ant-notification-rtl",n.dir==="rtl"),c(),y(n.bottomInstances))},dependencies:[vt],encapsulation:2,changeDetection:0})}return e})();var It=0,Zt=(()=>{class e extends J{componentPrefix="notification-";constructor(t,i){super(t,i)}success(t,i,n){return this.create("success",t,i,n)}error(t,i,n){return this.create("error",t,i,n)}info(t,i,n){return this.create("info",t,i,n)}warning(t,i,n){return this.create("warning",t,i,n)}blank(t,i,n){return this.create("blank",t,i,n)}create(t,i,n,a){return this.createInstance({type:t,title:i,content:n},a)}template(t,i){return this.createInstance({template:t},i)}generateMessageId(){return`${this.componentPrefix}-${It++}`}createInstance(t,i){return this.container=this.withContainer(bt),this.container.create(L(T({},t),{createdAt:new Date,messageId:i?.nzKey||this.generateMessageId(),options:i}))}static \u0275fac=function(i){return new(i||e)(k(X),k(A))};static \u0275prov=P({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();export{Zt as a};
