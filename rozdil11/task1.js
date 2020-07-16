Используя оператор ?:

function checkAge(age) {
  return (age > 18) ? true : confirm('Родители разрешили?');
}
Используя оператор || (самый короткий вариант):

function checkAge(age) {
  return (age > 18) || confirm('Родители разрешили?');
}