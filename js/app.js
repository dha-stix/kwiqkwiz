//SELECTIONS
let timer = document.querySelector('.timer')
let submitBtn = document.querySelector('.submitBtn')
let startBtn = document.querySelector('.start')

let scoreBigDiv =  document.querySelector('.output')

//OPTIONS SELECTORS
const question1 = Array.from(document.getElementsByName("question1"));
const question2 = Array.from(document.getElementsByName("question2"))
const question3 = Array.from(document.getElementsByName("question3"))
const question4 = Array.from(document.getElementsByName("question4"))
const question5 = Array.from(document.getElementsByName("question5"))
const question6 = Array.from(document.getElementsByName("question6"))
const question7 = Array.from(document.getElementsByName("question7"))
const question8 = Array.from(document.getElementsByName("question8"))
const question9 = Array.from(document.getElementsByName("question9"))
const question10 = Array.from(document.getElementsByName("question10"))

//FUNCTIONS
function acceptSeconds (time) {
    let repeatTime = function () {
        //Makes sure that the input is between 0 - 59
         let seconds = time % 60;
         seconds < 10 ? seconds = '0' + seconds : seconds
         timer.innerHTML = `<i class="fas fa-stopwatch"></i> Time Remaining: 00 : ${seconds}`
         if(time !== 0) {
             time--
             setTimeout(repeatTime, 1000)
        }
        else if(time ===0) {
            let timeout = document.querySelector('.timeout') 
            timeout.classList.add('show-timeout')  
            document.querySelector('main').style.display = 'none';
        }
    }
    repeatTime()
} 


//LOOPS THROUGH THE OPTIONS FOR THE ANSWERS
let sumUpscores = function () {
    //shows the number of questions gotten correctly
    let score = 0
    //Computes the score by looping over the options
    const computeScore = (correctAnswers, index) => {
    for(let i = 0; i < correctAnswers.length; i++) {
        correctAnswers[i].addEventListener('change', function() {
            if(correctAnswers[i].value === index) {
                score += 1
                submitBtn.addEventListener('click', () => {
                    let percentage = Math.round((score /10)*100)
                    document.querySelector('#percent').textContent = `${percentage}%`
                    if(score >= 4 && score <=6) {
                        document.querySelector('.score-image').src = "./images/medium-removebg-preview.png" 
                    }
                    else if(score >= 7) {
                        document.querySelector('.score-image').src = "./images/success-removebg-preview.png"
                    }
                    else {
                        document.querySelector('.score-image').src = "./images/low-removebg-preview.png"
                    }
                    scoreBigDiv.classList.add('output-show')
                    document.querySelector('main').style.display = 'none';
                    document.querySelector('header').style.display = 'none'
                    
})}})}}
        computeScore(question1, 'D')
        computeScore(question2, 'C')
        computeScore(question3, 'D')
        computeScore(question4, 'B')
        computeScore(question5, 'D')
        computeScore(question6, 'D')
        computeScore(question7, 'C')
        computeScore(question8, 'B')
        computeScore(question9, 'D')
        computeScore(question10, 'C')
}
    sumUpscores()

// for(let i = 0; i< question1.length; i++) {
//     let score = 0
//     question1[i].addEventListener('change', function() {
//         if(question1[i].value === 'D') {
            
//         }
//     })
// }
 //EVENT LISTENERS
   
    window.addEventListener('load', function () {
    document.querySelector('.intro').classList.add('active') 
})

startBtn.addEventListener('click', function () {
    document.querySelector('main').classList.add('show')
    document.querySelector('.intro').classList.remove('active') 
    acceptSeconds(55)
})