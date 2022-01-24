let a, b, result;

do {
  alert('Введите два числа');
  a = parseInt(prompt('Введите значение а', ''));
  b = parseInt(prompt('Введите значение b', ''));
} while (isNaN(a,b));

  result = ((a+a) === b) ? 'Значения равны' : 'значения не равны';
  alert(result);