// Converti le temps en heures et minutes
export const calcTime = (time) => {
  const hours = Math.floor(time / 60);
  const mins = time % 60;
  return `${hours}h ${mins}m`;
}

// Converti un nombre en devise €
export const convertMoney = (money) => {
  var formatter = new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
  });
  return formatter.format(money);
}