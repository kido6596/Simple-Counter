let counter = document.querySelector('.counter');
const addCount = document.querySelector('#addCountBtn');
const lowerCount = document.querySelector('#lowerCountBtn');

let count = 0;

addCount.addEventListener('click',incrementCounter);
lowerCount.addEventListener('click',decrementCounter);

function incrementCounter (){
    count++;
    counter.innerHTML = count;
    if(counter.innerHTML>'0'){
        counter.style.color = '#aaeba2'
    }
    else if(counter.innerHTML === '0'){
        counter.style.color = '#ecd3be'
    }
    counter.animate([{opacity:'0.2'},{opacity:'1.0'}],{duration:500,fill:'forwards'});
}

function decrementCounter (){
    count--;
    counter.innerHTML = count;
    if(counter.innerHTML<'0'){
        counter.style.color = '#ebb2b2'
    }
    else if(counter.innerHTML === '0'){
        counter.style.color = '#ecd3be'
    }
    counter.animate([{opacity:'0.2'},{opacity:'1.0'}],{duration:500,fill:'forwards'});
}