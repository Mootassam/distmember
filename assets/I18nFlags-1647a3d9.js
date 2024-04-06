import{r as d,m as De,n as we,o as Tr,p as qe,q as ur,i as ar,s as $e,t as Br,P,j as T,v as _r}from"./index-0e10e5f8.js";var he=e=>e instanceof HTMLElement;const le={BLUR:"blur",CHANGE:"change",INPUT:"input"},ee={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},pr="select",Ne="undefined",J={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};function $r({ref:e},r,t){he(e)&&t&&(e.addEventListener(r?le.CHANGE:le.INPUT,t),e.addEventListener(le.BLUR,t))}var G=e=>e==null;const gr=e=>typeof e=="object";var Y=e=>!G(e)&&!Array.isArray(e)&&gr(e)&&!(e instanceof Date),Ce=e=>/^\w*$/.test(e),re=e=>e.filter(Boolean),vr=e=>re(e.replace(/["|']/g,"").replace(/\[/g,".").replace(/\]/g,"").split("."));function E(e,r,t){let s=-1;const a=Ce(r)?[r]:vr(r),c=a.length,l=c-1;for(;++s<c;){const y=a[s];let o=t;if(s!==l){const O=e[y];o=Y(O)||Array.isArray(O)?O:isNaN(+a[s+1])?{}:[]}e[y]=o,e=e[y]}return e}var Le=(e,r={})=>{for(const t in e)Ce(t)?r[t]=e[t]:E(r,t,e[t]);return r},L=e=>e===void 0,g=(e={},r,t)=>{const s=re(r.split(/[,[\].]+?/)).reduce((a,c)=>G(a)?a:a[c],e);return L(s)||s===e?L(e[r])?t:e[r]:s},Yr=(e,r)=>{for(const t in e)if(g(r,t)){const s=e[t];if(s){if(s.ref.focus&&L(s.ref.focus()))break;if(s.options){s.options[0].ref.focus();break}}}},cr=(e,r)=>{he(e)&&e.removeEventListener&&(e.removeEventListener(le.INPUT,r),e.removeEventListener(le.CHANGE,r),e.removeEventListener(le.BLUR,r))};const lr={isValid:!1,value:""};var Or=e=>Array.isArray(e)?e.reduce((r,t)=>t&&t.ref.checked?{isValid:!0,value:t.ref.value}:r,lr):lr,Wr=e=>[...e].filter(({selected:r})=>r).map(({value:r})=>r),ke=e=>e.type==="radio",xr=e=>e.type==="file",oe=e=>e.type==="checkbox",Vr=e=>e.type===`${pr}-multiple`;const or={value:!1,isValid:!1},fr={value:!0,isValid:!0};var Ar=e=>{if(Array.isArray(e)){if(e.length>1){const a=e.filter(c=>c&&c.ref.checked).map(({ref:{value:c}})=>c);return{value:a,isValid:!!a.length}}const{checked:r,value:t,attributes:s}=e[0].ref;return r?s&&!L(s.value)?L(t)||t===""?fr:{value:t,isValid:!0}:fr:or}return or};function ce(e,r,t,s){const a=e.current[r];if(a){const{ref:{value:c,disabled:l},ref:y,valueAsNumber:o,valueAsDate:O,setValueAs:I}=a;return l&&s?void 0:xr(y)?y.files:ke(y)?Or(a.options).value:Vr(y)?Wr(y.options):oe(y)?Ar(a.options).value:o?+c:O?y.valueAsDate:I?I(c):c}if(t)return g(t.current,r)}function Re(e){return e?!(e instanceof HTMLElement)||e.nodeType===Node.DOCUMENT_NODE?!1:Re(e.parentNode):!0}var C=e=>Y(e)&&!Object.keys(e).length,ze=e=>typeof e=="boolean";function Hr(e,r){const t=r.slice(0,-1).length;let s=0;for(;s<t;)e=L(e)?s++:e[r[s++]];return e}function $(e,r){const t=Ce(r)?[r]:vr(r),s=t.length==1?e:Hr(e,t),a=t[t.length-1];let c;s&&delete s[a];for(let l=0;l<t.slice(0,-1).length;l++){let y=-1,o;const O=t.slice(0,-(l+1)),I=O.length-1;for(l>0&&(c=e);++y<O.length;){const D=O[y];o=o?o[D]:e[D],I===y&&(Y(o)&&C(o)||Array.isArray(o)&&!o.filter(w=>Y(w)&&!C(w)||ze(w)).length)&&(c?delete c[D]:delete e[D]),c=o}}return e}const dr=(e,r)=>e&&e.ref===r;function Gr(e,r,t,s,a,c){const{ref:l,ref:{name:y}}=t,o=e.current[y];if(!a){const O=ce(e,y,s);!L(O)&&E(s.current,y,O)}if(!l.type||!o){delete e.current[y];return}ke(l)||oe(l)?Array.isArray(o.options)&&o.options.length?(re(o.options).forEach((O={},I)=>{(Re(O.ref)&&dr(O,O.ref)||c)&&(cr(O.ref,r),$(o.options,`[${I}]`))}),o.options&&!re(o.options).length&&delete e.current[y]):delete e.current[y]:(Re(l)&&dr(o,l)||c)&&(cr(l,r),delete e.current[y])}var te=e=>G(e)||!gr(e);function Ke(e,r){if(te(e)||te(r))return r;for(const t in r){const s=e[t],a=r[t];try{e[t]=Y(s)&&Y(a)||Array.isArray(s)&&Array.isArray(a)?Ke(s,a):a}catch{}}return e}function He(e,r,t,s,a){let c=-1;for(;++c<e.length;){for(const l in e[c])Array.isArray(e[c][l])?(!t[c]&&(t[c]={}),t[c][l]=[],He(e[c][l],g(r[c]||{},l,[]),t[c][l],t[c],l)):g(r[c]||{},l)===e[c][l]?E(t[c]||{},l):t[c]=Object.assign(Object.assign({},t[c]),{[l]:!0});s&&!t.length&&delete s[a]}return t}var zr=(e,r,t)=>Ke(He(e,r,t),He(r,e,t)),U=e=>typeof e=="string",Ye=(e,r,t,s,a)=>{const c={};for(const l in e.current)(L(a)||(U(a)?l.startsWith(a):Array.isArray(a)&&a.find(y=>l.startsWith(y))))&&(c[l]=ce(e,l,void 0,s));return t?Le(c):Ke(r,Le(c))};function ae(e,r,t){if(te(e)||te(r)||e instanceof Date||r instanceof Date)return e===r;if(!d.isValidElement(e)){const s=Object.keys(e),a=Object.keys(r);if(s.length!==a.length)return!1;for(const c of s){const l=e[c];if(!(t&&c==="ref")){const y=r[c];if((Y(l)||Array.isArray(l))&&(Y(y)||Array.isArray(y))?!ae(l,y,t):l!==y)return!1}}}return!0}var Kr=({errors:e,name:r,error:t,validFields:s,fieldsWithValidation:a})=>{const c=L(t),l=g(e,r);return c&&!!l||!c&&!ae(l,t,!0)||c&&g(a,r)&&!g(s,r)},jr=e=>e instanceof RegExp,ye=e=>Y(e)&&!jr(e)?e:{value:e,message:""},Cr=e=>typeof e=="function",Ge=e=>U(e)||d.isValidElement(e);function mr(e,r,t="validate"){if(Ge(e)||ze(e)&&!e)return{type:t,message:Ge(e)?e:"",ref:r}}var Ur=(e,r,t,s,a)=>r?Object.assign(Object.assign({},t[e]),{types:Object.assign(Object.assign({},t[e]&&t[e].types?t[e].types:{}),{[s]:a||!0})}):{},Me=async(e,r,{ref:t,ref:{value:s},options:a,required:c,maxLength:l,minLength:y,min:o,max:O,pattern:I,validate:D},w)=>{const _=t.name,x={},q=ke(t),k=oe(t),ne=q||k,z=s==="",N=Ur.bind(null,_,r,x),A=(j,V,v,R=J.maxLength,B=J.minLength)=>{const Q=j?V:v;x[_]=Object.assign({type:j?R:B,message:Q,ref:t},N(j?R:B,Q))};if(c&&(!q&&!k&&(z||G(s))||ze(s)&&!s||k&&!Ar(a).isValid||q&&!Or(a).isValid)){const{value:j,message:V}=Ge(c)?{value:!!c,message:c}:ye(c);if(j&&(x[_]=Object.assign({type:J.required,message:V,ref:ne?((e.current[_].options||[])[0]||{}).ref:t},N(J.required,V)),!r))return x}if((!G(o)||!G(O))&&s!==""){let j,V;const v=ye(O),R=ye(o);if(isNaN(s)){const B=t.valueAsDate||new Date(s);U(v.value)&&(j=B>new Date(v.value)),U(R.value)&&(V=B<new Date(R.value))}else{const B=t.valueAsNumber||parseFloat(s);G(v.value)||(j=B>v.value),G(R.value)||(V=B<R.value)}if((j||V)&&(A(!!j,v.message,R.message,J.max,J.min),!r))return x}if(U(s)&&!z&&(l||y)){const j=ye(l),V=ye(y),v=!G(j.value)&&s.length>j.value,R=!G(V.value)&&s.length<V.value;if((v||R)&&(A(v,j.message,V.message),!r))return x}if(U(s)&&I&&!z){const{value:j,message:V}=ye(I);if(jr(j)&&!j.test(s)&&(x[_]=Object.assign({type:J.pattern,message:V,ref:t},N(J.pattern,V)),!r))return x}if(D){const j=ce(e,_,w),V=ne&&a?a[0].ref:t;if(Cr(D)){const v=await D(j),R=mr(v,V);if(R&&(x[_]=Object.assign(Object.assign({},R),N(J.validate,R.message)),!r))return x}else if(Y(D)){let v={};for(const[R,B]of Object.entries(D)){if(!C(v)&&!r)break;const Q=await B(j),pe=mr(Q,V,R);pe&&(v=Object.assign(Object.assign({},pe),N(R,pe.message)),r&&(x[_]=v))}if(!C(v)&&(x[_]=Object.assign({ref:V},v),!r))return x}}return x};const Ue=(e,r,t=[])=>{for(const s in r){const a=e+(Y(r)?`.${s}`:`[${s}]`);te(r[s])?t.push(a):Ue(a,r[s],t)}return t};var yr=(e,r,t,s,a)=>{let c;return t.add(r),C(e)||(c=g(e,r),(Y(c)||Array.isArray(c))&&Ue(r,c).forEach(l=>t.add(l))),L(c)?a?s:g(s,r):c},Jr=({isOnBlur:e,isOnChange:r,isOnTouch:t,isTouched:s,isReValidateOnBlur:a,isReValidateOnChange:c,isBlurEvent:l,isSubmitted:y,isOnAll:o})=>o?!1:!y&&t?!(s||l):(y?a:e)?!l:(y?c:r)?l:!0,We=e=>e.substring(0,e.indexOf("["));const Qr=(e,r)=>RegExp(`^${r}([|.)\\d+`.replace(/\[/g,"\\[").replace(/\]/g,"\\]")).test(e);var Xr=(e,r)=>[...e].some(t=>Qr(r,t)),Zr=e=>e.type===`${pr}-one`;function et(e,r){const t=new MutationObserver(()=>{for(const s of Object.values(e.current))if(s&&s.options)for(const a of s.options)a&&a.ref&&Re(a.ref)&&r(s);else s&&Re(s.ref)&&r(s)});return t.observe(window.document,{childList:!0,subtree:!0}),t}var be=typeof window!==Ne&&typeof document!==Ne;function Z(e){let r;if(te(e)||be&&(e instanceof File||he(e)))return e;if(e instanceof Date)return r=new Date(e.getTime()),r;if(e instanceof Set){r=new Set;for(const t of e)r.add(t);return r}if(e instanceof Map){r=new Map;for(const t of e.keys())r.set(t,Z(e.get(t)));return r}r=Array.isArray(e)?[]:{};for(const t in e)r[t]=Z(e[t]);return r}var br=e=>({isOnSubmit:!e||e===ee.onSubmit,isOnBlur:e===ee.onBlur,isOnChange:e===ee.onChange,isOnAll:e===ee.all,isOnTouch:e===ee.onTouched}),hr=e=>ke(e)||oe(e);const rt=typeof window===Ne,ue=be?"Proxy"in window:typeof Proxy!==Ne;function ot({mode:e=ee.onSubmit,reValidateMode:r=ee.onChange,resolver:t,context:s,defaultValues:a={},shouldFocusError:c=!0,shouldUnregister:l=!0,criteriaMode:y}={}){const o=d.useRef({}),O=d.useRef({}),I=d.useRef({}),D=d.useRef(new Set),w=d.useRef({}),_=d.useRef({}),x=d.useRef({}),q=d.useRef({}),k=d.useRef(a),ne=d.useRef(!1),z=d.useRef(!1),N=d.useRef(),A=d.useRef({}),j=d.useRef({}),V=d.useRef(s),v=d.useRef(t),R=d.useRef(new Set),B=d.useRef(br(e)),{isOnSubmit:Q,isOnTouch:pe}=B.current,W=y===ee.all,[fe,kr]=d.useState({isDirty:!1,isValidating:!1,dirtyFields:{},isSubmitted:!1,submitCount:0,touched:{},isSubmitting:!1,isSubmitSuccessful:!1,isValid:!Q,errors:{}}),M=d.useRef({isDirty:!ue,dirtyFields:!ue,touched:!ue||pe,isValidating:!ue,isSubmitting:!ue,isValid:!ue}),f=d.useRef(fe),ge=d.useRef(),{isOnBlur:Qe,isOnChange:Xe}=d.useRef(br(r)).current;V.current=s,v.current=t,f.current=fe,A.current=l?{}:C(A.current)?Z(a):A.current;const F=d.useCallback((n={})=>{ne.current||(f.current=Object.assign(Object.assign({},f.current),n),kr(f.current))},[]),Ze=()=>M.current.isValidating&&F({isValidating:!0}),ve=d.useCallback((n,u,i=!1,h={},b)=>{let m=i||Kr({errors:f.current.errors,error:u,name:n,validFields:q.current,fieldsWithValidation:x.current});const p=g(f.current.errors,n);u?($(q.current,n),m=m||!p||!ae(p,u,!0),E(f.current.errors,n,u)):((g(x.current,n)||v.current)&&(E(q.current,n,!0),m=m||p),$(f.current.errors,n)),(m&&!G(i)||!C(h)||M.current.isValidating)&&F(Object.assign(Object.assign(Object.assign({},h),v.current?{isValid:!!b}:{}),{isValidating:!1}))},[]),Oe=d.useCallback((n,u)=>{const{ref:i,options:h}=o.current[n],b=be&&he(i)&&G(u)?"":u;ke(i)?(h||[]).forEach(({ref:m})=>m.checked=m.value===b):xr(i)&&!U(b)?i.files=b:Vr(i)?[...i.options].forEach(m=>m.selected=b.includes(m.value)):oe(i)&&h?h.length>1?h.forEach(({ref:m})=>m.checked=Array.isArray(b)?!!b.find(p=>p===m.value):b===m.value):h[0].ref.checked=!!b:i.value=b},[]),Ie=d.useCallback((n,u)=>{if(M.current.isDirty){const i=de();return n&&u&&E(i,n,u),!ae(i,k.current)}return!1},[]),xe=d.useCallback((n,u=!0)=>{if(M.current.isDirty||M.current.dirtyFields){const i=!ae(g(k.current,n),ce(o,n,A)),h=g(f.current.dirtyFields,n),b=f.current.isDirty;i?E(f.current.dirtyFields,n,!0):$(f.current.dirtyFields,n);const m={isDirty:Ie(),dirtyFields:f.current.dirtyFields},p=M.current.isDirty&&b!==m.isDirty||M.current.dirtyFields&&h!==g(f.current.dirtyFields,n);return p&&u&&F(m),p?m:{}}return{}},[]),Pe=d.useCallback(async(n,u)=>{const i=(await Me(o,W,o.current[n],A))[n];return ve(n,i,u),L(i)},[ve,W]),er=d.useCallback(async n=>{const{errors:u}=await v.current(de(),V.current,W),i=f.current.isValid;if(Array.isArray(n)){const h=n.map(b=>{const m=g(u,b);return m?E(f.current.errors,b,m):$(f.current.errors,b),!m}).every(Boolean);return F({isValid:C(u),isValidating:!1}),h}else{const h=g(u,n);return ve(n,h,i!==C(u),{},C(u)),!h}},[ve,W]),Ve=d.useCallback(async n=>{const u=n||Object.keys(o.current);if(Ze(),v.current)return er(u);if(Array.isArray(u)){!n&&(f.current.errors={});const i=await Promise.all(u.map(async h=>await Pe(h,null)));return F({isValidating:!1}),i.every(Boolean)}return await Pe(u)},[er,Pe]),rr=d.useCallback((n,u,{shouldDirty:i,shouldValidate:h})=>{const b={};E(b,n,u);for(const m of Ue(n,u))o.current[m]&&(Oe(m,g(b,m)),i&&xe(m),h&&Ve(m))},[Ve,Oe,xe]),tr=d.useCallback((n,u,i)=>{if(!l&&!te(u)&&E(A.current,n,Object.assign({},u)),o.current[n])Oe(n,u),i.shouldDirty&&xe(n),i.shouldValidate&&Ve(n);else if(!te(u)&&(rr(n,u,i),R.current.has(n))){const h=We(n)||n;E(O.current,n,u),j.current[h]({[h]:g(O.current,h)}),(M.current.isDirty||M.current.dirtyFields)&&i.shouldDirty&&(E(f.current.dirtyFields,n,zr(u,g(k.current,n,[]),g(f.current.dirtyFields,n,[]))),F({isDirty:!ae(Object.assign(Object.assign({},de()),{[n]:u}),k.current)}))}!l&&E(A.current,n,u)},[xe,Oe,rr]),nr=n=>z.current||D.current.has(n)||D.current.has((n.match(/\w+/)||[])[0]),Ae=n=>{let u=!0;if(!C(w.current))for(const i in w.current)(!n||!w.current[i].size||w.current[i].has(n)||w.current[i].has(We(n)))&&(_.current[i](),u=!1);return u};function Er(n,u,i){tr(n,u,i||{}),nr(n)&&F(),Ae(n)}N.current=N.current?N.current:async({type:n,target:u})=>{let i=u.name;const h=o.current[i];let b,m;if(h){const p=n===le.BLUR,H=Jr(Object.assign({isBlurEvent:p,isReValidateOnChange:Xe,isReValidateOnBlur:Qe,isTouched:!!g(f.current.touched,i),isSubmitted:f.current.isSubmitted},B.current));let K=xe(i,!1),me=!C(K)||!p&&nr(i);if(p&&!g(f.current.touched,i)&&M.current.touched&&(E(f.current.touched,i,!0),K=Object.assign(Object.assign({},K),{touched:f.current.touched})),!l&&oe(u)&&E(A.current,i,ce(o,i)),H)return!p&&Ae(i),(!C(K)||me&&C(K))&&F(K);if(Ze(),v.current){const{errors:S}=await v.current(de(),V.current,W),je=f.current.isValid;if(b=g(S,i),oe(u)&&!b&&v.current){const X=We(i),se=g(S,X,{});se.type&&se.message&&(b=se),X&&(se||g(f.current.errors,X))&&(i=X)}m=C(S),je!==m&&(me=!0)}else b=(await Me(o,W,h,A))[i];!p&&Ae(i),ve(i,b,me,K,m)}};function sr(n){if(!l){let u=Z(n);for(const i of R.current)Ce(i)&&!u[i]&&(u=Object.assign(Object.assign({},u),{[i]:[]}));return u}return n}function de(n){if(U(n))return ce(o,n,A);if(Array.isArray(n)){const u={};for(const i of n)E(u,i,ce(o,i,A));return u}return sr(Ye(o,Z(A.current),l))}const Ee=d.useCallback(async(n={})=>{const{errors:u}=await v.current(Object.assign(Object.assign({},de()),n),V.current,W),i=C(u);f.current.isValid!==i&&F({isValid:i})},[W]),Fe=d.useCallback((n,u)=>Gr(o,N.current,n,A,l,u),[l]),Te=d.useCallback(n=>{if(z.current)F();else{for(const u of D.current)if(u.startsWith(n)){F();break}Ae(n)}},[]),Se=d.useCallback((n,u)=>{n&&(Fe(n,u),l&&!re(n.options||[]).length&&($(q.current,n.ref.name),$(x.current,n.ref.name),$(f.current.errors,n.ref.name),E(f.current.dirtyFields,n.ref.name,!0),F({isDirty:Ie()}),M.current.isValid&&v.current&&Ee(),Te(n.ref.name)))},[Ee,Fe]);function Fr(n){n&&(Array.isArray(n)?n:[n]).forEach(u=>o.current[u]&&Ce(u)?delete f.current.errors[u]:$(f.current.errors,u)),F({errors:n?f.current.errors:{}})}function Sr(n,u){const i=(o.current[n]||{}).ref;E(f.current.errors,n,Object.assign(Object.assign({},u),{ref:i})),F({isValid:!1}),u.shouldFocus&&i&&i.focus&&i.focus()}const Be=d.useCallback((n,u,i)=>{const h=i?w.current[i]:D.current;let b=Ye(o,Z(A.current),l,!1,n);if(U(n)){if(R.current.has(n)){const p=g(I.current,n,[]);b=!p.length||p.length!==re(g(b,n,[])).length?I.current:b}return yr(b,n,h,L(g(k.current,n))?u:g(k.current,n),!0)}const m=L(u)?k.current:u;return Array.isArray(n)?n.reduce((p,H)=>Object.assign(Object.assign({},p),{[H]:yr(b,H,h,m)}),{}):(z.current=L(i),Le(!C(b)&&b||m))},[]);function Dr(n,u){return Be(n,u)}function wr(n){for(const u of Array.isArray(n)?n:[n])Se(o.current[u],!0)}function _e(n,u={}){const{name:i,type:h,value:b}=n,m=Object.assign({ref:n},u),p=o.current,H=hr(n),K=Xr(R.current,i),me=ie=>be&&(!he(n)||ie===n);let S=p[i],je=!0,X;if(S&&(H?Array.isArray(S.options)&&re(S.options).find(ie=>b===ie.ref.value&&me(ie.ref)):me(S.ref))){p[i]=Object.assign(Object.assign({},S),u);return}h?S=H?Object.assign({options:[...re(S&&S.options||[]),{ref:n}],ref:{type:h,name:i}},u):Object.assign({},m):S=m,p[i]=S;const se=L(g(A.current,i));(!C(k.current)||!se)&&(X=g(se?k.current:A.current,i),je=L(X),!je&&!K&&Oe(i,X)),C(u)||(E(x.current,i,!0),!Q&&M.current.isValid&&Me(o,W,S,A).then(ie=>{const Pr=f.current.isValid;C(ie)?E(q.current,i,!0):$(q.current,i),Pr!==C(ie)&&F()})),K&&je||!K&&$(f.current.dirtyFields,i),h&&$r(H&&S.options?S.options[S.options.length-1]:S,H||Zr(n),N.current)}function qr(n,u){if(!rt)if(U(n))_e({name:n},u);else if(Y(n)&&"name"in n)_e(n,u);else return i=>i&&_e(i,n)}const Mr=d.useCallback((n,u)=>async i=>{i&&i.preventDefault&&(i.preventDefault(),i.persist());let h={},b=sr(Ye(o,Z(A.current),l,!0));M.current.isSubmitting&&F({isSubmitting:!0});try{if(v.current){const{errors:m,values:p}=await v.current(b,V.current,W);f.current.errors=h=m,b=p}else for(const m of Object.values(o.current))if(m){const{name:p}=m.ref,H=await Me(o,W,m,A);H[p]?(E(h,p,H[p]),$(q.current,p)):g(x.current,p)&&($(f.current.errors,p),E(q.current,p,!0))}C(h)&&Object.keys(f.current.errors).every(m=>m in o.current)?(F({errors:{},isSubmitting:!0}),await n(b,i)):(f.current.errors=Object.assign(Object.assign({},f.current.errors),h),u&&await u(f.current.errors,i),c&&Yr(o.current,f.current.errors))}finally{f.current.isSubmitting=!1,F({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:C(f.current.errors),submitCount:f.current.submitCount+1})}},[c,W]),Nr=({errors:n,isDirty:u,isSubmitted:i,touched:h,isValid:b,submitCount:m,dirtyFields:p})=>{b||(q.current={},x.current={}),O.current={},D.current=new Set,z.current=!1,F({submitCount:m?f.current.submitCount:0,isDirty:u?f.current.isDirty:!1,isSubmitted:i?f.current.isSubmitted:!1,isValid:b?f.current.isValid:!1,dirtyFields:p?f.current.dirtyFields:{},touched:h?f.current.touched:{},errors:n?f.current.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},Lr=(n,u={})=>{if(be){for(const i of Object.values(o.current))if(i){const{ref:h,options:b}=i,m=hr(h)&&Array.isArray(b)?b[0].ref:h;if(he(m))try{m.closest("form").reset();break}catch{}}}o.current={},k.current=Object.assign({},n||k.current),n&&Ae(""),Object.values(j.current).forEach(i=>Cr(i)&&i()),A.current=l?{}:Z(n||k.current),Nr(u)};d.useEffect(()=>{t&&M.current.isValid&&Ee(),ge.current=ge.current||!be?ge.current:et(o,Se)},[Se,k.current]),d.useEffect(()=>()=>{ge.current&&ge.current.disconnect(),ne.current=!0,Object.values(o.current).forEach(n=>Se(n,!0))},[]),!t&&M.current.isValid&&(fe.isValid=ae(q.current,x.current)&&C(f.current.errors));const ir={trigger:Ve,setValue:d.useCallback(Er,[tr,Ve]),getValues:d.useCallback(de,[]),register:d.useCallback(qr,[k.current]),unregister:d.useCallback(wr,[]),formState:ue?new Proxy(fe,{get:(n,u)=>{if(u in n)return M.current[u]=!0,n[u]}}):fe},Ir=d.useMemo(()=>Object.assign({isFormDirty:Ie,updateWatchedValue:Te,shouldUnregister:l,updateFormState:F,removeFieldEventListener:Fe,watchInternal:Be,mode:B.current,reValidateMode:{isReValidateOnBlur:Qe,isReValidateOnChange:Xe},validateResolver:t?Ee:void 0,fieldsRef:o,resetFieldArrayFunctionRef:j,useWatchFieldsRef:w,useWatchRenderFunctionsRef:_,fieldArrayDefaultValuesRef:O,validFieldsRef:q,fieldsWithValidationRef:x,fieldArrayNamesRef:R,readFormStateRef:M,formStateRef:f,defaultValuesRef:k,shallowFieldsStateRef:A,fieldArrayValuesRef:I},ir),[k.current,Te,l,Fe,Be]);return Object.assign({watch:Dr,control:Ir,handleSubmit:Mr,reset:d.useCallback(Lr,[]),clearErrors:d.useCallback(Fr,[]),setError:d.useCallback(Sr,[]),errors:fe.errors},ir)}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function tt(e,r){var t={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&r.indexOf(s)<0&&(t[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,s=Object.getOwnPropertySymbols(e);a<s.length;a++)r.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(e,s[a])&&(t[s[a]]=e[s[a]]);return t}const Je=d.createContext(null);Je.displayName="RHFContext";const nt=()=>d.useContext(Je),ft=e=>{var{children:r}=e,t=tt(e,["children"]);return d.createElement(Je.Provider,{value:Object.assign({},t)},r)},dt={generic(e){return De().label(e)},string(e,r){r=r||{};let t=we().transform((s,a)=>a===""?null:s).nullable(!0).trim().label(e);return r.required&&(t=t.required()),(r.min||r.min===0)&&(t=t.min(r.min)),r.max&&(t=t.max(r.max)),r.matches&&(t=t.matches(r.matches)),t},boolean(e,r){return Tr().default(!1).label(e)},relationToOne(e,r){r=r||{};let t=De().nullable(!0).label(e).transform((s,a)=>a?a.id:null);return r.required&&(t=t.required()),t},stringArray(e,r){r=r||{};let t=qe().compact().ensure().of(we().transform((s,a)=>a===""?null:s).trim()).label(e);return(r.required||r.min)&&(t=t.required()),r.min||r.min===0?t=t.min(r.min):r.required&&(t=t.min(1)),r.max&&(t=t.max(r.max)),t},relationToMany(e,r){r=r||{};let t=qe().nullable(!0).label(e).transform((s,a)=>!a||!a.length?[]:a.map(c=>c.id));return(r.required||r.min)&&(t=t.required()),r.min||r.min===0?t=t.min(r.min):r.required&&(t=t.min(1)),r.max&&(t=t.max(r.max)),t},integer(e,r){r=r||{};let t=ur().transform((s,a)=>a===""?null:s).integer().nullable(!0).label(e);return r.required&&(t=t.required()),(r.min||r.min===0)&&(t=t.min(r.min)),r.max&&(t=t.max(r.max)),t},images(e,r){r=r||{};let t=qe().nullable(!0).label(e);return(r.required||r.min)&&(t=t.required()),r.min||r.min===0?t=t.min(r.min):r.required&&(t=t.min(1)),r.max&&(t=t.max(r.max)),t},files(e,r){r=r||{};let t=qe().compact().ensure().nullable(!0).label(e);return(r.required||r.min)&&(t=t.required()),r.min||r.min===0?t=t.min(r.min):r.required&&(t=t.min(1)),r.max&&(t=t.max(r.max)),t},enumerator(e,r){r=r||{};let t=we().transform((s,a)=>a===""?null:s).label(e).nullable(!0).oneOf([null,...r.options||[]]);return r.required&&(t=t.required(ar("validation.string.selected"))),t},email(e,r){r=r||{};let t=we().transform((s,a)=>a===""?null:s).nullable(!0).trim().label(e).email();return r.required&&(t=t.required()),(r.min||r.min===0)&&(t=t.min(r.min)),r.max&&(t=t.max(r.max)),r.matches&&(t=t.matches(r.matches)),t},decimal(e,r){r=r||{};let t=ur().transform((s,a)=>a===""?null:s).nullable(!0).label(e);return r.required&&(t=t.required()),(r.min||r.min===0)&&(t=t.min(r.min)),r.max&&(t=t.max(r.max)),t},datetime(e,r){r=r||{};let t=De().nullable(!0).label(e).transform((s,a)=>s?$e(a,"YYYY-MM-DD HH:mm").toISOString():null);return r.required&&(t=t.required()),t},date(e,r){r=r||{};let t=De().nullable(!0).label(e).test("is-date",ar("validation.mixed.default"),s=>s?$e(s,"YYYY-MM-DD").isValid():!0).transform(s=>s?$e(s).format("YYYY-MM-DD"):null);return r.required&&(t=t.required()),t}},st=(e,r)=>Array.isArray(e.inner)&&e.inner.length?e.inner.reduce((t,{path:s,message:a,type:c})=>{const l=t[s]&&t[s].types||{},y=s||c;return Object.assign(Object.assign({},t),y?{[y]:Object.assign(Object.assign({},t[y]||{message:a,type:c}),r?{types:Object.assign(Object.assign({},l),{[c]:l[c]?[...[].concat(l[c]),a]:a})}:{})}:{})},{}):{[e.path]:{message:e.message,type:e.type}},it=(e,r={abortEarly:!1})=>async(t,s,a=!1)=>{try{return r.context,{values:await e.validate(t,Object.assign(Object.assign({},r),{context:s})),errors:{}}}catch(c){const l=st(c,a);return{values:{},errors:Le(l)}}},ut=Object.freeze(Object.defineProperty({__proto__:null,yupResolver:it},Symbol.toStringTag,{value:"Module"})),at=Br(ut);var mt=at;class ct{static errorMessage(r,t,s,a,c=null){var y;if(c)return c;if(!a&&!s[r])return null;const l=t[r];return((y=l==null?void 0:l[0])==null?void 0:y.message)||(l==null?void 0:l.message)||l||null}}function Rr(e){const{label:r,description:t,name:s,hint:a,type:c,placeholder:l,autoFocus:y,autoComplete:o,required:O,externalErrorMessage:I,disabled:D,endAdornment:w,classname:_}=e,{register:x,errors:q,formState:{touched:k,isSubmitted:ne}}=nt(),z=ct.errorMessage(s,q,k,ne,I);return T.jsxs("div",{className:"form-group",children:[T.jsxs("div",{className:w?"input-group":"",children:[!!r&&T.jsx("label",{className:`col-form-label ${O?"required":null}`,htmlFor:s,children:r}),t,T.jsx("input",{className:`singin__input ${z?"__danger":""}`,id:s,name:s,type:c,ref:x,onChange:N=>{e.onChange&&e.onChange(N.target.value)},onBlur:N=>{e.onBlur&&e.onBlur(N)},placeholder:l||void 0,autoFocus:y||void 0,autoComplete:o||void 0,disabled:D}),w&&T.jsx("div",{className:"input-group-append",children:T.jsx("span",{className:"input-group-text",children:w})})]}),T.jsx("div",{className:"invalid-feedback",children:z}),!!a&&T.jsx("small",{className:"form-text text-muted",children:a})]})}Rr.defaultProps={type:"text",required:!1};Rr.propTypes={name:P.string.isRequired,required:P.bool,type:P.string,label:P.string,description:P.string,hint:P.string,autoFocus:P.bool,disabled:P.bool,prefix:P.string,placeholder:P.string,autoComplete:P.string,externalErrorMessage:P.string,endAdornment:P.any,onChange:P.any,className:P.string};const yt=e=>e.loading?T.jsx("span",{className:"spinner"}):e.iconClass?T.jsx("i",{className:e.iconClass}):null;function bt(){const e=r=>{_r.doChangeLanguage(r)};return T.jsxs("div",{className:"bottom__signin",children:[T.jsx("div",{style:{cursor:"pointer"},onClick:()=>e("en"),children:T.jsx("img",{src:"/flags/america.png",alt:""})}),T.jsx("div",{style:{cursor:"pointer"},onClick:()=>e("fr"),children:T.jsx("img",{src:"/flags/china.png",width:40,alt:""})})]})}export{yt as B,ft as F,Rr as I,mt as a,bt as b,ot as u,dt as y};
