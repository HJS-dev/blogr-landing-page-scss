let navLists = document.querySelectorAll('.navlink__ul ');
let navName = document.querySelectorAll('.navlink__btn');
let arrow = document.querySelectorAll('i')


for (let i = 0; i < navLists.length; i++) {
    // navLists[i].classList.remove('show')

    navName[i].addEventListener('click', (e) => {
        
       


        
        // e.target.nextElementSibling.classList.toggle("show")
            navLists[i].classList.toggle('show')
            arrow[i].classList.toggle('rotate')
        
    
        
        e.preventDefault()
    })
    console.log(i)
    

}

let burger = document.querySelector('.menu-btn');
let nav = document.querySelector('.navigation');
let x = document.getElementById("menu");

burger.addEventListener('click', () => {
    burger.classList.toggle('close');
    if (x.className === "dropdown") {
        x.className += " hidden";
    } else {
        x.className = "dropdown";
    }
});

window.addEventListener('scroll', () => {
    // var x = document.getElementById("menu");
    burger.classList.remove('close');
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        
        if (x.className === "dropdown ") {
            x.className += " ";
        } else {
            x.className = "dropdown hidden";
        }
    }
})





// // Make a list
// const ul = document.createElement('ul');
// document.body.appendChild(ul);
// ul.className= 'gg'
// const li1 = document.createElement('li');
// li1.textContent='mfkf'
// // li2.textContent='mfkfkkk'
// const li2 = document.createElement('li');
// ul.appendChild(li1);
// ul.appendChild(li2);

// function hide(evt) {
//     // e.target refers to the clicked <li> element
//     // This is different than e.currentTarget, which would refer to the parent <ul> in this context
//     evt.target.style.visibility = 'hidden';
// }

// // Attach the listener to the list
// // It will fire when each <li> is clicked
// ul.addEventListener('click', hide, );


// let color = document.querySelectorAll('.color')
// let gold = 'gold'

// color.forEach(
//     (c) => c.onclick = (e) => {
//         color.forEach(
//             (c) => c.classList[e.target == c ? 'toggle' : 'remove'](gold)
//         )
//     }
// )