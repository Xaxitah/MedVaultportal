Rounded segmented toggle for switching between sections (e.g. P1 / P2). Active pill fills navy.

```jsx
const [tab, setTab] = React.useState("p1");
<Tabs value={tab} onChange={setTab}
  tabs={[{id:"p1", label:"P1 · 1ª Prova"}, {id:"p2", label:"P2 · 2ª Prova"}]} />
```
