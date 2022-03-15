document.addEventListener('DOMContentLoaded', () => {

  let select = document.getElementById('select'),
        scoreEl = document.getElementById('score'),
        time = document.getElementById('time'),
        wordEL = document.getElementById('word'),
        modal = document.querySelector('.modal'),
        overlay = document.querySelector('.overlay'),
        showScore = document.getElementById('showScore');


        // const words = [
        //   'sigh',
        //   'tense',
        //   'airplane',
        //   'ball',
        //   'pies',
        //   'juice',
        //   'warlike',
        //   'bad',
        //   'north',
        //   'dependent',
        //   'steer',
        //   'silver',
        //   'highfalutin',
        //   'superficial',
        //   'quince',
        //   'eight',
        //   'feeble',
        //   'admit',
        //   'drag',
        //   'loving',
        //   "abreact",
        //   "abreacted",
        //   "abreacting",
        //   "abreaction",
        //   "abreactions",
        //   "paltrier",
        //   "paltriest",
        //   "paltrily",
        //   "paltriness",
        //   "paltrinesses",
        //   "paltry",
        //   "paludal",
        //   "paludism",
        //   "shiv",
        //   "shiva",
        //   "shivah",
        //   "shivahs",
        //   "shivaree",
        //   "shivareed",
        // "shivareeing",
        // ]


//  set difficulty
/* localStorege ga ma'lumotni saqlab yangi kirilganda medium dan boshlanishni ta'minlaydi */
let difficulty = localStorage.getItem('difficulty') !== null ? localStorage.getItem('difficulty') : 'medium'

/* localStorege ga  saqlangan ma'lumotni sahifa yangilanganda ham select da saqlab qoladi. */
select.value = localStorage.getItem('difficulty') !== null ? localStorage.getItem('difficulty') : 'medium'

input.focus()
////// 

let score = 0
let timeLeft  = 20
let word


        const api = `https://random-word-api.herokuapp.com/all`
function randomNewWord () {
  
  fetch (api).then((data) => {
    return data.json()
  }).then(getWords)

function getWords(data) {
let random = Math.floor(Math.random() * 300)
let newWord = data[random]
word = newWord

wordEL.textContent = word

}

}

randomNewWord ()
let timeInterval = setInterval(updateTime, 1000)

function updateTime() {
  timeLeft--
  time.innerHTML = `${timeLeft} `
   if (timeLeft == 0 ) {
    showScore.innerHTML = score
    clearInterval(timeInterval)
    gameOver()
  }  else if(timeLeft < 5 ){
    time.style.color = 'red'
  }

}

input.addEventListener('input', (e) => {

  console.log(  e.target.value);
  if(e.target.value === word) {
    e.target.value = ''
    randomNewWord ()
    score++
    scoreEl.textContent = score
   
    bodyGradient()

    if(difficulty === 'easy') {
      timeLeft += 5
    } else if(difficulty === 'medium') {
      timeLeft += 3
    } else {
      timeLeft += 2
    }
  } 
})

function gameOver() {
 
  modal.classList.remove('hidden')
  overlay.classList.remove('hidden')
}

select.addEventListener('change', (e) => {

  difficulty = e.target.value
  localStorage.setItem('difficulty', difficulty)
})

function gameOver() {
  modal.classList.remove('hidden')
  overlay.classList.remove('hidden')

}


/////// liner-gradient

let colors = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', "a", "b", "c", "d", "e", "f"];

function gradientColors() {

    let color = "#"
   for(let i = 0; i< 6 ; i++){
      
       let randomColor = Math.floor(Math.random() * colors.length) 
       color+= colors[randomColor]

   }
   return color
     

  }

  let typed = new Typed('#name', {
    strings: ['Created', 'by','Gulmirakhon Musaeva'],
    typeSpeed: 100,
    startDelay: 1000,
    backSpeed: 100,
    smartBackspace: true,
    loop: true,
  });
 
  function bodyGradient() { 
    let linearGradient1 = gradientColors()
    let linearGradient2 = gradientColors()
    let linearGradient3 = gradientColors()
  
    let degree = Math.floor(Math.random() * 360)
  
  
  
    document.body.style.background = `linear-gradient(${degree}deg, ${linearGradient1},${linearGradient2},${linearGradient3})`
    gradientColors()
    document.body.style.add('show')
 }
 
 bodyGradient()

})
