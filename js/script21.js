let a, b, d, result;

do {
  alert('Введите три числа больше 0, длину трёх сторон прямоугольного треугольника');
  a = parseInt(prompt('Введите катет а', ''));
  b = parseInt(prompt('Введите катет b', ''));
  d = parseInt(prompt('Введите гипотенузу d', ''));
} while ((a <= 0) || (b <= 0) || (d <= 0) || (isNaN(a,b,d)));

  result = ((a*a + b*b) === (d*d)) ? 'Ура: угадали длины сторон треугольника' : 'Надо учить теорему';
  alert(result);