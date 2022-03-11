# Exercícios de Fixação de Javascript - Treino 2 🏋🏽‍♀️
---
# Enunciado
As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia e R$ 1,00 se forem compradas pelo menos 12.
Escreva uma função receba o número de maçãs compradas, calcule e retorne o custo total da compra.
---
# Resposta
```javascript
function calculaPrecoTotal(quantidade) {
    // Escreva seu código aqui
    if (quantidade < 12) {
        return 1.3 * quantidade;
    } else {
        return quantidade;
    };
};
```
