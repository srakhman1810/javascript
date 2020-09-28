/* ДЗ 2 - работа с массивами и объектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array

 Пример:
   forEach([1, 2, 3], (el) => console.log(el))

   let arr = ['Кукла', 'Мяч', 'Машина'];
   arr.forEach((item,i,arr)=> console.log(item,i,arr)); 

   /// Кукла 0 ['Кукла', 'Мяч', 'Машина']
       Мяч 1 ['Кукла', 'Мяч', 'Машина']
       Машина 2 ['Кукла', 'Мяч', 'Машина']

    Он для каждого элемента массива вызывает функцию callback(item, i, arr):
    item - элемент
    i -  индекс
    arr - массив
    Писать нужно только в таком порядке,а в консоли можно указать ту очередность или 
    опереденный параметр, который нам нужен.
 */

function forEach(array, fn) {
  for (let i = 0; i < array.length; i++) {
    fn(array[i], i, array);
  }
}
/*
function forEach(array) {
  for(var i = 0; i < array.length; i++){
    console.log(array[i], i, array);
  }
}
forEach([1,2,3]); 
/// 1 0 [1,2,3]
    2 1 [1,2,3]
    3 2 [1,2,3]
*/
/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array

 Пример:
   map([1, 2, 3], (el) => el ** 2) // [1, 4, 9]

 Используется для трансформации массива. Он создаёт новый массив, который 
 будет состоять из результатов вызова callback(item, i, arr) для каждого элемента.

  var names = ['HTML', 'CSS', 'JavaScript'];
  var nameLengths = names.map(function(name) {
  return name.length;
  });
  console.log( nameLengths ); // 4,3,10

  let number = [4, 2, 1].map(item => item * item );
  console.log(number); // 16,4,1

 */
function map(array, fn) {
  const modified = [];

  for (let i = 0; i < array.length; i++) {
    modified[i] = fn(array[i], i, array);
  }
  return modified;
}
//не понимаю как на примере ниже подставить значение
// function map(array) {
//   let modified = [];
//   for(var i = 0; i < array.length; i++){
//     modified = Math.pow(array[i], 2);
//     modified[i] = console.log(array[i],i,array);
// }
//   return modified;
// }
// map([2,4,6]);
/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array

 Пример:
   reduce([1, 2, 3], (all, current) => all + current) // 6

   Он применяет функцию callback по очереди к каждому элементу массива слева направо, сохраняя при этом промежуточный результат.

  Аргументы функции callback(previousValue, currentItem, index, arr):

    previousValue – последний результат вызова функции, он же «промежуточный результат».
    currentItem – текущий элемент массива, элементы перебираются по очереди слева-направо.
    index – номер текущего элемента.
    arr – обрабатываемый массив.

  var a = [1,2,3];

  var result = a.reduce(function(sum, current) {
  return sum + current;
}, 0);

  console.log( result ); // 6
   
 */
//зададим функцию с именем reduce и передадим ей три параметра
function reduce(array, fn, initial) {
  const hasInitial = typeof initial !== 'undefined';
  let prev = hasInitial ? initial : array[0];
  for (let i = hasInitial ? 0 : 1; i < array.length; i++) {
    prev = fn(prev, array[i], i, array);
  }
  return prev;
}

/*
 Задание 4:
 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива
 
 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
  // создает пустой массив
  const props = [];

  // Объект, который задан в параметре функции перебирает и пушит в пустой массив с верхним регистром
  for (const n in obj) {
    props.push(n.toUpperCase());
  }
  //полученный результат возвращает
  return props;
}
// здесь надо вызвать функцию и передать ей авгументы
/*
var u = upperProps({ name: 'Сергей', 
                    lastName: 'Петров' });
console.log(u); // ['NAME', 'LASTNAME']
/*


/*
 Задание 5 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат

 Пример:
   const obj = createProxy({});
   obj.foo = 2;
   console.log(obj.foo); // 4
 */
function createProxy(obj) {
  return new Proxy(obj, {
    set(obj, key, value) {
      obj[key] = value ** 2;
      return true;
    },
  });
}

export { forEach, map, reduce, upperProps, createProxy };
