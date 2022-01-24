let a, b, result;

do {
  alert('Введите два числа, произведение которых будет >= 0 и их корень произведения меньше 4');
  a = parseInt(prompt('Введите значение а', ''));
  b = parseInt(prompt('Введите значение b', ''));
} while (((a*b) < 0) || isNaN(a,b));

  result = (Math.sqrt(a*b) < 4) ? 'мало' : 'много';
  alert(result);