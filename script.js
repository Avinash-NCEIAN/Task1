p1 = document.querySelector('.home .row-2 .box1 .box1-1 .plus');

document.querySelector('#menu1').onclick = () =>{
    p1.classList.toggle('active');
    p2.classList.remove('active');
    p3.classList.remove('active');
    p4.classList.remove('active');
    p5.classList.remove('active');
    p6.classList.remove('active');
    p7.classList.remove('active');
    p8.classList.remove('active');
    p9.classList.remove('active');
}

p2 = document.querySelector('.home .row-2 .box1 .box1-2 .plus');

document.querySelector('#menu2').onclick = () =>{
    p2.classList.toggle('active');
    p1.classList.remove('active');
    p3.classList.remove('active');
    p4.classList.remove('active');
    p5.classList.remove('active');
    p6.classList.remove('active');
    p7.classList.remove('active');
    p8.classList.remove('active');
    p9.classList.remove('active');
}

p3 = document.querySelector('.home .row-2 .box1 .box1-3 .plus');

document.querySelector('#menu3').onclick = () =>{
    p3.classList.toggle('active');
    p1.classList.remove('active');
    p2.classList.remove('active');
    p4.classList.remove('active');
    p5.classList.remove('active');
    p6.classList.remove('active');
    p7.classList.remove('active');
    p8.classList.remove('active');
    p9.classList.remove('active');
}

p4 = document.querySelector('.home .row-3 .box1 .box1-1 .plus');

document.querySelector('#menu4').onclick = () =>{
    p4.classList.toggle('active');
    p1.classList.remove('active');
    p2.classList.remove('active');
    p3.classList.remove('active');
    p5.classList.remove('active');
    p6.classList.remove('active');
    p7.classList.remove('active');
    p8.classList.remove('active');
    p9.classList.remove('active');
}

p5 = document.querySelector('.home .row-3 .box1 .box1-2 .plus');

document.querySelector('#menu5').onclick = () =>{
    p5.classList.toggle('active');
    p1.classList.remove('active');
    p2.classList.remove('active');
    p3.classList.remove('active');
    p4.classList.remove('active');
    p6.classList.remove('active');
    p7.classList.remove('active');
    p8.classList.remove('active');
    p9.classList.remove('active');
}

p6 = document.querySelector('.home .row-3 .box1 .box1-3 .plus');

document.querySelector('#menu6').onclick = () =>{
    p6.classList.toggle('active');
    p1.classList.remove('active');
    p2.classList.remove('active');
    p3.classList.remove('active');
    p4.classList.remove('active');
    p5.classList.remove('active');
    p7.classList.remove('active');
    p8.classList.remove('active');
    p9.classList.remove('active');
}

p7 = document.querySelector('.home .row-4 .box1 .box1-1 .plus');

document.querySelector('#menu7').onclick = () =>{
    p7.classList.toggle('active');
    p1.classList.remove('active');
    p2.classList.remove('active');
    p3.classList.remove('active');
    p4.classList.remove('active');
    p5.classList.remove('active');
    p6.classList.remove('active');
    p8.classList.remove('active');
    p9.classList.remove('active');
}

p8 = document.querySelector('.home .row-4 .box1 .box1-2 .plus');

document.querySelector('#menu8').onclick = () =>{
    p8.classList.toggle('active');
    p1.classList.remove('active');
    p2.classList.remove('active');
    p3.classList.remove('active');
    p4.classList.remove('active');
    p5.classList.remove('active');
    p6.classList.remove('active');
    p7.classList.remove('active');
    p9.classList.remove('active');
}

p9 = document.querySelector('.home .row-4 .box1 .box1-3 .plus');

document.querySelector('#menu9').onclick = () =>{
    p9.classList.toggle('active');
    p1.classList.remove('active');
    p2.classList.remove('active');
    p3.classList.remove('active');
    p4.classList.remove('active');
    p5.classList.remove('active');
    p6.classList.remove('active');
    p7.classList.remove('active');
    p8.classList.remove('active');
}

b1 = document.querySelector('.home .row-5 .box1 .boxA .q .box1-1 .plus');

document.querySelector('#menu-1').onclick = () =>{
    b1.classList.toggle('active');
    b2.classList.remove('active');
    b3.classList.remove('active');
}

b2 = document.querySelector('.home .row-5 .box1 .boxA .q .box1-2 .plus');

document.querySelector('#menu-2').onclick = () =>{
    b2.classList.toggle('active');
    b1.classList.remove('active');
    b3.classList.remove('active');
}

b3 = document.querySelector('.home .row-5 .box1 .boxA .q .box1-3 .plus');

document.querySelector('#menu-3').onclick = () =>{
    b3.classList.toggle('active');
    b2.classList.remove('active');
    b1.classList.remove('active');
}


window.onscroll = () =>{
    p1.classList.remove('active');
    p2.classList.remove('active');
    p3.classList.remove('active');
    p4.classList.remove('active');
    p5.classList.remove('active');
    p6.classList.remove('active');
    p7.classList.remove('active');
    p8.classList.remove('active');
    p9.classList.remove('active');

    b1.classList.remove('active');
    b2.classList.remove('active');
    b3.classList.remove('active');
}