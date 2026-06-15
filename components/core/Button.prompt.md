Solid navy primary action; use for the main call-to-action on a screen (Next, Restart, Submit). One per view.

```jsx
<Button variant="primary" icon="🏁" onClick={submit}>Ver resultado</Button>
<Button variant="secondary" icon="←">Anterior</Button>
<Button variant="slides" as="a" href="#" icon="📊">Ver slides</Button>
```

Variants: `primary` (navy fill), `secondary` (outlined, navy text), `slides` (light slate link button). Sizes `sm` / `md` / `lg`. Pass `disabled` to dim. Icons are typically emoji strings.
