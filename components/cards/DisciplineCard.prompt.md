Big clickable tile for a discipline on the portal home. Colored top border + emoji cover + uppercase title + exam-pill footer.

```jsx
<DisciplineCard
  discipline="farm" emoji="💊" title="Farmacologia"
  description="Mecanismos de ação, farmacodinâmica e farmacoterapia"
  footer={<><Pill tone="p1">P1 · 16 temas</Pill><Pill tone="p2">P2 · 12 temas</Pill></>}
/>
```

`discipline` accepts the five accent keys (farm/semi/urol/etica/semiq) or any CSS color. Lifts on hover.
