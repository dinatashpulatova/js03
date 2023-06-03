let out1 = document.getElementById('out1');
let students = ['Иванов', 'Петров', 'Тарасов', 'Кузнецова', 'Чернышова', 'Гордеева', 'Мамаев', 'Белова', 'Емельянов', 'Солнцева'];
let grade = [];

for (i = 0; i < 10; i++) {
    var a = Math.floor((Math.random() * 4) + 2);
    grade.push(a);

}
let arrayHtml = '<p>  </p>';
for (let i = 0; i < students.length; i++) {
    let n = grade[i];
    let element = students[i];
    arrayHtml += '<p>' + element + '-' + n + '</p>';
}
out1.innerHTML = arrayHtml;

let arrayHtml1 = '<p>  </p>';
for (i in grade) {
    if (grade[i] == 2) {
        arrayHtml1 += '<p>' + students[i] + '</p>';
    }
    out2.innerHTML = arrayHtml1;
}



let slideIndex = 1;
showSlides(slideIndex);


function nextSlide() {
    showSlides(slideIndex += 1);
}
function previousSlide() {
    showSlides(slideIndex -= 1);
}


function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides(n) {

    let slides = document.getElementsByClassName("item");


    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }


    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex - 1].style.display = "flex";
}