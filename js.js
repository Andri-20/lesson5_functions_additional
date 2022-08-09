// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let MinNumber = (num1, num2, num3) => {
    if (num1 < num2 && num1 < num3) {
        console.log(`Найменшим числом є число ${num1}`)
    } else if (num2 < num1 && num2 < num3) {
        console.log(`Найменшим числом є число ${num2}`);
    } else {
        console.log(`Найменшим числом є число ${num3}`);
    }
}
MinNumber(254, 555, 103);
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let MaxNumber = (num1, num2, num3) => {
    if (num1 > num2 && num1 > num3) {
        console.log(`Найбільшим числом є число ${num1}`);
    } else if (num2 > num1 && num2 > num3) {
        console.log(`Найбільшим числом є число ${num2}`);
    } else {
        console.log(`Найбільшим числом є число ${num3}`);
    }
}
MaxNumber(45, 2, 13);

console.log('******************************');


// - створити функцію яка повертає найбільше число з масиву
let Mas = [12, 2, 45,0, 6556,0,0,0,34534534,3777777, 6];
let MaxMasNumber = (array) => {
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
        }
    }
    return max;
}
const MaxNumArray = MaxMasNumber(Mas);
console.log(`Найбільшим числом масиву є ${MaxNumArray}`);
// - створити функцію яка повертає найменьше число з масиву
let MinMasNumber = (array) => {
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        if (min > array[i]) {
            min = array[i];
        }
    }
    return min;
}
const MinNumArray = MinMasNumber(Mas);
console.log(`Найменшим числом масиву є ${MinNumArray}`);
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let SumMasNumber = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
const SumNumArray = SumMasNumber(Mas);
console.log(`Сума елементів масиву дорівнює ${SumNumArray}`);
console.log('******************************');
//
//
//
//
// - Дано натуральное число n. Выведите все числа от 1 до n.

let FunN = (n) => {
    let out = '';
    for (let i = 1; i <= n; i++) {
        out += i + ' ';
    }
    console.log(out);
}
FunN(18);

let FunTwoNumber = (A, B) => {
    let out='';
    if (A < B) {
        for (let i = A; i <= B; i++) {
            out+=i+' ';
        }
        console.log(out);
    } else if (A > B) {
        for (let i = A; i >= B; i--) {
            out+=i+' ';
        }
        console.log(out);
    }
    else
        {
            console.log('A і B рівні');
        }
    }
FunTwoNumber(22, 3)
console.log('*******************************');

//
//
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

const FunIndPlus =(array,i)=>{
  let plus=array[i];
  array[i]=array[i+1];
  array[i+1]=plus;
  return Mas;
}
console.log(FunIndPlus(Mas, 2));

//
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
let ZeroIndexEnd = (array) => {
    for(let i = array.length - 1, j = i; i >= 0; i--){
        if(array[i] === 0){
            let m = i, tmp = array[i];
            while(m < j)
                array[m] = array[++m];
            array[j--] = tmp;
        }
    }
    return Mas;
}
console.log(ZeroIndexEnd(Mas));
console.log('******************************');