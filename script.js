// Slider JS

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}



const navToggle = document.querySelector('.togle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function() {
  if (links.classList.contains('show')) {
    links.classList.remove('show');
  } else {
    links.classList.add('show');
  }
}); 


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

const Name = document.getElementById("name");
const desc = document.getElementById("desc");

const pevBtn = document.querySelector('.prevbtn');
const nextBtn = document.querySelector('.nextbtn');

//set start item
let currentItem = 0;

//load initial item
window.addEventListener('DOMContentLoaded', function(){
  //console.log("shake and bake")
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

document.addEventListener("DOMContentLoaded", function() {
  const toggle = document.querySelector(".toggle i");
  const navLinks = document.querySelector(".navlinks");
  const showLinksClass = 'showlinks';

  toggle.addEventListener("click", function() {
      if (navLinks.classList.contains(showLinksClass)) {
          navLinks.classList.remove(showLinksClass);
      } else {
          navLinks.classList.add(showLinksClass);
      }
  });
});


