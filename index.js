// step 1 Initialize the Variables
let country = document.getElementById("country");
let text = document.getElementById("text");
let list = document.getElementById("list");
let Afg = document.querySelector('.afg');
let Amc = document.querySelector('.amc');
let English = document.querySelector('#english');
let Farsi = document.querySelector('#farsi');
let Speak = document.querySelector('.speak');
let Sign = document.querySelector('.sign');
let SignBar = document.querySelector('.signbar');
let SignActive = document.querySelector('#sign_jan');
let Karo = document.querySelector('#karo');
let BTN = document.querySelector('#btn');
let SignBox = document.querySelector('.signbox');
let jlose = document.querySelector('#close');
let MenuBar = document.querySelector('.menubar');

// Step 2 Main Logic
country.addEventListener("click", () => {
    list.classList.toggle("hidden");
});
function myfunction(frk) {
    text.innerHTML = frk;
}
let eng_tag = document.getElementById("eng_tag");
let hin_eng = document.querySelector(".hin_eng");
let language = document.querySelector(".language");
language.addEventListener("click", () => {
    hin_eng.classList.toggle("display_div");
});
function languageolx(anyone) {
    eng_tag.innerHTML = anyone;
}
English.addEventListener('click',()=>{
    Amc.style.display = 'block'
    Afg.style.display = 'none'
    Speak.style.display = 'none';
})
Farsi.addEventListener('click',()=>{
    Afg.style.display = 'block'
    Amc.style.display = 'none'
    Speak.style.display = 'none';
})
Sign.addEventListener('click',()=>{
    SignBar.classList.toggle('bg-active')
})

SignActive.addEventListener('click',()=>{
   SignBar.classList.toggle('bg-jan')
})
Karo.addEventListener('click',()=>{
SignBox.style.display = 'block'
    SignBar.classList.remove('bg-jan')
})




BTN.addEventListener('click',()=>{
    let Email = document.querySelector('#email').value;
    let Password = document.querySelector('#password').value;
    if (localStorage.getItem('itemjson')===null){
        let itemArr = [];
        itemArr.push([Email,Password]);
        localStorage.setItem('itemjson',JSON.stringify(itemArr));
    }else{
        let itemStr = localStorage.getItem('itemjson');
        itemArr = JSON.parse(itemStr);
        itemArr.push([Email,Password]);
        localStorage.setItem('itemjson',JSON.stringify(itemArr));
    }
})
jlose.addEventListener('click',()=>{
    SignBox.style.display = 'none'
})


// Menu Bar
    let Clickbar = document.querySelector('.clickbar');
    let MenuBand = document.querySelector('.menuband');

    MenuBar.addEventListener('click',()=>{
        Clickbar.classList.add('active-karo')
        MenuBar.style.display = 'none'
        // MenuBand.style.display = 'block'
    })
    MenuBand.addEventListener('click',()=>{
        Clickbar.classList.remove('active-karo')
        MenuBar.style.display = 'block'
    })
// Music Bar
let Right = document.querySelector('.right');
let Music = document.querySelector('.musicBar');
Right.addEventListener('click',()=>{
    Music.style.display = 'block'
    Clickbar.classList.remove('active-karo')
    MenuBar.style.display = 'none'
})

// slide Baand
let Bandkaro = document.querySelector('.bandko');
Bandkaro.addEventListener('click',()=>{
    MenuBar.style.display = 'none';
    Clickbar.classList.add('active-karo')
    Music.style.display = 'none'
})
// Books Bar
let BooksBar = document.querySelector('.booksBar');
let Qolf = document.querySelector('.golp');
let BooksJan = document.querySelector('.Booksjan');
BooksJan.addEventListener('click',()=>{
    BooksBar.style.display = 'block'
    MenuBar.style.display = 'none';
    Clickbar.classList.remove('active-karo')
})
Qolf.addEventListener('click',()=>{
    MenuBar.style.display = 'none';
    Clickbar.classList.add('active-karo')
    BooksBar.style.display = 'none'
})

// Electrec Bar
let Electrec = document.querySelector('.Electroc');
let ElecBar = document.querySelector('.elecBar');
let GolpKaro = document.querySelector('.golpkaro');

Electrec.addEventListener('click',()=>{
    ElecBar.style.display = 'block'
    MenuBar.style.display = 'none';
    Clickbar.classList.remove('active-karo')
})

GolpKaro.addEventListener('click',()=>{
    MenuBar.style.display = 'none';
    Clickbar.classList.add('active-karo')
    ElecBar.style.display = 'none'
})
// Computers Bar
let Computers = document.querySelector('.computers');
let ComputerBar = document.querySelector('.computerBar');
let Luckkaro = document.querySelector('.luckkaro');

Computers.addEventListener('click',()=>{
    ComputerBar.style.display = 'block'
    MenuBar.style.display = 'none';
    Clickbar.classList.remove('active-karo')
})

Luckkaro.addEventListener('click',()=>{
    MenuBar.style.display = 'none';
    Clickbar.classList.add('active-karo')
    ComputerBar.style.display = 'none'
})

// Image Slider for Amazon Clone

let slides = document.querySelectorAll(".slide");
let counter = 0;
let isTrue = false;
slides.forEach((slide, index) => {
    slide.style.bottom = `${index * 100}%`;
});
function next() {
        counter++;
    slideShow();
}
function previous() {
        counter--;
    slideShow();
}
function slideShow() {
    slides.forEach((slide) => {
        slide.style.transform = `translateY(${counter * 100}%)`;
    });
}

// Main Item Bar
let detailsList = [
    {img: 'Images/8.jpg', Name: 'Sandeepa Dar', Price: 2300},
    {img: 'Images/7.jpg', Name: 'Depika Padekune', Price: 3000},
    {img: 'Images/6.jpg', Name: 'Sunakshi Sinha', Price: 1200},
    {img: 'Images/5.jpg', Name: 'Qatar Jan', Price: 100},
    {img: 'Images/4.jpg', Name: 'Ruhani jan', Price: 4000},
    {img: 'Images/3.jpg', Name: 'Adriana Lima', Price: 60000},
]
let Main = Array.from(document.querySelectorAll('.main-item'));
Main.forEach((element,i)=>{
 element.getElementsByTagName('img')[0].src = detailsList[i].img;
 element.getElementsByTagName('h3')[0].innerText = detailsList[i].Name;
 element.getElementsByTagName('span')[0].innerText = detailsList[i].Price;
})