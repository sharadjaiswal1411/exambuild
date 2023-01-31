"use strict";(self.webpackChunkmeal_api=self.webpackChunkmeal_api||[]).push([[695],{85078:(I,E,t)=>{t.r(E),t.d(E,{SettingsPage:()=>k,default:()=>j});var e=t(67294),m=t(15482),a=t(97132),s=t(68547),l=t(85018),h=t(41580),b=t(11047),f=t(20707),P=t(75515),z=t(29728),D=t(185),R=t(7681),v=t(11276),n=t(74571),d=t(67838),r=t(49066),o=t(17034),g=t(11817),x=t(18446),M=t.n(x),c=t(57197);const S=i=>i;var J=t(18172),U=t(36968),u=t.n(U);const B={isLoading:!0,isSubmiting:!1,initialData:{responsiveDimensions:!0,sizeOptimization:!0,autoOrientation:!1,videoPreview:!1},modifiedData:{responsiveDimensions:!0,sizeOptimization:!0,autoOrientation:!1,videoPreview:!1}},K=(i,C)=>(0,J.default)(i,p=>{switch(C.type){case"CANCEL_CHANGES":{p.modifiedData=i.initialData;break}case"GET_DATA_SUCCEEDED":{p.isLoading=!1,p.initialData=C.data,p.modifiedData=C.data;break}case"ON_CHANGE":{u()(p,["modifiedData",...C.keys.split(".")],C.value);break}case"ON_SUBMIT":{p.isSubmiting=!0;break}case"SUBMIT_SUCCEEDED":{p.initialData=i.modifiedData,p.isSubmiting=!1;break}case"ON_SUBMIT_ERROR":{p.isSubmiting=!1;break}default:return i}});var y=t(16838),O=t(25108);const k=()=>{const{formatMessage:i}=(0,a.useIntl)(),{lockApp:C,unlockApp:p}=(0,s.useOverlayBlocker)(),$=(0,s.useNotification)();(0,s.useFocusWhenNavigate)();const[{initialData:N,isLoading:V,isSubmiting:F,modifiedData:H},Z]=(0,e.useReducer)(K,B,S),Y=(0,e.useRef)(!0);(0,e.useEffect)(()=>{const W=g.Z.CancelToken.source(),_=async()=>{try{const{data:{data:X}}=await c.be.get((0,c.IF)("settings"),{cancelToken:W.token});Z({type:"GET_DATA_SUCCEEDED",data:X})}catch(X){O.error(X)}};return Y.current&&_(),()=>{W.cancel("Operation canceled by the user."),Y.current=!1}},[]);const w=M()(N,H),q=async L=>{if(L.preventDefault(),!w){C(),Z({type:"ON_SUBMIT"});try{await c.be.put((0,c.IF)("settings"),H),Z({type:"SUBMIT_SUCCEEDED"}),$({type:"success",message:{id:"notification.form.success.fields"}})}catch(W){O.error(W),Z({type:"ON_SUBMIT_ERROR"})}p()}},Q=({target:{name:L,value:W}})=>{Z({type:"ON_CHANGE",keys:L,value:W})};return e.createElement(D.o,{tabIndex:-1},e.createElement(m.Helmet,{title:i({id:(0,c.OB)("page.title"),defaultMessage:"Settings - Media Libray"})}),e.createElement("form",{onSubmit:q},e.createElement(d.T,{title:i({id:(0,c.OB)("settings.header.label"),defaultMessage:"Media Library"}),primaryAction:e.createElement(z.z,{disabled:w,"data-testid":"save-button",loading:F,type:"submit",startIcon:e.createElement(l.Z,null),size:"S"},i({id:"global.save",defaultMessage:"Save"})),subtitle:i({id:(0,c.OB)("settings.sub-header.label"),defaultMessage:"Configure the settings for the Media Library"})}),e.createElement(r.D,null,V?e.createElement(s.LoadingIndicatorPage,null):e.createElement(o.A,null,e.createElement(R.K,{spacing:12},e.createElement(h.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(R.K,{spacing:4},e.createElement(b.k,null,e.createElement(P.Z,{variant:"delta",as:"h2"},i({id:(0,c.OB)("settings.blockTitle"),defaultMessage:"Asset management"}))),e.createElement(v.r,{gap:6},e.createElement(n.P,{col:6,s:12},e.createElement(f.s,{"aria-label":"responsiveDimensions","data-testid":"responsiveDimensions",checked:H.responsiveDimensions,hint:i({id:(0,c.OB)("settings.form.responsiveDimensions.description"),defaultMessage:"Enabling this option will generate multiple formats (small, medium and large) of the uploaded asset."}),label:i({id:(0,c.OB)("settings.form.responsiveDimensions.label"),defaultMessage:"Responsive friendly upload"}),name:"responsiveDimensions",offLabel:i({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:i({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:L=>{Q({target:{name:"responsiveDimensions",value:L.target.checked}})}})),e.createElement(n.P,{col:6,s:12},e.createElement(f.s,{"aria-label":"sizeOptimization","data-testid":"sizeOptimization",checked:H.sizeOptimization,hint:i({id:(0,c.OB)("settings.form.sizeOptimization.description"),defaultMessage:"Enabling this option will reduce the image size and slightly reduce its quality."}),label:i({id:(0,c.OB)("settings.form.sizeOptimization.label"),defaultMessage:"Size optimization"}),name:"sizeOptimization",offLabel:i({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:i({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:L=>{Q({target:{name:"sizeOptimization",value:L.target.checked}})}})),e.createElement(n.P,{col:6,s:12},e.createElement(f.s,{"aria-label":"autoOrientation","data-testid":"autoOrientation",checked:H.autoOrientation,hint:i({id:(0,c.OB)("settings.form.autoOrientation.description"),defaultMessage:"Enabling this option will automatically rotate the image according to EXIF orientation tag."}),label:i({id:(0,c.OB)("settings.form.autoOrientation.label"),defaultMessage:"Auto orientation"}),name:"autoOrientation",offLabel:i({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:i({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:L=>{Q({target:{name:"autoOrientation",value:L.target.checked}})}}))))))))))},j=()=>e.createElement(s.CheckPagePermissions,{permissions:y.Z.settings},e.createElement(k,null))},49066:(I,E,t)=>{t.d(E,{D:()=>s});var e=t(67294),m=t(45697),a=t(41580);const s=({children:l})=>e.createElement(a.x,{paddingLeft:10,paddingRight:10},l);s.propTypes={children:m.node.isRequired}},67838:(I,E,t)=>{t.d(E,{T:()=>D});var e=t(67294),m=t(27821),a=t(45697),s=t(75515),l=t(41580),h=t(11047);const b=n=>{const d=(0,e.useRef)(null),[r,o]=(0,e.useState)(!0),g=([x])=>{o(x.isIntersecting)};return(0,e.useEffect)(()=>{const x=d.current,M=new IntersectionObserver(g,n);return x&&M.observe(d.current),()=>{x&&M.disconnect()}},[d,n]),[d,r]};var f=t(98402);const P=(n,d)=>{const r=(0,f.useCallbackRef)(d);(0,e.useLayoutEffect)(()=>{const o=new ResizeObserver(r);return Array.isArray(n)?n.forEach(g=>{g.current&&o.observe(g.current)}):n.current&&o.observe(n.current),()=>{o.disconnect()}},[n,r])},z=()=>{const n=(0,e.useRef)(null),[d,r]=(0,e.useState)(null),[o,g]=b({root:null,rootMargin:"0px",threshold:0});return P(o,()=>{o.current&&r(o.current.getBoundingClientRect())}),(0,e.useEffect)(()=>{n.current&&r(n.current.getBoundingClientRect())},[n]),{containerRef:o,isVisible:g,baseHeaderLayoutRef:n,headerSize:d}},D=n=>{const{containerRef:d,isVisible:r,baseHeaderLayoutRef:o,headerSize:g}=z();return e.createElement(e.Fragment,null,e.createElement("div",{style:{height:g?.height},ref:d},r&&e.createElement(v,{ref:o,...n})),!r&&e.createElement(v,{...n,sticky:!0,width:g?.width}))};D.displayName="HeaderLayout";const R=(0,m.default)(l.x)`
  position: fixed;
  top: 0;
  right: 0;
  width: ${n=>n.width}px;
  z-index: 4;
  box-shadow: ${({theme:n})=>n.shadows.tableShadow};
`,v=e.forwardRef(({navigationAction:n,primaryAction:d,secondaryAction:r,subtitle:o,title:g,sticky:x,width:M,...c},T)=>{const S=typeof o=="string";return x?e.createElement(R,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,background:"neutral0",width:M,"data-strapi-header-sticky":!0},e.createElement(h.k,{justifyContent:"space-between"},e.createElement(h.k,null,n&&e.createElement(l.x,{paddingRight:3},n),e.createElement(l.x,null,e.createElement(s.Z,{variant:"beta",as:"h1",...c},g),S?e.createElement(s.Z,{variant:"pi",textColor:"neutral600"},o):o),r?e.createElement(l.x,{paddingLeft:4},r):null),e.createElement(h.k,null,d?e.createElement(l.x,{paddingLeft:2},d):void 0))):e.createElement(l.x,{ref:T,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:n?6:8,background:"neutral100","data-strapi-header":!0},n?e.createElement(l.x,{paddingBottom:2},n):null,e.createElement(h.k,{justifyContent:"space-between"},e.createElement(h.k,null,e.createElement(s.Z,{as:"h1",variant:"alpha",...c},g),r?e.createElement(l.x,{paddingLeft:4},r):null),d),S?e.createElement(s.Z,{variant:"epsilon",textColor:"neutral600",as:"p"},o):o)});v.displayName="BaseHeaderLayout",v.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0,sticky:!1,width:void 0},v.propTypes={navigationAction:a.node,primaryAction:a.node,secondaryAction:a.node,sticky:a.bool,subtitle:a.oneOfType([a.string,a.node]),title:a.string.isRequired,width:a.number},D.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0},D.propTypes={navigationAction:a.node,primaryAction:a.node,secondaryAction:a.node,subtitle:a.oneOfType([a.string,a.node]),title:a.string.isRequired}},17034:(I,E,t)=>{t.d(E,{A:()=>b});var e=t(67294),m=t(45697),a=t(27821),s=t(41580);const l=(0,a.default)(s.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:f})=>f?"auto 1fr":"1fr"};
`,h=(0,a.default)(s.x)`
  overflow-x: hidden;
`,b=({sideNav:f,children:P})=>e.createElement(l,{hasSideNav:Boolean(f)},f,e.createElement(h,{paddingBottom:10},P));b.defaultProps={sideNav:void 0},b.propTypes={children:m.node.isRequired,sideNav:m.node}},185:(I,E,t)=>{t.d(E,{o:()=>l});var e=t(67294),m=t(45697),a=t(27821);const s=a.default.main`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,l=({labelledBy:h,...b})=>{const f=h||"main-content-title";return e.createElement(s,{"aria-labelledby":f,id:"main-content",tabIndex:-1,...b})};l.defaultProps={labelledBy:void 0},l.propTypes={labelledBy:m.string}},39785:(I,E,t)=>{t.d(E,{A:()=>R});var e=t(85893),m=t(67294),a=t(27821),s=t(41363),l=t(41580),h=t(75515),b=t(11047),f=t(15585);const P=a.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,z=a.default.div`
  animation: ${P} 2s infinite linear;
  will-change: transform;
`,D=(0,a.default)(b.k)`
  background: transparent;
  border: none;

  &[aria-disabled='true'] {
    pointer-events: none;
    svg path {
      fill: ${({theme:v})=>v.colors.neutral600};
    }
  }

  svg {
    display: flex;
    font-size: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:v})=>v.colors.primary600};
  }

  ${f.BF}
`,R=m.forwardRef(({children:v,startIcon:n,endIcon:d,onClick:r,disabled:o=!1,loading:g=!1,...x},M)=>{const c=r&&!o?r:void 0,T=o||g;return(0,e.jsxs)(D,{ref:M,"aria-disabled":T,onClick:c,as:"button",type:"button",...x,children:[(n||g)&&(0,e.jsx)(l.x,{as:"span",paddingRight:2,"aria-hidden":!0,children:g?(0,e.jsx)(z,{children:(0,e.jsx)(s.Loader,{})}):n}),(0,e.jsx)(h.Z,{variant:"pi",textColor:T?"neutral600":"primary600",children:v}),d&&(0,e.jsx)(l.x,{as:"span",paddingLeft:2,"aria-hidden":!0,children:d})]})});R.displayName="TextButton"},20707:(I,E,t)=>{t.d(E,{s:()=>U});var e=t(67294),m=t(27821),a=t(45697),s=t(75228),l=t(41762),h=t(54574),b=t(64777),f=t(63428),P=t(96404),z=t(7681),D=t(11047),R=t(39785),v=t(15585),n=t(75515),d=t(63237),r=t(41580),o=t(88262);const g=m.default.label`
  position: relative;
  display: inline-block;
  z-index: 0;
  width: 100%;
`,x=(0,m.default)(r.x)`
  cursor: ${({disabled:u})=>u?"not-allowed":void 0};
  // Masks the background of each value
  overflow: hidden;
  flex-wrap: wrap;

  ${(0,v.k3)()}
`,M=(0,m.default)(D.k).attrs({hasRadius:!0})`
  background-color: ${({theme:u,checked:B,disabled:A})=>B?A?u.colors.neutral200:u.colors.neutral0:"transparent"};
  border: 1px solid
    ${({theme:u,checked:B,disabled:A})=>B&&B!==null?A?u.colors.neutral300:u.colors.neutral200:A?u.colors.neutral150:u.colors.neutral100};
  position: relative;
  user-select: none;
  z-index: 2;
  flex: 1 1 50%;
  /**
    We declare the defined value because we want the height of the input when 
    the values are in a row to be 40px. But defining a height on the label
    would break the input when it wraps.
  */
  padding-top: ${({size:u})=>`${u==="S"?"2px":"6px"}`};
  padding-bottom: ${({size:u})=>`${u==="S"?"2px":"6px"}`};
`,c=m.default.input`
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  z-index: 1;
  width: 100%;
`,T=e.forwardRef(({size:u,onLabel:B,offLabel:A,children:K,checked:y,disabled:O,onChange:k,...G},j)=>{const{name:i,required:C}=(0,o.U)(),p="neutral600";let $=!y&&y!==null?"danger700":p,N=y?"primary600":p;const V=F=>{O||k(F)};return e.createElement(g,null,e.createElement(d.T,null,K),e.createElement(x,{hasRadius:!0,disabled:O,padding:1,display:"flex",background:O?"neutral150":"neutral100",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral200"},e.createElement(M,{size:u,paddingLeft:3,paddingRight:3,justifyContent:"center",alignItems:"center","aria-hidden":!0,checked:y===null?!1:!y,disabled:O},e.createElement(n.Z,{variant:"pi",fontWeight:"bold",textTransform:"uppercase",textColor:O?"neutral700":$},A)),e.createElement(M,{size:u,paddingLeft:3,paddingRight:3,justifyContent:"center",alignItems:"center","aria-hidden":!0,checked:y===null?!1:y,disabled:O},e.createElement(n.Z,{variant:"pi",fontWeight:"bold",textTransform:"uppercase",textColor:O?"neutral700":N},B)),e.createElement(c,{type:"checkbox","aria-disabled":O,onChange:F=>V(F),name:i,ref:j,"aria-required":C,...G,checked:!(y===null||!y)})))});T.displayName="ToggleCheckbox",T.defaultProps={disabled:!1,checked:!1,onChange:void 0,size:"M"},T.propTypes={checked:a.bool,children:a.string.isRequired,disabled:a.bool,offLabel:a.string.isRequired,onChange:a.func,onLabel:a.string.isRequired,size:a.oneOf(Object.keys(s.J.input))};const S=(0,m.default)(h.g)`
  max-width: 320px;
`,J=(0,m.default)(R.A)`
  align-self: flex-end;
  margin-left: auto;
`,U=({disabled:u,size:B,error:A,hint:K,label:y,name:O,labelAction:k,required:G,id:j,onClear:i,clearLabel:C,checked:p,...$})=>{const N=(0,l.M)("toggleinput",j);return e.createElement(S,{name:O,hint:K,error:A,id:N,required:G},e.createElement(z.K,{spacing:1},e.createElement(D.k,null,e.createElement(b.Q,{action:k},y),C&&i&&p!==null&&!u&&e.createElement(J,{onClick:i},C)),e.createElement(T,{id:N,size:B,checked:p,disabled:u,...$},y),e.createElement(f.J,null),e.createElement(P.c,null)))};U.displayName="ToggleInput",U.defaultProps={checked:!1,clearLabel:void 0,disabled:!1,error:void 0,hint:void 0,id:void 0,label:"",labelAction:void 0,name:"",onClear:void 0,required:!1,size:"M"},U.propTypes={checked:a.bool,clearLabel:a.string,disabled:a.bool,error:a.string,hint:a.oneOfType([a.string,a.node,a.arrayOf(a.node)]),id:a.string,label:a.string,labelAction:a.node,name:a.string,onClear:a.func,required:a.bool,size:a.oneOf(Object.keys(s.J.input))}}}]);
