import{r,R as n}from"./index-BYb6XiQz.js";const i=t=>{const[o,c]=r.useState(t),l=r.useCallback(()=>{c(m=>m+1)},[]);return{value:o,increment:l}},d={title:"Hooks/useCustomHook",parameters:{controls:{expanded:!0}}},e=()=>{const{value:t,increment:o}=i(0);return n.createElement("div",null,n.createElement("p",null,"Value: ",t),n.createElement("button",{onClick:o},"Increment"))};e.__docgenInfo={description:"",methods:[],displayName:"Default"};var s,a,u;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  const {
    value,
    increment
  } = useCustomHook(0);
  return <div>
      <p>Value: {value}</p>
      <button onClick={increment}>Increment</button>
    </div>;
}`,...(u=(a=e.parameters)==null?void 0:a.docs)==null?void 0:u.source}}};const p=["Default"],C=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:p,default:d},Symbol.toStringTag,{value:"Module"}));export{C,e as D};
