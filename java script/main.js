//console.log("Hello world")
//
//confirm("Вы согласны с политикой конфиденциальности сайта?")
//prompt("Введите Ваше Имя и фамилию")
//let t =9.5
//let v=7.66
//let s= t*v
//console.log(s)


//let name = prompt("Введите имя")
//alert ("Привет, " + name +", удачных покупок!")

//let number = Number(prompt ("Введите число"))
//let next = number+1
//let previous= number-1
//alert("Следующее за числом " + number + ", число" + next)
//alert( "Предыдущее числу " + number + ", число" + previous)

//let number= Number(prompt("Введите число"))
//let number1 = Number(prompt("Введите число"))
//let middle = (number+number1)/2
//alert("Среднее арифметическое числа " + number+ " и числа " + number1 + ", равно " + middle)

//let pages = Number(prompt("Введите число"))
//let strings =50
//let letters =61
//let symbols =pages*strings*letters
//let volume =symbols/1024
//alert("Книга, состаящая из "+ pages +" страниц, будет занимать " + volume +" килобайт")

//let h = Number(prompt("Введите число"))
//let degree = 20-6*h
 //alert("На высоте " + h + " киллометров, температура воздуха равна " + degree +" градусов, если на земле температура равна 20 градусам")

//let C =Number(prompt("Введите число"))
//let K = C-273.15
//let F = C*1.8
//alert("Если температура в Цельсия равна " + C + " градусов, то по Кельвину она равна " + K +" градусам, а по Фаренгейту она будет равнятся " + F + " градусам")

//let n = Number(prompt("Введите двузначное число"));
//let k = Number(prompt("Введите число k"));
//let n2 = n + k*100;
//let n3 = n2*10 + k;
//alert(`При приписывании к числу ${n}, числа ${k} в начало и в конец, получится число ${n3}`)

// let money = Number(prompt("Колличество денег"));
// let cost = Number(prompt("Стоимость"))
// if(money>cost)
// {
//     alert("Денег хватит")
// }
// else
// {
//     alert("Денег не хватит")
// }
// let number = Number(prompt("Введите число"))
// if(number>0)
// {
//     alert(`Модуль равен ${number}`)
// }
// else{
//     alert(`Модуль равен ${-number}`)
// }
// let a =Number(prompt("Введите число"))
// let b =Number(prompt("Введите число"))
// let c= Number(prompt("Введите число"))
// if(a>b)
// {
//     if(a>c)
//     {
//         alert(`Число ${a} больше числа ${b} и больше числа ${c}`)
//     }
//     else{
//         alert(`Число ${c} больше числа ${a} и больше числа ${b}`)

//     }
// }
// else
// {
//     if(b>c)
//     {
//         alert(`Число ${b} больше числа ${a} и больше числа ${c}`)
//     }
//     else{
//         alert(`Число ${c} больше числа ${a} и больше числа ${b}`)
//     }
// }   

// let a = Number(prompt("Введите температуру"))
// if((a>24)&&(a<46))
// {
//     alert("Можно идти купаться")
// }
// else
// {
//     alert("Нельзя идти купаться")
// }
// let a = Number(prompt("Введите возраст"))
// if(a<100){
//     alert(`Колличество голов дракона:  ${a*3} ` )
// }
// else{
//     alert(`Колличество голов дракона :  ${100*3+((a-100)*3)}` )
// }
// let a = Number(prompt("Введите число"))
// let b =  Number(prompt("Введите число"))
// let c = Number(prompt("Введите число"))
// let s = 0
// if (a>0){
//     s=0+a
// }
// if (b>0){
//     s=s+b
// }
// if(c>0){
//     s=s+c
// }
// alert(`Сумма положительных чисел равна ${s}`)
// if((a<0)&&(b<0)&&(c<0)){
//     alert ("Все числа отрицательные")
// }

// let health=Number(prompt("Введите здоровье"))
// let armour = Number(prompt("Введите броню"))
// let damage = Number(prompt("Введите урон"))
// let health2 = (health+armour)-damage
// if(health2>0){
    
//     alert(`Полученный урон: ${damage}; текущее здоровье: ${health2}`)
// }
// else{

//     alert(`Урон: ${damage}. Персонаж умер.`)
// }
// if(armour>=damage){
//     alert(`Урон не прошел. Текущее здоровье: ${health}`)
// }
// // if(health2<1){
//     alert(`Урон: ${damage}. Персонаж умер.`)
// }

// let N =Number(prompt("Введите колличество убитых мобов"))
// if((N<10)&&(N>0)){
//     alert("Выплата 1000 золотых")
// }
// if((N>9)&&(N<20)){
//     alert("Выплата 2000 золотых")
// }
// if((N>19)&&(N<30)){
//     alert("Выплата 3500 золотых")
// }
// if(N>29){
//     alert("Выплата 5000 золотых")
// }

// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)
// i=1
// while(i<100){
//     i+=2
//     console.log(i)
//     // if(i%2==1){
//     //     console.log(i)
//     // }
    

// }
// let n = Number(prompt("Введите число от 1 до 9"))
// =let s  0
// let a = Number(prompt("Введите число "))
// let b = Number(prompt("Введите число"))
// let s = 0
// i=1
// while(i<b+1){
//     i+=1
//     s=s+a
//     }
// console.log(`A * B = ${s}  `)

i=5000
while(i>1){
    i-=1
    if(i%139==0){
    console.log(i)
    break
    }
    }
