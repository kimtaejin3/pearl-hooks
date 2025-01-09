import{ae as e,af as r,ag as s}from"./index-Bn0nu4j6.js";import{useMDXComponents as t}from"./index-CnoIInH0.js";import{L as o,D as c}from"./useLocalStorage.stories-Gowo5hpG.js";import"./iframe-CcVfimJz.js";import"../sb-preview/runtime.js";import"./index-BYb6XiQz.js";import"./index-JWiP3xCa.js";import"./index-D-8MO0q_.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";function i(l){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:o}),`
`,e.jsx(n.h1,{id:"uselocalstorage",children:"useLocalStorage"}),`
`,e.jsx(n.p,{children:"이 커스텀훅은 로컬스토리지에 값을 저장하고, 변경하고, 삭제하는 기능을 제공합니다."}),`
`,e.jsx(n.h2,{id:"특징",children:"특징"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"브라우저의 localStorage API를 간편하게 사용할 수 있습니다"}),`
`,e.jsx(n.li,{children:"값의 자동 직렬화/역직렬화를 지원합니다 (객체, 배열 등도 저장 가능)"}),`
`,e.jsx(n.li,{children:"컴포넌트 간 상태 공유가 가능합니다"}),`
`,e.jsx(n.li,{children:"페이지 새로고침 후에도 데이터가 유지됩니다"}),`
`]}),`
`,e.jsx(n.h2,{id:"파라미터",children:"파라미터"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"key"}),": localStorage에 저장될 키 값 (string)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"initialValue"}),": 초기값 (any)"]}),`
`]}),`
`,e.jsx(n.h2,{id:"반환값",children:"반환값"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value"}),": 현재 저장된 값"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setItem"}),": 값을 업데이트하는 함수"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"removeItem"}),": 저장된 값을 삭제하는 함수, 값이 null이 됩니다"]}),`
`]}),`
`,e.jsx(n.h3,{id:"훅-사용해보기",children:"훅 사용해보기"}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(n.h3,{id:"사용법",children:"사용법"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`export default function App() {
  const { value, setItem, removeItem } = useLocalStorage("my-key", "my-value");

  return (
    <div>
      <p>Value: {value}</p>
      <div>
        <input
          type="text"
          placeholder="value"
          value={value}
          onChange={(e) => setItem(e.target.value)}
        />
        <button onClick={() => removeItem()}>Remove Item</button>
      </div>
    </div>
  );
}
`})})]})}function f(l={}){const{wrapper:n}={...t(),...l.components};return n?e.jsx(n,{...l,children:e.jsx(i,{...l})}):i(l)}export{f as default};
