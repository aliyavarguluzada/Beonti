let tap = document.querySelector(".vector-right");


tap.addEventListener("click", function () {

    let images = document.querySelector(".img img.active");
    let next = images.nextElementSibling;

    images.classList.remove("active");
    if (next == null) {
        let first = document.querySelector(".img img:nth-child(1)");
        first.classList.add("active");
    } else {
        next.classList.add("active");

    }
})

let tapBack = document.querySelector(".vector-left");

tapBack.addEventListener("click", function () {
    let images = document.querySelector(".img img.active");
    let previous = images.previousElementSibling;

    images.classList.remove("active");
    if (previous == null) {
        let last = document.querySelector(".img img:last-child");
        last.classList.add("active");
    } else {
        previous.classList.add("active");

    }
})



let burger = document.querySelector(".burger");

burger.addEventListener("click", function(){
    let nav = document.querySelector(".nav-list");
    nav.classList.toggle("nav-active");
    console.log("asdnaishduiad");
})