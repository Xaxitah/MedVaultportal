Quiz answer choice with a letter chip. Idle until `answered`, then colored by `status`.

```jsx
<OptionButton letter="A" onClick={pick}>Inibe a COX-2 seletivamente</OptionButton>
<OptionButton letter="B" answered status="correct">Resposta certa</OptionButton>
<OptionButton letter="C" answered status="wrong">Escolha errada</OptionButton>
<OptionButton letter="D" answered status="dimmed">Não escolhida</OptionButton>
```
