import './polyfills.server.mjs';
import{$ as S3,A as x,B as P1,C as h,D as f,E as k,F as c2,G as g3,H as L3,I as L,J as W,K as x3,L as b3,M as p,N as j,O as F2,P as E,Q as F1,X as y3,Y as N3,Z as T1,a as H3,aa as Z2,b as z3,ba as c1,c as V3,ca as a2,d as _2,da as x2,e as O,ea as w3,f as M2,fa as a1,g as C2,ga as k3,h as m2,ha as A3,i as K2,ia as D3,j as T,k as g2,l as P,la as _3,m as L2,n as U,o as G,p as P2,pa as P3,q as M3,r as h2,ra as e1,s as u2,sa as F3,t as M,ta as i1,u as H,v as C3,w as J2,x as Z,y as v2,z as _1}from"./chunk-MMDJDTON.mjs";import{a as J,b as V2}from"./chunk-VVCT4QZE.mjs";var W3=(()=>{let c=class c{constructor(e,r){this._renderer=e,this._elementRef=r,this.onChange=s=>{},this.onTouched=()=>{}}setProperty(e,r){this._renderer.setProperty(this._elementRef.nativeElement,e,r)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}};c.\u0275fac=function(r){return new(r||c)(H(u2),H(h2))},c.\u0275dir=P({type:c});let a=c;return a})(),O1=(()=>{let c=class c extends W3{};c.\u0275fac=(()=>{let e;return function(s){return(e||(e=P2(c)))(s||c)}})(),c.\u0275dir=P({type:c,features:[Z]});let a=c;return a})(),t1=new C2("NgValueAccessor");var x6={provide:t1,useExisting:_2(()=>y2),multi:!0};function b6(){let a=T1()?T1().getUserAgent():"";return/android (\d+)/.test(a.toLowerCase())}var y6=new C2("CompositionEventMode"),y2=(()=>{let c=class c extends W3{constructor(e,r,s){super(e,r),this._compositionMode=s,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!b6())}writeValue(e){let r=e??"";this.setProperty("value",r)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}};c.\u0275fac=function(r){return new(r||c)(H(u2),H(h2),H(y6,8))},c.\u0275dir=P({type:c,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,s){r&1&&L("input",function(t){return s._handleInput(t.target.value)})("blur",function(){return s.onTouched()})("compositionstart",function(){return s._compositionStart()})("compositionend",function(t){return s._compositionEnd(t.target.value)})},features:[F2([x6]),Z]});let a=c;return a})();var N6=new C2("NgValidators"),S6=new C2("NgAsyncValidators");function q3(a){return a!=null}function j3(a){return L3(a)?H3(a):a}function $3(a){let c={};return a.forEach(i=>{c=i!=null?J(J({},c),i):c}),Object.keys(c).length===0?null:c}function X3(a,c){return c.map(i=>i(a))}function w6(a){return!a.validate}function Y3(a){return a.map(c=>w6(c)?c:i=>c.validate(i))}function k6(a){if(!a)return null;let c=a.filter(q3);return c.length==0?null:function(i){return $3(X3(i,c))}}function Q3(a){return a!=null?k6(Y3(a)):null}function A6(a){if(!a)return null;let c=a.filter(q3);return c.length==0?null:function(i){let e=X3(i,c).map(j3);return V3(e).pipe(z3($3))}}function K3(a){return a!=null?A6(Y3(a)):null}function T3(a,c){return a===null?[c]:Array.isArray(a)?[...a,c]:[a,c]}function D6(a){return a._rawValidators}function _6(a){return a._rawAsyncValidators}function E1(a){return a?Array.isArray(a)?a:[a]:[]}function s1(a,c){return Array.isArray(a)?a.includes(c):a===c}function E3(a,c){let i=E1(c);return E1(a).forEach(r=>{s1(i,r)||i.push(r)}),i}function B3(a,c){return E1(c).filter(i=>!s1(a,i))}var n1=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(c){this._rawValidators=c||[],this._composedValidatorFn=Q3(this._rawValidators)}_setAsyncValidators(c){this._rawAsyncValidators=c||[],this._composedAsyncValidatorFn=K3(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(c){this._onDestroyCallbacks.push(c)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(c=>c()),this._onDestroyCallbacks=[]}reset(c=void 0){this.control&&this.control.reset(c)}hasError(c,i){return this.control?this.control.hasError(c,i):!1}getError(c,i){return this.control?this.control.getError(c,i):null}},B1=class extends n1{get formDirective(){return null}get path(){return null}},B2=class extends n1{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},R1=class{constructor(c){this._cd=c}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},P6={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},b5=V2(J({},P6),{"[class.ng-submitted]":"isSubmitted"}),o1=(()=>{let c=class c extends R1{constructor(e){super(e)}};c.\u0275fac=function(r){return new(r||c)(H(B2,2))},c.\u0275dir=P({type:c,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,s){r&2&&P1("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)},features:[Z]});let a=c;return a})();var T2="VALID",r1="INVALID",b2="PENDING",E2="DISABLED";function F6(a){return(l1(a)?a.validators:a)||null}function T6(a){return Array.isArray(a)?Q3(a):a||null}function E6(a,c){return(l1(c)?c.asyncValidators:a)||null}function B6(a){return Array.isArray(a)?K3(a):a||null}function l1(a){return a!=null&&!Array.isArray(a)&&typeof a=="object"}var I1=class{constructor(c,i){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(c),this._assignAsyncValidators(i)}get validator(){return this._composedValidatorFn}set validator(c){this._rawValidators=this._composedValidatorFn=c}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(c){this._rawAsyncValidators=this._composedAsyncValidatorFn=c}get parent(){return this._parent}get valid(){return this.status===T2}get invalid(){return this.status===r1}get pending(){return this.status==b2}get disabled(){return this.status===E2}get enabled(){return this.status!==E2}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(c){this._assignValidators(c)}setAsyncValidators(c){this._assignAsyncValidators(c)}addValidators(c){this.setValidators(E3(c,this._rawValidators))}addAsyncValidators(c){this.setAsyncValidators(E3(c,this._rawAsyncValidators))}removeValidators(c){this.setValidators(B3(c,this._rawValidators))}removeAsyncValidators(c){this.setAsyncValidators(B3(c,this._rawAsyncValidators))}hasValidator(c){return s1(this._rawValidators,c)}hasAsyncValidator(c){return s1(this._rawAsyncValidators,c)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(c={}){this.touched=!0,this._parent&&!c.onlySelf&&this._parent.markAsTouched(c)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(c=>c.markAllAsTouched())}markAsUntouched(c={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0})}),this._parent&&!c.onlySelf&&this._parent._updateTouched(c)}markAsDirty(c={}){this.pristine=!1,this._parent&&!c.onlySelf&&this._parent.markAsDirty(c)}markAsPristine(c={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(i=>{i.markAsPristine({onlySelf:!0})}),this._parent&&!c.onlySelf&&this._parent._updatePristine(c)}markAsPending(c={}){this.status=b2,c.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!c.onlySelf&&this._parent.markAsPending(c)}disable(c={}){let i=this._parentMarkedDirty(c.onlySelf);this.status=E2,this.errors=null,this._forEachChild(e=>{e.disable(V2(J({},c),{onlySelf:!0}))}),this._updateValue(),c.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(V2(J({},c),{skipPristineCheck:i})),this._onDisabledChange.forEach(e=>e(!0))}enable(c={}){let i=this._parentMarkedDirty(c.onlySelf);this.status=T2,this._forEachChild(e=>{e.enable(V2(J({},c),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:c.emitEvent}),this._updateAncestors(V2(J({},c),{skipPristineCheck:i})),this._onDisabledChange.forEach(e=>e(!1))}_updateAncestors(c){this._parent&&!c.onlySelf&&(this._parent.updateValueAndValidity(c),c.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(c){this._parent=c}getRawValue(){return this.value}updateValueAndValidity(c={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===T2||this.status===b2)&&this._runAsyncValidator(c.emitEvent)),c.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!c.onlySelf&&this._parent.updateValueAndValidity(c)}_updateTreeValidity(c={emitEvent:!0}){this._forEachChild(i=>i._updateTreeValidity(c)),this.updateValueAndValidity({onlySelf:!0,emitEvent:c.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?E2:T2}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(c){if(this.asyncValidator){this.status=b2,this._hasOwnPendingAsyncValidator=!0;let i=j3(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(e=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(e,{emitEvent:c})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(c,i={}){this.errors=c,this._updateControlsErrors(i.emitEvent!==!1)}get(c){let i=c;return i==null||(Array.isArray(i)||(i=i.split(".")),i.length===0)?null:i.reduce((e,r)=>e&&e._find(r),this)}getError(c,i){let e=i?this.get(i):this;return e&&e.errors?e.errors[c]:null}hasError(c,i){return!!this.getError(c,i)}get root(){let c=this;for(;c._parent;)c=c._parent;return c}_updateControlsErrors(c){this.status=this._calculateStatus(),c&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(c)}_initObservables(){this.valueChanges=new J2,this.statusChanges=new J2}_calculateStatus(){return this._allControlsDisabled()?E2:this.errors?r1:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(b2)?b2:this._anyControlsHaveStatus(r1)?r1:T2}_anyControlsHaveStatus(c){return this._anyControls(i=>i.status===c)}_anyControlsDirty(){return this._anyControls(c=>c.dirty)}_anyControlsTouched(){return this._anyControls(c=>c.touched)}_updatePristine(c={}){this.pristine=!this._anyControlsDirty(),this._parent&&!c.onlySelf&&this._parent._updatePristine(c)}_updateTouched(c={}){this.touched=this._anyControlsTouched(),this._parent&&!c.onlySelf&&this._parent._updateTouched(c)}_registerOnCollectionChange(c){this._onCollectionChange=c}_setUpdateStrategy(c){l1(c)&&c.updateOn!=null&&(this._updateOn=c.updateOn)}_parentMarkedDirty(c){let i=this._parent&&this._parent.dirty;return!c&&!!i&&!this._parent._anyControlsDirty()}_find(c){return null}_assignValidators(c){this._rawValidators=Array.isArray(c)?c.slice():c,this._composedValidatorFn=T6(this._rawValidators)}_assignAsyncValidators(c){this._rawAsyncValidators=Array.isArray(c)?c.slice():c,this._composedAsyncValidatorFn=B6(this._rawAsyncValidators)}};var J3=new C2("CallSetDisabledState",{providedIn:"root",factory:()=>U1}),U1="always";function R6(a,c){return[...c.path,a]}function I6(a,c,i=U1){U6(a,c),c.valueAccessor.writeValue(a.value),(a.disabled||i==="always")&&c.valueAccessor.setDisabledState?.(a.disabled),G6(a,c),q6(a,c),W6(a,c),O6(a,c)}function R3(a,c){a.forEach(i=>{i.registerOnValidatorChange&&i.registerOnValidatorChange(c)})}function O6(a,c){if(c.valueAccessor.setDisabledState){let i=e=>{c.valueAccessor.setDisabledState(e)};a.registerOnDisabledChange(i),c._registerOnDestroy(()=>{a._unregisterOnDisabledChange(i)})}}function U6(a,c){let i=D6(a);c.validator!==null?a.setValidators(T3(i,c.validator)):typeof i=="function"&&a.setValidators([i]);let e=_6(a);c.asyncValidator!==null?a.setAsyncValidators(T3(e,c.asyncValidator)):typeof e=="function"&&a.setAsyncValidators([e]);let r=()=>a.updateValueAndValidity();R3(c._rawValidators,r),R3(c._rawAsyncValidators,r)}function G6(a,c){c.valueAccessor.registerOnChange(i=>{a._pendingValue=i,a._pendingChange=!0,a._pendingDirty=!0,a.updateOn==="change"&&Z3(a,c)})}function W6(a,c){c.valueAccessor.registerOnTouched(()=>{a._pendingTouched=!0,a.updateOn==="blur"&&a._pendingChange&&Z3(a,c),a.updateOn!=="submit"&&a.markAsTouched()})}function Z3(a,c){a._pendingDirty&&a.markAsDirty(),a.setValue(a._pendingValue,{emitModelToViewChange:!1}),c.viewToModelUpdate(a._pendingValue),a._pendingChange=!1}function q6(a,c){let i=(e,r)=>{c.valueAccessor.writeValue(e),r&&c.viewToModelUpdate(e)};a.registerOnChange(i),c._registerOnDestroy(()=>{a._unregisterOnChange(i)})}function j6(a,c){if(!a.hasOwnProperty("model"))return!1;let i=a.model;return i.isFirstChange()?!0:!Object.is(c,i.currentValue)}function $6(a){return Object.getPrototypeOf(a.constructor)===O1}function X6(a,c){if(!c)return null;Array.isArray(c);let i,e,r;return c.forEach(s=>{s.constructor===y2?i=s:$6(s)?e=s:r=s}),r||e||i||null}function I3(a,c){let i=a.indexOf(c);i>-1&&a.splice(i,1)}function O3(a){return typeof a=="object"&&a!==null&&Object.keys(a).length===2&&"value"in a&&"disabled"in a}var Y6=class extends I1{constructor(c=null,i,e){super(F6(i),E6(e,i)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(c),this._setUpdateStrategy(i),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),l1(i)&&(i.nonNullable||i.initialValueIsDefault)&&(O3(c)?this.defaultValue=c.value:this.defaultValue=c)}setValue(c,i={}){this.value=this._pendingValue=c,this._onChange.length&&i.emitModelToViewChange!==!1&&this._onChange.forEach(e=>e(this.value,i.emitViewToModelChange!==!1)),this.updateValueAndValidity(i)}patchValue(c,i={}){this.setValue(c,i)}reset(c=this.defaultValue,i={}){this._applyFormState(c),this.markAsPristine(i),this.markAsUntouched(i),this.setValue(this.value,i),this._pendingChange=!1}_updateValue(){}_anyControls(c){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(c){this._onChange.push(c)}_unregisterOnChange(c){I3(this._onChange,c)}registerOnDisabledChange(c){this._onDisabledChange.push(c)}_unregisterOnDisabledChange(c){I3(this._onDisabledChange,c)}_forEachChild(c){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(c){O3(c)?(this.value=this._pendingValue=c.value,c.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=c}};var Q6={provide:B2,useExisting:_2(()=>R2)},U3=Promise.resolve(),R2=(()=>{let c=class c extends B2{constructor(e,r,s,n,t,o){super(),this._changeDetectorRef=t,this.callSetDisabledState=o,this.control=new Y6,this._registered=!1,this.name="",this.update=new J2,this._parent=e,this._setValidators(r),this._setAsyncValidators(s),this.valueAccessor=X6(this,n)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let r=e.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),j6(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){I6(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){U3.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let r=e.isDisabled.currentValue,s=r!==0&&y3(r);U3.then(()=>{s&&!this.control.disabled?this.control.disable():!s&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?R6(e,this._parent):[e]}};c.\u0275fac=function(r){return new(r||c)(H(B1,9),H(N6,10),H(S6,10),H(t1,10),H(C3,8),H(J3,8))},c.\u0275dir=P({type:c,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[K2.None,"disabled","isDisabled"],model:[K2.None,"ngModel","model"],options:[K2.None,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[F2([Q6]),Z,L2]});let a=c;return a})();var K6=(()=>{let c=class c{};c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=g2({type:c}),c.\u0275inj=M2({});let a=c;return a})();var J6={provide:t1,useExisting:_2(()=>f1),multi:!0};function c4(a,c){return a==null?`${c}`:(c&&typeof c=="object"&&(c="Object"),`${a}: ${c}`.slice(0,50))}function Z6(a){return a.split(":")[0]}var f1=(()=>{let c=class c extends O1{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(e){this._compareWith=e}writeValue(e){this.value=e;let r=this._getOptionId(e),s=c4(r,e);this.setProperty("value",s)}registerOnChange(e){this.onChange=r=>{this.value=this._getOptionValue(r),e(this.value)}}_registerOption(){return(this._idCounter++).toString()}_getOptionId(e){for(let r of this._optionMap.keys())if(this._compareWith(this._optionMap.get(r),e))return r;return null}_getOptionValue(e){let r=Z6(e);return this._optionMap.has(r)?this._optionMap.get(r):e}};c.\u0275fac=(()=>{let e;return function(s){return(e||(e=P2(c)))(s||c)}})(),c.\u0275dir=P({type:c,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(r,s){r&1&&L("change",function(t){return s.onChange(t.target.value)})("blur",function(){return s.onTouched()})},inputs:{compareWith:"compareWith"},features:[F2([J6]),Z]});let a=c;return a})(),a4=(()=>{let c=class c{constructor(e,r,s){this._element=e,this._renderer=r,this._select=s,this._select&&(this.id=this._select._registerOption())}set ngValue(e){this._select!=null&&(this._select._optionMap.set(this.id,e),this._setElementValue(c4(this.id,e)),this._select.writeValue(this._select.value))}set value(e){this._setElementValue(e),this._select&&this._select.writeValue(this._select.value)}_setElementValue(e){this._renderer.setProperty(this._element.nativeElement,"value",e)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}};c.\u0275fac=function(r){return new(r||c)(H(h2),H(u2),H(f1,9))},c.\u0275dir=P({type:c,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}});let a=c;return a})(),c0={provide:t1,useExisting:_2(()=>e4),multi:!0};function G3(a,c){return a==null?`${c}`:(typeof c=="string"&&(c=`'${c}'`),c&&typeof c=="object"&&(c="Object"),`${a}: ${c}`.slice(0,50))}function a0(a){return a.split(":")[0]}var e4=(()=>{let c=class c extends O1{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(e){this._compareWith=e}writeValue(e){this.value=e;let r;if(Array.isArray(e)){let s=e.map(n=>this._getOptionId(n));r=(n,t)=>{n._setSelected(s.indexOf(t.toString())>-1)}}else r=(s,n)=>{s._setSelected(!1)};this._optionMap.forEach(r)}registerOnChange(e){this.onChange=r=>{let s=[],n=r.selectedOptions;if(n!==void 0){let t=n;for(let o=0;o<t.length;o++){let m=t[o],l=this._getOptionValue(m.value);s.push(l)}}else{let t=r.options;for(let o=0;o<t.length;o++){let m=t[o];if(m.selected){let l=this._getOptionValue(m.value);s.push(l)}}}this.value=s,e(s)}}_registerOption(e){let r=(this._idCounter++).toString();return this._optionMap.set(r,e),r}_getOptionId(e){for(let r of this._optionMap.keys())if(this._compareWith(this._optionMap.get(r)._value,e))return r;return null}_getOptionValue(e){let r=a0(e);return this._optionMap.has(r)?this._optionMap.get(r)._value:e}};c.\u0275fac=(()=>{let e;return function(s){return(e||(e=P2(c)))(s||c)}})(),c.\u0275dir=P({type:c,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(r,s){r&1&&L("change",function(t){return s.onChange(t.target)})("blur",function(){return s.onTouched()})},inputs:{compareWith:"compareWith"},features:[F2([c0]),Z]});let a=c;return a})(),i4=(()=>{let c=class c{constructor(e,r,s){this._element=e,this._renderer=r,this._select=s,this._select&&(this.id=this._select._registerOption(this))}set ngValue(e){this._select!=null&&(this._value=e,this._setElementValue(G3(this.id,e)),this._select.writeValue(this._select.value))}set value(e){this._select?(this._value=e,this._setElementValue(G3(this.id,e)),this._select.writeValue(this._select.value)):this._setElementValue(e)}_setElementValue(e){this._renderer.setProperty(this._element.nativeElement,"value",e)}_setSelected(e){this._renderer.setProperty(this._element.nativeElement,"selected",e)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}};c.\u0275fac=function(r){return new(r||c)(H(h2),H(u2),H(e4,9))},c.\u0275dir=P({type:c,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}});let a=c;return a})();var e0=(()=>{let c=class c{};c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=g2({type:c}),c.\u0275inj=M2({imports:[K6]});let a=c;return a})();var i2=(()=>{let c=class c{static withConfig(e){return{ngModule:c,providers:[{provide:J3,useValue:e.callSetDisabledState??U1}]}}};c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=g2({type:c}),c.\u0275inj=M2({imports:[e0]});let a=c;return a})();function s4(a,c){var i=Object.keys(a);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(a);c&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(a,r).enumerable})),i.push.apply(i,e)}return i}function u(a){for(var c=1;c<arguments.length;c++){var i=arguments[c]!=null?arguments[c]:{};c%2?s4(Object(i),!0).forEach(function(e){y(a,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(i)):s4(Object(i)).forEach(function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(i,e))})}return a}function g1(a){"@babel/helpers - typeof";return g1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},g1(a)}function i0(a,c){if(!(a instanceof c))throw new TypeError("Cannot call a class as a function")}function n4(a,c){for(var i=0;i<c.length;i++){var e=c[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(a,e.key,e)}}function r0(a,c,i){return c&&n4(a.prototype,c),i&&n4(a,i),Object.defineProperty(a,"prototype",{writable:!1}),a}function y(a,c,i){return c in a?Object.defineProperty(a,c,{value:i,enumerable:!0,configurable:!0,writable:!0}):a[c]=i,a}function r3(a,c){return n0(a)||o0(a,c)||A4(a,c)||f0()}function X2(a){return s0(a)||t0(a)||A4(a)||l0()}function s0(a){if(Array.isArray(a))return $1(a)}function n0(a){if(Array.isArray(a))return a}function t0(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function o0(a,c){var i=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(i!=null){var e=[],r=!0,s=!1,n,t;try{for(i=i.call(a);!(r=(n=i.next()).done)&&(e.push(n.value),!(c&&e.length===c));r=!0);}catch(o){s=!0,t=o}finally{try{!r&&i.return!=null&&i.return()}finally{if(s)throw t}}return e}}function A4(a,c){if(a){if(typeof a=="string")return $1(a,c);var i=Object.prototype.toString.call(a).slice(8,-1);if(i==="Object"&&a.constructor&&(i=a.constructor.name),i==="Map"||i==="Set")return Array.from(a);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return $1(a,c)}}function $1(a,c){(c==null||c>a.length)&&(c=a.length);for(var i=0,e=new Array(c);i<c;i++)e[i]=a[i];return e}function l0(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f0(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var t4=function(){},s3={},D4={},_4=null,P4={mark:t4,measure:t4};try{typeof window<"u"&&(s3=window),typeof document<"u"&&(D4=document),typeof MutationObserver<"u"&&(_4=MutationObserver),typeof performance<"u"&&(P4=performance)}catch{}var m0=s3.navigator||{},o4=m0.userAgent,l4=o4===void 0?"":o4,s2=s3,g=D4,f4=_4,m1=P4,S5=!!s2.document,Q=!!g.documentElement&&!!g.head&&typeof g.addEventListener=="function"&&typeof g.createElement=="function",F4=~l4.indexOf("MSIE")||~l4.indexOf("Trident/"),h1,u1,v1,d1,p1,$="___FONT_AWESOME___",X1=16,T4="fa",E4="svg-inline--fa",H2="data-fa-i2svg",Y1="data-fa-pseudo-element",h0="data-fa-pseudo-element-pending",n3="data-prefix",t3="data-icon",m4="fontawesome-i2svg",u0="async",v0=["HTML","HEAD","STYLE","SCRIPT"],B4=function(){try{return process.env.NODE_ENV==="production"}catch{return!1}}(),C="classic",b="sharp",o3=[C,b];function Y2(a){return new Proxy(a,{get:function(i,e){return e in i?i[e]:i[C]}})}var G2=Y2((h1={},y(h1,C,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),y(h1,b,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),h1)),W2=Y2((u1={},y(u1,C,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),y(u1,b,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),u1)),q2=Y2((v1={},y(v1,C,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),y(v1,b,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),v1)),d0=Y2((d1={},y(d1,C,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),y(d1,b,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),d1)),p0=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,R4="fa-layers-text",H0=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,z0=Y2((p1={},y(p1,C,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),y(p1,b,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),p1)),I4=[1,2,3,4,5,6,7,8,9,10],V0=I4.concat([11,12,13,14,15,16,17,18,19,20]),M0=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],d2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},j2=new Set;Object.keys(W2[C]).map(j2.add.bind(j2));Object.keys(W2[b]).map(j2.add.bind(j2));var C0=[].concat(o3,X2(j2),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",d2.GROUP,d2.SWAP_OPACITY,d2.PRIMARY,d2.SECONDARY]).concat(I4.map(function(a){return"".concat(a,"x")})).concat(V0.map(function(a){return"w-".concat(a)})),O2=s2.FontAwesomeConfig||{};function g0(a){var c=g.querySelector("script["+a+"]");if(c)return c.getAttribute(a)}function L0(a){return a===""?!0:a==="false"?!1:a==="true"?!0:a}g&&typeof g.querySelector=="function"&&(h4=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],h4.forEach(function(a){var c=r3(a,2),i=c[0],e=c[1],r=L0(g0(i));r!=null&&(O2[e]=r)}));var h4,O4={styleDefault:"solid",familyDefault:"classic",cssPrefix:T4,replacementClass:E4,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};O2.familyPrefix&&(O2.cssPrefix=O2.familyPrefix);var k2=u(u({},O4),O2);k2.autoReplaceSvg||(k2.observeMutations=!1);var v={};Object.keys(O4).forEach(function(a){Object.defineProperty(v,a,{enumerable:!0,set:function(i){k2[a]=i,U2.forEach(function(e){return e(v)})},get:function(){return k2[a]}})});Object.defineProperty(v,"familyPrefix",{enumerable:!0,set:function(c){k2.cssPrefix=c,U2.forEach(function(i){return i(v)})},get:function(){return k2.cssPrefix}});s2.FontAwesomeConfig=v;var U2=[];function x0(a){return U2.push(a),function(){U2.splice(U2.indexOf(a),1)}}var r2=X1,q={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function b0(a){if(!(!a||!Q)){var c=g.createElement("style");c.setAttribute("type","text/css"),c.innerHTML=a;for(var i=g.head.childNodes,e=null,r=i.length-1;r>-1;r--){var s=i[r],n=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(e=s)}return g.head.insertBefore(c,e),a}}var y0="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function $2(){for(var a=12,c="";a-- >0;)c+=y0[Math.random()*62|0];return c}function A2(a){for(var c=[],i=(a||[]).length>>>0;i--;)c[i]=a[i];return c}function l3(a){return a.classList?A2(a.classList):(a.getAttribute("class")||"").split(" ").filter(function(c){return c})}function U4(a){return"".concat(a).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function N0(a){return Object.keys(a||{}).reduce(function(c,i){return c+"".concat(i,'="').concat(U4(a[i]),'" ')},"").trim()}function b1(a){return Object.keys(a||{}).reduce(function(c,i){return c+"".concat(i,": ").concat(a[i].trim(),";")},"")}function f3(a){return a.size!==q.size||a.x!==q.x||a.y!==q.y||a.rotate!==q.rotate||a.flipX||a.flipY}function S0(a){var c=a.transform,i=a.containerWidth,e=a.iconWidth,r={transform:"translate(".concat(i/2," 256)")},s="translate(".concat(c.x*32,", ").concat(c.y*32,") "),n="scale(".concat(c.size/16*(c.flipX?-1:1),", ").concat(c.size/16*(c.flipY?-1:1),") "),t="rotate(".concat(c.rotate," 0 0)"),o={transform:"".concat(s," ").concat(n," ").concat(t)},m={transform:"translate(".concat(e/2*-1," -256)")};return{outer:r,inner:o,path:m}}function w0(a){var c=a.transform,i=a.width,e=i===void 0?X1:i,r=a.height,s=r===void 0?X1:r,n=a.startCentered,t=n===void 0?!1:n,o="";return t&&F4?o+="translate(".concat(c.x/r2-e/2,"em, ").concat(c.y/r2-s/2,"em) "):t?o+="translate(calc(-50% + ".concat(c.x/r2,"em), calc(-50% + ").concat(c.y/r2,"em)) "):o+="translate(".concat(c.x/r2,"em, ").concat(c.y/r2,"em) "),o+="scale(".concat(c.size/r2*(c.flipX?-1:1),", ").concat(c.size/r2*(c.flipY?-1:1),") "),o+="rotate(".concat(c.rotate,"deg) "),o}var k0=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function G4(){var a=T4,c=E4,i=v.cssPrefix,e=v.replacementClass,r=k0;if(i!==a||e!==c){var s=new RegExp("\\.".concat(a,"\\-"),"g"),n=new RegExp("\\--".concat(a,"\\-"),"g"),t=new RegExp("\\.".concat(c),"g");r=r.replace(s,".".concat(i,"-")).replace(n,"--".concat(i,"-")).replace(t,".".concat(e))}return r}var u4=!1;function G1(){v.autoAddCss&&!u4&&(b0(G4()),u4=!0)}var A0={mixout:function(){return{dom:{css:G4,insertCss:G1}}},hooks:function(){return{beforeDOMElementCreation:function(){G1()},beforeI2svg:function(){G1()}}}},X=s2||{};X[$]||(X[$]={});X[$].styles||(X[$].styles={});X[$].hooks||(X[$].hooks={});X[$].shims||(X[$].shims=[]);var B=X[$],W4=[],D0=function a(){g.removeEventListener("DOMContentLoaded",a),L1=1,W4.map(function(c){return c()})},L1=!1;Q&&(L1=(g.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(g.readyState),L1||g.addEventListener("DOMContentLoaded",D0));function _0(a){Q&&(L1?setTimeout(a,0):W4.push(a))}function Q2(a){var c=a.tag,i=a.attributes,e=i===void 0?{}:i,r=a.children,s=r===void 0?[]:r;return typeof a=="string"?U4(a):"<".concat(c," ").concat(N0(e),">").concat(s.map(Q2).join(""),"</").concat(c,">")}function v4(a,c,i){if(a&&a[c]&&a[c][i])return{prefix:c,iconName:i,icon:a[c][i]}}var P0=function(c,i){return function(e,r,s,n){return c.call(i,e,r,s,n)}},W1=function(c,i,e,r){var s=Object.keys(c),n=s.length,t=r!==void 0?P0(i,r):i,o,m,l;for(e===void 0?(o=1,l=c[s[0]]):(o=0,l=e);o<n;o++)m=s[o],l=t(l,c[m],m,c);return l};function F0(a){for(var c=[],i=0,e=a.length;i<e;){var r=a.charCodeAt(i++);if(r>=55296&&r<=56319&&i<e){var s=a.charCodeAt(i++);(s&64512)==56320?c.push(((r&1023)<<10)+(s&1023)+65536):(c.push(r),i--)}else c.push(r)}return c}function Q1(a){var c=F0(a);return c.length===1?c[0].toString(16):null}function T0(a,c){var i=a.length,e=a.charCodeAt(c),r;return e>=55296&&e<=56319&&i>c+1&&(r=a.charCodeAt(c+1),r>=56320&&r<=57343)?(e-55296)*1024+r-56320+65536:e}function d4(a){return Object.keys(a).reduce(function(c,i){var e=a[i],r=!!e.icon;return r?c[e.iconName]=e.icon:c[i]=e,c},{})}function K1(a,c){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=i.skipHooks,r=e===void 0?!1:e,s=d4(c);typeof B.hooks.addPack=="function"&&!r?B.hooks.addPack(a,d4(c)):B.styles[a]=u(u({},B.styles[a]||{}),s),a==="fas"&&K1("fa",c)}var H1,z1,V1,N2=B.styles,E0=B.shims,B0=(H1={},y(H1,C,Object.values(q2[C])),y(H1,b,Object.values(q2[b])),H1),m3=null,q4={},j4={},$4={},X4={},Y4={},R0=(z1={},y(z1,C,Object.keys(G2[C])),y(z1,b,Object.keys(G2[b])),z1);function I0(a){return~C0.indexOf(a)}function O0(a,c){var i=c.split("-"),e=i[0],r=i.slice(1).join("-");return e===a&&r!==""&&!I0(r)?r:null}var Q4=function(){var c=function(s){return W1(N2,function(n,t,o){return n[o]=W1(t,s,{}),n},{})};q4=c(function(r,s,n){if(s[3]&&(r[s[3]]=n),s[2]){var t=s[2].filter(function(o){return typeof o=="number"});t.forEach(function(o){r[o.toString(16)]=n})}return r}),j4=c(function(r,s,n){if(r[n]=n,s[2]){var t=s[2].filter(function(o){return typeof o=="string"});t.forEach(function(o){r[o]=n})}return r}),Y4=c(function(r,s,n){var t=s[2];return r[n]=n,t.forEach(function(o){r[o]=n}),r});var i="far"in N2||v.autoFetchSvg,e=W1(E0,function(r,s){var n=s[0],t=s[1],o=s[2];return t==="far"&&!i&&(t="fas"),typeof n=="string"&&(r.names[n]={prefix:t,iconName:o}),typeof n=="number"&&(r.unicodes[n.toString(16)]={prefix:t,iconName:o}),r},{names:{},unicodes:{}});$4=e.names,X4=e.unicodes,m3=y1(v.styleDefault,{family:v.familyDefault})};x0(function(a){m3=y1(a.styleDefault,{family:v.familyDefault})});Q4();function h3(a,c){return(q4[a]||{})[c]}function U0(a,c){return(j4[a]||{})[c]}function p2(a,c){return(Y4[a]||{})[c]}function K4(a){return $4[a]||{prefix:null,iconName:null}}function G0(a){var c=X4[a],i=h3("fas",a);return c||(i?{prefix:"fas",iconName:i}:null)||{prefix:null,iconName:null}}function n2(){return m3}var u3=function(){return{prefix:null,iconName:null,rest:[]}};function y1(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=c.family,e=i===void 0?C:i,r=G2[e][a],s=W2[e][a]||W2[e][r],n=a in B.styles?a:null;return s||n||null}var p4=(V1={},y(V1,C,Object.keys(q2[C])),y(V1,b,Object.keys(q2[b])),V1);function N1(a){var c,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=i.skipLookups,r=e===void 0?!1:e,s=(c={},y(c,C,"".concat(v.cssPrefix,"-").concat(C)),y(c,b,"".concat(v.cssPrefix,"-").concat(b)),c),n=null,t=C;(a.includes(s[C])||a.some(function(m){return p4[C].includes(m)}))&&(t=C),(a.includes(s[b])||a.some(function(m){return p4[b].includes(m)}))&&(t=b);var o=a.reduce(function(m,l){var d=O0(v.cssPrefix,l);if(N2[l]?(l=B0[t].includes(l)?d0[t][l]:l,n=l,m.prefix=l):R0[t].indexOf(l)>-1?(n=l,m.prefix=y1(l,{family:t})):d?m.iconName=d:l!==v.replacementClass&&l!==s[C]&&l!==s[b]&&m.rest.push(l),!r&&m.prefix&&m.iconName){var z=n==="fa"?K4(m.iconName):{},V=p2(m.prefix,m.iconName);z.prefix&&(n=null),m.iconName=z.iconName||V||m.iconName,m.prefix=z.prefix||m.prefix,m.prefix==="far"&&!N2.far&&N2.fas&&!v.autoFetchSvg&&(m.prefix="fas")}return m},u3());return(a.includes("fa-brands")||a.includes("fab"))&&(o.prefix="fab"),(a.includes("fa-duotone")||a.includes("fad"))&&(o.prefix="fad"),!o.prefix&&t===b&&(N2.fass||v.autoFetchSvg)&&(o.prefix="fass",o.iconName=p2(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||n==="fa")&&(o.prefix=n2()||"fas"),o}var W0=function(){function a(){i0(this,a),this.definitions={}}return r0(a,[{key:"add",value:function(){for(var i=this,e=arguments.length,r=new Array(e),s=0;s<e;s++)r[s]=arguments[s];var n=r.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(t){i.definitions[t]=u(u({},i.definitions[t]||{}),n[t]),K1(t,n[t]);var o=q2[C][t];o&&K1(o,n[t]),Q4()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(i,e){var r=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(r).map(function(s){var n=r[s],t=n.prefix,o=n.iconName,m=n.icon,l=m[2];i[t]||(i[t]={}),l.length>0&&l.forEach(function(d){typeof d=="string"&&(i[t][d]=m)}),i[t][o]=m}),i}}]),a}(),H4=[],S2={},w2={},q0=Object.keys(w2);function j0(a,c){var i=c.mixoutsTo;return H4=a,S2={},Object.keys(w2).forEach(function(e){q0.indexOf(e)===-1&&delete w2[e]}),H4.forEach(function(e){var r=e.mixout?e.mixout():{};if(Object.keys(r).forEach(function(n){typeof r[n]=="function"&&(i[n]=r[n]),g1(r[n])==="object"&&Object.keys(r[n]).forEach(function(t){i[n]||(i[n]={}),i[n][t]=r[n][t]})}),e.hooks){var s=e.hooks();Object.keys(s).forEach(function(n){S2[n]||(S2[n]=[]),S2[n].push(s[n])})}e.provides&&e.provides(w2)}),i}function J1(a,c){for(var i=arguments.length,e=new Array(i>2?i-2:0),r=2;r<i;r++)e[r-2]=arguments[r];var s=S2[a]||[];return s.forEach(function(n){c=n.apply(null,[c].concat(e))}),c}function z2(a){for(var c=arguments.length,i=new Array(c>1?c-1:0),e=1;e<c;e++)i[e-1]=arguments[e];var r=S2[a]||[];r.forEach(function(s){s.apply(null,i)})}function Y(){var a=arguments[0],c=Array.prototype.slice.call(arguments,1);return w2[a]?w2[a].apply(null,c):void 0}function Z1(a){a.prefix==="fa"&&(a.prefix="fas");var c=a.iconName,i=a.prefix||n2();if(c)return c=p2(i,c)||c,v4(J4.definitions,i,c)||v4(B.styles,i,c)}var J4=new W0,$0=function(){v.autoReplaceSvg=!1,v.observeMutations=!1,z2("noAuto")},X0={i2svg:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Q?(z2("beforeI2svg",c),Y("pseudoElements2svg",c),Y("i2svg",c)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=c.autoReplaceSvgRoot;v.autoReplaceSvg===!1&&(v.autoReplaceSvg=!0),v.observeMutations=!0,_0(function(){Q0({autoReplaceSvgRoot:i}),z2("watch",c)})}},Y0={icon:function(c){if(c===null)return null;if(g1(c)==="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:p2(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){var i=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],e=y1(c[0]);return{prefix:e,iconName:p2(e,i)||i}}if(typeof c=="string"&&(c.indexOf("".concat(v.cssPrefix,"-"))>-1||c.match(p0))){var r=N1(c.split(" "),{skipLookups:!0});return{prefix:r.prefix||n2(),iconName:p2(r.prefix,r.iconName)||r.iconName}}if(typeof c=="string"){var s=n2();return{prefix:s,iconName:p2(s,c)||c}}}},D={noAuto:$0,config:v,dom:X0,parse:Y0,library:J4,findIconDefinition:Z1,toHtml:Q2},Q0=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=c.autoReplaceSvgRoot,e=i===void 0?g:i;(Object.keys(B.styles).length>0||v.autoFetchSvg)&&Q&&v.autoReplaceSvg&&D.dom.i2svg({node:e})};function S1(a,c){return Object.defineProperty(a,"abstract",{get:c}),Object.defineProperty(a,"html",{get:function(){return a.abstract.map(function(e){return Q2(e)})}}),Object.defineProperty(a,"node",{get:function(){if(Q){var e=g.createElement("div");return e.innerHTML=a.html,e.children}}}),a}function K0(a){var c=a.children,i=a.main,e=a.mask,r=a.attributes,s=a.styles,n=a.transform;if(f3(n)&&i.found&&!e.found){var t=i.width,o=i.height,m={x:t/o/2,y:.5};r.style=b1(u(u({},s),{},{"transform-origin":"".concat(m.x+n.x/16,"em ").concat(m.y+n.y/16,"em")}))}return[{tag:"svg",attributes:r,children:c}]}function J0(a){var c=a.prefix,i=a.iconName,e=a.children,r=a.attributes,s=a.symbol,n=s===!0?"".concat(c,"-").concat(v.cssPrefix,"-").concat(i):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},r),{},{id:n}),children:e}]}]}function v3(a){var c=a.icons,i=c.main,e=c.mask,r=a.prefix,s=a.iconName,n=a.transform,t=a.symbol,o=a.title,m=a.maskId,l=a.titleId,d=a.extra,z=a.watchable,V=z===void 0?!1:z,S=e.found?e:i,_=S.width,F=S.height,R=r==="fak",N=[v.replacementClass,s?"".concat(v.cssPrefix,"-").concat(s):""].filter(function(K){return d.classes.indexOf(K)===-1}).filter(function(K){return K!==""||!!K}).concat(d.classes).join(" "),w={children:[],attributes:u(u({},d.attributes),{},{"data-prefix":r,"data-icon":s,class:N,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(_," ").concat(F)})},I=R&&!~d.classes.indexOf("fa-fw")?{width:"".concat(_/F*16*.0625,"em")}:{};V&&(w.attributes[H2]=""),o&&(w.children.push({tag:"title",attributes:{id:w.attributes["aria-labelledby"]||"title-".concat(l||$2())},children:[o]}),delete w.attributes.title);var A=u(u({},w),{},{prefix:r,iconName:s,main:i,mask:e,maskId:m,transform:n,symbol:t,styles:u(u({},I),d.styles)}),l2=e.found&&i.found?Y("generateAbstractMask",A)||{children:[],attributes:{}}:Y("generateAbstractIcon",A)||{children:[],attributes:{}},f2=l2.children,D1=l2.attributes;return A.children=f2,A.attributes=D1,t?J0(A):K0(A)}function z4(a){var c=a.content,i=a.width,e=a.height,r=a.transform,s=a.title,n=a.extra,t=a.watchable,o=t===void 0?!1:t,m=u(u(u({},n.attributes),s?{title:s}:{}),{},{class:n.classes.join(" ")});o&&(m[H2]="");var l=u({},n.styles);f3(r)&&(l.transform=w0({transform:r,startCentered:!0,width:i,height:e}),l["-webkit-transform"]=l.transform);var d=b1(l);d.length>0&&(m.style=d);var z=[];return z.push({tag:"span",attributes:m,children:[c]}),s&&z.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),z}function Z0(a){var c=a.content,i=a.title,e=a.extra,r=u(u(u({},e.attributes),i?{title:i}:{}),{},{class:e.classes.join(" ")}),s=b1(e.styles);s.length>0&&(r.style=s);var n=[];return n.push({tag:"span",attributes:r,children:[c]}),i&&n.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),n}var q1=B.styles;function c3(a){var c=a[0],i=a[1],e=a.slice(4),r=r3(e,1),s=r[0],n=null;return Array.isArray(s)?n={tag:"g",attributes:{class:"".concat(v.cssPrefix,"-").concat(d2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(d2.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(d2.PRIMARY),fill:"currentColor",d:s[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:c,height:i,icon:n}}var c8={found:!1,width:512,height:512};function a8(a,c){!B4&&!v.showMissingIcons&&a&&console.error('Icon with name "'.concat(a,'" and prefix "').concat(c,'" is missing.'))}function a3(a,c){var i=c;return c==="fa"&&v.styleDefault!==null&&(c=n2()),new Promise(function(e,r){var s={found:!1,width:512,height:512,icon:Y("missingIconAbstract")||{}};if(i==="fa"){var n=K4(a)||{};a=n.iconName||a,c=n.prefix||c}if(a&&c&&q1[c]&&q1[c][a]){var t=q1[c][a];return e(c3(t))}a8(a,c),e(u(u({},c8),{},{icon:v.showMissingIcons&&a?Y("missingIconAbstract")||{}:{}}))})}var V4=function(){},e3=v.measurePerformance&&m1&&m1.mark&&m1.measure?m1:{mark:V4,measure:V4},I2='FA "6.5.1"',e8=function(c){return e3.mark("".concat(I2," ").concat(c," begins")),function(){return Z4(c)}},Z4=function(c){e3.mark("".concat(I2," ").concat(c," ends")),e3.measure("".concat(I2," ").concat(c),"".concat(I2," ").concat(c," begins"),"".concat(I2," ").concat(c," ends"))},d3={begin:e8,end:Z4},M1=function(){};function M4(a){var c=a.getAttribute?a.getAttribute(H2):null;return typeof c=="string"}function i8(a){var c=a.getAttribute?a.getAttribute(n3):null,i=a.getAttribute?a.getAttribute(t3):null;return c&&i}function r8(a){return a&&a.classList&&a.classList.contains&&a.classList.contains(v.replacementClass)}function s8(){if(v.autoReplaceSvg===!0)return C1.replace;var a=C1[v.autoReplaceSvg];return a||C1.replace}function n8(a){return g.createElementNS("http://www.w3.org/2000/svg",a)}function t8(a){return g.createElement(a)}function c6(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=c.ceFn,e=i===void 0?a.tag==="svg"?n8:t8:i;if(typeof a=="string")return g.createTextNode(a);var r=e(a.tag);Object.keys(a.attributes||[]).forEach(function(n){r.setAttribute(n,a.attributes[n])});var s=a.children||[];return s.forEach(function(n){r.appendChild(c6(n,{ceFn:e}))}),r}function o8(a){var c=" ".concat(a.outerHTML," ");return c="".concat(c,"Font Awesome fontawesome.com "),c}var C1={replace:function(c){var i=c[0];if(i.parentNode)if(c[1].forEach(function(r){i.parentNode.insertBefore(c6(r),i)}),i.getAttribute(H2)===null&&v.keepOriginalSource){var e=g.createComment(o8(i));i.parentNode.replaceChild(e,i)}else i.remove()},nest:function(c){var i=c[0],e=c[1];if(~l3(i).indexOf(v.replacementClass))return C1.replace(c);var r=new RegExp("".concat(v.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var s=e[0].attributes.class.split(" ").reduce(function(t,o){return o===v.replacementClass||o.match(r)?t.toSvg.push(o):t.toNode.push(o),t},{toNode:[],toSvg:[]});e[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?i.removeAttribute("class"):i.setAttribute("class",s.toNode.join(" "))}var n=e.map(function(t){return Q2(t)}).join(`
`);i.setAttribute(H2,""),i.innerHTML=n}};function C4(a){a()}function a6(a,c){var i=typeof c=="function"?c:M1;if(a.length===0)i();else{var e=C4;v.mutateApproach===u0&&(e=s2.requestAnimationFrame||C4),e(function(){var r=s8(),s=d3.begin("mutate");a.map(r),s(),i()})}}var p3=!1;function e6(){p3=!0}function i3(){p3=!1}var x1=null;function g4(a){if(f4&&v.observeMutations){var c=a.treeCallback,i=c===void 0?M1:c,e=a.nodeCallback,r=e===void 0?M1:e,s=a.pseudoElementsCallback,n=s===void 0?M1:s,t=a.observeMutationsRoot,o=t===void 0?g:t;x1=new f4(function(m){if(!p3){var l=n2();A2(m).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!M4(d.addedNodes[0])&&(v.searchPseudoElements&&n(d.target),i(d.target)),d.type==="attributes"&&d.target.parentNode&&v.searchPseudoElements&&n(d.target.parentNode),d.type==="attributes"&&M4(d.target)&&~M0.indexOf(d.attributeName))if(d.attributeName==="class"&&i8(d.target)){var z=N1(l3(d.target)),V=z.prefix,S=z.iconName;d.target.setAttribute(n3,V||l),S&&d.target.setAttribute(t3,S)}else r8(d.target)&&r(d.target)})}}),Q&&x1.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function l8(){x1&&x1.disconnect()}function f8(a){var c=a.getAttribute("style"),i=[];return c&&(i=c.split(";").reduce(function(e,r){var s=r.split(":"),n=s[0],t=s.slice(1);return n&&t.length>0&&(e[n]=t.join(":").trim()),e},{})),i}function m8(a){var c=a.getAttribute("data-prefix"),i=a.getAttribute("data-icon"),e=a.innerText!==void 0?a.innerText.trim():"",r=N1(l3(a));return r.prefix||(r.prefix=n2()),c&&i&&(r.prefix=c,r.iconName=i),r.iconName&&r.prefix||(r.prefix&&e.length>0&&(r.iconName=U0(r.prefix,a.innerText)||h3(r.prefix,Q1(a.innerText))),!r.iconName&&v.autoFetchSvg&&a.firstChild&&a.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=a.firstChild.data)),r}function h8(a){var c=A2(a.attributes).reduce(function(r,s){return r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r},{}),i=a.getAttribute("title"),e=a.getAttribute("data-fa-title-id");return v.autoA11y&&(i?c["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(e||$2()):(c["aria-hidden"]="true",c.focusable="false")),c}function u8(){return{iconName:null,title:null,titleId:null,prefix:null,transform:q,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function L4(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},i=m8(a),e=i.iconName,r=i.prefix,s=i.rest,n=h8(a),t=J1("parseNodeAttributes",{},a),o=c.styleParser?f8(a):[];return u({iconName:e,title:a.getAttribute("title"),titleId:a.getAttribute("data-fa-title-id"),prefix:r,transform:q,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:o,attributes:n}},t)}var v8=B.styles;function i6(a){var c=v.autoReplaceSvg==="nest"?L4(a,{styleParser:!1}):L4(a);return~c.extra.classes.indexOf(R4)?Y("generateLayersText",a,c):Y("generateSvgReplacementMutation",a,c)}var t2=new Set;o3.map(function(a){t2.add("fa-".concat(a))});Object.keys(G2[C]).map(t2.add.bind(t2));Object.keys(G2[b]).map(t2.add.bind(t2));t2=X2(t2);function x4(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Q)return Promise.resolve();var i=g.documentElement.classList,e=function(d){return i.add("".concat(m4,"-").concat(d))},r=function(d){return i.remove("".concat(m4,"-").concat(d))},s=v.autoFetchSvg?t2:o3.map(function(l){return"fa-".concat(l)}).concat(Object.keys(v8));s.includes("fa")||s.push("fa");var n=[".".concat(R4,":not([").concat(H2,"])")].concat(s.map(function(l){return".".concat(l,":not([").concat(H2,"])")})).join(", ");if(n.length===0)return Promise.resolve();var t=[];try{t=A2(a.querySelectorAll(n))}catch{}if(t.length>0)e("pending"),r("complete");else return Promise.resolve();var o=d3.begin("onTree"),m=t.reduce(function(l,d){try{var z=i6(d);z&&l.push(z)}catch(V){B4||V.name==="MissingIcon"&&console.error(V)}return l},[]);return new Promise(function(l,d){Promise.all(m).then(function(z){a6(z,function(){e("active"),e("complete"),r("pending"),typeof c=="function"&&c(),o(),l()})}).catch(function(z){o(),d(z)})})}function d8(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;i6(a).then(function(i){i&&a6([i],c)})}function p8(a){return function(c){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(c||{}).icon?c:Z1(c||{}),r=i.mask;return r&&(r=(r||{}).icon?r:Z1(r||{})),a(e,u(u({},i),{},{mask:r}))}}var H8=function(c){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=i.transform,r=e===void 0?q:e,s=i.symbol,n=s===void 0?!1:s,t=i.mask,o=t===void 0?null:t,m=i.maskId,l=m===void 0?null:m,d=i.title,z=d===void 0?null:d,V=i.titleId,S=V===void 0?null:V,_=i.classes,F=_===void 0?[]:_,R=i.attributes,N=R===void 0?{}:R,w=i.styles,I=w===void 0?{}:w;if(c){var A=c.prefix,l2=c.iconName,f2=c.icon;return S1(u({type:"icon"},c),function(){return z2("beforeDOMElementCreation",{iconDefinition:c,params:i}),v.autoA11y&&(z?N["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(S||$2()):(N["aria-hidden"]="true",N.focusable="false")),v3({icons:{main:c3(f2),mask:o?c3(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:A,iconName:l2,transform:u(u({},q),r),symbol:n,title:z,maskId:l,titleId:S,extra:{attributes:N,styles:I,classes:F}})})}},z8={mixout:function(){return{icon:p8(H8)}},hooks:function(){return{mutationObserverCallbacks:function(i){return i.treeCallback=x4,i.nodeCallback=d8,i}}},provides:function(c){c.i2svg=function(i){var e=i.node,r=e===void 0?g:e,s=i.callback,n=s===void 0?function(){}:s;return x4(r,n)},c.generateSvgReplacementMutation=function(i,e){var r=e.iconName,s=e.title,n=e.titleId,t=e.prefix,o=e.transform,m=e.symbol,l=e.mask,d=e.maskId,z=e.extra;return new Promise(function(V,S){Promise.all([a3(r,t),l.iconName?a3(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(_){var F=r3(_,2),R=F[0],N=F[1];V([i,v3({icons:{main:R,mask:N},prefix:t,iconName:r,transform:o,symbol:m,maskId:d,title:s,titleId:n,extra:z,watchable:!0})])}).catch(S)})},c.generateAbstractIcon=function(i){var e=i.children,r=i.attributes,s=i.main,n=i.transform,t=i.styles,o=b1(t);o.length>0&&(r.style=o);var m;return f3(n)&&(m=Y("generateAbstractTransformGrouping",{main:s,transform:n,containerWidth:s.width,iconWidth:s.width})),e.push(m||s.icon),{children:e,attributes:r}}}},V8={mixout:function(){return{layer:function(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.classes,s=r===void 0?[]:r;return S1({type:"layer"},function(){z2("beforeDOMElementCreation",{assembler:i,params:e});var n=[];return i(function(t){Array.isArray(t)?t.map(function(o){n=n.concat(o.abstract)}):n=n.concat(t.abstract)}),[{tag:"span",attributes:{class:["".concat(v.cssPrefix,"-layers")].concat(X2(s)).join(" ")},children:n}]})}}}},M8={mixout:function(){return{counter:function(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.title,s=r===void 0?null:r,n=e.classes,t=n===void 0?[]:n,o=e.attributes,m=o===void 0?{}:o,l=e.styles,d=l===void 0?{}:l;return S1({type:"counter",content:i},function(){return z2("beforeDOMElementCreation",{content:i,params:e}),Z0({content:i.toString(),title:s,extra:{attributes:m,styles:d,classes:["".concat(v.cssPrefix,"-layers-counter")].concat(X2(t))}})})}}}},C8={mixout:function(){return{text:function(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,s=r===void 0?q:r,n=e.title,t=n===void 0?null:n,o=e.classes,m=o===void 0?[]:o,l=e.attributes,d=l===void 0?{}:l,z=e.styles,V=z===void 0?{}:z;return S1({type:"text",content:i},function(){return z2("beforeDOMElementCreation",{content:i,params:e}),z4({content:i,transform:u(u({},q),s),title:t,extra:{attributes:d,styles:V,classes:["".concat(v.cssPrefix,"-layers-text")].concat(X2(m))}})})}}},provides:function(c){c.generateLayersText=function(i,e){var r=e.title,s=e.transform,n=e.extra,t=null,o=null;if(F4){var m=parseInt(getComputedStyle(i).fontSize,10),l=i.getBoundingClientRect();t=l.width/m,o=l.height/m}return v.autoA11y&&!r&&(n.attributes["aria-hidden"]="true"),Promise.resolve([i,z4({content:i.innerHTML,width:t,height:o,transform:s,title:r,extra:n,watchable:!0})])}}},g8=new RegExp('"',"ug"),b4=[1105920,1112319];function L8(a){var c=a.replace(g8,""),i=T0(c,0),e=i>=b4[0]&&i<=b4[1],r=c.length===2?c[0]===c[1]:!1;return{value:Q1(r?c[0]:c),isSecondary:e||r}}function y4(a,c){var i="".concat(h0).concat(c.replace(":","-"));return new Promise(function(e,r){if(a.getAttribute(i)!==null)return e();var s=A2(a.children),n=s.filter(function(f2){return f2.getAttribute(Y1)===c})[0],t=s2.getComputedStyle(a,c),o=t.getPropertyValue("font-family").match(H0),m=t.getPropertyValue("font-weight"),l=t.getPropertyValue("content");if(n&&!o)return a.removeChild(n),e();if(o&&l!=="none"&&l!==""){var d=t.getPropertyValue("content"),z=~["Sharp"].indexOf(o[2])?b:C,V=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(o[2])?W2[z][o[2].toLowerCase()]:z0[z][m],S=L8(d),_=S.value,F=S.isSecondary,R=o[0].startsWith("FontAwesome"),N=h3(V,_),w=N;if(R){var I=G0(_);I.iconName&&I.prefix&&(N=I.iconName,V=I.prefix)}if(N&&!F&&(!n||n.getAttribute(n3)!==V||n.getAttribute(t3)!==w)){a.setAttribute(i,w),n&&a.removeChild(n);var A=u8(),l2=A.extra;l2.attributes[Y1]=c,a3(N,V).then(function(f2){var D1=v3(u(u({},A),{},{icons:{main:f2,mask:u3()},prefix:V,iconName:w,extra:l2,watchable:!0})),K=g.createElementNS("http://www.w3.org/2000/svg","svg");c==="::before"?a.insertBefore(K,a.firstChild):a.appendChild(K),K.outerHTML=D1.map(function(L6){return Q2(L6)}).join(`
`),a.removeAttribute(i),e()}).catch(r)}else e()}else e()})}function x8(a){return Promise.all([y4(a,"::before"),y4(a,"::after")])}function b8(a){return a.parentNode!==document.head&&!~v0.indexOf(a.tagName.toUpperCase())&&!a.getAttribute(Y1)&&(!a.parentNode||a.parentNode.tagName!=="svg")}function N4(a){if(Q)return new Promise(function(c,i){var e=A2(a.querySelectorAll("*")).filter(b8).map(x8),r=d3.begin("searchPseudoElements");e6(),Promise.all(e).then(function(){r(),i3(),c()}).catch(function(){r(),i3(),i()})})}var y8={hooks:function(){return{mutationObserverCallbacks:function(i){return i.pseudoElementsCallback=N4,i}}},provides:function(c){c.pseudoElements2svg=function(i){var e=i.node,r=e===void 0?g:e;v.searchPseudoElements&&N4(r)}}},S4=!1,N8={mixout:function(){return{dom:{unwatch:function(){e6(),S4=!0}}}},hooks:function(){return{bootstrap:function(){g4(J1("mutationObserverCallbacks",{}))},noAuto:function(){l8()},watch:function(i){var e=i.observeMutationsRoot;S4?i3():g4(J1("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},w4=function(c){var i={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return c.toLowerCase().split(" ").reduce(function(e,r){var s=r.toLowerCase().split("-"),n=s[0],t=s.slice(1).join("-");if(n&&t==="h")return e.flipX=!0,e;if(n&&t==="v")return e.flipY=!0,e;if(t=parseFloat(t),isNaN(t))return e;switch(n){case"grow":e.size=e.size+t;break;case"shrink":e.size=e.size-t;break;case"left":e.x=e.x-t;break;case"right":e.x=e.x+t;break;case"up":e.y=e.y-t;break;case"down":e.y=e.y+t;break;case"rotate":e.rotate=e.rotate+t;break}return e},i)},S8={mixout:function(){return{parse:{transform:function(i){return w4(i)}}}},hooks:function(){return{parseNodeAttributes:function(i,e){var r=e.getAttribute("data-fa-transform");return r&&(i.transform=w4(r)),i}}},provides:function(c){c.generateAbstractTransformGrouping=function(i){var e=i.main,r=i.transform,s=i.containerWidth,n=i.iconWidth,t={transform:"translate(".concat(s/2," 256)")},o="translate(".concat(r.x*32,", ").concat(r.y*32,") "),m="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(o," ").concat(m," ").concat(l)},z={transform:"translate(".concat(n/2*-1," -256)")},V={outer:t,inner:d,path:z};return{tag:"g",attributes:u({},V.outer),children:[{tag:"g",attributes:u({},V.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:u(u({},e.icon.attributes),V.path)}]}]}}}},j1={x:0,y:0,width:"100%",height:"100%"};function k4(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return a.attributes&&(a.attributes.fill||c)&&(a.attributes.fill="black"),a}function w8(a){return a.tag==="g"?a.children:[a]}var k8={hooks:function(){return{parseNodeAttributes:function(i,e){var r=e.getAttribute("data-fa-mask"),s=r?N1(r.split(" ").map(function(n){return n.trim()})):u3();return s.prefix||(s.prefix=n2()),i.mask=s,i.maskId=e.getAttribute("data-fa-mask-id"),i}}},provides:function(c){c.generateAbstractMask=function(i){var e=i.children,r=i.attributes,s=i.main,n=i.mask,t=i.maskId,o=i.transform,m=s.width,l=s.icon,d=n.width,z=n.icon,V=S0({transform:o,containerWidth:d,iconWidth:m}),S={tag:"rect",attributes:u(u({},j1),{},{fill:"white"})},_=l.children?{children:l.children.map(k4)}:{},F={tag:"g",attributes:u({},V.inner),children:[k4(u({tag:l.tag,attributes:u(u({},l.attributes),V.path)},_))]},R={tag:"g",attributes:u({},V.outer),children:[F]},N="mask-".concat(t||$2()),w="clip-".concat(t||$2()),I={tag:"mask",attributes:u(u({},j1),{},{id:N,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[S,R]},A={tag:"defs",children:[{tag:"clipPath",attributes:{id:w},children:w8(z)},I]};return e.push(A,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(w,")"),mask:"url(#".concat(N,")")},j1)}),{children:e,attributes:r}}}},A8={provides:function(c){var i=!1;s2.matchMedia&&(i=s2.matchMedia("(prefers-reduced-motion: reduce)").matches),c.missingIconAbstract=function(){var e=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:u(u({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var n=u(u({},s),{},{attributeName:"opacity"}),t={tag:"circle",attributes:u(u({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return i||t.children.push({tag:"animate",attributes:u(u({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},n),{},{values:"1;0;1;1;0;1;"})}),e.push(t),e.push({tag:"path",attributes:u(u({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:i?[]:[{tag:"animate",attributes:u(u({},n),{},{values:"1;0;0;0;0;1;"})}]}),i||e.push({tag:"path",attributes:u(u({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},n),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},D8={hooks:function(){return{parseNodeAttributes:function(i,e){var r=e.getAttribute("data-fa-symbol"),s=r===null?!1:r===""?!0:r;return i.symbol=s,i}}}},_8=[A0,z8,V8,M8,C8,y8,N8,S8,k8,A8,D8];j0(_8,{mixoutsTo:D});var w5=D.noAuto,k5=D.config,A5=D.library,D5=D.dom,r6=D.parse,_5=D.findIconDefinition,P5=D.toHtml,s6=D.icon,F5=D.layer,P8=D.text,F8=D.counter;var T8=["*"],E8=a=>{throw new Error(`Could not find icon with iconName=${a.iconName} and prefix=${a.prefix} in the icon library.`)},B8=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},R8=a=>{let c={[`fa-${a.animation}`]:a.animation!=null&&!a.animation.startsWith("spin"),"fa-spin":a.animation==="spin"||a.animation==="spin-reverse","fa-spin-pulse":a.animation==="spin-pulse"||a.animation==="spin-pulse-reverse","fa-spin-reverse":a.animation==="spin-reverse"||a.animation==="spin-pulse-reverse","fa-pulse":a.animation==="spin-pulse"||a.animation==="spin-pulse-reverse","fa-fw":a.fixedWidth,"fa-border":a.border,"fa-inverse":a.inverse,"fa-layers-counter":a.counter,"fa-flip-horizontal":a.flip==="horizontal"||a.flip==="both","fa-flip-vertical":a.flip==="vertical"||a.flip==="both",[`fa-${a.size}`]:a.size!==null,[`fa-rotate-${a.rotate}`]:a.rotate!==null,[`fa-pull-${a.pull}`]:a.pull!==null,[`fa-stack-${a.stackItemSize}`]:a.stackItemSize!=null};return Object.keys(c).map(i=>c[i]?i:null).filter(i=>i)},I8=a=>a.prefix!==void 0&&a.iconName!==void 0,O8=(a,c)=>I8(a)?a:typeof a=="string"?{prefix:c,iconName:a}:{prefix:a[0],iconName:a[1]},U8=(()=>{let c=class c{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null}};c.\u0275fac=function(r){return new(r||c)},c.\u0275prov=O({token:c,factory:c.\u0275fac,providedIn:"root"});let a=c;return a})(),G8=(()=>{let c=class c{constructor(){this.definitions={}}addIcons(...e){for(let r of e){r.prefix in this.definitions||(this.definitions[r.prefix]={}),this.definitions[r.prefix][r.iconName]=r;for(let s of r.icon[2])typeof s=="string"&&(this.definitions[r.prefix][s]=r)}}addIconPacks(...e){for(let r of e){let s=Object.keys(r).map(n=>r[n]);this.addIcons(...s)}}getIconDefinition(e,r){return e in this.definitions&&r in this.definitions[e]?this.definitions[e][r]:null}};c.\u0275fac=function(r){return new(r||c)},c.\u0275prov=O({token:c,factory:c.\u0275fac,providedIn:"root"});let a=c;return a})(),W8=(()=>{let c=class c{constructor(){this.stackItemSize="1x"}ngOnChanges(e){if("size"in e)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}};c.\u0275fac=function(r){return new(r||c)},c.\u0275dir=P({type:c,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[L2]});let a=c;return a})(),q8=(()=>{let c=class c{constructor(e,r){this.renderer=e,this.elementRef=r}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(e){"size"in e&&(e.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${e.size.currentValue}`),e.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${e.size.previousValue}`))}};c.\u0275fac=function(r){return new(r||c)(H(u2),H(h2))},c.\u0275cmp=T({type:c,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[L2,E],ngContentSelectors:T8,decls:1,vars:0,template:function(r,s){r&1&&(x3(),b3(0))},encapsulation:2});let a=c;return a})(),n6=(()=>{let c=class c{set spin(e){this.animation=e?"spin":void 0}set pulse(e){this.animation=e?"spin-pulse":void 0}constructor(e,r,s,n,t){this.sanitizer=e,this.config=r,this.iconLibrary=s,this.stackItem=n,this.classes=[],t!=null&&n==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(e){if(this.icon==null&&this.config.fallbackIcon==null){B8();return}if(e){let r=this.icon!=null?this.icon:this.config.fallbackIcon,s=this.findIconDefinition(r);if(s!=null){let n=this.buildParams();this.renderIcon(s,n)}}}render(){this.ngOnChanges({})}findIconDefinition(e){let r=O8(e,this.config.defaultPrefix);if("icon"in r)return r;let s=this.iconLibrary.getIconDefinition(r.prefix,r.iconName);return s??(E8(r),null)}buildParams(){let e={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},r=typeof this.transform=="string"?r6.transform(this.transform):this.transform;return{title:this.title,transform:r,classes:[...R8(e),...this.classes],mask:this.mask!=null?this.findIconDefinition(this.mask):null,styles:this.styles!=null?this.styles:{},symbol:this.symbol,attributes:{role:this.a11yRole}}}renderIcon(e,r){let s=s6(e,r);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(s.html.join(`
`))}};c.\u0275fac=function(r){return new(r||c)(H(A3),H(U8),H(G8),H(W8,8),H(q8,8))},c.\u0275cmp=T({type:c,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(r,s){r&2&&(g3("innerHTML",s.renderedIconHTML,M3),_1("title",s.title))},inputs:{icon:"icon",title:"title",animation:"animation",spin:"spin",pulse:"pulse",mask:"mask",styles:"styles",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",classes:"classes",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[L2,E],decls:0,vars:0,template:function(r,s){},encapsulation:2});let a=c;return a})();var w1=(()=>{let c=class c{};c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=g2({type:c}),c.\u0275inj=M2({});let a=c;return a})();var t6={prefix:"fas",iconName:"chart-simple",icon:[448,512,[],"e473","M160 80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V80zM0 272c0-26.5 21.5-48 48-48H80c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272zM368 96h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z"]};var o6={prefix:"fas",iconName:"align-left",icon:[448,512,[],"f036","M288 64c0 17.7-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32H256c17.7 0 32 14.3 32 32zm0 256c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H256c17.7 0 32 14.3 32 32zM0 192c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]};var l6={prefix:"fas",iconName:"bell",icon:[448,512,[128276,61602],"f0f3","M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"]};var f6={prefix:"fas",iconName:"expand",icon:[448,512,[],"f065","M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z"]};var m6=a=>({active:a}),u6=(()=>{let c=class c{ngOnInit(){}constructor(e){this.router=e,this.userTabSelected=!0,this.faAlignLeft=o6,this.faBell=l6,this.faExpand=f6,this.faChartSimple=t6,this.title="angular-springboot-app"}onTabSelection(e){this.router.navigate(["/",e]),this.userTabSelected=!this.userTabSelected}};c.\u0275fac=function(r){return new(r||c)(H(e1))},c.\u0275cmp=T({type:c,selectors:[["app-header"]],standalone:!0,features:[E],decls:63,vars:11,consts:[[1,"header-top","d-flex"],[1,"navbar","navbar-expand-lg","bg-body-tertiary"],["href","#",1,"navbar-brand"],[3,"icon"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],[1,"notification","d-flex"],[1,"dropdown","profile-link"],["type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle"],["src","../../../assets/images/avatar.png","alt",""],[1,"dropdown-menu","profile-dropdown"],[1,"profile-details","d-flex"],[1,"image"],["src","../../../assets/images/avatar.png","alt","","height","80px","width","80px"],[1,"name"],[1,"role"],["href","#",1,"dropdown-item"],[1,"breadcrumb-header"],[1,"row","w-100","p-3"],[1,"col-md-8"],[1,"content-title"],[1,"col-md-4","d-flex","justify-content-around"],[1,"expenses","d-flex"],[1,"figures","me-3"],[2,"display","block"],[1,"profit","d-flex"],[1,"nav","nav-tabs",2,"margin-top","110px"],[1,"nav-item"],[1,"nav-link",3,"ngClass","click"]],template:function(r,s){r&1&&(h(0,"div",0)(1,"nav",1)(2,"div")(3,"a",2),k(4,"fa-icon",3),f(),h(5,"button",4),k(6,"span",5),f()()(),h(7,"ul",6)(8,"li"),k(9,"fa-icon",3),f(),h(10,"li"),k(11,"fa-icon",3),f()(),h(12,"div",7)(13,"a",8)(14,"span"),k(15,"img",9),f()(),h(16,"ul",10)(17,"div",11)(18,"div",12),k(19,"img",13),f(),h(20,"h6",14),p(21,"DIPTISUNDER"),f(),h(22,"small",15),p(23,"MANAGER"),f()(),h(24,"li")(25,"a",16),p(26,"My Profile"),f()(),h(27,"li")(28,"a",16),p(29,"Activity Logs"),f()(),h(30,"li")(31,"a",16),p(32,"Account Settings"),f()(),h(33,"li")(34,"a",16),p(35,"Sign Out"),f()()()()(),h(36,"div",17)(37,"div",18)(38,"div",19)(39,"h4",20),p(40,"HI, WELCOME BACK"),f()(),h(41,"div",21)(42,"div",22)(43,"div",23)(44,"span",24),p(45,"EXPENSES"),f(),h(46,"span"),p(47,"$53,000"),f()(),k(48,"fa-icon",3),f(),h(49,"div",25)(50,"div",23)(51,"span",24),p(52,"PROFIT"),f(),h(53,"span"),p(54,"$34,000"),f()(),k(55,"fa-icon",3),f()()()(),h(56,"ul",26)(57,"li",27)(58,"a",28),L("click",function(){return s.onTabSelection("users")}),p(59,"Users"),f()(),h(60,"li",27)(61,"a",28),L("click",function(){return s.onTabSelection("roles")}),p(62,"Roles"),f()()()),r&2&&(M(4),x("icon",s.faAlignLeft),M(5),x("icon",s.faBell),M(2),x("icon",s.faExpand),M(37),x("icon",s.faChartSimple),M(7),x("icon",s.faChartSimple),M(3),x("ngClass",F1(7,m6,s.userTabSelected)),M(3),x("ngClass",F1(9,m6,!s.userTabSelected)))},dependencies:[a2,S3,a1,i2,i1,w1,n6],styles:['.header-top[_ngcontent-%COMP%]{height:65px;padding:0 30px;align-items:center;border-bottom:1px solid #0072ba}.header-top[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]{background-color:transparent!important}.header-top[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{color:#fff}.header-top[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%]{margin:0 0 0 auto!important;list-style:none}.header-top[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:27px}.header-top[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:22px;color:#fff}.header-top[_ngcontent-%COMP%]   .profile-link[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]{color:#fff}.header-top[_ngcontent-%COMP%]   .profile-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:35px;border-radius:1000px}.header-top[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]{padding:0!important}.header-top[_ngcontent-%COMP%]   .profile-dropdown[_ngcontent-%COMP%]{width:230px}.header-top[_ngcontent-%COMP%]   .profile-dropdown[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%]{padding-top:15px;align-items:center;color:#fff;flex-direction:column;background:linear-gradient(45deg,#3858f9e6,#8e79fde6),url("./media/info-header-5ITYB2QR.jpg")}.header-top[_ngcontent-%COMP%]   .profile-dropdown[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:1000px}.breadcrumb-header[_ngcontent-%COMP%]{color:#fff}.breadcrumb-header[_ngcontent-%COMP%]   .expenses[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:35px;color:#ffc107}.breadcrumb-header[_ngcontent-%COMP%]   .profit[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:35px;color:#28a745}.breadcrumb-header[_ngcontent-%COMP%]   .content-title[_ngcontent-%COMP%]{color:#ffb500;font-size:20px;text-transform:uppercase;font-weight:500;line-height:1.2}']});let a=c;return a})();var v6=(()=>{let c=class c{ngOnInit(){}constructor(e){this.router=e,this.title="angular-springboot-app"}};c.\u0275fac=function(r){return new(r||c)(H(e1))},c.\u0275cmp=T({type:c,selectors:[["app-root"]],standalone:!0,features:[E],decls:14,vars:0,consts:[[1,"main-container","d-flex"],[1,"side-nav"],["data-bs-scroll","true","tabindex","-1","id","offcanvasWithBothOptions","aria-labelledby","offcanvasWithBothOptionsLabel",1,"offcanvas","offcanvas-start"],[1,"offcanvas-header"],["id","offcanvasWithBothOptionsLabel",1,"offcanvas-title"],["type","button","data-bs-dismiss","offcanvas","aria-label","Close",1,"btn-close"],[1,"offcanvas-body"],[1,"center-content"],[1,"container-fluid"]],template:function(r,s){r&1&&(h(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h5",4),p(5,"Backdrop with scrolling"),f(),k(6,"button",5),f(),h(7,"div",6)(8,"p"),p(9,"Try scrolling the rest of the page to see this option in action."),f()()()(),h(10,"div",7),k(11,"app-header"),h(12,"div",8),k(13,"router-outlet"),f()()())},dependencies:[a2,P3,a1,i2,i1,w1,u6],styles:[".center-content[_ngcontent-%COMP%]{min-width:100%}.offcanvas-backdrop[_ngcontent-%COMP%]{display:none!important}"]});let a=c;return a})();var o2=class{constructor(){this.id="",this.roleName=""}};var D2=class{constructor(){this.id="",this.userName="",this.lastName="",this.role=new o2}};var k1=(()=>{let c=class c{constructor(e,r){this.APIUrl=e,this.http=r}getAll(){return this.http.get(this.APIUrl)}get(e){return this.http.get(`${this.APIUrl}/${e}`)}Update(e){return this.http.put(`${this.APIUrl}`,e)}Create(e){return this.http.post(this.APIUrl,e)}Delete(e){return this.http.delete(`${this.APIUrl}/${e}`)}};c.\u0275fac=function(r){return new(r||c)(m2(String),m2(x2))},c.\u0275prov=O({token:c,factory:c.\u0275fac,providedIn:"root"});let a=c;return a})();var X8="http://localhost:8080/user",p6=(()=>{let c=class c extends k1{constructor(e){super(X8,e)}};c.\u0275fac=function(r){return new(r||c)(m2(x2))},c.\u0275prov=O({token:c,factory:c.\u0275fac,providedIn:"root"});let a=c;return a})();var Q8="http://localhost:8080/role",A1=(()=>{let c=class c extends k1{constructor(e){super(Q8,e)}};c.\u0275fac=function(r){return new(r||c)(m2(x2))},c.\u0275prov=O({token:c,factory:c.\u0275fac,providedIn:"root"});let a=c;return a})();function K8(a,c){if(a&1){let i=c2();h(0,"tr")(1,"th",26),p(2),f(),h(3,"td"),p(4),f(),h(5,"td"),p(6),f(),h(7,"td"),p(8),f(),h(9,"td")(10,"button",27),L("click",function(){let s=U(i).$implicit,n=W();return G(n.openModel(s))}),p(11,"Edit"),f()(),h(12,"td")(13,"button",28),L("click",function(){let s=U(i).$implicit,n=W();return G(n.deleteUser(s.id))}),p(14,"Delete"),f()()()}if(a&2){let i=c.$implicit;M(2),j(i.id),M(2),j(i.userName),M(2),j(i.lastName),M(2),j(i.role.roleName)}}function J8(a,c){if(a&1&&(h(0,"option",29),p(1),f()),a&2){let i=c.$implicit;x("value",i.id),M(),j(i.roleName)}}function Z8(a,c){if(a&1){let i=c2();h(0,"button",30),L("click",function(){U(i);let r=W();return G(r.CreateUser())}),p(1,"Create User"),f()}}function c5(a,c){if(a&1){let i=c2();h(0,"button",30),L("click",function(){U(i);let r=W();return G(r.modifyUser())}),p(1,"Modify User"),f()}}var z6=(()=>{let c=class c{constructor(e,r){this.userService=e,this.roleService=r,this.userList=[],this.roleList=[],this.userToModify=new D2,this.creatingMode=!0,this.getAllUsers(),this.getAllRoles()}getAllUsers(){this.userService.getAll().subscribe(e=>{this.userList=e})}getAllRoles(){this.roleService.getAll().subscribe(e=>{this.roleList=e})}modifyUser(){this.userService.Update(this.userToModify).subscribe(()=>{alert("User Updated Successfully"),window.location.reload()})}CreateUser(){let e={userName:this.userToModify.userName,lastName:this.userToModify.lastName,role:{id:this.userToModify.role.id}};this.userService.Create(e).subscribe(()=>{alert("User Added Successfully"),window.location.reload()})}deleteUser(e){confirm("Are you sure you want to delete this user !!!")&&this.userService.Delete(e).subscribe(()=>{alert("User Deleted Successfully"),window.location.reload()})}openModel(e=new D2){e.id==""?this.userToModify=new D2:(this.creatingMode=!1,this.userToModify=e)}};c.\u0275fac=function(r){return new(r||c)(H(p6),H(A1))},c.\u0275cmp=T({type:c,selectors:[["app-user"]],standalone:!0,features:[E],decls:48,vars:7,consts:[["type","button","data-bs-toggle","modal","data-bs-target","#EditAddUser",1,"btn","btn-success",2,"margin","50px",3,"click"],[1,"table-responsive"],[1,"table","table-striped"],["scope","col"],["scope","col","colspan","2"],[4,"ngFor","ngForOf"],["id","EditAddUser","tabindex","-1","role","dialog","aria-labelledby","exampleModalCenterTitle","aria-hidden","true",1,"modal","fade"],["role","document",1,"modal-dialog","modal-dialog-centered"],[1,"modal-content"],[1,"modal-header"],["id","exampleModalLongTitle",1,"modal-title"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"close"],["aria-hidden","true"],[1,"modal-body"],[1,"input-group"],[1,"input-group-prepend"],["id","",1,"input-group-text"],["type","text",1,"form-control",3,"ngModel","ngModelChange"],[1,"input-group","mb-3"],["for","inputGroupSelect01",1,"input-group-text"],["id","inputGroupSelect01",1,"custom-select",3,"ngModel","ngModelChange"],["selected",""],[3,"value",4,"ngFor","ngForOf"],[1,"modal-footer"],["type","button","data-bs-dismiss","modal",1,"btn","btn-secondary"],["type","button","class","btn btn-primary",3,"click",4,"ngIf"],["scope","row"],["type","button","data-bs-toggle","modal","data-bs-target","#EditAddUser",1,"btn","btn-primary",3,"click"],["type","button",1,"btn","btn-danger",3,"click"],[3,"value"],["type","button",1,"btn","btn-primary",3,"click"]],template:function(r,s){r&1&&(h(0,"button",0),L("click",function(){return s.openModel()}),p(1,"Create New User"),f(),h(2,"div",1)(3,"table",2)(4,"thead")(5,"tr")(6,"th",3),p(7,"S.No."),f(),h(8,"th",3),p(9,"First"),f(),h(10,"th",3),p(11,"Last"),f(),h(12,"th",3),p(13,"Role Name"),f(),h(14,"th",4),p(15,"Action"),f()()(),h(16,"tbody"),v2(17,K8,15,4,"tr",5),f()()(),h(18,"div",6)(19,"div",7)(20,"div",8)(21,"div",9)(22,"h5",10),p(23,"Role"),f(),h(24,"button",11)(25,"span",12),p(26,"\xD7"),f()()(),h(27,"div",13)(28,"div",14)(29,"div",15)(30,"span",16),p(31,"First and last name"),f()(),h(32,"input",17),L("ngModelChange",function(t){return s.userToModify.userName=t}),f(),h(33,"input",17),L("ngModelChange",function(t){return s.userToModify.lastName=t}),f()(),k(34,"br"),h(35,"div",18)(36,"div",15)(37,"label",19),p(38,"Roles"),f()(),h(39,"select",20),L("ngModelChange",function(t){return s.userToModify.role.id=t}),h(40,"option",21),p(41,"Choose..."),f(),v2(42,J8,2,2,"option",22),f()()(),h(43,"div",23)(44,"button",24),p(45,"Close"),f(),v2(46,Z8,2,0,"button",25)(47,c5,2,0,"button",25),f()()()()),r&2&&(M(17),x("ngForOf",s.userList),M(15),x("ngModel",s.userToModify.userName),M(),x("ngModel",s.userToModify.lastName),M(6),x("ngModel",s.userToModify.role.id),M(3),x("ngForOf",s.roleList),M(4),x("ngIf",s.creatingMode),M(),x("ngIf",!s.creatingMode))},dependencies:[i2,a4,i4,y2,f1,o1,R2,a2,Z2,c1]});let a=c;return a})();function a5(a,c){if(a&1){let i=c2();h(0,"tr")(1,"th",20),p(2),f(),h(3,"td"),p(4),f(),h(5,"td")(6,"button",21),L("click",function(){let s=U(i).$implicit,n=W();return G(n.openModel(s))}),p(7,"Edit"),f()(),h(8,"td")(9,"button",22),L("click",function(){let s=U(i).$implicit,n=W();return G(n.deleteRole(s.id))}),p(10,"Delete"),f()()()}if(a&2){let i=c.$implicit;M(2),j(i.id),M(2),j(i.roleName)}}function e5(a,c){if(a&1){let i=c2();h(0,"button",23),L("click",function(){U(i);let r=W();return G(r.createRole())}),p(1,"Create User"),f()}}function i5(a,c){if(a&1){let i=c2();h(0,"button",23),L("click",function(){U(i);let r=W();return G(r.modifyRole())}),p(1,"Modify User"),f()}}var V6=(()=>{let c=class c{constructor(e){this.roleService=e,this.roleList=[],this.newRole=new o2,this.creatingMode=!0,this.getAllRoles()}getAllRoles(){this.roleService.getAll().subscribe(e=>{this.roleList=e})}deleteRole(e){confirm("Are you sure you want to delete this role !!!")&&this.roleService.Delete(e).subscribe(()=>{alert("Role Deleted Successfully"),window.location.reload()})}createRole(){let e={roleName:this.newRole.roleName};this.roleService.Create(e).subscribe(()=>{alert("Role Created Successfully"),window.location.reload()})}modifyRole(){this.roleService.Update(this.newRole).subscribe(()=>{alert("Role Updated Successfully"),window.location.reload()})}openModel(e=new o2){e.id==""?this.newRole=new o2:(this.creatingMode=!1,this.newRole=e)}};c.\u0275fac=function(r){return new(r||c)(H(A1))},c.\u0275cmp=T({type:c,selectors:[["app-role"]],standalone:!0,features:[E],decls:33,vars:4,consts:[["type","button","data-bs-toggle","modal","data-bs-target","#EditAddRole",1,"btn","btn-success",2,"margin","50px",3,"click"],[1,"table"],["scope","col"],["scope","col","colspan","2"],[4,"ngFor","ngForOf"],["id","EditAddRole","tabindex","-1","role","dialog","aria-labelledby","exampleModalCenterTitle","aria-hidden","true",1,"modal","fade"],["role","document",1,"modal-dialog","modal-dialog-centered"],[1,"modal-content"],[1,"modal-header"],["id","exampleModalLongTitle",1,"modal-title"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"close"],["aria-hidden","true"],[1,"modal-body"],[1,"input-group","mb-3"],[1,"input-group-prepend"],["id","inputGroup-sizing-default",1,"input-group-text"],["type","text",1,"form-control",3,"ngModel","ngModelChange"],[1,"modal-footer"],["type","button","data-bs-dismiss","modal",1,"btn","btn-secondary"],["type","button","class","btn btn-primary",3,"click",4,"ngIf"],["scope","row"],["type","button","data-toggle","modal","data-target","#EditAddRole",1,"btn","btn-primary",3,"click"],["type","button",1,"btn","btn-danger",3,"click"],["type","button",1,"btn","btn-primary",3,"click"]],template:function(r,s){r&1&&(h(0,"button",0),L("click",function(){return s.openModel()}),p(1,"Create New Role"),f(),h(2,"table",1)(3,"thead")(4,"tr")(5,"th",2),p(6,"#"),f(),h(7,"th",2),p(8,"Name Role"),f(),h(9,"th",3),p(10,"Action"),f()()(),h(11,"tbody"),v2(12,a5,11,2,"tr",4),f()(),h(13,"div",5)(14,"div",6)(15,"div",7)(16,"div",8)(17,"h5",9),p(18,"Role"),f(),h(19,"button",10)(20,"span",11),p(21,"\xD7"),f()()(),h(22,"div",12)(23,"div",13)(24,"div",14)(25,"span",15),p(26,"Role Name"),f()(),h(27,"input",16),L("ngModelChange",function(t){return s.newRole.roleName=t}),f()()(),h(28,"div",17)(29,"button",18),p(30,"Close"),f(),v2(31,e5,2,0,"button",19)(32,i5,2,0,"button",19),f()()()()),r&2&&(M(12),x("ngForOf",s.roleList),M(15),x("ngModel",s.newRole.roleName),M(4),x("ngIf",s.creatingMode),M(),x("ngIf",!s.creatingMode))},dependencies:[i2,y2,o1,R2,a2,Z2,c1]});let a=c;return a})();var M6=[{path:"users",component:z6},{path:"roles",component:V6},{path:"",redirectTo:"/users",pathMatch:"full"}];var C6={providers:[F3(M6),D3(),w3()]};var r5={providers:[_3()]},g6=N3(C6,r5);var s5=()=>k3(v6,g6),k7=s5;export{k7 as a};
