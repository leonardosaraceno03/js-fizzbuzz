const ul = document.querySelector("ul.list");

var element = document.getElementById("attiva");
element.addEventListener('click',
function(){


for(let i = 1; i <= 100; i++){
    if(i % 3 == 0 && i % 5 == 0){
        const element = `<li class="square bg-danger"> FizBuzz </li>`;
        ul.innerHTML += element;
    }
    else if (i % 5 == 0){
        const element = `<li class="square bg-success"> Buzz </li>`;
        ul.innerHTML += element;
    }
    else if(i % 3 == 0){
        const element = `<li class="square bg-warning"> Fiz </li>`;
        ul.innerHTML += element;
        }
    else{
        const element = `<li class="square bg-primary">${i}</li>`
        ul.innerHTML += element;
    }
}
}
)

