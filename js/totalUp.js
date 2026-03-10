import { formatCurrencyBRL } from "./currencyUtils.js";
import { expenseList, expensesQuantity, expensesTotal } from "./expense.js";

export function updateTotals() {
  try {
    // Recupera todos os items (li) da lista (ul)
    const items = expenseList.children;

    // Atualiza a quantidades de items da lista.
    expensesQuantity.textContent = `${items.length} ${items.length > 1 ? "despesas" : "despesa"}`;

    // Variavel para incrementar o total.
    let total = 0;

    // Percorre cada item (li) da lista (ul).
    for (let item = 0; item < items.length; item++) {
      const itemAmount = items[item].querySelector(".expense-amount");

      // Remove caracteres não númericos e substituir a vírgula pelo ponto.
      let value = itemAmount.textContent
        .replace(/[^\d,]/g, "")
        .replace(",", ".");

      // Converte o valor para float.
      value = parseFloat(value);

      // Verificar se é um número válido.

      if (isNaN(value)) {
        return alert(
          "Não foi possível calcular o total. O valor não é um número!",
        );
      }

      // Incrementar o valor total.
      total += Number(value);
    }

    // Cria a span para adicionar o R$ formatado.
    const symbolBRL = document.createElement("small");
    symbolBRL.textContent = "R$";

    // Formata o valor e remove o R$ que será exibido pela small com um estilo customizado (CSS).
    total = formatCurrencyBRL(total).toUpperCase().replace("R$", "");

    // Limpa o conteúdo do elemento.
    expensesTotal.innerHTML = ""

    // Adiciona o símbolo da moeda e o valor total formatado. 
    expensesTotal.append(symbolBRL, total)
  } catch (error) {
    console.log(error);
    alert("Não foi possível atualizar os totais.");
  }
}
