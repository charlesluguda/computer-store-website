const menu = [
    {
        id: 1,
        title: "HP 840 G6",
        category: "HP",
        price: "850, 000",
        img: "images/hppro.png",
        desc: "Storage - 256SSD, CPU Speed - corei5 with processor 2.5GHz, RAM - 8GB DDR4, Display size - 14'', Type C port, Color - Silver, 8th Generation."
    },
    {
        id: 2,
        title: "HP 840 G2",
        category: "hp",
        price: "550, 000",
        img: "images/hprobook.jpg",
        desc: "Storege - 500GB, RAM - 4GB DDR3, CPU Mode - Intel corei5, Processor - 2.3GHz, 5th Generation, 14'' display."
    },
    {
        id: 3,
        title: "HP Z BOOK",
        category: "hp",
        price: "850, 000",
        img: "images/hprobook.jpg",
        desc: "Storage - 256SSD, RAM - 8GB, CPU Speed - Intel corei5, Processor - 2.5GHz, 7th Generation, Type C port."
    },
    {
        id: 4,
        title: "HP ELITEBOOK",
        category: "hp",
        price: "550, 000",
        img: "images/hprobook.jpg",
        desc: "Storage - 500GB, RAM - 8GB DDR4, CPU Model Intel corei5, Processor - 2.5GHz."
    },
    {
        id: 5,
        title: "MICROSOFT SURFACE 2",
        category: "microsoft",
        price: "900, 000",
        img: "images/hprobook.jpg",
        desc: "Storage - 256SSD, RAM - 8GB DDR4, CPU Mode Intel corei5, Processor - 2.71GHz, Touchscreen."
    },
    {
        id: 6,
        title: "DELL LATITIDE 3189",
        category: "dell",
        price: "380, 000",
        img: "images/hprobook.jpg",
        desc: "Storage - 128SSD, Processor - 1.1GHz, CPU Mode Pentium -n4200, Graphics Coprocessor 505."
    },
    {
        id: 7,
        title: "LENOVO N23",
        category: "lenovo",
        price: "300, 000",
        img: "images/hprobook.jpg",
        desc: "Storage - 128SSD, RAM - 4GB DDR3, Processor - 1.1GHz, Rotation x360."
    },
    {
        id: 8,
        title: "HP ELITEBOOK",
        category: "hp",
        price: "520, 000",
        img: "images/hprobook.jpg",
        desc: "Storage - 256GB/SSD, RAM - 8GB, Processor - 2.4GHz, CPU Mode corei5, Graphics Card - Intel HD Graphic 520, Web Camera."
    },
    {
        id: 9,
        title: "HP ELITEBOOK",
        category: "hp",
        price: "500, 000",
        img: "images/hprobook.jpg",
        desc: "Storage - 256GB,Memory - 8GB, Processor - 2.7GHz, CPU Mode Intel corei5, Graphics Processor - intel HD Graphics 5500."
    },
    {
        id: 10,
        title: "HP PROBOOK",
        category: "hp",
        price: "380, 000",
        img: "images/hprobook.jpg",
        desc: "Storage - 128SSD, RAM - 4GB DDR4, CPU Speed - 2.3GHz, CPU Mode - intel corei3, Graphics Coprocessor - Intel HD Graphic 520, Screen Size - 11.6''"
    },
    ,
    {
        id: 11,
        title: "HP PROBOOK",
        category: "hp",
        price: "380, 000",
        img: "images/hprobook.jpg",
        desc: "Storage - 128SSD, RAM - 4GB DDR4, CPU Speed - 2.3GHz, CPU Mode - intel corei3, Graphics Coprocessor - Intel HD Graphic 520, Screen Size - 11.6''"
    },
    ,
    {
        id: 12,
        title: "HP PROBOOK",
        category: "hp",
        price: "380, 000",
        img: "images/hprobook.jpg",
        desc: "Storage - 128SSD, RAM - 4GB DDR4, CPU Speed - 2.3GHz, CPU Mode - intel corei3, Graphics Coprocessor - Intel HD Graphic 520, Screen Size - 11.6''"
    },
]
const contentCenter = document.querySelector('.section-center');
const filterBtns = document.querySelectorAll('.btn-filter');
window.addEventListener('DOMContentLoaded', function(){
    displayMenuItem(menu)
})

filterBtns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        console.log(e.currentTarget)
    })
})

function displayMenuItem(menuItems){
    let displayMenu = menuItems.map(function(item){
        //console.log(item);
        return `<article class="menu-item">
        <img src= ${item.img} alt="${item.desc}" class="photo">
        <div class="menu-info">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price">Tsh ${item.price}</h4>
            </header>
            <p class="item-text">${item.desc}</p>
        </div>
    </article>`
    })
    displayMenu = displayMenu.join("");
    contentCenter.innerHTML = displayMenu;
}