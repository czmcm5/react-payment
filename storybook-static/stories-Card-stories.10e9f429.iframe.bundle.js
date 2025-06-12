"use strict";(self.webpackChunkreact_payment=self.webpackChunkreact_payment||[]).push([[561],{"./src/stories/Card.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Large:()=>Large,Medium:()=>Medium,Small:()=>Small,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Card_stories});var dist=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const card_module={small:"card_small__YTSiW",company:"card_company__JckC6",medium:"card_medium__xQaC5",large:"card_large__aNdEe"},maskCardNumber=cardNum=>cardNum.split("-").map(((part,idx)=>idx<2?part:"*".repeat(part.length))).join(" ");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const colorList={red:"#e24141",blue:"#547ce4",green:"#7dbf73",coolPink:"#d959b7",mint:"#85dec8",warmPink:"#E76E9A",organge:"#F26D3D",yellow:"#F2BC57",default:"lightGray"},SelectColor=_ref=>{let{open,onClick}=_ref;return(0,jsx_runtime.jsx)(Background,{style:{display:open?"":"none"},children:(0,jsx_runtime.jsx)(Box,{children:Object.entries(colorList).map((_ref2=>{let[name,code]=_ref2;return"default"!==name&&(0,jsx_runtime.jsx)(Color,{style:{backgroundColor:code},onClick:()=>onClick(name)},name)}))})})},Background=styled_components_browser_esm.Ay.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #00000062;
`,Box=styled_components_browser_esm.Ay.div`
  position: absolute;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  bottom: 0;
  width: 100%;
  padding: 2rem 1rem 1rem 2.5rem;
  background-color: white;
`,Color=styled_components_browser_esm.Ay.div`
  display: flex;
  aspect-ratio: 1/1;
  height: 3rem;
  margin-bottom: 1rem;
  border-radius: 100%;
  cursor: pointer;
`;SelectColor.__docgenInfo={description:"",methods:[],displayName:"SelectColor",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(color: string) => void",signature:{arguments:[{type:{name:"string"},name:"color"}],return:{name:"void"}}},description:""}}};const Card=_ref=>{var _colorList;let{color,cardNum,MM,YY,name,size="medium",...props}=_ref;const bgColor=null!==(_colorList=colorList[color])&&void 0!==_colorList?_colorList:colorList.default;return(0,jsx_runtime.jsxs)(CardView,{className:card_module[size],...props,style:{backgroundColor:bgColor},children:[(0,jsx_runtime.jsxs)(CardName,{children:[name,"카드"]}),(0,jsx_runtime.jsx)(Chip,{}),(0,jsx_runtime.jsx)(CardNum,{children:maskCardNumber(cardNum)}),(0,jsx_runtime.jsx)(CardDate,{children:`${MM}/${YY}`})]})},component_Card=Card,CardView=styled_components_browser_esm.Ay.div`
  box-sizing: border-box;
  width: 100%;
  margin: 0 auto;
  padding: 3% 5%;
  border-radius: 4px;
  box-shadow: 2px 2px 3px 1px #d5d5d5;
`,CardName=styled_components_browser_esm.Ay.div`
  height: 1rem;
  font-size: 12px;
`,Chip=styled_components_browser_esm.Ay.div`
  width: 20%;
  aspect-ratio: 3/2;
  margin: 10% 0 5% 0;
  border-radius: 4px;
  background-color: #ccb76c;
`,CardNum=styled_components_browser_esm.Ay.div`
  margin-bottom: 0.5rem;
  text-align: center;
  letter-spacing: 2px;
`,CardDate=styled_components_browser_esm.Ay.div``;Card.__docgenInfo={description:"",methods:[],displayName:"Card",props:{size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}},composes:["Pick"]};const Card_stories={title:"Example/Card",component:component_Card,parameters:{layout:"centered"},tags:["autodocs"],args:{onClick:(0,dist.fn)()}},Small={args:{size:"small",color:"mint"}},Medium={},Large={args:{size:"large",color:"red"}},__namedExportsOrder=["Small","Medium","Large"];Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'small',\n    color: 'mint'\n  }\n}",...Small.parameters?.docs?.source}}},Medium.parameters={...Medium.parameters,docs:{...Medium.parameters?.docs,source:{originalSource:"{}",...Medium.parameters?.docs?.source}}},Large.parameters={...Large.parameters,docs:{...Large.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'large',\n    color: 'red'\n  }\n}",...Large.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=stories-Card-stories.10e9f429.iframe.bundle.js.map