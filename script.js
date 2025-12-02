const faqItems = document.querySelectorAll('.faq-item');


faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const arrow = item.querySelector('.arrow');
    
    question.addEventListener('click', function() {
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        
        item.classList.toggle('active');
    });
});

const right_arrow = document.getElementById("right-arrow")
const left_arrow = document.getElementById("left-arrow")
const card1 = document.getElementById("div-cards1")
const card2 = document.getElementById("div-cards2")
const card3 = document.getElementById("div-cards3")
const txt1 = document.getElementById("card-txt1")
const txt2 = document.getElementById("card-txt2")
const txt3 = document.getElementById("card-txt3")

let x = 1 
right_arrow.onclick = function() {
      if (x == 3 ) {
        x = 1
      } else {x++}
     if (x == 1) {
        card3.classList.toggle("glass")
        card3.classList.toggle("card")
        txt3.classList.toggle("hide-txt")
        card1.classList.toggle("card")
        card1.classList.toggle("glass")
        txt1.classList.toggle("hide-txt")
     }
     else if (x == 2){
        card2.classList.toggle("glass")
        card2.classList.toggle("card")
        txt2.classList.toggle("hide-txt")
        card1.classList.toggle("card")
        card1.classList.toggle("glass")
        txt1.classList.toggle("hide-txt")
     } else {
        card3.classList.toggle("glass")
        card3.classList.toggle("card")
        txt3.classList.toggle("hide-txt")
        card2.classList.toggle("card")
        card2.classList.toggle("glass")
        txt2.classList.toggle("hide-txt")
     }
}

left_arrow.onclick = function() {
      if (x == 1 ) {
        x = 3
      } else {x--}
     if (x == 1) {
        card2.classList.toggle("glass")
        card2.classList.toggle("card")
        txt2.classList.toggle("hide-txt")
        card1.classList.toggle("card")
        card1.classList.toggle("glass")
        txt1.classList.toggle("hide-txt")
     }
     else if (x == 2){
        card3.classList.toggle("glass")
        card3.classList.toggle("card")
        txt3.classList.toggle("hide-txt")
        card2.classList.toggle("card")
        card2.classList.toggle("glass")
        txt2.classList.toggle("hide-txt")
     } else {
        card3.classList.toggle("glass")
        card3.classList.toggle("card")
        txt3.classList.toggle("hide-txt")
        card1.classList.toggle("card")
        card1.classList.toggle("glass")
        txt1.classList.toggle("hide-txt")
     }
}