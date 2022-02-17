// function 
// процедура 

// function name(params) {
//     инструкция 
// } 

// function sendMessage() {
//     alert("ПРИВЕТ!")
// }
// sendMessage()


// let name = prompt("Введи своё имя") //глобальная переменные 
// let age = +prompt("Введи свой возраст ")
// Java()
// function Java() {
//     let name = "Максим" //локальная переменные 
//     let age = 45
//     alert(`ПРИВЕТ, тебя зовут ${name}. И тебе ${age} лет.`)
// }

// function sendMessage(name, age) {
//     let a = `ПРИВЕТ, тебя зовут ${name}. И тебе ${age} лет.`
//     alert(a)
// }
// let a = prompt(`Как тебя зовут? `)
// let b = +prompt(`Сколько тебе лет? `)
// sendMessage(a, b) // <--аргумент

// фуnкция
// function name(params) {
//     инструкция 
//     return результат 
// }
// let a = name()
// alert(a)

// function sendMessage(name, age) {
//     let message = `ПРИВЕТ, тебя зовут ${name}. И тебе ${age} лет.`
//     return message
// }
// let a = prompt(`Как тебя зовут? `)
// let b = +prompt(`Сколько тебе лет? `)
// let result = sendMessage(a, b)
// alert(result)






// 8.1
// function display_message() {
//     alert("Сегодня мы прошли тему функция. Тема не сложная")
// }
// display_message()

// 8.2
// function favorite_book(title) {
//     alert(`One of my favrite books is ${title}`)
// }
// let a = prompt("your book ")
// favorite_book(a) 

// 8.3
// function make_shirt(size, text) {
//     alert(`Ваш размер ${size}, текст ${text} `)
// }
// let a = prompt("размер футболки ")
// let b = prompt("текст на футболке ")
// make_shirt(a, b)

// 8.4
// function make_shirt(size, text) {
//     alert(`Ваш размер ${size}, текст ${text} `)
// }
// let size = "L"
// let text = "I love JS"
// make_shirt(size, text)
// let text2 = prompt("Введите текст который вы хотите видеть на вашей футболке")
// let size2 = prompt("Введите размер вашей футболке")
// make_shirt(size2, text2)

// 8.5
function describe_city(city, country){
    alert(`${city} это город в ${country}`)
}
let city1 = prompt("Введите город")
let country1 = "Украина"
describe_city(city1, country1)
let city2 = prompt("Введите город")
let country2 = "Украина"
describe_city(city2, country2)
let city3 = prompt("Введите город")
let country3 = prompt("Введите страну")
describe_city(city3, country3)