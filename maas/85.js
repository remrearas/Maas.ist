"use strict";(self.webpackChunkmaas=self.webpackChunkmaas||[]).push([[85],{2085:(Ve,T,u)=>{u.r(T),u.d(T,{FormModule:()=>Ce});var C,w=u(9808),x=u(5587),q=new Uint8Array(16);function J(){if(!C&&!(C="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return C(q)}const Y=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,G=function W(s){return"string"==typeof s&&Y.test(s)};for(var h=[],I=0;I<256;++I)h.push((I+256).toString(16).substr(1));const K=function z(s,i,e){var r=(s=s||{}).random||(s.rng||J)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,i){e=e||0;for(var n=0;n<16;++n)i[e+n]=r[n];return i}return function L(s){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=(h[s[i+0]]+h[s[i+1]]+h[s[i+2]]+h[s[i+3]]+"-"+h[s[i+4]]+h[s[i+5]]+"-"+h[s[i+6]]+h[s[i+7]]+"-"+h[s[i+8]]+h[s[i+9]]+"-"+h[s[i+10]]+h[s[i+11]]+h[s[i+12]]+h[s[i+13]]+h[s[i+14]]+h[s[i+15]]).toLowerCase();if(!G(e))throw TypeError("Stringified UUID is invalid");return e}(r)};var t=u(7587),_=u(655),f=u(5725);let v=class extends f.yh{constructor(){super({meta:null,wage:null})}};v=(0,_.gn)([(0,f.yC)({name:"forms"})],v);let Z=(()=>{class s extends f.AE{constructor(e){super(e),this.store=e}}return s.\u0275fac=function(e){return new(e||s)(t.LFG(v))},s.\u0275prov=t.Yz7({token:s,factory:s.\u0275fac}),s})(),k=(()=>{class s{constructor(e,r){this.store=e,this.query=r}getForms$(){return this.query.select(["meta","wage"])}updateMeta(e){this.update({meta:e})}updateWage(e){this.update({wage:e})}update(e){this.store.update(e)}reset(){this.store.reset()}}return s.\u0275fac=function(e){return new(e||s)(t.LFG(v),t.LFG(Z))},s.\u0275prov=t.Yz7({token:s,factory:s.\u0275fac}),s})();var $=u(7030);class A{constructor(i){this.parametreler=i}nettenBruteHesapla(i,e){let r=i,n=3*i,a=(r+n)/2,c=null;for(let g=0;g<100&&Math.abs(c-i)>1e-4;g++){if(n<r)return-1;c=this.bruttenNeteHesapla(a,e).net,c>i?n=a:r=a,a=(n+r)/2}return this.bruttenNeteHesapla(a,e)}bruttenNeteHesapla(i,e){const r=this.damgaVergisi(i),n=this.sgkIsci(i),a=this.sgkIssizlikIsci(i),l=this.gelirVergisiMatrahi(i,n,a),c=this.damgaVergisiMatrahi(l,e),g=this.kumulatifGelirVergisiMatrahi(l,c),d=this.toplamGelirVergisi(g),m=this.gelirVergisi(d,l,e),S=this.gelirVergisiIstisnasi(e),p=this.damgaVergisiIstisnasi(),M=this.sgkIsveren(i),Q=this.sgkIssizlikIsveren(i),B=this.tesvik(i);return(s=>{let i={};for(const[e,r]of Object.entries(s))i[e]="number"==typeof r?Number(r.toFixed(2)):r;return i})({donem:e,brut:i,damgaVergisi:r,sgkIsci:n,sgkIssizlikIsci:a,gelirVergisiMatrahi:l,damgaVergisiMatrahi:c,kumulatifGelirVergisiMatrahi:g,toplamGelirVergisi:d,gelirVergisi:m,gelirVergisiIstisnasi:S,damgaVergisiIstisnasi:p,sgkIsveren:M,tesvik:B,maliyet:i+M+Q-B,net:i-n-a-m-r+S+p})}damgaVergisi(i){return i*this.parametreler.damgaVergisiOrani}sgkIsci(i){return i<this.parametreler.sgkTavan?i*this.parametreler.sgkIsci:this.parametreler.sgkTavan*this.parametreler.sgkIsci}sgkIssizlikIsci(i){return i<this.parametreler.sgkTavan?i*this.parametreler.sgkIssizlikIsci:this.parametreler.sgkTavan*this.parametreler.sgkIssizlikIsci}gelirVergisiMatrahi(i,e,r){return i-e-r}damgaVergisiMatrahi(i,e){return i*(e-1)}kumulatifGelirVergisiMatrahi(i,e){return i+e}toplamGelirVergisi(i){for(const[e,r]of this.parametreler.vergiDilimleri.entries())if(i<r.tavan)return 0===e?r.toplam+(i-0)*r.oran:r.toplam+(i-this.parametreler.vergiDilimleri[e-1].tavan)*r.oran;return null}gelirVergisi(i,e,r){if(r>1){const n=i,a=this.damgaVergisiMatrahi(e,r-1);return n-this.toplamGelirVergisi(this.kumulatifGelirVergisiMatrahi(a,e))}return i}gelirVergisiIstisnasi(i){return this.parametreler.gelirVergisiIstisnasi[i-1]}damgaVergisiIstisnasi(){return this.parametreler.asgariBrutMaas*this.parametreler.damgaVergisiOrani}sgkIsveren(i){return i<this.parametreler.sgkTavan?i*this.parametreler.sgkIsveren:this.parametreler.sgkTavan*this.parametreler.sgkIsveren}sgkIssizlikIsveren(i){return i<this.parametreler.sgkTavan?i*this.parametreler.sgkIssizlikIsveren:this.parametreler.sgkTavan*this.parametreler.sgkIssizlikIsveren}tesvik(i){return i<this.parametreler.sgkTavan?i*this.parametreler.tesvik:this.parametreler.sgkTavan*this.parametreler.tesvik}}var ee=u(4004),te=u(8505),ie=u(520);let y=class extends f.cf{constructor(){super()}akitaPreAddEntity(i){return Object.assign(Object.assign({},i),{_id:i.parametreYili})}};y=(0,_.gn)([(0,f.yC)({name:"parameters",idKey:"_id"})],y);let E=(()=>{class s extends f.Gv{constructor(e){super(e),this.store=e}}return s.\u0275fac=function(e){return new(e||s)(t.LFG(y))},s.\u0275prov=t.Yz7({token:s,factory:s.\u0275fac}),s})(),b=(()=>{class s{constructor(e,r,n){this.http=e,this.store=r,this.query=n}resolve(){return this.get().pipe((0,te.b)(e=>this.set(e)))}get(){return this.http.get("assets/parameters.json")}set(e){this.store.set(e)}getYears(){return this.store.getValue().ids}getYear(e){return this.query.selectEntity(e)}}return s.\u0275fac=function(e){return new(e||s)(t.LFG(ie.eN),t.LFG(y),t.LFG(E))},s.\u0275prov=t.Yz7({token:s,factory:s.\u0275fac}),s})(),N=(()=>{class s{constructor(e){this.parametersService=e}static gross2net(e,r){const n=new A(e);return r.map((a,l)=>n.bruttenNeteHesapla(a,l+1))}static net2gross(e,r){const n=new A(e);return r.map((a,l)=>n.nettenBruteHesapla(a,l+1))}calculate(e){const{meta:r,wage:n}=e;return this.parametersService.getYear(r.year).pipe((0,ee.U)(a=>"gross2net"===r.type?s.gross2net(a,n):"net2gross"===r.type?s.net2gross(a,n):void 0))}}return s.\u0275fac=function(e){return new(e||s)(t.LFG(b))},s.\u0275prov=t.Yz7({token:s,factory:s.\u0275fac}),s})();var o=u(2382),R=u(7102),F=u(4036);let re=(()=>{class s{constructor(e,r,n){this.fb=e,this.formsService=r,this.parametersService=n}startSubscription(){this.subscription&&this.subscription.unsubscribe(),this.subscription=this.form.valueChanges.subscribe(e=>{this.formsService.updateMeta(this.form.valid?e:null)})}ngOnInit(){this.calculation_types=[{name:"Br\xfctten Nete",value:"gross2net"},{name:"Netten Br\xfcte",value:"net2gross"}],this.years=this.parametersService.getYears(),this.form=this.fb.group({type:["",o.kI.required],year:["",o.kI.required]}),this.form.patchValue({type:this.calculation_types[0].value,year:this.years[0]}),this.startSubscription(),this.formsService.updateMeta(this.form.value)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}ngOnChanges(e){if(e.isDisabled&&!0===e.isDisabled.currentValue)for(const r in this.form.controls)this.form.controls[r].disable()}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(o.qu),t.Y36(k),t.Y36(b))},s.\u0275cmp=t.Xpm({type:s,selectors:[["meta-form"]],inputs:{isDisabled:"isDisabled"},features:[t.TTD],decls:8,vars:3,consts:[[1,"card","p-fluid"],[3,"formGroup"],[1,"field"],["formControlName","type","optionLabel","name","optionValue","value",3,"options"],["for","year"],["formControlName","year","id","year",3,"options"]],template:function(e,r){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"form",1),t.TgZ(2,"div",2),t._UZ(3,"p-selectButton",3),t.qZA(),t.TgZ(4,"div",2),t.TgZ(5,"label",4),t._uU(6,"Y\u0131l"),t.qZA(),t._UZ(7,"p-dropdown",5),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(1),t.Q6J("formGroup",r.form),t.xp6(2),t.Q6J("options",r.calculation_types),t.xp6(4),t.Q6J("options",r.years))},directives:[o._Y,o.JL,o.sg,R.UN,o.JJ,o.u,F.Lt],encapsulation:2}),s})();var se=u(1053),D=u(1424);let ne=new t.OlP("currency.mask.config");class ae{constructor(i){this.htmlInputElement=i}setCursorAt(i){if(this.htmlInputElement.setSelectionRange)this.htmlInputElement.focus(),this.htmlInputElement.setSelectionRange(i,i);else if(this.htmlInputElement.createTextRange){let e=this.htmlInputElement.createTextRange();e.collapse(!0),e.moveEnd("character",i),e.moveStart("character",i),e.select()}}updateValueAndCursor(i,e,r){this.rawValue=i,this.setCursorAt(r-=e-i.length)}get canInputMoreNumbers(){let i=!(this.rawValue.length>=this.htmlInputElement.maxLength&&this.htmlInputElement.maxLength>=0),e=this.inputSelection.selectionStart,r=this.inputSelection.selectionEnd,n=!(e==r||!this.htmlInputElement.value.substring(e,r).match(/\d/)),a="0"==this.htmlInputElement.value.substring(0,1);return i||n||a}get inputSelection(){let i=0,e=0;if("number"==typeof this.htmlInputElement.selectionStart&&"number"==typeof this.htmlInputElement.selectionEnd)i=this.htmlInputElement.selectionStart,e=this.htmlInputElement.selectionEnd;else{let r=document.getSelection().anchorNode;if(r&&r.firstChild==this.htmlInputElement){let n=this.htmlInputElement.value.length,a=this.htmlInputElement.value.replace(/\r\n/g,"\n"),l=this.htmlInputElement.createTextRange(),c=this.htmlInputElement.createTextRange();c.collapse(!1),l.compareEndPoints("StartToEnd",c)>-1?i=e=n:(i=-l.moveStart("character",-n),i+=a.slice(0,i).split("\n").length-1,l.compareEndPoints("EndToEnd",c)>-1?e=n:(e=-l.moveEnd("character",-n),e+=a.slice(0,e).split("\n").length-1))}}return{selectionStart:i,selectionEnd:e}}get rawValue(){return this.htmlInputElement&&this.htmlInputElement.value}set rawValue(i){this._storedRawValue=i,this.htmlInputElement&&(this.htmlInputElement.value=i)}get storedRawValue(){return this._storedRawValue}}class oe{constructor(i,e){this.htmlInputElement=i,this.options=e,this.inputManager=new ae(i)}addNumber(i){this.rawValue||(this.rawValue=this.applyMask(!1,"0"));let e=String.fromCharCode(i),r=this.inputSelection.selectionStart,n=this.inputSelection.selectionEnd;this.rawValue=this.rawValue.substring(0,r)+e+this.rawValue.substring(n,this.rawValue.length),this.updateFieldValue(r+1)}applyMask(i,e){let{allowNegative:r,decimal:n,precision:a,prefix:l,suffix:c,thousands:g}=this.options,d=(e=i?new Number(e).toFixed(a):e).replace(/[^0-9]/g,"");if(!d)return"";let m=d.slice(0,d.length-a).replace(/^0*/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,g);""==m&&(m="0");let S=m,p=d.slice(d.length-a);a>0&&(p="0".repeat(a-p.length)+p,S+=n+p);let M=0==parseInt(m)&&(0==parseInt(p)||""==p);return(e.indexOf("-")>-1&&r&&!M?"-":"")+l+S+c}clearMask(i){if(null==i||""==i)return null;let e=i.replace(this.options.prefix,"").replace(this.options.suffix,"");return this.options.thousands&&(e=e.replace(new RegExp("\\"+this.options.thousands,"g"),"")),this.options.decimal&&(e=e.replace(this.options.decimal,".")),parseFloat(e)}changeToNegative(){if(this.options.allowNegative&&""!=this.rawValue&&"-"!=this.rawValue.charAt(0)&&0!=this.value){let i=this.inputSelection.selectionStart;this.rawValue="-"+this.rawValue,this.updateFieldValue(i+1)}}changeToPositive(){let i=this.inputSelection.selectionStart;this.rawValue=this.rawValue.replace("-",""),this.updateFieldValue(i-1)}fixCursorPosition(i){let e=this.inputSelection.selectionStart;e>this.getRawValueWithoutSuffixEndPosition()||i?this.inputManager.setCursorAt(this.getRawValueWithoutSuffixEndPosition()):e<this.getRawValueWithoutPrefixStartPosition()&&this.inputManager.setCursorAt(this.getRawValueWithoutPrefixStartPosition())}getRawValueWithoutSuffixEndPosition(){return this.rawValue.length-this.options.suffix.length}getRawValueWithoutPrefixStartPosition(){return null!=this.value&&this.value<0?this.options.prefix.length+1:this.options.prefix.length}removeNumber(i){let{decimal:e,thousands:r}=this.options,n=this.inputSelection.selectionEnd,a=this.inputSelection.selectionStart;a>this.rawValue.length-this.options.suffix.length&&(n=this.rawValue.length-this.options.suffix.length,a=this.rawValue.length-this.options.suffix.length),n==a&&((46==i||63272==i)&&/^\d+$/.test(this.rawValue.substring(a,n+1))&&(n+=1),(46==i||63272==i)&&(this.rawValue.substring(a,n+1)==e||this.rawValue.substring(a,n+1)==r)&&(n+=2,a+=1),8==i&&/^\d+$/.test(this.rawValue.substring(a-1,n))&&(a-=1),8==i&&(this.rawValue.substring(a-1,n)==e||this.rawValue.substring(a-1,n)==r)&&(a-=2,n-=1)),this.rawValue=this.rawValue.substring(0,a)+this.rawValue.substring(n,this.rawValue.length),this.updateFieldValue(a)}updateFieldValue(i){let e=this.applyMask(!1,this.rawValue||"");this.inputManager.updateValueAndCursor(e,this.rawValue.length,i=null==i?this.rawValue.length:i)}updateOptions(i){let e=this.value;this.options=i,this.value=e}get canInputMoreNumbers(){return this.inputManager.canInputMoreNumbers}get inputSelection(){return this.inputManager.inputSelection}get rawValue(){return this.inputManager.rawValue}set rawValue(i){this.inputManager.rawValue=i}get storedRawValue(){return this.inputManager.storedRawValue}get value(){return this.clearMask(this.rawValue)}set value(i){this.rawValue=this.applyMask(!0,""+i)}}class le{constructor(i,e){this.inputService=new oe(i,e),this.htmlInputElement=i}handleClick(i,e){0==Math.abs(this.inputService.inputSelection.selectionEnd-this.inputService.inputSelection.selectionStart)&&!isNaN(this.inputService.value)&&this.inputService.fixCursorPosition(e)}handleCut(i){this.isReadOnly()||setTimeout(()=>{this.inputService.updateFieldValue(),this.setValue(this.inputService.value),this.onModelChange(this.inputService.value)},0)}handleInput(i){if(this.isReadOnly())return;let e=this.getNewKeyCode(this.inputService.storedRawValue,this.inputService.rawValue),r=this.inputService.rawValue.length,n=this.inputService.inputSelection.selectionEnd,a=this.inputService.getRawValueWithoutSuffixEndPosition(),l=this.inputService.storedRawValue.length;if(this.inputService.rawValue=this.inputService.storedRawValue,n==a&&1==Math.abs(r-l)||0==l){if(r<l&&(0!=this.inputService.value?this.inputService.removeNumber(8):this.setValue(null)),r>l)switch(e){case 43:this.inputService.changeToPositive();break;case 45:this.inputService.changeToNegative();break;default:if(!this.inputService.canInputMoreNumbers||isNaN(this.inputService.value)&&null==String.fromCharCode(e).match(/\d/))return;this.inputService.addNumber(e)}this.setCursorPosition(i),this.onModelChange(this.inputService.value)}else this.setCursorPosition(i)}handleKeydown(i){if(this.isReadOnly())return;let e=i.which||i.charCode||i.keyCode;if(8==e||46==e||63272==e){i.preventDefault();let r=Math.abs(this.inputService.inputSelection.selectionEnd-this.inputService.inputSelection.selectionStart);(r==this.inputService.rawValue.length||0==this.inputService.value)&&(this.setValue(null),this.onModelChange(this.inputService.value)),0==r&&!isNaN(this.inputService.value)&&(this.inputService.removeNumber(e),this.onModelChange(this.inputService.value)),(8===e||46===e)&&0!=r&&!isNaN(this.inputService.value)&&(this.inputService.removeNumber(e),this.onModelChange(this.inputService.value))}}handleKeypress(i){if(this.isReadOnly())return;let e=i.which||i.charCode||i.keyCode;if(null!=e&&-1==[9,13].indexOf(e)&&!this.isArrowEndHomeKeyInFirefox(i)){switch(e){case 43:this.inputService.changeToPositive();break;case 45:this.inputService.changeToNegative();break;default:this.inputService.canInputMoreNumbers&&(!isNaN(this.inputService.value)||null!=String.fromCharCode(e).match(/\d/))&&this.inputService.addNumber(e)}i.preventDefault(),this.onModelChange(this.inputService.value)}}handleKeyup(i){this.inputService.fixCursorPosition()}handlePaste(i){this.isReadOnly()||setTimeout(()=>{this.inputService.updateFieldValue(),this.setValue(this.inputService.value),this.onModelChange(this.inputService.value)},1)}updateOptions(i){this.inputService.updateOptions(i)}getOnModelChange(){return this.onModelChange}setOnModelChange(i){this.onModelChange=i}getOnModelTouched(){return this.onModelTouched}setOnModelTouched(i){this.onModelTouched=i}setValue(i){this.inputService.value=i}getNewKeyCode(i,e){if(i.length>e.length)return null;for(let r=0;r<e.length;r++)if(i.length==r||i[r]!=e[r])return e.charCodeAt(r);return null}isArrowEndHomeKeyInFirefox(i){return-1!=[35,36,37,38,39,40].indexOf(i.keyCode)&&(null==i.charCode||0==i.charCode)}isReadOnly(){return this.htmlInputElement&&this.htmlInputElement.readOnly}setCursorPosition(i){let e=this.inputService.getRawValueWithoutSuffixEndPosition();const r=i.target;setTimeout(function(){r.setSelectionRange(e,e)},0)}}const ue={provide:o.JU,useExisting:(0,t.Gpc)(()=>O),multi:!0};let O=(()=>{class s{constructor(e,r,n){this.currencyMaskConfig=e,this.elementRef=r,this.keyValueDiffers=n,this.options={},this.optionsTemplate={align:"right",allowNegative:!0,decimal:".",precision:2,prefix:"$ ",suffix:"",thousands:","},e&&(this.optionsTemplate=e),this.keyValueDiffer=n.find({}).create()}ngAfterViewInit(){this.elementRef.nativeElement.style.textAlign=this.options.align?this.options.align:this.optionsTemplate.align}ngDoCheck(){this.keyValueDiffer.diff(this.options)&&(this.elementRef.nativeElement.style.textAlign=this.options.align?this.options.align:this.optionsTemplate.align,this.inputHandler.updateOptions(Object.assign({},this.optionsTemplate,this.options)))}ngOnInit(){this.inputHandler=new le(this.elementRef.nativeElement,Object.assign({},this.optionsTemplate,this.options))}handleBlur(e){this.inputHandler.getOnModelTouched().apply(e)}handleClick(e){this.inputHandler.handleClick(e,this.isChromeAndroid())}handleCut(e){this.isChromeAndroid()||this.inputHandler.handleCut(e)}handleInput(e){this.isChromeAndroid()&&this.inputHandler.handleInput(e)}handleKeydown(e){this.isChromeAndroid()||this.inputHandler.handleKeydown(e)}handleKeypress(e){this.isChromeAndroid()||this.inputHandler.handleKeypress(e)}handleKeyup(e){this.isChromeAndroid()||this.inputHandler.handleKeyup(e)}handlePaste(e){this.isChromeAndroid()||this.inputHandler.handlePaste(e)}isChromeAndroid(){return/chrome/i.test(navigator.userAgent)&&/android/i.test(navigator.userAgent)}registerOnChange(e){this.inputHandler.setOnModelChange(e)}registerOnTouched(e){this.inputHandler.setOnModelTouched(e)}setDisabledState(e){this.elementRef.nativeElement.disabled=e}validate(e){let r={};return e.value>this.max&&(r.max=!0),e.value<this.min&&(r.min=!0),r!={}?r:null}writeValue(e){this.inputHandler.setValue(e)}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(ne,8),t.Y36(t.SBq),t.Y36(t.aQg))},s.\u0275dir=t.lG2({type:s,selectors:[["","currencyMask",""]],hostBindings:function(e,r){1&e&&t.NdJ("blur",function(a){return r.handleBlur(a)})("click",function(a){return r.handleClick(a)})("cut",function(a){return r.handleCut(a)})("input",function(a){return r.handleInput(a)})("keydown",function(a){return r.handleKeydown(a)})("keypress",function(a){return r.handleKeypress(a)})("keyup",function(a){return r.handleKeyup(a)})("paste",function(a){return r.handlePaste(a)})},inputs:{max:"max",min:"min",options:"options"},features:[t._Bn([ue,{provide:o.Cf,useExisting:s,multi:!0}])]}),s})(),he=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[[w.ez,o.u5]]}),s})();const V=function(){return{align:"left",prefix:"\u20ba ",thousands:".",decimal:","}};function ce(s,i){if(1&s&&(t.ynx(0),t.TgZ(1,"form",5),t.TgZ(2,"div",1),t.TgZ(3,"label",6),t._uU(4,"Maa\u015f Miktar\u0131"),t.qZA(),t._UZ(5,"input",7),t.qZA(),t.qZA(),t.BQk()),2&s){const e=t.oxw();t.xp6(1),t.Q6J("formGroup",e.form),t.xp6(4),t.Q6J("options",t.DdM(2,V))}}function pe(s,i){if(1&s&&(t.ynx(0),t.TgZ(1,"form",5),t.TgZ(2,"div",1),t.TgZ(3,"label",8),t._uU(4,"Saatlik Maa\u015f"),t.qZA(),t._UZ(5,"input",9),t.qZA(),t.TgZ(6,"div",1),t.TgZ(7,"label",10),t._uU(8,"\xc7al\u0131\u015fma Saati"),t.qZA(),t._UZ(9,"input",11),t.qZA(),t.qZA(),t.BQk()),2&s){const e=t.oxw();t.xp6(1),t.Q6J("formGroup",e.form),t.xp6(4),t.Q6J("options",t.DdM(2,V))}}function de(s,i){if(1&s&&(t.ynx(0),t.TgZ(1,"div",14),t.TgZ(2,"div",1),t.TgZ(3,"div",15),t.TgZ(4,"span",16),t._uU(5),t.qZA(),t._UZ(6,"input",17),t.qZA(),t.qZA(),t.qZA(),t.BQk()),2&s){const e=i.index,r=t.oxw(2);t.xp6(1),t.Q6J("formGroupName",e),t.xp6(4),t.Oqu(r.get_period_name(e)),t.xp6(1),t.Q6J("options",t.DdM(4,V))("formControl",r.currentFormArray.controls[e])}}function ge(s,i){if(1&s&&(t.ynx(0),t.TgZ(1,"form",5),t.ynx(2,12),t.YNc(3,de,7,5,"ng-container",13),t.BQk(),t.qZA(),t.BQk()),2&s){const e=t.oxw();t.xp6(1),t.Q6J("formGroup",e.form),t.xp6(2),t.Q6J("ngForOf",e.currentFormArray.controls)}}function me(s,i){if(1&s&&(t.ynx(0),t.TgZ(1,"div",14),t.TgZ(2,"div",18),t.TgZ(3,"div",1),t.TgZ(4,"div",15),t.TgZ(5,"span",16),t._uU(6),t.qZA(),t._UZ(7,"input",19),t.qZA(),t.qZA(),t.TgZ(8,"div",1),t.TgZ(9,"div",15),t.TgZ(10,"span",16),t._uU(11,"Saat"),t.qZA(),t._UZ(12,"input",20),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.BQk()),2&s){const e=i.index,r=t.oxw(2);t.xp6(1),t.Q6J("formGroupName",e),t.xp6(5),t.Oqu(r.get_period_name(e)),t.xp6(1),t.Q6J("options",t.DdM(3,V))}}function fe(s,i){if(1&s&&(t.ynx(0),t.TgZ(1,"form",5),t.ynx(2,12),t.YNc(3,me,13,4,"ng-container",13),t.BQk(),t.qZA(),t.BQk()),2&s){const e=t.oxw();t.xp6(1),t.Q6J("formGroup",e.form),t.xp6(2),t.Q6J("ngForOf",e.currentFormArray.controls)}}let ve=(()=>{class s{constructor(e,r){this.fb=e,this.formsService=r,this.get_period_name=se.z,this.onChange=this.onChange.bind(this)}validateNonZero(e){return 0!=e.value?null:{validateNonZero:{valid:!1}}}get currentFormArray(){return this.form.get("wage_array")}selectMonthly(){this.form=this.fb.group({wage:[{value:"",disabled:this.isDisabled},[o.kI.required,this.validateNonZero]]}),this.formsService.updateWage(null),this.startSubscription()}selectHourly(){this.form=this.fb.group({hourly_wage:[{value:"",disabled:this.isDisabled},[o.kI.required,this.validateNonZero]],working_hour:[{value:"",disabled:this.isDisabled},[o.kI.required,this.validateNonZero]]}),this.formsService.updateWage(null),this.startSubscription()}selectMonthlyExtended(){this.form=this.fb.group({wage_array:this.fb.array([],o.kI.required)});const e=this.form.get("wage_array");for(let r of[...Array(12).keys()])e.insert(r,new o.NI("",[o.kI.required,this.validateNonZero]));this.formsService.updateWage(null),this.startSubscription()}selectHourlyExtended(){this.form=this.fb.group({wage_array:this.fb.array([],o.kI.required)});const e=this.form.get("wage_array");for(let r of[...Array(12).keys()]){const n=this.fb.group({wage:["",[o.kI.required,this.validateNonZero]],working_hour:["",[o.kI.required,this.validateNonZero]]});e.insert(r,n)}this.formsService.updateWage(null),this.startSubscription()}onChange(e){switch(e.value.value){case"monthly":this.selectMonthly();break;case"hourly":this.selectHourly();break;case"monthly-extended":this.selectMonthlyExtended();break;case"hourly-extended":this.selectHourlyExtended()}}formatForms(e){let r=[];switch(this.selected.value){case"monthly":for(let n of[...Array(12).keys()])r.push(e.wage);break;case"hourly":for(let n of[...Array(12).keys()])r.push(e.hourly_wage*e.working_hour);break;case"monthly-extended":r=e.wage_array;break;case"hourly-extended":for(let n of[...Array(12).keys()])r[n]=e.wage_array[n].wage*e.wage_array[n].working_hour}return r}startSubscription(){this.subscription&&this.subscription.unsubscribe(),this.subscription=this.form.valueChanges.subscribe(e=>{this.formsService.updateWage(this.form.valid?this.formatForms(e):null)})}ngOnInit(){this.wage_types=[{name:"Ayl\u0131k Maa\u015f Giri\u015fi",value:"monthly"},{name:"Saatlik Maa\u015f Giri\u015fi",value:"hourly"},{name:"Ayl\u0131k Detayl\u0131 Maa\u015f Giri\u015fi",value:"monthly-extended"},{name:"Saatlik Detayl\u0131 Maa\u015f Giri\u015fi",value:"hourly-extended"}],this.selected=this.wage_types[0],this.selectMonthly(),this.startSubscription()}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}ngOnChanges(e){if(e.isDisabled&&!0===e.isDisabled.currentValue)for(const r in this.form.controls)this.form.controls[r].disable()}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(o.qu),t.Y36(k))},s.\u0275cmp=t.Xpm({type:s,selectors:[["wage-form"]],inputs:{isDisabled:"isDisabled"},features:[t.TTD],decls:9,vars:7,consts:[[1,"card","p-fluid"],[1,"field"],["for","type"],["optionLabel","name","id","type",3,"options","disabled","ngModel","ngModelChange","onChange"],[4,"ngIf"],[3,"formGroup"],["for","wage"],["pInputText","","currencyMask","","type","text","formControlName","wage","id","wage",3,"options"],["for","hourly_wage"],["pInputText","","currencyMask","","type","text","formControlName","hourly_wage","id","hourly_wage",3,"options"],["for","working_hour"],["pInputText","","type","number","formControlName","working_hour","id","working_hour"],["formArrayName","wage_array"],[4,"ngFor","ngForOf"],[3,"formGroupName"],[1,"p-inputgroup"],[1,"p-inputgroup-addon"],["pInputText","","currencyMask","","type","text",3,"options","formControl"],[1,"formgroup-inline"],["pInputText","","currencyMask","","type","text","formControlName","wage",3,"options"],["pInputText","","type","number","formControlName","working_hour"]],template:function(e,r){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"label",2),t._uU(3,"Hesaplama T\xfcr\xfc"),t.qZA(),t.TgZ(4,"p-dropdown",3),t.NdJ("ngModelChange",function(a){return r.selected=a})("onChange",function(a){return r.onChange(a)}),t.qZA(),t.qZA(),t.YNc(5,ce,6,3,"ng-container",4),t.YNc(6,pe,10,3,"ng-container",4),t.YNc(7,ge,4,2,"ng-container",4),t.YNc(8,fe,4,2,"ng-container",4),t.qZA()),2&e&&(t.xp6(4),t.Q6J("options",r.wage_types)("disabled",r.isDisabled)("ngModel",r.selected),t.xp6(1),t.Q6J("ngIf","monthly"===r.selected.value&&r.form),t.xp6(1),t.Q6J("ngIf","hourly"===r.selected.value&&r.form),t.xp6(1),t.Q6J("ngIf","monthly-extended"===r.selected.value&&r.form),t.xp6(1),t.Q6J("ngIf","hourly-extended"===r.selected.value&&r.form))},directives:[F.Lt,o.JJ,o.On,w.O5,o._Y,o.JL,o.sg,o.Fj,D.o,O,o.u,o.wV,o.CE,w.sg,o.x0,o.oH],encapsulation:2}),s})();var H=u(845);let ye=(()=>{class s{constructor(e,r,n,a){this.formsService=e,this.resultsService=r,this.wageCalculationService=n,this.router=a,this.isDisabledForms=!1,this.isDisabledButton=!1,this.isLoading=!1}sendForm(){this.isLoading=!0,this.isDisabledForms=!0,this.calculationSubscription=this.wageCalculationService.calculate(this.currentForm).subscribe(e=>{const r=K();this.resultsService.add({_id:r,form_data:this.currentForm,calculation_results:e}),this.resultsService.setActive(r),this.router.navigate(["calculation/results"]).then(()=>{this.isLoading=!1,this.isDisabledForms=!1})})}ngOnInit(){this.storeSubscription=this.formsService.getForms$().subscribe(e=>{this.isDisabledButton=!(e.meta&&e.wage),this.currentForm={meta:e.meta,wage:e.wage}})}ngOnDestroy(){this.storeSubscription&&this.storeSubscription.unsubscribe(),this.calculationSubscription&&this.calculationSubscription.unsubscribe(),this.formsService.reset()}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(k),t.Y36($.L),t.Y36(N),t.Y36(x.F0))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-form"]],decls:5,vars:4,consts:[[3,"isDisabled"],[1,"card","p-fluid"],[1,"field"],["label","Hesapla","icon","pi pi-check","iconPos","left",3,"loading","disabled","onClick"]],template:function(e,r){1&e&&(t._UZ(0,"meta-form",0),t._UZ(1,"wage-form",0),t.TgZ(2,"div",1),t.TgZ(3,"div",2),t.TgZ(4,"p-button",3),t.NdJ("onClick",function(){return r.sendForm()}),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.Q6J("isDisabled",r.isDisabledForms),t.xp6(1),t.Q6J("isDisabled",r.isDisabledForms),t.xp6(3),t.Q6J("loading",r.isLoading)("disabled",r.isDisabledButton))},directives:[re,ve,H.zx],styles:[".p-inputgroup-addon{min-width:6rem}"]}),s})(),P=(()=>{class s{constructor(e){this.service=e}resolve(e){return this.service.resolve()}}return s.\u0275fac=function(e){return new(e||s)(t.LFG(b))},s.\u0275prov=t.Yz7({token:s,factory:s.\u0275fac}),s})();const Se=[{path:"",component:ye,resolve:{parameters:P}}];let we=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[[x.Bz.forChild(Se)],x.Bz]}),s})(),Ce=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({providers:[P,b,y,E,k,v,Z,N],imports:[[w.ez,we,o.u5,o.UX,he,R.Qy,F.kW,D.j,H.hJ]]}),s})()}}]);