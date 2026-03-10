export function formatCurrencyBRL(value) {
  // Formata o valor no pradrão BRL (REAL BRASILEIRO)
  value = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  // Retorna o valor formatado.
  return value;
}