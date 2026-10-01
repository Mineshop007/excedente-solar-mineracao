# Excedente solar: vender à rede ou minerar?

Calculadora gratuita que compara o valor da venda do excedente fotovoltaico à rede com o valor esperado de usar esse excedente num minerador de Bitcoin que só funciona enquanto sobra energia.

**Online:** https://mineshop007.github.io/excedente-solar-mineracao/

## Fórmulas

- Energia usada (kWh/dia) = mín(excedente diário, potência do equipamento × horas com excedente)
- Blocos esperados por dia = 144 × (hashrate do equipamento ÷ hashrate da rede) × (horas de mineração ÷ 24)
- Valor esperado = blocos × recompensa média por bloco × (1 − comissão da pool) × preço do BTC
- Comparação: energia usada × preço de venda do excedente (0 € quando não há contrato de venda e o excedente injetado na rede não é pago)

Pressupostos de rede editáveis (1 de outubro de 2026, mempool.space): 990,3 EH/s, recompensa média de 3,1521 BTC por bloco, BTC a 74 365 €, comissão da pool de 2 %. Exemplo: 8 kWh/dia de excedente durante 6 h; preço de venda por omissão de 0,04 €/kWh.

## Limites

Valor esperado, não garantido: na mineração a solo só há pagamento se for encontrado um bloco completo. Não inclui o custo do equipamento, impostos nem alterações de dificuldade. Não são indicadas tarifas: o preço de venda depende do contrato de cada instalação (preço fixo ou indexado ao OMIE). O minerador só deve funcionar com excedente (tomada inteligente ou automação do inversor).

## Testes

```
node test.js
```

## Sobre o projeto

Edição em português europeu (também em [espanhol](https://github.com/Mineshop007/excedentes-solares-mineria)), oferecida pela [Mineshop.eu](https://mineshop.eu/pt), loja que vende os equipamentos incluídos: [mini mineradores de Bitcoin](https://mineshop.eu/pt/mini-bitcoin-miners), [mineradores domésticos](https://mineshop.eu/pt/home-miner), [calculadora de mineração solo](https://mineshop.eu/pt/bitcoin-solo-mining-calculator) e [calculadora de reutilização de calor](https://mineshop.eu/pt/heat-reuse-calculator). Sem cookies nem ferramentas de análise; os valores introduzidos não são enviados para lado nenhum.
