"use strict";(self.webpackChunkmeal_api=self.webpackChunkmeal_api||[]).push([[302],{40316:(N,x,e)=>{e.r(x),e.d(x,{SingleSignOn:()=>l,default:()=>r});var t=e(67294),s=e(68547),a=e(85018),y=e(17034),O=e(67838),I=e(49066),P=e(29728),F=e(185),A=e(7681),$=e(75515),C=e(20707),B=e(91216),D=e(82562),L=e(11276),z=e(74571),W=e(97132),Z=e(18446),H=e.n(Z),j=e(38683),b=e(48474),T=e(87751),g=e(53209);const k=g.Ry().shape({autoRegister:g.Xg().required(s.translatedErrors.required),defaultRole:g.nK().when("autoRegister",(n,o)=>n?o.required(s.translatedErrors.required):o.nullable())}),f={...T.Z.settings.sso,readRoles:T.Z.settings.roles.read},l=()=>{const{formatMessage:n}=(0,W.useIntl)(),{isLoading:o,allowedActions:{canUpdate:i,canReadRoles:E}}=(0,s.useRBAC)(f),[{formErrors:c,initialData:S,isLoading:p,modifiedData:h,showHeaderButtonLoader:m},M,{handleChange:v,handleSubmit:G}]=(0,b.G4)((0,j.IF)("providers/options"),k,()=>{},["autoRegister","defaultRole"]),{roles:R}=(0,b.bF)(E);(0,s.useFocusWhenNavigate)();const U=o||p;(0,t.useEffect)(()=>{if(c.defaultRole){const d='[name="defaultRole"]';document.querySelector(d).focus()}},[c]);const K=H()(S,h);return t.createElement(y.A,null,t.createElement(s.SettingsPageTitle,{name:"SSO"}),t.createElement(F.o,{tabIndex:-1},t.createElement("form",{onSubmit:d=>{if(K){d.preventDefault();return}G(d)}},t.createElement(O.T,{primaryAction:t.createElement(P.z,{"data-testid":"save-button",disabled:K,loading:m,startIcon:t.createElement(a.Z,null),type:"submit",size:"L"},n({id:"global.save",defaultMessage:"Save"})),title:n({id:"Settings.sso.title",defaultMessage:"Single Sign-On"}),subtitle:n({id:"Settings.sso.description",defaultMessage:"Configure the settings for the Single Sign-On feature."})}),t.createElement(I.D,null,U?t.createElement(s.LoadingIndicatorPage,null):t.createElement(A.K,{spacing:4,background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},t.createElement($.Z,{variant:"delta",as:"h2"},n({id:"global.settings",defaultMessage:"Settings"})),t.createElement(L.r,{gap:4},t.createElement(z.P,{col:6,m:6,s:12},t.createElement(C.s,{"aria-label":"autoRegister","data-testid":"autoRegister",disabled:!i,checked:h.autoRegister,hint:n({id:"Settings.sso.form.registration.description",defaultMessage:"Create new user on SSO login if no account exists"}),label:n({id:"Settings.sso.form.registration.label",defaultMessage:"Auto-registration"}),name:"autoRegister",offLabel:n({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:n({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:d=>{v({target:{name:"autoRegister",value:d.target.checked}})}})),t.createElement(z.P,{col:6,m:6,s:12},t.createElement(B.P,{disabled:!i,hint:n({id:"Settings.sso.form.defaultRole.description",defaultMessage:"It will attach the new authenticated user to the selected role"}),error:c.defaultRole?n({id:c.defaultRole.id,defaultMessage:c.defaultRole.id}):"",label:n({id:"Settings.sso.form.defaultRole.label",defaultMessage:"Default role"}),name:"defaultRole",onChange:d=>{v({target:{name:"defaultRole",value:d}})},placeholder:n({id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"}),value:h.defaultRole},R.map(({id:d,name:Q})=>t.createElement(D.W,{key:d,value:d.toString()},Q))))))))))},r=()=>t.createElement(s.CheckPagePermissions,{permissions:f.main},t.createElement(l,null))},20707:(N,x,e)=>{e.d(x,{s:()=>f});var t=e(67294),s=e(27821),a=e(45697),y=e(75228),O=e(41762),I=e(54574),P=e(64777),F=e(63428),A=e(96404),$=e(7681),C=e(11047),B=e(39785),D=e(15585),L=e(75515),z=e(63237),W=e(41580),Z=e(88262);const H=s.default.label`
  position: relative;
  display: inline-block;
  z-index: 0;
  width: 100%;
`,j=(0,s.default)(W.x)`
  cursor: ${({disabled:l})=>l?"not-allowed":void 0};
  // Masks the background of each value
  overflow: hidden;
  flex-wrap: wrap;

  ${(0,D.k3)()}
`,b=(0,s.default)(C.k).attrs({hasRadius:!0})`
  background-color: ${({theme:l,checked:u,disabled:r})=>u?r?l.colors.neutral200:l.colors.neutral0:"transparent"};
  border: 1px solid
    ${({theme:l,checked:u,disabled:r})=>u&&u!==null?r?l.colors.neutral300:l.colors.neutral200:r?l.colors.neutral150:l.colors.neutral100};
  position: relative;
  user-select: none;
  z-index: 2;
  flex: 1 1 50%;
  /**
    We declare the defined value because we want the height of the input when 
    the values are in a row to be 40px. But defining a height on the label
    would break the input when it wraps.
  */
  padding-top: ${({size:l})=>`${l==="S"?"2px":"6px"}`};
  padding-bottom: ${({size:l})=>`${l==="S"?"2px":"6px"}`};
`,T=s.default.input`
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  z-index: 1;
  width: 100%;
`,g=t.forwardRef(({size:l,onLabel:u,offLabel:r,children:n,checked:o,disabled:i,onChange:E,...c},S)=>{const{name:p,required:h}=(0,Z.U)(),m="neutral600";let M=!o&&o!==null?"danger700":m,v=o?"primary600":m;const G=R=>{i||E(R)};return t.createElement(H,null,t.createElement(z.T,null,n),t.createElement(j,{hasRadius:!0,disabled:i,padding:1,display:"flex",background:i?"neutral150":"neutral100",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral200"},t.createElement(b,{size:l,paddingLeft:3,paddingRight:3,justifyContent:"center",alignItems:"center","aria-hidden":!0,checked:o===null?!1:!o,disabled:i},t.createElement(L.Z,{variant:"pi",fontWeight:"bold",textTransform:"uppercase",textColor:i?"neutral700":M},r)),t.createElement(b,{size:l,paddingLeft:3,paddingRight:3,justifyContent:"center",alignItems:"center","aria-hidden":!0,checked:o===null?!1:o,disabled:i},t.createElement(L.Z,{variant:"pi",fontWeight:"bold",textTransform:"uppercase",textColor:i?"neutral700":v},u)),t.createElement(T,{type:"checkbox","aria-disabled":i,onChange:R=>G(R),name:p,ref:S,"aria-required":h,...c,checked:!(o===null||!o)})))});g.displayName="ToggleCheckbox",g.defaultProps={disabled:!1,checked:!1,onChange:void 0,size:"M"},g.propTypes={checked:a.bool,children:a.string.isRequired,disabled:a.bool,offLabel:a.string.isRequired,onChange:a.func,onLabel:a.string.isRequired,size:a.oneOf(Object.keys(y.J.input))};const J=(0,s.default)(I.g)`
  max-width: 320px;
`,k=(0,s.default)(B.A)`
  align-self: flex-end;
  margin-left: auto;
`,f=({disabled:l,size:u,error:r,hint:n,label:o,name:i,labelAction:E,required:c,id:S,onClear:p,clearLabel:h,checked:m,...M})=>{const v=(0,O.M)("toggleinput",S);return t.createElement(J,{name:i,hint:n,error:r,id:v,required:c},t.createElement($.K,{spacing:1},t.createElement(C.k,null,t.createElement(P.Q,{action:E},o),h&&p&&m!==null&&!l&&t.createElement(k,{onClick:p},h)),t.createElement(g,{id:v,size:u,checked:m,disabled:l,...M},o),t.createElement(F.J,null),t.createElement(A.c,null)))};f.displayName="ToggleInput",f.defaultProps={checked:!1,clearLabel:void 0,disabled:!1,error:void 0,hint:void 0,id:void 0,label:"",labelAction:void 0,name:"",onClear:void 0,required:!1,size:"M"},f.propTypes={checked:a.bool,clearLabel:a.string,disabled:a.bool,error:a.string,hint:a.oneOfType([a.string,a.node,a.arrayOf(a.node)]),id:a.string,label:a.string,labelAction:a.node,name:a.string,onClear:a.func,required:a.bool,size:a.oneOf(Object.keys(y.J.input))}}}]);
