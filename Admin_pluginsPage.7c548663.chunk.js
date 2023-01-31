"use strict";(self.webpackChunkmeal_api=self.webpackChunkmeal_api||[]).push([[3677],{14928:(T,d,e)=>{e.r(d),e.d(d,{default:()=>B});var t=e(67294),a=e(68547),u=e(15482),o=e(97132),c=e(87751),m=e(14087),n=e(17034),s=e(67838),E=e(49066),P=e(185),r=e(75515),y=e(11057),C=e(63985),f=e(47144),g=e(18374),L=e(550),I=e(23724),N=e(23998);const A=async()=>{const{data:l}=await N.be.get("/admin/plugins");return l},D=l=>{const i=(0,a.useNotification)();return(0,I.useQuery)("list-enabled-plugins",()=>A(),{onSuccess(){l&&l()},onError(){i({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})},x=()=>{const{formatMessage:l}=(0,o.useIntl)(),{notifyStatus:i}=(0,m.G)();(0,a.useFocusWhenNavigate)();const h=l({id:"global.plugins",defaultMessage:"Plugins"}),O=()=>{i(l({id:"app.utils.notify.data-loaded",defaultMessage:"The {target} has loaded"},{target:h}))},{status:p,data:M}=D(O);return p!=="success"&&p!=="error"?t.createElement(n.A,null,t.createElement(P.o,{"aria-busy":!0},t.createElement(a.LoadingIndicatorPage,null))):t.createElement(n.A,null,t.createElement(P.o,null,t.createElement(s.T,{title:h,subtitle:l({id:"app.components.ListPluginsPage.description",defaultMessage:"List of the installed plugins in the project."})}),t.createElement(E.D,null,t.createElement(y.i,{colCount:2,rowCount:M?.plugins?.length??0+1},t.createElement(C.h,null,t.createElement(f.Tr,null,t.createElement(g.Th,null,t.createElement(r.Z,{variant:"sigma",textColor:"neutral600"},l({id:"global.name",defaultMessage:"Name"}))),t.createElement(g.Th,null,t.createElement(r.Z,{variant:"sigma",textColor:"neutral600"},l({id:"global.description",defaultMessage:"description"}))))),t.createElement(L.p,null,M.plugins.map(({name:v,displayName:W,description:R})=>t.createElement(f.Tr,{key:v},t.createElement(g.Td,null,t.createElement(r.Z,{textColor:"neutral800",variant:"omega",fontWeight:"bold"},l({id:`global.plugins.${v}`,defaultMessage:W}))),t.createElement(g.Td,null,t.createElement(r.Z,{textColor:"neutral800"},l({id:`global.plugins.${v}.description`,defaultMessage:R}))))))))))},B=()=>{const{formatMessage:l}=(0,o.useIntl)(),i=l({id:"global.plugins",defaultMessage:"Plugins"});return t.createElement(a.CheckPagePermissions,{permissions:c.Z.marketplace.main},t.createElement(u.Helmet,{title:i}),t.createElement(x,null))}},17034:(T,d,e)=>{e.d(d,{A:()=>n});var t=e(67294),a=e(45697),u=e(27821),o=e(41580);const c=(0,u.default)(o.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:s})=>s?"auto 1fr":"1fr"};
`,m=(0,u.default)(o.x)`
  overflow-x: hidden;
`,n=({sideNav:s,children:E})=>t.createElement(c,{hasSideNav:Boolean(s)},s,t.createElement(m,{paddingBottom:10},E));n.defaultProps={sideNav:void 0},n.propTypes={children:a.node.isRequired,sideNav:a.node}}}]);