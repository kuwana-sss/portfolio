'use strict';

const slide = document.getElementById('slide');
const lists = document.querySelectorAll('.list');
const totalSlides = lists.length;
let count = 0;

const leftPosition = ['position1','position2','position3','position4','position5'];
let counter=0;

/* prevボタンが押された時 */
let prevButton = document.getElementById('prev');
prevButton.addEventListener('click',function(){
    counter--;/* count */
    let position = counter%leftPosition.length;
    clickPrevEvent(position);
});

/* nextボタンが押された時 */
let nextButton = document.getElementById('next');
nextButton.addEventListener('click',function(){
    counter++; /* count */
    let position = counter%leftPosition.length;
    clickBackEvent(position);
});

function clickBackEvent(position){
    for(let i=0;i<leftPosition.length;i++){
        let slider=document.getElementsByClassName('slider'+(i+1))[0];
        let now=getPosition(position,i-1);/* 動く前のポジションを取得*/
        let next=getPosition(position,i);/* 動く先のポジションを取得*/
        slider.classList.remove(now);
        slider.classList.add(next);
    }
}

function clickPrevEvent(position){
    for(let i=0;i<leftPosition.length;i++){
        let slider=document.getElementsByClassName('slider'+(i+1))[0];
        let now=getPosition(position,i+1);/* 動く前のポジションを取得*/
        let next=getPosition(position,i);/* 動く先のポジションを取得*/
        slider.classList.remove(now);
        slider.classList.add(next);
    }
}

function getPosition(position,num){
    let positionClassName;
    if((position+num<leftPosition.length) && (position+num >= 0)){
        positionClassName=`${leftPosition[position+num]}`;
    }else if(position+num < 0){
        positionClassName=`${leftPosition[position+num+leftPosition.length]}`;
    }else{
        positionClassName=`${leftPosition[position+num-leftPosition.length]}`;
    }
    return positionClassName;
}


/* インジケータ操作 */
const indicator = document.getElementById('indicator');

// ↓関数を定義

function updateListBackground() {
  for (let i = 0; i < leftPosition.length; i++) {
    lists[i].style.backgroundColor = i === count % totalSlides ? '#000000' : '#ffffff';
  }
}

// ↓クリックイベントのリスナーを登録
indicator.addEventListener('click', (event) => {
  if (event.target.classList.contains('list')) {
    const index = Array.from(lists).indexOf(event.target);
    slide.classList.remove(`slide${count % totalSlides + 1}`);
    count = index;
    slide.classList.add(`slide${count % totalSlides + 1}`);
    updateListBackground();
  }
});