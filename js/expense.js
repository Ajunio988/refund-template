// Seleciona os elementos na lista
export const expenseList = document.querySelector("ul");
export const expensesQuantity = document.querySelector("aside header p span");
export const expensesTotal = document.querySelector("aside header h2");

export function expenseAdd(newExpense) {
  try {
    // Cria o elemento (li) para adicionar o item na lista (ul).
    const expenseItem = document.createElement("li");
    expenseItem.classList.add("expense");

    // Cria o icone da categoria.
    const expenseIcon = document.createElement("img");
    expenseIcon.setAttribute("src", `img/${newExpense.category_id}.svg`);
    expenseIcon.setAttribute("alt", `img/${newExpense.category_name}.svg`);

    // Cria a info da despesa.
    const expenseInfo = document.createElement("div");
    expenseInfo.classList.add("expense-info");

    // Cria o nome da despesa.
    const expenseName = document.createElement("strong");
    expenseName.textContent = newExpense.expense;

    // Cria a categoria da despesa.
    const expenseCategory = document.createElement("span");
    expenseCategory.textContent = newExpense.category_name;

    // Adiciona nome e categoria na div das informações da dispesa.
    expenseInfo.append(expenseName, expenseCategory);

    // Cria o valor da despesa.
    const expenseAmount = document.createElement("small");
    expenseAmount.classList.add("expense-amount");
    expenseAmount.innerHTML = `<small>R$</small>${newExpense.amount.toUpperCase().replace("R$", "")}`;

    // Cria o icone de remover.
    const removeIcon = document.createElement("img");
    removeIcon.classList.add("remove-icon");
    removeIcon.setAttribute("src", "img/remove.svg");
    removeIcon.setAttribute("alt", "remover");

    //  Adiciona as informações no item.
    expenseItem.append(expenseIcon, expenseInfo, expenseAmount, removeIcon);
    // Adiciona o item na lista
    expenseList.append(expenseItem);
  } catch (error) {
    alert("Não foi possível atualizar a lista de despesas.");
    console.log(error);
  }
}
