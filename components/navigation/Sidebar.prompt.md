Dark navy navigation rail used on every portal screen. Compose with `Sidebar.Section` and `Sidebar.Link`.

```jsx
<Sidebar brand="MedVault" tagline="Segundo Cérebro · Medicina">
  <Sidebar.Section>Navegação</Sidebar.Section>
  <Sidebar.Link icon="🏠" active>Início</Sidebar.Link>
  <Sidebar.Section>Disciplinas</Sidebar.Section>
  <Sidebar.Link icon="💊" badge="P1+P2">Farmacologia</Sidebar.Link>
  <Sidebar.Link icon="🩺" badge="P1+P2">Semiologia Médica</Sidebar.Link>
</Sidebar>
```

Active/hover links gain an indigo left border. Links take an emoji `icon` and optional `badge`.
