
{РАБОТА С "..." Найти две самые маленькие цифры 
let arr = [5, 6, 9, -1, 3];
function sumTwoSmallestNumbers(numbers) {
  const a = Math.min(...numbers); /// оператор расширения ... нужет что бы передать каждый элемент массива
  const b = Math.min(...numbers.filter((item) => item !== a));
  let s = a + b;
  return s;
}
console.log(sumTwoSmallestNumbers(arr));

}


{ДВОЙНЫЕ ЦИКЛЫ Елка из звездочек использование двойных циклов

function starsee (n) {
  let result ='';

  for (let i = 0; i<n; i++){

    for (let j=0; j<n-i;j++){
      result += ' '
    }

    for (let j=0; j<2*i+1;j++){
      result += '*'
    }

    result += '\n'
  }

return result
}

console.log(starsee(50))
}


{РАБОТА С indexOf, set Уникальность всех символов в строке.

Напишите функцию, которая определяет уникальны ли все символы в строке. Регистр должен учитываться: `‘a’` и `‘A’` разные символы. Ответ Boolean


Решение 1:

function unique(s) {
    for (let i = 0; i < s.length; i++) {
      if (s.lastIndexOf(s[i]) !== i) {
        return false
      }
    }
    return true
}

console.log (unique('abcdABC34'))
console.log (unique('AA'))
///////////////////////////////////////////


Решение 2:

function unique(s) {
    const chars = new Set()
    
    for (let i = 0; i < s.length; i++) {
      const current = s[i]
    
      if (chars.has(current)) {
        return false
      }
    
      chars.add(current)
    }
    return true
}

console.log (unique('abcdABC34'))
console.log (unique('AA'))
////////////////////////////////////////


Решение 3: 

function unique(s) {

return new Set(s).size === s.length
}

console.log (unique('abcdABC34'))
console.log (unique('AA'))
}


{РАБОТА С РЕКУРСИЕЙ Плоский массив Распаковать вложеные друг в друга массивы 

Решение 1
function flatten(array) {
let result =[];
for (let i =0; i<array.length; i++){
  if (Array.isArray(array[i])) {const flat = flatten(array[i]) // создать переменую нужно обязательно потому что далее в цикл где j не получится вставить flatten(array[i])
  for (let j = 0; j<flat.length; j++){
      result.push(flat[j])
    } 
  } else result.push(array[i])
}
return result
}

console.log(flatten([[1], [[2, 3]], [[[4]]]])) // -> [1, 2, 3, 4]


Решение 2 

function flatten(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      // добавляем результат рекурсивного вызова в result
      result = result.concat(flatten(array[i]));
    } else {
      result.push(array[i]);
    }
  }
  return result;
}

console.log(flatten([[1], [[2, 3]], [[[4]]]]))

}


{Удаление всех повторяющихся значений в строке

Решение 1:
function removeDupes(str) {
    const chars = {}
    const res = []
  
    for (let i = 0; i < str.length; i++) {
      if (!chars[str[i]]) {
        chars[str[i]] = true
        res.push(str[i])
      }
    }
  }
  
    return res.join('')
    /////////////////////////////////////////////////

Решение 2:
function removeDupes(str) {
  return Array.from(new Set(str)).join('')
}
  ////////////////////////////////////////////////////



console.log(removeDupes('abcd')) // -> 'abcd'
console.log(removeDupes('aabbccdd')) // -> 'abcd'
console.log(removeDupes('abcddbca')) // -> 'abcd'
console.log(removeDupes('abababcdcdcd')) // -> 'abcd'
}

Повернута ли строка?

{Решение 1
function isStringRotated(source, test) {
  if (source.length !== test.length) {
    return false
  }
  
  for (let i = 0; i < source.length; i++) {
    const rotate = source.slice(i, source.length) + source.slice(0, i)
  
    if (rotate === test) {
      return true
    }
  }
  
  return false
}
console.log(isStringRotated('javascript', 'iptjavascr'));

Решение 2 

function isStringRotated(source, test) {
return source.length === test.length && (source + source).includes(test)
}
console.log(isStringRotated('javascript', 'iptjavascr'));
}


{1 МАССИВ ВСЕ ЭЛЕМЕНТЫ 2ГО МАССИВА

function arraySubset(source, subset) {
  if (source.length < subset.length) {
    return false
  }

  for (let i = 0; i < subset.length; i++) {
    const index = source.indexOf(subset[i])
    if (index === -1) {
      return false
    }
    delete source[index]
  }
  return true
}
}


{АННАГРАММЫ использованме sort()

function allAnagrams(array) {
  const sorted = array.map(str => str.split('').sort().join(''))

  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] !== sorted[0]) {
      return false
    }
  }
  return true
}

console.log(allAnagrams(['abcd', 'bdac', 'cabd'])) // true
console.log(allAnagrams(['abcd', 'bdXc', 'cabd'])) // false

}

{ПЕРЕВРНУТЬ МАТРИЦУ 3х3


  Напишите функцию, которая принимает матрицу 3х3 и переворачивает на 90 градусов по часовой стрелке.
  
  **Дополнительно**: Напишите еще 2 функции, которые переворачивают матрицу на 180 и 270 градусов.
  
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]
  
  function rotate(source) {
    const newMatrix = source[0].map(() => [])
  
    for (let i = 0; i < source.length; i++) {
      for (let j = 0; j < source[0].length; j++) {
        newMatrix[j][source.length - 1 - i] = source[i][j]
      }
    }
  
    return newMatrix
  }
  
  function rotate180(source) {
    return rotate(rotate(source))
  }
  
  function rotate270(source) {
    return rotate180(rotate(source))
  }
}


{Перестановка букв 

Решение 1

function swap(s) {
  let result = '';
  for (let i = 1; i < s.length; i += 2) {
    result += s[i] + s[i - 1];
  }
  return result;
}
console.log(swap('123456789'));

Решение 2

function swap(s) {
  let result = '';
  for (let i = 0; i < s.length; i++) {
    if (i % 2 !== 0) {
      continue;
    }
    if (i < s.length - 1) {
      result += s[i + 1];
    } else {
      break;
    }
    result += s[i];
  }
  return result;
}
console.log(swap('abab'));

}


{Определение числа по длине символов

function amountOfPages(summary){
  let result = '';
  let n = 0;

  for (let i = 1; i <= summary; i++) {
    result += i;
    if (result.length === summary) {
      n = i;
      break;
    }
  }

  return n;
}
console.log (amountOfPages(25))

}


{Панграмма. Предложение, в котором каждая буква алфавита встречается хотя бы по одному разу без повторений

{// С другим методом и строка каждый раз преобразовывается в коллбэке
function isPangram(string){
  return 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .every((x) => string.toLowerCase().includes(x));
}
}


{// При помощи Set
function isPangram(string) {
  return new Set(string.toLocaleLowerCase().replace(/[^a-z]/gi, '').split('')).size === 26;
}
}


{// С использованием регулярных выражений
function isPangram(string){
  return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
}
}

}


{РАБОТА С РЕКУРСИЕЙ Функция которая считает все содержимое массивов включая сами массивы 


  // Вариант с циклом
function deepCount(a){
  let count = a.length;
  for (let i=0; i<a.length; i++) if (Array.isArray(a[i])) count += deepCount(a[i]);
  return count;
}



// Вариант с методом reduce
function deepCount(a){
  return a.reduce((s,e)=>s+(Array.isArray(e) ? deepCount(e) : 0),a.length);
}
}


{ЧИСЛА ФИБОНАЧЧИ

function fibonacci(n) {
  const sequence = [1, 1]

  if (n < 2) {
    return sequence.slice(0, n)
  }

  while (sequence.length < n) {
    const last = sequence[sequence.length - 1]
    const prev = sequence[sequence.length - 2]
    sequence.push(last + prev)
  }

  return sequence
}
}




АЛГОМЕТРИЧЕСКИЕ ЗАДАЧИ


{ПРОСТОЙ ПОИСК

Необходимо вернуть индекс числа, если оно есть в массиве. Иначе вернуть -1.

// Time: O(n)
function search(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i
    }
  }
  return -1
}

// Time: O(log(n))
function binary(array, target) {
  let start = 0
  let end = array.length - 1

  if (target < array[start] || target > array[end]) {
    return -1
  }

  while (true) {
    if (target === array[start]) {
      return start
    }

    if (target === array[end]) {
      return end
    }

    if (end - start <= 1) {
      return -1
    }

    const middle = Math.floor((start + end) / 2)

    if (target > array[middle]) {
      start = middle + 1
    } else if (target < array[middle]) {
      end = middle - 1
    } else {
      return middle
    }
  }
}

}


