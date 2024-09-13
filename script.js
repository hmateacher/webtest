const cards = document.querySelectorAll('img');
const btn = document.querySelector('button');
const h3 = document.querySelector('h3');

var arr = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10];

var toggle = 0;
var first = 0;
var second = 0;
var first_idx = 0;
var second_idx = 0;

var score = 0;
var rest_card = 20;

btn.addEventListener("click",()=>{
    toggle=0;
    first=0;
    second=0;
    first_idx=0;
    second_idx=0;

    btn.disabled=true;

    // sort는 해당 배열 내의 값들을 오름차순으로 정렬
    arr.sort(() => Math.random() - 0.5);
    
    for(var i=0;i<20;i++){
        cards[i].src="./img/"+arr[i]+".png"
    }

    setTimeout(function(){
        for(var i=0;i<20;i++){
            cards[i].src="./img/0.png"
        }
    }, 3000);
});

cards.forEach(function(MyCard){
    MyCard.addEventListener("click",()=>{
        if(toggle==0){
            first_idx = MyCard.dataset['value']-1;
            first=arr[first_idx];
            toggle++;

            MyCard.src="./img/"+arr[first_idx]+".png";
        }
        else if(toggle==1){
            second_idx = MyCard.dataset['value']-1;
            second=arr[second_idx];
            toggle++;

            MyCard.src="./img/"+arr[second_idx]+".png";
        }

        if(toggle==2){
            if(first==second){
                score++;
                rest_card-=2;
                h3.innerText="남은 카드: "+rest_card+"장";

                toggle=0;
                first=0;
                second=0;
                first_idx=0;
                second_idx=0;

                if(score==10){
                    alert("END GAME");
                    btn.disabled=false;
                }
            }
            else{
                setTimeout(function(){
                    cards[first_idx].src="./img/0.png";
                    cards[second_idx].src="./img/0.png";
                    toggle=0;
                    first=0;
                    second=0;
                    first_idx=0;
                    second_idx=0;
                }, 1000);
            }
        }
    });
});


/* 콘솔 찍는 용 코드 */
// const cards = document.querySelectorAll('img');
// const btn = document.querySelector('button');
// const h3 = document.querySelector('h3');

// var arr = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10];

// var toggle = 0;
// var first = 0;
// var second = 0;
// var first_idx = 0;
// var second_idx = 0;

// var score = 0;
// var rest_card = 20;

// btn.addEventListener("click",()=>{
//     toggle=0;
//     first=0;
//     second=0;
//     first_idx=0;
//     second_idx=0;

//     btn.disabled=true;

//     // sort는 해당 배열 내의 값들을 오름차순으로 정렬
//     arr.sort(() => Math.random() - 0.5);
    
//     for(var i=0;i<20;i++){
//         cards[i].src="./img/"+arr[i]+".png"
//     }

//     setTimeout(function(){
//         for(var i=0;i<20;i++){
//             cards[i].src="./img/0.png"
//         }
//     }, 3000);
// });

// cards.forEach(function(MyCard){
//     MyCard.addEventListener("click",()=>{
//         if(toggle==0){
//             first_idx = MyCard.dataset['value']-1;
//             first=arr[first_idx];
//             toggle++;

//             console.log("first="+first);
//             console.log("first_idx="+first_idx);
//             console.log("toggle="+toggle);

//             MyCard.src="./img/"+arr[first_idx]+".png";
//         }
//         else if(toggle==1){
//             second_idx = MyCard.dataset['value']-1;
//             second=arr[second_idx];
//             toggle++;

//             console.log("second="+second);
//             console.log("second_idx="+second_idx);
//             console.log("toggle="+toggle);

//             MyCard.src="./img/"+arr[second_idx]+".png";
//         }

//         if(toggle==2){
//             console.log("두 장 뒤집음");
//             if(first==second){
//                 console.log("정답!!");
//                 score++;
//                 rest_card-=2;
//                 h3.innerText="남은 카드: "+rest_card+"장";

//                 toggle=0;
//                 first=0;
//                 second=0;
//                 first_idx=0;
//                 second_idx=0;

//                 if(score==10){
//                     alert("END GAME");
//                     btn.disabled=false;
//                 }
//             }
//             else{
//                 setTimeout(function(){
//                     cards[first_idx].src="./img/0.png";
//                     cards[second_idx].src="./img/0.png";
//                     toggle=0;
//                     first=0;
//                     second=0;
//                     first_idx=0;
//                     second_idx=0;
//                 }, 1000);
//             }
//         }
//     });
// });