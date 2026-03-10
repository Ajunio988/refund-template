import { formatCurrencyBRL } from "./currencyUtils.js";
import { expenseAdd } from "./expense.js";
import { updateTotals } from "./totalUp.js";
import { removeBtn } from "./removeBtn.js";

// Seleciona os elementos do formulário.
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const expense = document.getElementById("expense");
const category = document.getElementById("category");

// Captura o evento de Input para formatar o valor.
amount.oninput = () => {
  // Obtem o valor atual do input e remove os caracteres não númericos.
  let value = amount.value.replace(/\D/g, "");

  // Tranforma o valor em centavos (Ex.: 150/100 = 1.5 que é equivalente a R$ 1,50)
  value = Number(value) / 100;

  // Atualiza o valor do input
  amount.value = formatCurrencyBRL(value);
};

// Captura o evento de submit do formulário para obter os valores.
form.onsubmit = (event) => {
  // Previne o comportamento padrão da página ser recarregada.
  event.preventDefault();

  // Cria um objeto com os detalhes das novas dispesas.
  const newExpense = {
    id: new Date().getTime(),
    expense: expense.value,
    category_id: category.value,
    category_name: category.options[category.selectedIndex].text,
    amount: amount.value,
    created_at: new Date(),
  };

  // Chama a função que adiciona o item na lista.
  expenseAdd(newExpense);
  removeBtn();
  updateTotals();
  reset()
};

function reset() {
  expense.value = ""
  category.value = ""
  amount.value = ""

  // coloca o foco no input de amount.
  expense.focus()
}
