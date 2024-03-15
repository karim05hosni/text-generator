// console.log(document.querySelector('[name="elements"]'))
// let numelements = document.querySelector('[name="elements"]')
// let txt = document.querySelector('[name="texts"]')
// console.log(numelements)
// console.log(txt)
// console.log(document.forms)
// document.forms[1].onsubmit = function (e) {
//     e.preventDefault()
//     // console.log(numelements.value)
//     // console.log(txt.value)
//     if (document.querySelector('.results').innerHTML ==''){
//     if (numelements.value >= 30000) {
//         document.querySelector('.results').innerText = 'ERROR => you have perceed maximum value'
//     } else {
//     for (i=0; i<numelements.value; i++) {
//         let childiv = document.createElement('div')
//         document.querySelector('.results').appendChild(childiv).innerText = `${txt.value}`
//     }
// }   
// }   else {
//     document.querySelector('.results').innerHTML = ``
// }
// }

console.log(document.querySelector('[name="elements"]'))
let numelements = document.querySelector('[name="elements"]')
let txt = document.querySelector('[name="texts"]')
console.log(numelements)
console.log(txt)
console.log(document.forms)
document.forms[0].onsubmit = function (e) {
    e.preventDefault()
    // console.log(numelements.value)
    // console.log(txt.value)
    if (document.querySelector('.results').innerHTML ==''){
    if (numelements.value >= 30000) {
        document.querySelector('.results').innerText = 'ERROR => you have perceed maximum value'
    } else {
    for (i=0; i<numelements.value; i++) {
        let childiv = document.createElement('div')
        document.querySelector('.results').appendChild(childiv).innerText = `${txt.value}`
    }
}   
}   else {
    document.querySelector('.results').innerHTML = ``
}
}
numelements.oninput = function (){
    numelements.style = 'background-color: #bdbaba; transition: 0.3s; text-shadow: 0.3px 0.4px 1px black'
    if (numelements.value == '') {
        numelements.style = 'background-color:white'
    }
}
txt.oninput = function (){
    txt.style = 'background-color: #bdbaba; transition: 0.3s'
    if (txt.value == '') {
        txt.style = 'background-color:white'
    }
}