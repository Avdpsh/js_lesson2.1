let a, b, result;

do {
  alert('Введите две переменных');
  a = prompt('Введите значение а', '');
  b = prompt('Введите значение b', '');
} while ((a.length === 0) || (b.length === 0) || (a.trim() == '') || (b.trim() == ''));

if ((isNaN(a)) || (isNaN(b))) {
  result = ((a + a) === b) ? 'Значения равны' : 'значения не равны';
} else {
    result = ((+a + +a) == +b) ? 'Значения равны' : 'значения не равны';
  }

alert(result);
  