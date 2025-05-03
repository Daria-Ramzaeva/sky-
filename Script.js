

/*
//Задание 1

function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
    
}

console.log(min(8, 4);
console.log(min(6, 6);



//Задание 2

function even_or_odd(n) {
    if(n % 2 === 0) {
      return 'Even';
    } else {
      return 'Odd';
    }
}

console.log(even_or_odd(2));
console.log(even_or_odd(3));



//Задание 3

function square(number){
    return number ** 2;
}

console.log(square(5));



//Задание 4



function age() {
    let age = +prompt('Сколько тебе лет?');

    if (age < 0) {
        alert('Вы ввели не правильное значение');
            } else if (age >= 0 && age <= 12) {
            alert('Привет, друг!');
        } else if (age >= 13) {
            alert('Добро пожаловать!');
         } else {
                alert('Вобще не возвраст');
            }
        }

    age();


//Задание 5

function calc(a, b) {
    console.log(isNaN(a));
    console.log(isNaN(b));
    if (isNaN(a) || isNaN(b) )  {
        return 'Одно или оба значения не являются числом'
    } else {
       return a * b; 
    }
}

console.log(calc('hello', 2));



//Задание 6

function getNumber() {
    let number = prompt('введите число');
    if (isNaN(number)) {
        return 'Переданный параметр не является числом';        
    } else {
        return `${number} в кубе равняется ${number ** 3}`};
    }

    console.log(getNumber());
    

    //Задание 7

    function getArea() {
        return Math.PI * this.radius ** 2;
    }

    function getPerimeter() {
        return 2 * Math.PI * this.radius;
    }

    const circle1 = {
        radius: 10,
        methodGetArea: getArea, 
        methodGetPerimeter: getPerimeter,
    }

    const circle2 = {
        radius: 10,
        methodGetArea: getArea, 
        methodGetPerimeter: getPerimeter,
    }

    console.log(circle1.methodGetArea());
    */