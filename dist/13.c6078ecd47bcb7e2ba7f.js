(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{RovT:function(n,t,e){"use strict";e.r(t);var l=e("CcnG"),o=function(){},i=e("pMnS"),a=e("ZYCi"),u=function(){function n(){}return n.prototype.ngOnInit=function(){},n}(),r=l["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function s(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),l["\u0275did"](1,212992,null,0,a.p,[a.b,l.ViewContainerRef,l.ComponentFactoryResolver,[8,null],l.ChangeDetectorRef],null,null)],function(n,t){n(t,1,0)},null)}var c=l["\u0275ccf"]("app-bienvenida-signup2",u,function(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"app-bienvenida-signup2",[],null,null,null,s,r)),l["\u0275did"](1,114688,null,0,u,[],null,null)],function(n,t){n(t,1,0)},null)},{},{},[]),d=e("gIcY"),g=e("PDPh"),p=function(){function n(n){this.sacarSecion=n}return n.prototype.ngOnInit=function(){var n=this;this.ObservableModal.subscribe(function(t){n.NombreUser=t.nombreCompleto.nombres+" "+t.nombreCompleto.apellidos,n.ClavePublica=t.keys.ClavePublica,n.Usuario=t.correo,n.DireccionCuenta=t.direccion,$("#myModalUserInfo").modal({backdrop:"static",keyboard:!1}),$("#myModalUserInfo").modal("show")})},n.prototype.llevarALogin=function(){$("#myModalUserInfo").modal("hide"),this.sacarSecion.cierreDeSecion()},n.prototype.onSubmit=function(){},n}(),m=l["\u0275crt"]({encapsulation:0,styles:[["h2[_ngcontent-%COMP%]{font-size:1.5em;font-weight:700;color:#fff;line-height:1.2;font-family:'Roboto Condensed',sans-serif}h3[_ngcontent-%COMP%], h3.interno[_ngcontent-%COMP%]{font-size:1.1em;color:#fff;font-family:'Roboto Condensed',sans-serif}p[_ngcontent-%COMP%]{width:80%;text-align:center;color:#000;font-weight:700;font-size:1rem;margin:17px auto 0}p.interno[_ngcontent-%COMP%]{font-size:1rem;color:#000;width:100%;margin-bottom:20px;margin-top:13px;text-align:justify;font-family:'Roboto Condensed',sans-serif}input.interno[_ngcontent-%COMP%]{background:0 0;border:none;font-size:1rem;color:#000;width:100%;font-weight:700;margin-bottom:20px;margin-top:13px;text-align:justify;font-family:'Roboto Condensed',sans-serif;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.modal-header[_ngcontent-%COMP%]{background:#ff23c4;background:linear-gradient(to bottom,#ff23c4 0,#ad0157 100%);filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff23c4', endColorstr='#ad0157', GradientType=0 );border-bottom-left-radius:3rem;border-top-right-radius:3rem;border:none;flex-direction:column;padding-left:30px}.modal-content[_ngcontent-%COMP%]{border-top-right-radius:3rem;border-bottom-left-radius:3rem;background:#f71fb9;background:linear-gradient(135deg,#f71fb9 0,#fff 100%);filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#f71fb9', endColorstr='#ffffff', GradientType=1 )}.modal-body[_ngcontent-%COMP%]{box-sizing:content-box;margin:25px;background:#45484d;box-shadow:10px 10px 10px}@media (min-width:576px){.modal-dialog[_ngcontent-%COMP%]{max-width:80%;margin:1.75rem auto}}"]],data:{animation:[{type:7,name:"routerTransition",definitions:[{type:0,name:"void",styles:{type:6,styles:{},offset:null},options:void 0},{type:0,name:"*",styles:{type:6,styles:{},offset:null},options:void 0},{type:1,expr:":enter",animation:[{type:6,styles:{transform:"translateY(100%)"},offset:null},{type:4,styles:{type:6,styles:{transform:"translateY(0%)"},offset:null},timings:"0.5s ease-in-out"}],options:null},{type:1,expr:":leave",animation:[{type:6,styles:{transform:"translateY(0%)"},offset:null},{type:4,styles:{type:6,styles:{transform:"translateY(-100%)"},offset:null},timings:"0.5s ease-in-out"}],options:null}],options:{}}]}});function f(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,48,"div",[["aria-hidden","true"],["aria-labelledby","exampleModalCenterTitle"],["class","modal fade"],["id","myModalUserInfo"],["role","dialog"],["tabindex","-1"]],null,null,null,null,null)),(n()(),l["\u0275eld"](1,0,null,null,47,"div",[["class","modal-dialog modal-dialog-centered modal-lg"],["role","document"]],null,null,null,null,null)),(n()(),l["\u0275eld"](2,0,null,null,46,"div",[["class","modal-content"]],null,null,null,null,null)),(n()(),l["\u0275eld"](3,0,null,null,4,"div",[["class","modal-header"]],null,null,null,null,null)),(n()(),l["\u0275eld"](4,0,null,null,1,"h2",[["class","modal-title"],["id","exampleModalCenterTitle"]],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["Felicidades Cuenta Creada"])),(n()(),l["\u0275eld"](6,0,null,null,1,"h3",[["class","modal-subtitle"]],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["A continuaci\xf3n aparece la informaci\xf3n de su cuenta"])),(n()(),l["\u0275eld"](8,0,null,null,3,"div",[["class","container"]],null,null,null,null,null)),(n()(),l["\u0275eld"](9,0,null,null,2,"div",[["class","row"]],null,null,null,null,null)),(n()(),l["\u0275eld"](10,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["Recuerde respaldar esta informacion y guardarla en un lugar seguro, en el futuro en caso de necesitar recuperar su cuenta, esta informacion podria serle necesaria "])),(n()(),l["\u0275eld"](12,0,null,null,32,"div",[["class","modal-body"]],null,null,null,null,null)),(n()(),l["\u0275eld"](13,0,null,null,31,"div",[["class","container-fluid"]],null,null,null,null,null)),(n()(),l["\u0275eld"](14,0,null,null,30,"div",[["class","row align-items-center"]],null,null,null,null,null)),(n()(),l["\u0275eld"](15,0,null,null,14,"div",[["class","col-12 col-md-6"]],null,null,null,null,null)),(n()(),l["\u0275eld"](16,0,null,null,1,"h3",[["class","interno"]],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["Direccion de su carter de Tiempo:"])),(n()(),l["\u0275eld"](18,0,null,null,7,"input",[["class","interno text"],["name","DireccionCuenta"],["placeholder","Apellido"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,t,e){var o=!0,i=n.component;return"input"===t&&(o=!1!==l["\u0275nov"](n,19)._handleInput(e.target.value)&&o),"blur"===t&&(o=!1!==l["\u0275nov"](n,19).onTouched()&&o),"compositionstart"===t&&(o=!1!==l["\u0275nov"](n,19)._compositionStart()&&o),"compositionend"===t&&(o=!1!==l["\u0275nov"](n,19)._compositionEnd(e.target.value)&&o),"ngModelChange"===t&&(o=!1!==(i.DireccionCuenta=e)&&o),o},null,null)),l["\u0275did"](19,16384,null,0,d.e,[l.Renderer2,l.ElementRef,[2,d.a]],null,null),l["\u0275did"](20,16384,null,0,d.s,[],{required:[0,"required"]},null),l["\u0275prd"](1024,null,d.j,function(n){return[n]},[d.s]),l["\u0275prd"](1024,null,d.k,function(n){return[n]},[d.e]),l["\u0275did"](23,671744,null,0,d.p,[[8,null],[6,d.j],[8,null],[6,d.k]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),l["\u0275prd"](2048,null,d.l,null,[d.p]),l["\u0275did"](25,16384,null,0,d.m,[[4,d.l]],null,null),(n()(),l["\u0275eld"](26,0,null,null,1,"h3",[["class","interno"]],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["Due\xf1o de la Cuenta"])),(n()(),l["\u0275eld"](28,0,null,null,1,"p",[["class","interno"]],null,null,null,null,null)),(n()(),l["\u0275ted"](29,null,["",""])),(n()(),l["\u0275eld"](30,0,null,null,14,"div",[["class","col-12  col-md-6"]],null,null,null,null,null)),(n()(),l["\u0275eld"](31,0,null,null,1,"h3",[["class","interno"]],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["Usuario de Login"])),(n()(),l["\u0275eld"](33,0,null,null,1,"p",[["class","interno"]],null,null,null,null,null)),(n()(),l["\u0275ted"](34,null,["",""])),(n()(),l["\u0275eld"](35,0,null,null,1,"h3",[["class","interno"]],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["Clave p\xfablica de Creaci\xf3n de cuenta:"])),(n()(),l["\u0275eld"](37,0,null,null,7,"input",[["class","interno text"],["name","DireccionCuenta"],["placeholder","Apellido"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,t,e){var o=!0,i=n.component;return"input"===t&&(o=!1!==l["\u0275nov"](n,38)._handleInput(e.target.value)&&o),"blur"===t&&(o=!1!==l["\u0275nov"](n,38).onTouched()&&o),"compositionstart"===t&&(o=!1!==l["\u0275nov"](n,38)._compositionStart()&&o),"compositionend"===t&&(o=!1!==l["\u0275nov"](n,38)._compositionEnd(e.target.value)&&o),"ngModelChange"===t&&(o=!1!==(i.ClavePublica=e)&&o),o},null,null)),l["\u0275did"](38,16384,null,0,d.e,[l.Renderer2,l.ElementRef,[2,d.a]],null,null),l["\u0275did"](39,16384,null,0,d.s,[],{required:[0,"required"]},null),l["\u0275prd"](1024,null,d.j,function(n){return[n]},[d.s]),l["\u0275prd"](1024,null,d.k,function(n){return[n]},[d.e]),l["\u0275did"](42,671744,null,0,d.p,[[8,null],[6,d.j],[8,null],[6,d.k]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),l["\u0275prd"](2048,null,d.l,null,[d.p]),l["\u0275did"](44,16384,null,0,d.m,[[4,d.l]],null,null),(n()(),l["\u0275eld"](45,0,null,null,3,"div",[["class","container-fluid"]],null,null,null,null,null)),(n()(),l["\u0275eld"](46,0,null,null,2,"div",[["class","row"],["style","padding-bottom: 14px; justify-content: center;"]],null,null,null,null,null)),(n()(),l["\u0275eld"](47,0,null,null,1,"button",[["class","btn btn-success worldButtom"],["type","button"]],null,[[null,"click"]],function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.llevarALogin()&&l),l},null,null)),(n()(),l["\u0275ted"](-1,null,["Continuar"]))],function(n,t){var e=t.component;n(t,20,0,""),n(t,23,0,"DireccionCuenta",e.DireccionCuenta),n(t,39,0,""),n(t,42,0,"DireccionCuenta",e.ClavePublica)},function(n,t){var e=t.component;n(t,18,0,l["\u0275nov"](t,20).required?"":null,l["\u0275nov"](t,25).ngClassUntouched,l["\u0275nov"](t,25).ngClassTouched,l["\u0275nov"](t,25).ngClassPristine,l["\u0275nov"](t,25).ngClassDirty,l["\u0275nov"](t,25).ngClassValid,l["\u0275nov"](t,25).ngClassInvalid,l["\u0275nov"](t,25).ngClassPending),n(t,29,0,e.NombreUser),n(t,34,0,e.Usuario),n(t,37,0,l["\u0275nov"](t,39).required?"":null,l["\u0275nov"](t,44).ngClassUntouched,l["\u0275nov"](t,44).ngClassTouched,l["\u0275nov"](t,44).ngClassPristine,l["\u0275nov"](t,44).ngClassDirty,l["\u0275nov"](t,44).ngClassValid,l["\u0275nov"](t,44).ngClassInvalid,l["\u0275nov"](t,44).ngClassPending)})}var C=e("dXYL"),M=e("K9Ia"),O=function(){function n(n){this.UserData=n,this.enviador=new M.a}return n.prototype.ngOnInit=function(){this.DataUserRegistro=this.UserData.returnDataUser(),this.EnvioDataUserRegistro=this.enviador.asObservable()},n.prototype.EnvioDataUser=function(){this.enviador.next(this.DataUserRegistro)},n.prototype.onSubmit=function(){},n}(),P=l["\u0275crt"]({encapsulation:0,styles:[["a[_ngcontent-%COMP%], abbr[_ngcontent-%COMP%], acronym[_ngcontent-%COMP%], address[_ngcontent-%COMP%], applet[_ngcontent-%COMP%], article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], b[_ngcontent-%COMP%], big[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], body[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], caption[_ngcontent-%COMP%], cite[_ngcontent-%COMP%], code[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], del[_ngcontent-%COMP%], details[_ngcontent-%COMP%], dfn[_ngcontent-%COMP%], div[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dt[_ngcontent-%COMP%], em[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], form[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], html[_ngcontent-%COMP%], i[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], img[_ngcontent-%COMP%], ins[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], label[_ngcontent-%COMP%], legend[_ngcontent-%COMP%], mark[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], object[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], output[_ngcontent-%COMP%], p[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], q[_ngcontent-%COMP%], ruby[_ngcontent-%COMP%], s[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], section[_ngcontent-%COMP%], small[_ngcontent-%COMP%], span[_ngcontent-%COMP%], strike[_ngcontent-%COMP%], strong[_ngcontent-%COMP%], sub[_ngcontent-%COMP%], summary[_ngcontent-%COMP%], sup[_ngcontent-%COMP%], table[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%], td[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%], th[_ngcontent-%COMP%], thead[_ngcontent-%COMP%], time[_ngcontent-%COMP%], tr[_ngcontent-%COMP%], tt[_ngcontent-%COMP%], u[_ngcontent-%COMP%], var[_ngcontent-%COMP%], video[_ngcontent-%COMP%]{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], details[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], section[_ngcontent-%COMP%]{display:block}ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0}blockquote[_ngcontent-%COMP%], q[_ngcontent-%COMP%]{quotes:none}blockquote[_ngcontent-%COMP%]:after, blockquote[_ngcontent-%COMP%]:before, q[_ngcontent-%COMP%]:after, q[_ngcontent-%COMP%]:before{content:'';content:none}table[_ngcontent-%COMP%]{border-collapse:collapse;border-spacing:0}a[_ngcontent-%COMP%]{text-decoration:none}.txt-rt[_ngcontent-%COMP%]{text-align:right}.txt-lt[_ngcontent-%COMP%]{text-align:left}.txt-center[_ngcontent-%COMP%]{text-align:center}.float-rt[_ngcontent-%COMP%]{float:right}.float-lt[_ngcontent-%COMP%]{float:left}.clear[_ngcontent-%COMP%]{clear:both}.pos-relative[_ngcontent-%COMP%]{position:relative}.pos-absolute[_ngcontent-%COMP%]{position:absolute}.vertical-base[_ngcontent-%COMP%]{vertical-align:baseline}.vertical-top[_ngcontent-%COMP%]{vertical-align:top}nav.vertical[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:block}nav.horizontal[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block}img[_ngcontent-%COMP%]{max-width:100%}a[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-weight:700}h1[_ngcontent-%COMP%]{font-size:3em;text-align:center;color:#fff;font-weight:600;text-transform:capitalize;letter-spacing:4px;font-family:'Roboto Condensed',sans-serif}h2[_ngcontent-%COMP%]{font-size:1.5em;text-align:center;color:#fff;font-weight:100;letter-spacing:4px;font-family:'Roboto Condensed',sans-serif}h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1.1em;background:linear-gradient(to bottom,rgba(125,126,125,0) 0,rgba(125,126,125,.08) 8%,#aa2e7f 100%);filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#007d7e7d', endColorstr='#aa2e7f', GradientType=0 );-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-family:'Roboto Condensed',sans-serif}.main-w3layouts[_ngcontent-%COMP%]{padding:0;display:flex;justify-content:center;align-items:center}.main-w3layouts2[_ngcontent-%COMP%]{padding:4em 0 1em;overflow-y:scroll}.contenerdorVertical[_ngcontent-%COMP%]{width:100%}.main-agileinfo[_ngcontent-%COMP%]{margin:3em auto;background:rgba(0,0,0,.12);background-size:cover}.agileits-top[_ngcontent-%COMP%]{padding:3em}input[type=email][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%], input[type=text][_ngcontent-%COMP%]{font-size:.9em;font-weight:100;width:100%;display:block;border:1px solid rgba(255,255,255,.37);padding:.8em;margin-bottom:1.5px;margin-top:1.5em;transition:.3s cubic-bezier(.64,.09,.08,1);background:linear-gradient(to bottom,rgba(255,255,255,0) 96%,#fff 4%);background-position:-800px 0;background-size:100%;background-repeat:no-repeat;color:#fff;font-family:'Roboto Condensed',sans-serif}input.email[_ngcontent-%COMP%], input.text.w3lpass[_ngcontent-%COMP%]{margin:2em 0}.text[_ngcontent-%COMP%]:focus, .text[_ngcontent-%COMP%]:valid{box-shadow:none;outline:0;background-position:0 0}.text[_ngcontent-%COMP%]:focus::-webkit-input-placeholder, .text[_ngcontent-%COMP%]:valid::-webkit-input-placeholder{color:rgba(255,255,255,.7);font-size:.9em;-webkit-transform:translateY(-30px);transform:translateY(-30px);visibility:visible!important}[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#fff;font-weight:100}[_ngcontent-%COMP%]:-moz-placeholder{color:#fff}[_ngcontent-%COMP%]::-moz-placeholder{color:#fff}[_ngcontent-%COMP%]:-ms-input-placeholder{color:#fff}input[type=submit][_ngcontent-%COMP%]{font-size:.9em;color:#fff;background:#ef5e7a;outline:0;border:1px solid #ef5e7a;cursor:pointer;padding:.9em;-webkit-appearance:none;width:100%;margin:2em 0;letter-spacing:4px}input[type=submit][_ngcontent-%COMP%]:hover{box-shadow:0 -1px 3px 0 rgba(0,0,0,.58);transition:.5s;background:0 0}.agileits-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1em;color:#fff;text-align:center;letter-spacing:1px;font-weight:300}.agileits-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;transition:.5s;font-weight:400}.agileits-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#ff6262}.wthree-text[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:.9em;color:#fff;font-weight:200;cursor:pointer;position:relative}input.checkbox[_ngcontent-%COMP%]{background:#b34677;cursor:pointer;width:1.2em;height:1.2em}input.checkbox[_ngcontent-%COMP%]:before{content:\"\";position:absolute;width:1.2em;height:1.2em;background:inherit;cursor:pointer}input.checkbox[_ngcontent-%COMP%]:after{content:\"\";position:absolute;top:0;left:0;z-index:1;width:1.2em;height:1.2em;border:1px solid #fff;transition:.4s ease-in-out}input.checkbox[_ngcontent-%COMP%]:checked:after{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);height:.5rem;border-color:transparent transparent #fff #fff}.anim[_ngcontent-%COMP%]   input.checkbox[_ngcontent-%COMP%]:checked:after{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);height:.5rem;border-color:transparent;-webkit-animation:.4s .4s forwards rippling;animation:.4s .4s forwards rippling}@-webkit-keyframes rippling{50%{border-left-color:#fff}100%{border-bottom-color:#fff;border-left-color:#fff}}@keyframes rippling{50%{border-left-color:#fff}100%{border-bottom-color:#fff;border-left-color:#fff}}.w3copyright-agile[_ngcontent-%COMP%]{margin:2em 0 1em;text-align:center}.w3copyright-agile[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.9em;color:#fff;line-height:1.8em;letter-spacing:1px;font-weight:100}.w3copyright-agile[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;transition:.5s;-webkit-transition:.5s;-moz-transition:.5s;-o-transition:.5s;-ms-transition:.5s all}.w3copyright-agile[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#000}.wrapper[_ngcontent-%COMP%]{position:relative;overflow:hidden}.wrapper2[_ngcontent-%COMP%]{position:relative;overflow-x:hidden;overflow-y:scroll}.w3lsg-bubbles[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;z-index:-1}.w3lsg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{position:absolute;list-style:none;display:block;width:40px;height:40px;background-color:rgba(255,255,255,.15);bottom:-160px;-webkit-animation:20s infinite square;animation:20s infinite square;transition-timing-function:linear;border-radius:50%}.w3lsg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1){left:10%}.w3lsg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2){left:20%;width:80px;height:80px;-webkit-animation-delay:2s;animation-delay:2s;-webkit-animation-duration:17s;animation-duration:17s}.w3lsg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3){left:25%;-webkit-animation-delay:4s;animation-delay:4s}.w3lsg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4){left:40%;width:60px;height:60px;-webkit-animation-duration:22s;animation-duration:22s;background-color:rgba(255,255,255,.25)}.w3lsg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(5){left:70%}.w3lsg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(6){left:80%;width:120px;height:120px;-webkit-animation-delay:3s;animation-delay:3s;background-color:rgba(255,255,255,.2)}.w3lsg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(7){left:32%;width:160px;height:160px;-webkit-animation-delay:7s;animation-delay:7s}.w3lsg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(8){left:55%;width:20px;height:20px;-webkit-animation-delay:15s;animation-delay:15s;-webkit-animation-duration:40s;animation-duration:40s}.w3lsg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(9){left:25%;width:10px;height:10px;-webkit-animation-delay:2s;animation-delay:2s;-webkit-animation-duration:40s;animation-duration:40s;background-color:rgba(255,255,255,.3)}.w3lsg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(10){left:90%;width:160px;height:160px;-webkit-animation-delay:11s;animation-delay:11s}@-webkit-keyframes square{0%{-webkit-transform:translateY(0);transform:translateY(0)}100%{-webkit-transform:translateY(-700px) rotate(600deg);transform:translateY(-700px) rotate(600deg)}}@keyframes square{0%{-webkit-transform:translateY(0);transform:translateY(0)}100%{-webkit-transform:translateY(-700px) rotate(600deg);transform:translateY(-700px) rotate(600deg)}}@media (max-width:1440px){input[type=email][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%], input[type=text][_ngcontent-%COMP%]{width:100%}}@media (max-width:1366px){h1[_ngcontent-%COMP%]{font-size:2.6em}.agileits-top[_ngcontent-%COMP%]{padding:2.5em}.main-agileinfo[_ngcontent-%COMP%]{margin:2em auto;width:36%}}@media (max-width:1280px){.main-agileinfo[_ngcontent-%COMP%]{width:40%}}@media (max-width:1080px){.main-agileinfo[_ngcontent-%COMP%]{width:46%}}@media (max-width:1024px){.main-agileinfo[_ngcontent-%COMP%]{width:49%}}@media (max-width:991px){h1[_ngcontent-%COMP%]{font-size:2.4em}.main-w3layouts[_ngcontent-%COMP%]{padding:6em 0 1em;overflow-y:scroll}.main-w3layouts2[_ngcontent-%COMP%]{padding:3em 0 1em;overflow-y:scroll}}@media (max-width:900px){.main-agileinfo[_ngcontent-%COMP%]{width:58%}input[type=email][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%], input[type=text][_ngcontent-%COMP%]{width:100%}}@media (max-width:800px){h1[_ngcontent-%COMP%]{font-size:2.2em}}@media (max-width:736px){.main-agileinfo[_ngcontent-%COMP%]{width:62%}}@media (max-width:667px){.main-agileinfo[_ngcontent-%COMP%]{width:67%}}@media (max-width:600px){.agileits-top[_ngcontent-%COMP%]{padding:2.2em}input.email[_ngcontent-%COMP%], input.text.w3lpass[_ngcontent-%COMP%]{margin:1.5em 0}input[type=submit][_ngcontent-%COMP%]{margin:2em 0}h1[_ngcontent-%COMP%]{font-size:2em;letter-spacing:3px}}@media (max-width:568px){.main-agileinfo[_ngcontent-%COMP%]{width:75%}.w3copyright-agile[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding:0 2em}}@media (max-width:480px){h1[_ngcontent-%COMP%]{font-size:1.8em;letter-spacing:3px}.agileits-top[_ngcontent-%COMP%]{padding:1.8em}input[type=email][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%], input[type=text][_ngcontent-%COMP%]{width:100%}.agileits-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.9em}}@media (max-width:414px){h1[_ngcontent-%COMP%]{font-size:1.8em;letter-spacing:2px}.main-agileinfo[_ngcontent-%COMP%]{width:85%;margin:1.5em auto}.text[_ngcontent-%COMP%]:focus, .text[_ngcontent-%COMP%]:valid{background-position:0 0}.wthree-text[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .wthree-text[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2){display:block;float:none}.wthree-text[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2){margin-top:1.5em}input[type=submit][_ngcontent-%COMP%]{margin:2em 0 1.5em;letter-spacing:3px}.w3copyright-agile[_ngcontent-%COMP%]{margin:1em 0}}@media (max-width:384px){.main-agileinfo[_ngcontent-%COMP%]{width:88%}.w3copyright-agile[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding:0 1em}}@media (max-width:375px){.agileits-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{letter-spacing:0}}@media (max-width:320px){.agileits-top[_ngcontent-%COMP%]{padding:1.2em}.w3copyright-agile[_ngcontent-%COMP%]{margin:0 0 1em}input[type=email][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%], input[type=text][_ngcontent-%COMP%]{width:100%;font-size:.85em}h1[_ngcontent-%COMP%]{font-size:1.7em;letter-spacing:0}.main-agileinfo[_ngcontent-%COMP%]{width:92%;margin:1em auto}.text[_ngcontent-%COMP%]:focus, .text[_ngcontent-%COMP%]:valid{background-position:0 0}input[type=submit][_ngcontent-%COMP%]{margin:1.5em 0;padding:.8em;font-size:.85em}.w3copyright-agile[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .wthree-text[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:.85em}.main-w3layouts[_ngcontent-%COMP%], .main-w3layouts2[_ngcontent-%COMP%]{padding:1em 0 0;overflow-y:scroll}}.main-agileinfo[_ngcontent-%COMP%]{width:80%}@media (max-width:1366px){.main-agileinfo[_ngcontent-%COMP%]{width:70%}}@media (max-width:1280px){.main-agileinfo[_ngcontent-%COMP%]{width:70%}}@media (max-width:1080px){.main-agileinfo[_ngcontent-%COMP%]{width:70%}}@media (max-width:1024px){.main-agileinfo[_ngcontent-%COMP%]{width:80%}}@media (max-width:991px){.main-agileinfo[_ngcontent-%COMP%]{width:80%}}@media (max-width:900px){.main-agileinfo[_ngcontent-%COMP%]{width:80%}}@media (max-width:736px){.main-agileinfo[_ngcontent-%COMP%]{width:80%}}@media (max-width:667px){.main-agileinfo[_ngcontent-%COMP%]{width:80%}}@media (max-width:568px){.main-agileinfo[_ngcontent-%COMP%]{width:80%}}p.interno[_ngcontent-%COMP%]{font-size:1rem;color:#000;width:100%;margin-bottom:10px;margin-top:13px;text-align:justify;font-family:'Roboto Condensed',sans-serif}p.interno2[_ngcontent-%COMP%]{font-size:1rem;color:#000;width:85%;text-indent:10%;font-family:'Roboto Condensed',sans-serif;margin:13px auto 10px}p.interno2[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{font-size:1.2rem;color:#000;font-weight:700}"]],data:{animation:[{type:7,name:"routerTransition",definitions:[{type:0,name:"void",styles:{type:6,styles:{},offset:null},options:void 0},{type:0,name:"*",styles:{type:6,styles:{},offset:null},options:void 0},{type:1,expr:":enter",animation:[{type:6,styles:{transform:"translateY(100%)"},offset:null},{type:4,styles:{type:6,styles:{transform:"translateY(0%)"},offset:null},timings:"0.5s ease-in-out"}],options:null},{type:1,expr:":leave",animation:[{type:6,styles:{transform:"translateY(0%)"},offset:null},{type:4,styles:{type:6,styles:{transform:"translateY(-100%)"},offset:null},timings:"0.5s ease-in-out"}],options:null}],options:{}}]}});function _(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,47,"div",[["class","main-w3layouts2 wrapper2 login-page"]],null,null,null,null,null)),(n()(),l["\u0275eld"](1,0,null,null,3,"h1",[],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["World"])),(n()(),l["\u0275eld"](3,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["ON"])),(n()(),l["\u0275eld"](5,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["Lea esto Atentamente"])),(n()(),l["\u0275eld"](7,0,null,null,24,"div",[["class","main-agileinfo"]],[[24,"@routerTransition",0]],null,null,null,null)),(n()(),l["\u0275eld"](8,0,null,null,23,"div",[["class","agileits-top"]],null,null,null,null,null)),(n()(),l["\u0275eld"](9,0,null,null,22,"div",[["class","container-fluid"]],null,null,null,null,null)),(n()(),l["\u0275eld"](10,0,null,null,18,"div",[["class","row"]],null,null,null,null,null)),(n()(),l["\u0275eld"](11,0,null,null,1,"p",[["class","interno"]],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,[" La informacion que se le provee en esta seccion es con el objetivo de que pueda entender mejor cuales son las posibilidades y maneras de uso actuales y futuras de su cuenta WorlOn y as\xed como de la Direccion de Monedero Tiempo que acaba de ser crear y asosiada permanentemente su cuenta WorlOn. "])),(n()(),l["\u0275eld"](13,0,null,null,3,"p",[["class","interno2 text-justify"]],null,null,null,null,null)),(n()(),l["\u0275eld"](14,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["\xbb "])),(n()(),l["\u0275ted"](-1,null,['Recuerde que por medio de esta via usted puede adquirir cantidades de nuestra criptomoneda "Tiempo", lo ideal es que acumule todo la cantidad de "Tiempo" que pueda ya que en el momento en que el Juego entre en actividad, este "Tiempo" almacenado pasara a representar directamente su estatus y rango dentro del Juego, y por supuesto a mayor rango mayores Beneficios. '])),(n()(),l["\u0275eld"](17,0,null,null,3,"p",[["class","interno2 text-justify"]],null,null,null,null,null)),(n()(),l["\u0275eld"](18,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["\xbb "])),(n()(),l["\u0275ted"](-1,null,['En cualquier momento usted puede hacer uso de su Tiempo acumulado desde el mismo momento en que lo adquiera y transferirlo o cambiarlo con cualquier otro usuario de la plataforma, y ademas enviar su tiempo en forma de "tiempoCash" a cualquir casa de cambio de cripto divisas externa en cualquier momento (solo tenga presenta que el mecanismo automatico de cambion de "tiempo" a "tiempoCash" sera activado solo cuando el juego entre en actividad). '])),(n()(),l["\u0275eld"](21,0,null,null,3,"p",[["class","interno2 text-justify"]],null,null,null,null,null)),(n()(),l["\u0275eld"](22,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["\xbb "])),(n()(),l["\u0275ted"](-1,null,['Tiene que tener presente que si envia "Tiempo" a algun usuario o casa de cambio externa, este sera descontado de su ranking total, y eso puede repercutir de manera moderada en su reputacion dentro de la plataforma. En el caso de transferir "tiempo" a alguna cuenta externa perteneciente a una casa de cambio, esta se transformara automaticamente en "TiempoCash" que es el token externo para propocito de traeding de nuestra plataforma, dicho activo fluctuara segun la demanda del mercado, pero el activo "TIEMPO" que es nuestro activo interno para la monetizacion dentro de la plataforma, siempre poseera un valor estable y equivalente a 20 USD por "hora" de "Tiempo", al momento de transferir "Tiempo" a un mercado de traeding, se realizara automaticamente la convercion de "Tiempo" a su equivalente de "TiempoCash" segun sea su precio en el mercado en ese momento. '])),(n()(),l["\u0275eld"](25,0,null,null,3,"p",[["class","interno2 text-justify"]],null,null,null,null,null)),(n()(),l["\u0275eld"](26,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["\xbb "])),(n()(),l["\u0275ted"](-1,null,["Usted puede realizar todas sus transaciones dentro de la plataforma sin costa alguno ni cobro de comiciones por esta razon, por lo menos en esta fase inicial del proyecto, hemos tenido que limitar la cantidad de transacciones posibles por dia a 5 transacciones por dia esto debido a que al ser una plataforma gratis de transferencia para el usuaro, no significa que lo sea tambien para nosotros los que creamos y mantenenos la plataforma, y es por esta razon que debemos mantenerla lo mejor posible sin exedernos para que todos puedan disfrutar por igual, pero tranquilo esto solo sera en un comienzo, mientrar mas crescamos mas beneficios habra para nuestros usuarios. "])),(n()(),l["\u0275eld"](29,0,null,null,2,"div",[["class","row"],["style","margin-top: 20px; padding-bottom: 14px; justify-content: center;"]],null,null,null,null,null)),(n()(),l["\u0275eld"](30,0,null,null,1,"button",[["class","btn btn-success worldButtom"],["type","button"]],null,[[null,"click"]],function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.EnvioDataUser()&&l),l},null,null)),(n()(),l["\u0275ted"](-1,null,["Entendido"])),(n()(),l["\u0275eld"](32,0,null,null,4,"div",[["class","w3copyright-agile"]],null,null,null,null,null)),(n()(),l["\u0275eld"](33,0,null,null,3,"p",[],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["\xa9 2018 WorldON. All rights reserved | Design by "])),(n()(),l["\u0275eld"](35,0,null,null,1,"a",[["href","http://creacionesjesebrito.com.ve/"],["target","_blank"]],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["Jese Brito For Epodo Creative Studio"])),(n()(),l["\u0275eld"](37,0,null,null,10,"ul",[["class","w3lsg-bubbles"]],null,null,null,null,null)),(n()(),l["\u0275eld"](38,0,null,null,0,"li",[],null,null,null,null,null)),(n()(),l["\u0275eld"](39,0,null,null,0,"li",[],null,null,null,null,null)),(n()(),l["\u0275eld"](40,0,null,null,0,"li",[],null,null,null,null,null)),(n()(),l["\u0275eld"](41,0,null,null,0,"li",[],null,null,null,null,null)),(n()(),l["\u0275eld"](42,0,null,null,0,"li",[],null,null,null,null,null)),(n()(),l["\u0275eld"](43,0,null,null,0,"li",[],null,null,null,null,null)),(n()(),l["\u0275eld"](44,0,null,null,0,"li",[],null,null,null,null,null)),(n()(),l["\u0275eld"](45,0,null,null,0,"li",[],null,null,null,null,null)),(n()(),l["\u0275eld"](46,0,null,null,0,"li",[],null,null,null,null,null)),(n()(),l["\u0275eld"](47,0,null,null,0,"li",[],null,null,null,null,null)),(n()(),l["\u0275eld"](48,0,null,null,1,"app-signup-final",[],null,null,null,f,m)),l["\u0275did"](49,114688,null,0,p,[g.a],{ObservableModal:[0,"ObservableModal"]},null)],function(n,t){n(t,49,0,t.component.EnvioDataUserRegistro)},function(n,t){n(t,7,0,void 0)})}var h=l["\u0275ccf"]("app-cartel",O,function(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"app-cartel",[],null,null,null,_,P)),l["\u0275did"](1,114688,null,0,O,[C.a],null,null)],function(n,t){n(t,1,0)},null)},{},{},[]),b=e("Ip0R"),y=function(){};e.d(t,"SignupInfoModuleNgFactory",function(){return w});var w=l["\u0275cmf"](o,[],function(n){return l["\u0275mod"]([l["\u0275mpd"](512,l.ComponentFactoryResolver,l["\u0275CodegenComponentFactoryResolver"],[[8,[i.a,c,h]],[3,l.ComponentFactoryResolver],l.NgModuleRef]),l["\u0275mpd"](4608,b.o,b.n,[l.LOCALE_ID,[2,b.y]]),l["\u0275mpd"](4608,d.w,d.w,[]),l["\u0275mpd"](1073742336,b.b,b.b,[]),l["\u0275mpd"](1073742336,a.o,a.o,[[2,a.u],[2,a.l]]),l["\u0275mpd"](1073742336,y,y,[]),l["\u0275mpd"](1073742336,d.t,d.t,[]),l["\u0275mpd"](1073742336,d.i,d.i,[]),l["\u0275mpd"](1073742336,o,o,[]),l["\u0275mpd"](1024,a.j,function(){return[[{path:"",component:u,children:[{path:"",redirectTo:"InfoComponent",pathMatch:"prefix"},{path:"InfoComponent",component:O}]}]]},[])])})}}]);