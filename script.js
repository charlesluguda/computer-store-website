

const reviews = [{
  id: 1,
  name: "Sarah",
  desc: "Smooth purchase, quick delivery, and a laptop that outperforms. Highly satisfied!",
},
{
  id: 2,
  name: "Mark",
  desc: "Top-notch products, expert assistance. Great experience every time!",
},
{
  id: 3,
  name: "Emily",
  desc: "Fast delivery, secure packaging, flawless desktop setup.",
},
{
  id: 4,
  name: "Alex",
  desc: "Affordable, high-spec gaming laptop. Exceeded expectations!",
},
{
  id: 5,
  name: "Chriss",
  desc: "Incredible service, guided purchase. Hassle-free and impressive!",
},
];


// =============================== TESTIMONIALS SCRIPT =================================== //
const Name = document.getElementById("name");
const desc = document.getElementById("desc");

const pevBtn = document.querySelector('.prevbtn');
const nextBtn = document.querySelector('.nextbtn');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function(){
  showPerson(currentItem);
  
})

//show person item
function showPerson(){
  const item = reviews[currentItem];
  Name.textContent = item.name;
  desc.textContent = item.desc;
}

//show next person
nextBtn.addEventListener('click', function(){
  currentItem ++;
  if(currentItem > reviews.length -1){
    currentItem = 0;
  }
  showPerson(currentItem)
})

//show prev person
pevBtn.addEventListener('click', function(){
  currentItem --;
  if(currentItem < 0){
    currentItem = reviews.length -1;
  }
  showPerson(currentItem)
})

const getElement = (selector) => {
  const element = document.querySelector(selector)

  if (element) return element
  throw Error(
    `Please double check your class names, there is no ${selector} class`
  )
}

// ================================== FAQS SCRIPT =================================== //
const btns = document.querySelectorAll('.question-btn');

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle('show-text')
    })
})

//================ MENU TOGGLE SCRIPTS ===========================//
humburger = document.querySelector(".menu-btn");
humburger.onclick = function(){
  navBar = document.querySelector(".navlinks");
  navBar.classList.toggle("showlinks");
}

window.onclick = function(event) {
  if (!humburger.contains(event.target) && !navBar.contains(event.target)) {
      navBar.classList.remove("showlinks");
  }
};

const navLinks = document.querySelectorAll(".navlinks a");
navLinks.forEach(link => {
  link.onclick = function() {
      navBar.classList.remove("showlinks");
  };
});
