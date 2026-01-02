// //Player 1
// let randomNumber1 = Math.floor(Math.random() * 6) + 1 // Obter o numero aleatório até 6.

// let randomDiceImg = 'dice' + randomNumber1 + '.png'

// let randomImgSource = './img/' + randomDiceImg

// let image1 = document.querySelectorAll('img')[0]

// image1.setAttribute('src', randomImgSource)


// // Player 2
// let randomNumber2 = Math.floor(Math.random() * 6) + 1 // Obter o numero aleatório até 6.

// let randomImageSource2 = './img/dice' + randomNumber2 + '.png'

// document.querySelectorAll('img')[1].setAttribute('src', randomImageSource2)

// if(randomNumber1 > randomNumber2){
//     document.querySelector('h1').innerHTML = '🏆 Jogador 1 venceu!'
// }else if(randomNumber2 > randomNumber1){
//     document.querySelector('h1').innerHTML = '🏆 Jogador 2 venceu!'
// }else{
//     document.querySelector('h1').innerHTML = '😒 Empatou!'
// }

function RolarDados(){
    
    let randomNumber1 = Math.floor(Math.random() * 6) + 1
    let randomNumber2 = Math.floor(Math.random() * 6) + 1

    let randomImageSource1 = './img/dice' + randomNumber1 + '.png'
    let randomImageSource2 = './img/dice' + randomNumber2 + '.png'

    let image1 = document.querySelectorAll('img')[0].setAttribute('src', randomImageSource1)
    let image2 = document.querySelectorAll('img')[1].setAttribute('src', randomImageSource2)

    if(randomNumber1 > randomNumber2){
        document.querySelector('h1').innerHTML = '🏆 Jogador 1 venceu!'
    }else if(randomNumber2 > randomNumber1){
        document.querySelector('h1').innerHTML = '🏆 Jogador 2 venceu!'
    }else{
        document.querySelector('h1').innerHTML = '😒 Empatou!'
    }
}