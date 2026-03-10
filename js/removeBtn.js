import { expenseList } from "./expense.js";
import { updateTotals } from "./totalUp.js";

// Evento que captura o "REMOVE" da lista.
export function removeBtn() {
  expenseList.addEventListener("click", (event) => {
    // Verifica quando há click no Icon.
    if (event.target.classList.contains("remove-icon")) {
      // Obtem a li pai do elemento clicado.
      const item = event.target.closest(".expense");
      // Remove o item da lista.
      item.remove();
    }

    // Atualiza o total.
    updateTotals();
  });
}
