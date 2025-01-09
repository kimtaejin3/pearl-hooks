import{r as s,R as t}from"./index-BYb6XiQz.js";const d=(e,n)=>{const[l,r]=s.useState(n);return s.useEffect(()=>{const a=window.localStorage.getItem(e);if(typeof window<"u"){const p=a?JSON.parse(a):n;r(p)}},[e,n]),{value:l,setItem:a=>{r(a),window.localStorage.setItem(e,JSON.stringify(a))},removeItem:()=>{r(null),window.localStorage.removeItem(e)}}},i={title:"Hooks/useLocalStorage",parameters:{controls:{expanded:!0}}},o=()=>{const{value:e,setItem:n,removeItem:l}=d("my-key",null);return t.createElement("div",null,t.createElement("span",null,"값을 입력하여 저장해보세요: "),t.createElement("input",{type:"text",value:e??"",onChange:r=>n(r.target.value)}),t.createElement("p",null,"저장된 값을 확인하세요: ",e),t.createElement("br",null),t.createElement("button",{onClick:l},"remove Item"))};o.__docgenInfo={description:"",methods:[],displayName:"Default"};var m,c,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const {
    value,
    setItem,
    removeItem
  } = useLocalStorage<string | null>("my-key", null);
  return <div>
      <span>값을 입력하여 저장해보세요: </span>
      <input type="text" value={value ?? ""} onChange={e => setItem(e.target.value)} />
      <p>저장된 값을 확인하세요: {value}</p>
      <br />
      <button onClick={removeItem}>remove Item</button>
    </div>;
}`,...(u=(c=o.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const v=["Default"],f=Object.freeze(Object.defineProperty({__proto__:null,Default:o,__namedExportsOrder:v,default:i},Symbol.toStringTag,{value:"Module"}));export{o as D,f as L};
