import{k as j,i as e,u as l,l as t,r as o,f as d,j as s}from"./index-0e10e5f8.js";/* empty css               */import{y as a,u as _,a as f,F as b,I as c,B as N,b as v}from"./I18nFlags-1647a3d9.js";import{L as S}from"./react-router-dom-74e6b78d.js";import{u as F}from"./useDispatch-6a836615.js";const w=j().shape({email:a.string(e("user.fields.email"),{required:!0}),password:a.string(e("user.fields.password"),{required:!0}),rememberMe:a.boolean(e("user.fields.rememberMe"))});function A(){const i=F(),r=l(t.selectLoading),[m]=o.useState({email:"",password:"",rememberMe:!0});o.useEffect(()=>{i(d.doClearErrorMessage())},[i]);const n=_({resolver:f.yupResolver(w),mode:"onSubmit",defaultValues:m}),u=l(t.selectErrorMessage),h=({email:p,password:g,rememberMe:x})=>{i(d.doSigninWithEmailAndPassword(p,g,x))};return s.jsx("div",{className:"app__singnin",children:s.jsxs("div",{className:"singin__page",children:[s.jsxs("div",{className:"singin__header",children:[s.jsxs("h1",{children:[" ",e("auth.signin")]}),s.jsx("span",{children:e("auth.singindesc")})]}),s.jsx(b,{...n,children:s.jsx("form",{onSubmit:n.handleSubmit(h),children:s.jsxs("div",{className:"singin__form",children:[s.jsxs("div",{className:"singin__group",children:[s.jsxs("label",{htmlFor:"",children:[e("user.fields.email")," "]}),s.jsx(c,{type:"text",name:"email",placeholder:e("user.fields.email"),className:"singin__input",externalErrorMessage:u})]}),s.jsxs("div",{className:"singin__group",children:[s.jsx("label",{htmlFor:"",children:e("user.fields.password")}),s.jsx(c,{type:"text",name:"password",placeholder:e("user.fields.password"),className:"singin__input"})]}),s.jsxs("button",{type:"submit",disabled:r,className:"singin__button",children:[s.jsx(N,{loading:r}),s.jsx("span",{children:e("auth.signin")})]}),s.jsx("div",{className:"singin__donthaveaccount",children:s.jsx(S,{to:"/auth/signup",className:"link-without-underline",children:s.jsx("span",{children:s.jsx("label",{htmlFor:"",className:"signup__link",children:e("auth.createAnAccount")})})})})]})})}),s.jsx(v,{})]})})}export{A as default};
