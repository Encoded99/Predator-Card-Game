

////still got work to do ////

let cards=document.querySelectorAll('.card');
let Target1=document.querySelector('.target1');
let Target2=document.querySelector('.target2');
let fronts=document.querySelectorAll('.front');

let block1=document.querySelector('.block1')
let block2=document.querySelector('.block2')
let row1=document.querySelector('.r1')

let row2=document.querySelector('.r2')
let hint=document.querySelector('.hint')
let cr1=document.querySelectorAll('.cr1');
let cr2=document.querySelectorAll('.cr2');
const scoreBoard=document.querySelector('.score-board')
let score1=document.querySelector('.s1');
let score2=document.querySelector('.s2');
let gameBoard=document.querySelector('.game-board');
let buttonReset=document.querySelector('.button-reset');
let congrat=document.querySelector('.congrat');
let ct=document.querySelector('.ct');
const play=document.querySelector('.sound-on')
const stops=document.querySelector('.sound-off')

 play.addEventListener('click', function(){
  const KanyeSong=document.querySelector('.monster-song');
   KanyeSong.play();
   stops.style.zIndex=1;
 });

 stops.addEventListener('click', function(){
  const KanyeSong=document.querySelector('.monster-song');
   KanyeSong.pause();
   play.style.zIndex=1;
 })


let s1=0;
let s2=0;
let sindex1=0;
let sindex2=0;
let Row1clicked=null;
let Row2clicked=null;
let currentPlayer=1;

let transitionCount=0;
let row1Children=12;
let row2Children=12;
let cts=10
let player1Turn=false;
console.log(player1Turn);





function resetGame(){





  let game=`<div class="container-fluid" style="background-color: blue; color: bisque;">
  <h1 class="text-center">PREDATORS <span style="font-size: 20px;">kill or be killed, survival of the  fittest</span></h1> 
    
  </div>
  
  <div class="container-fluid w-100 board">
  <div class="container  text-center" style="background-color: black; color: brown;"><h1>PLAYER 1</h1></div>
  <!-- player 1 start here -->
  <div class="row">
  
  </div>
  <div class="row  r1">
      <div class="cr1  card lion  reset" style="position: absolute; left: 10%;" draggable="true">
          <div class="front hint1"><h1></h1></div>
          <div class="back li">
          </div>
      </div>
      <div class="cr1 2 card cheetah" style="position: absolute; left: 20%;" draggable="true">
          <div class="front hint1"><h1></h1></div>
          <div class="back ch">
          </div>
      </div>
      <div class="cr1 3 card leo" style="position: absolute; left: 30%;" draggable="true">
          <div class="front hint2"><h1></h1></div>
          <div class="back le">
              </div>
      </div>
  
      <div class="cr1 4 card cat" style="position: absolute; left: 40%;" draggable="true">
          <div class="front  hint6"><h1></h1></div>
          <div class="back ca">
              </div>
      </div>
      <!-- second round start -->
      <div class="cr1  card lion " style="position: absolute; left: 50%;" draggable="true">
          <div class="front hint3"><h1></h1></div>
          <div class="back li">
          </div>
      </div>
      <div class="cr1 2 card cheetah" style="position: absolute; left: 60%;" draggable="true">
          <div class="front hint2"><h1></h1></div>
          <div class="back ch">
          </div>
      </div>
      <div class="cr1 3 card leo" style="position: absolute; left: 70%;" draggable="true">
          <div class="front hint3"><h1></h1></div>
          <div class="back le">
              </div>
      </div>
  
      <div class="cr1 4 card cat" style="position: absolute; left: 80%;" draggable="true">
          <div class="front hint4"><h1></h1></div>
          <div class="back ca">
              </div>
      </div>
      <div class="tg container-fluid"></div>
      
  <!-- second round ends -->
      <!-- third round -->
      <div class="cr1  card lion " style="position: absolute; left: 90%;" draggable="true">
          <div class="front lion hint5"><h1></h1></div>
          <div class="back li">
          </div>
      </div>
      <div class="cr1 2 card cheetah" style="position: absolute; left: 100%;" draggable="true">
          <div class="front hint4"><h1></h1></div>
          <div class="back ch">
          </div>
      </div>
      <div class="cr1 3 card leo" style="position: absolute; left: 110%;" draggable="true">
          <div class="front hint6"><h1></h1></div>
          <div class="back le">
              </div>
      </div>
  
      <div class="cr1 4 card cat" style="position: absolute; left: 120%;" draggable="true">
          <div class="front hint5"><h1></h1></div>
          <div class="back ca">
              </div>
      </div>

      
     <!-- third round -->
  </div>
  <!-- player 1 end  here -->
  <div class="block1 container-fluid">SUPRISE ME</div>
  <!-- floor start here -->
  <div class="row  ">
      <div class="col target1"></div>
      <div class="col target2"></div>
     
  </div>
  <!-- floor end here -->
  
  <!-- player 2 start here -->
  
  <div class="row r2">
  <div class="cr2  card lion " style="position: absolute; left: 10%; ;" draggable="true">
      <div class="front hint1"><h1></h1></div>
      <div class="back li">
          </div>
  </div>
  <div class="cr2  card  leo" style="position: absolute; left: 20% ;" draggable="true">
      <div class="front hint2"><h1></h1></div>
      <div class="back le ">
        </div>
  </div>
  <div class="cr2  card cat" style="position: absolute; left: 30%;" draggable="true">
      <div class="front hint6"><h1></h1></div>
      <div class="back ca ">
          </div>
  </div>
  <div class="cr2  card cheetah" style="position: absolute; left: 40%;" draggable="true">
      <div class="front hint1"><h1></h1></div>
      <div class="back ch ">
        </div>
  </div>
  <!-- second round -->
  <div class="cr2  card lion " style="position: absolute; left: 50%;" draggable="true">
      <div class="front hint3"><h1></h1></div>
      <div class="back li">
          </div>
  </div>
  <div class="cr2  card  leo" style="position: absolute; left: 60%;" draggable="true">
      <div class="front hint3"><h1></h1></div>
      <div class="back le ">
        </div>
  </div>
  <div class="cr2  card cat" style="position: absolute; left: 70%;" draggable="true">
      <div class="front hint4"><h1></h1></div>
      <div class="back ca ">
          </div>
  </div>
  <div class="cr2  card cheetah" style="position: absolute; left: 80%;" draggable="true">
      <div class="front  hint2"><h1></h1></div>
      <div class="back ch ">
        </div>
  </div>
  
  <!-- second round here -->
  
  <!-- third round start -->
  <div class="cr2  card lion " style="position: absolute; left: 90%;" draggable="true">
  <div class="front hint5"><h1></h1></div>
  <div class="back li">
      </div>
  </div>
  <div class="cr2  card  leo" style="position: absolute; left: 100%;" draggable="true">
  <div class="front hint6"><h1></h1></div>
  <div class="back le ">
    </div>
  </div>
  <div class="cr2  card cat" style="position: absolute; left: 110%;" draggable="true">
  <div class="front hint5"><h1></h1></div>
  <div class="back ca ">
      </div>
  </div>
  <div class="cr2  card cheetah" style="position: absolute; left: 120%;" draggable="true">
  <div class="front hint4"><h1></h1></div>
  <div class="back ch ">
    </div>
  </div>
  
  <!-- third round end -->
  </div>
  
  
   <div class="block2 container-fluid">SUPRISE ME</div>  
  
  
  <!-- player 2 end  here -->
  <div class="container   text-center p2" ><h1>PLAYER 2</h1></div>
  </div>
  
 
  <div class="hint">
  
  </div>
  </div>`
  gameBoard.innerHTML=game;
  //selecting start here//
  let cards=document.querySelectorAll('.card');
  let Target1=document.querySelector('.target1');
  let Target2=document.querySelector('.target2');
  let fronts=document.querySelectorAll('.front');
  
  let block1=document.querySelector('.block1')
  let block2=document.querySelector('.block2')
  let row1=document.querySelector('.r1')
  
  let row2=document.querySelector('.r2')
  let hint=document.querySelector('.hint')
  let cr1=document.querySelectorAll('.cr1');
  let cr2=document.querySelectorAll('.cr2');
  const firstCr1Top=document.querySelectorAll('.cr1')[0].offsetTop ;
 const firstCr2Top=document.querySelectorAll('.cr2')[0].offsetTop ;
  let congrat=document.querySelector('.congrat');
  
  
  
  let Row1clicked=null;
  let Row2clicked=null; 
  
  let transitionCount=0;
  let row1Children=12;
  let row2Children=12;
  //let player1Turn=false;
  //code start here //
  let cardsArray=Array.prototype.slice.call(cr1);
    function shuffle(cardsArray){
      for (let i=cardsArray.length-1;i>0;i--){
        let j=Math.floor(Math.random()*(i+1));
        [cardsArray[i],cardsArray[j]]=[cardsArray[j],cardsArray[i]]
      };
      return cardsArray;
    }
    
    let shuffleCards1=shuffle(Array.from(cr1));
    let previousCard1Left=0;
    for(let i=0;i<cr1.length;i++){
    let card1=shuffleCards1[i];
    let card1Width=card1.clientWidth;
    if(previousCard1Left===card1.offsetLeft){
      card1.style.left=previousCard1Left+card1Width+'px';
      previousCard1Left+=card1Width;
    }
    else{
      card1.style.left=previousCard1Left+'px';
      previousCard1Left+=card1Width;
    }
     };
    
    
    let shuffleCards=shuffle(Array.from(cr2));
    let previousCardLeft=0;
    for(let i=0;i<cr1.length;i++){
    let card=shuffleCards[i];
    let cardWidth=card.clientWidth;
    
    if(previousCardLeft===card.offsetLeft){
      card.style.left=previousCardLeft+cardWidth+'px';
      previousCardLeft+=cardWidth;
    }
    else{
      card.style.left=previousCardLeft+'px';
      previousCardLeft+=cardWidth;
    }
     }
    
  
  //GAME LOGIC
cards.forEach(function(card){


  let front=card.querySelector('.front')
 
card.addEventListener('click', function(e){
 
  let movedCard=e.currentTarget;
 hint.style.visibility=`hidden`;
  if(Row1clicked && Row2clicked)
  
  
  {
    Row1clicked=null;
    Row2clicked=null;
  }
if(!player1Turn){
  if(!Row1clicked){
    Row1clicked=movedCard;
    
    if(Row1clicked.closest('.r2')){
      alert('please its player one turn')
      Row1clicked=null;
      return
    }
   else{
    Row1clicked=movedCard
   }
    
  } 
  else{
    Row2clicked=movedCard;
    if(Row2clicked.closest('.r1')){
      alert('please its player two turn')
      Row2clicked=null;
      return
    }
   else{
    Row2clicked=movedCard
   }
   
  }
 

}
  

  if(player1Turn){
    if(!Row1clicked){
      Row1clicked=movedCard;
      
      if(Row1clicked.closest('.r1')){
        alert('please its player two turn')
        Row1clicked=null;
        return
      }
     else{
      Row1clicked=movedCard
     }
      
    } 
    else{
      Row2clicked=movedCard;
      if(Row2clicked.closest('.r2')){
        alert('please its player one turn')
        Row2clicked=null;
        return
      }
     else{
      Row2clicked=movedCard
     }
  
    }
   
  
     
    
  
   }


  


  if(movedCard.classList.contains('cr1')){


  front.style.opacity=`0`;

    
      movedCard.style.left=Target1.offsetLeft + `px`;
      movedCard.style.top=Target1.offsetTop + `px`;
      //console.log(r1top);
      movedCard.style.zIndex=1;
      movedCard.style.transform = 'rotateY(180deg)';
      movedCard.style.transition=1 +`s`;
    

    


    

    

  }
  if(movedCard.classList.contains('cr2')){
    front.style.opacity=`0`;

      movedCard.style.left=Target2.offsetLeft + `px`;
      movedCard.style.top=Target2.offsetTop + `px`;
     // console.log(r2top);
       movedCard.style.zIndex=1;
       movedCard.style.transform = 'rotateY(180deg)';
       movedCard.style.transition=1 +`s`;
    
  
    
    
    
    
    

  };
 
  if(movedCard.classList.contains('fire')){
    fireClicked=true;
};
if(movedCard.classList.contains('water')){
  waterClicked=true;
}
})
card.addEventListener('transitionend', function(){
    transitionCount++;
    
  //console.log(transitionCount);
  let hsc=false
    function removeAndshuffle(){
          
      if(transitionCount>=3){
        let t= setInterval(AllCardsShuffle,1000)
         function clearIntervals(){
          clearInterval(t)
          hideAndunhide()
         }
        
         setTimeout(clearIntervals,1000)
         
         }
        
     transitionCount=0;
   //console.log('transition is more eq 3');//console.log(transitionCount);
 
   //console.log(cts);
   
  
  // console.log('shuffle function called');
    }
  
    
  if(Row1clicked &&  Row2clicked){
    
  //scenerio1 when row1clicked close to r1
    function Row1Trans(){ 
      Row2clicked.remove();
      front.style.opacity='1';
      Row1clicked.style.transition=1 +`s`;
      Row1clicked.style.position=`absolute`;
      Row1clicked.style.top=firstCr1Top+`px`;
       removeAndshuffle()
       
    }

    function Row2Trans(){
      Row1clicked.remove();
      front.style.opacity='1';
      Row2clicked.style.transition=1 +`s`;
      Row2clicked.style.position=`absolute`;
      Row2clicked.style.top= firstCr2Top+`px`;
      removeAndshuffle()

    }

    function DrawTrans(){
      Row1clicked.remove()
      Row2clicked.remove()
     // front.style.opacity='1';
     // Row1clicked.style.transition=1 +`s`;
     // Row1clicked.style.position=`absolute`;
     // Row1clicked.style.top= 17+ `%`;
      //Row2clicked.style.transition=1 +`s`;
      //Row2clicked.style.position=`absolute`;
      //Row2clicked.style.top= 83+ `%`;
       removeAndshuffle()

    }
//scenerio 1 ends//
    //scenerio2 when row1clicked close to r2
    function RRow1Trans(){ 
      Row2clicked.remove();
      front.style.opacity='1';
      Row1clicked.style.transition=1 +`s`;
      Row1clicked.style.position=`absolute`;
      Row1clicked.style.top= firstCr2Top+`px`;
       removeAndshuffle()
       
    }

    function RRow2Trans(){
      Row1clicked.remove();
      front.style.opacity='1';
      Row2clicked.style.transition=1 +`s`;
      Row2clicked.style.position=`absolute`;
      Row2clicked.style.top= firstCr1Top+`px`;
      removeAndshuffle()

    }

    function RDrawTrans(){


      Row1clicked.remove()
      Row2clicked.remove()
     // front.style.opacity='1';
     // Row1clicked.style.transition=1 +`s`;
     // Row1clicked.style.position=`absolute`;
     // Row1clicked.style.top= 83+ `%`;
      //Row2clicked.style.transition=1 +`s`;
     // Row2clicked.style.position=`absolute`;
     // Row2clicked.style.top= 17+ `%`;
       removeAndshuffle()

    }
  
    //scenerio 2 ends//

    //logic for scenerio one start here
  if(Row1clicked.closest('.r1')){

      // lion start here
      if((Row1clicked.classList.contains('lion')) && (Row2clicked.classList.contains('cheetah'))){
        Row1Trans()
     
       };
       if((Row1clicked.classList.contains('cheetah')) && (Row2clicked.classList.contains('lion'))){  
        Row2Trans()
     }
     if((Row1clicked.classList.contains('lion')) && (Row2clicked.classList.contains('cat'))){
     Row1Trans()
   
   };
   
   
   if((Row1clicked.classList.contains('cat')) && (Row2clicked.classList.contains('lion'))){
     Row2Trans()
   
   }
     // lion ends here
   // ...............................................
   // cheetah start here
   if((Row1clicked.classList.contains('cheetah')) && (Row2clicked.classList.contains('cat'))){
       Row1Trans()
    
   };
   if((Row1clicked.classList.contains('cat')) && (Row2clicked.classList.contains('cheetah'))){
     Row2Trans()
   
   };
   if((Row1clicked.classList.contains('cheetah')) && (Row2clicked.classList.contains('leo'))){
     Row1Trans()
   
   
   };
   if((Row1clicked.classList.contains('leo')) && (Row2clicked.classList.contains('cheetah'))){
     Row2Trans()
   }
   // cheetah ends here
   // ............................................
   // cat start here
   if((Row1clicked.classList.contains('cat')) && (Row2clicked.classList.contains('leo'))){
      Row1Trans()
   };
   if((Row1clicked.classList.contains('leo')) && (Row2clicked.classList.contains('cat'))){
    Row2Trans()
   
   };
   
   // cat ends here
   //..........................................
   // leo start here
   if((Row1clicked.classList.contains('leo')) && (Row2clicked.classList.contains('lion'))){
     Row1Trans()
   
   };
   if((Row1clicked.classList.contains('lion')) && (Row2clicked.classList.contains('leo'))){
       Row2Trans()
   }
   // leo ends here
   
   // draw start here
   if((Row1clicked.classList.contains('lion')) && (Row2clicked.classList.contains('lion'))){
     DrawTrans()
  
   };
   if((Row1clicked.classList.contains('cheetah')) && (Row2clicked.classList.contains('cheetah'))){
     DrawTrans()
   
   };
   if((Row1clicked.classList.contains('cat')) && (Row2clicked.classList.contains('cat'))){
      DrawTrans()
   };
   if((Row1clicked.classList.contains('leo')) && (Row2clicked.classList.contains('leo'))){
   DrawTrans()
   
   };
    
   // draw ends here
   
  }

//logic for scenerio one ends here//

//logic for scenerion 2 start here

if(Row1clicked.closest('.r2')){
// lion start here
if((Row1clicked.classList.contains('lion')) && (Row2clicked.classList.contains('cheetah'))){
  RRow1Trans()

 };
 if((Row1clicked.classList.contains('cheetah')) && (Row2clicked.classList.contains('lion'))){  
  RRow2Trans()
}
if((Row1clicked.classList.contains('lion')) && (Row2clicked.classList.contains('cat'))){
RRow1Trans()

};


if((Row1clicked.classList.contains('cat')) && (Row2clicked.classList.contains('lion'))){
RRow2Trans()

}
// lion ends here
// ...............................................
// cheetah start here
if((Row1clicked.classList.contains('cheetah')) && (Row2clicked.classList.contains('cat'))){
 RRow1Trans()

};
if((Row1clicked.classList.contains('cat')) && (Row2clicked.classList.contains('cheetah'))){
RRow2Trans()

};
if((Row1clicked.classList.contains('cheetah')) && (Row2clicked.classList.contains('leo'))){
RRow1Trans()


};
if((Row1clicked.classList.contains('leo')) && (Row2clicked.classList.contains('cheetah'))){
RRow2Trans()
}
// cheetah ends here
// ............................................
// cat start here
if((Row1clicked.classList.contains('cat')) && (Row2clicked.classList.contains('leo'))){
RRow1Trans()
};
if((Row1clicked.classList.contains('leo')) && (Row2clicked.classList.contains('cat'))){
RRow2Trans()

};

// cat ends here
//..........................................
// leo start here
if((Row1clicked.classList.contains('leo')) && (Row2clicked.classList.contains('lion'))){
RRow1Trans()

};
if((Row1clicked.classList.contains('lion')) && (Row2clicked.classList.contains('leo'))){
 RRow2Trans()
}
// leo ends here

// draw start here
if((Row1clicked.classList.contains('lion')) && (Row2clicked.classList.contains('lion'))){
RDrawTrans()

};
if((Row1clicked.classList.contains('cheetah')) && (Row2clicked.classList.contains('cheetah'))){
RDrawTrans()

};
if((Row1clicked.classList.contains('cat')) && (Row2clicked.classList.contains('cat'))){
RDrawTrans()
};
if((Row1clicked.classList.contains('leo')) && (Row2clicked.classList.contains('leo'))){
RDrawTrans()

};

// draw ends here

}
   
//LOGIC FOR SCENERIO 2 ENDS   
    



}; 
})


});

//GAME LOGIC ENDS HERE
  
    
  //SHUFFLE LOGIC START HERE//
function AllCardsShuffle(){

  transitionCount=0;
 let cardsArray=Array.prototype.slice.call(cr1);
function shuffle(cardsArray){
 for (let i=cardsArray.length-1;i>0;i--){
   let j=Math.floor(Math.random()*(i+1));
   [cardsArray[i],cardsArray[j]]=[cardsArray[j],cardsArray[i]]
 };
 return cardsArray;
}

let shuffleCards1=shuffle(Array.from(cr1));
let previousCard1Left=0;
for(let i=0;i<cr1.length;i++){
let card1=shuffleCards1[i];
let card1Width=card1.clientWidth;
if(previousCard1Left===card1.offsetLeft){
 card1.style.left=previousCard1Left+card1Width+'px';
 previousCard1Left+=card1Width;
}
else{
 card1.style.left=previousCard1Left+'px';
 previousCard1Left+=card1Width;
}
};


let shuffleCards=shuffle(Array.from(cr2));
let previousCardLeft=0;
for(let i=0;i<cr1.length;i++){
let card=shuffleCards[i];
let cardWidth=card.clientWidth;

if(previousCardLeft===card.offsetLeft){
 card.style.left=previousCardLeft+cardWidth+'px';
 previousCardLeft+=cardWidth;
}
else{
 card.style.left=previousCardLeft+'px';
 previousCardLeft+=cardWidth;
}
}

if(player1Turn===false){
  player1Turn=true;
  console.log(player1Turn);
 }
 else{
  player1Turn=false;
  console.log(player1Turn);
 }
 hint.style.visibility=`hidden`

}
function unhide(){
block1.style.position=`absolute`;
block1.style.top=firstCr1Top+`px`;
block1.style.visibility=`visible`;

block2.style.position=`absolute`;
block2.style.top=firstCr2Top+`px`;
block2.style.visibility=`visible`;
}
function hide(){
block1.style.visibility='hidden';
block2.style.visibility='hidden';


}


function hideAndunhide(){

 unhide();
 setTimeout(hide,1000);

}



  //SHUFFLE LOGIC END HERE
  
  
  
  
  
  
  fronts.forEach(function(front){
    front.addEventListener('mouseenter', function(e){
      touchCard=e.target
     if(touchCard.classList.contains('hint1')){
      hint.style.visibility=`visible`
      hint.textContent=`the name of this animal has two syllables`
      //alert('2')
     };
     if(touchCard.classList.contains('hint2')){
      hint.style.visibility=`visible`
      hint.textContent=`the first vowel in the name of this animal is 'E'`
      
     }
     if(touchCard.classList.contains('hint3')){
      hint.style.visibility=`visible`
      hint.textContent=`the third letter in the name of this animal is 'O'`
      
     }
  
     if(touchCard.classList.contains('hint4')){
      hint.style.visibility=`visible`
      hint.textContent=`the first vowel  of the animal name from the back is 'A'`
      
     }
     if(touchCard.classList.contains('hint5')){
      hint.style.visibility=`visible`
      hint.textContent=`this animal's name has vowel as it's second letter`
      
     }
     if(touchCard.classList.contains('hint6')){
      hint.style.visibility=`visible`
      hint.textContent=`its a prey to cheetah`
      
     }
    })
  
    front.addEventListener('mouseleave', function(e){
      touchCard=e.target
      
     if(touchCard.classList.contains('hint1')){
      hint.style.visibility=`hidden`
     }
    })
  
  })
  
  
  
  cards.forEach(function(card){

    card.addEventListener('DOMNodeRemoved', function(event){
    let removedCard=event.currentTarget;
    
    if(removedCard.classList.contains('cr1')){
      row1Children--;
      s2++;
       console.log(`s2+${s2}`);
      if(s2===12){
        sindex2++
      //  console.log(`s2 +${sindex2}`);
        s2string=sindex2.toString();
        score2.textContent=s2string
        s2=0;
        s1=0;
     }


      if(row1Children===0){
          function showCongrat(){
          congrat.style.visibility=`visible`;
          congrat.style.backgroundColor=`black`;
          ct.style.visibility=`visible`;
          buttonReset.style.visibility=`visible`;
          buttonReset.style.backgroundColor=`green`;
          buttonReset.style.textContent=`click to play another round`;
     buttonReset.style.position=`absolute`;
     buttonReset.style.top=`48%`;
          ct.textContent=`congrats player two wins`;
          hint.style.visibility=`hidden`
         console.log(`row1children is now zero`);
         }
          setTimeout (showCongrat,3000)
  
        
      }
    }
    if(removedCard.classList.contains('cr2')){
      row2Children--;
  

      s1++;
      console.log(`s1+${s1}`);
      if(s1===12){
         sindex1++;
      //  console.log(`s1 +${sindex1}`);
         s1string=sindex1.toString();
         score1.textContent=s1string;
         s1=0;
        s2=0;
      }
     


      if(row2Children===0){
     function showCongrat(){
     congrat.style.visibility=`visible`;
     congrat.style.backgroundColor=`black`;
     ct.style.visibility=`visible`;
     buttonReset.style.visibility=`visible`;
     buttonReset.style.backgroundColor=`green`;
     buttonReset.style.textContent=`click to play another round`;
     buttonReset.style.position=`absolute`;
     buttonReset.style.top=`48%`;

     ct.textContent=`congrats player one wins`;
     hint.style.visibility=`hidden`
      console.log(`row2children is now zero`);

    }
     setTimeout (showCongrat,3000)
    
 
   }
    }
    if(row1Children===0 && row2Children===0 ){
    
    if(player1Turn){
         if(sindex1===0){
      sindex1=0
     // console.log(`s1d +${sindex1}`);
     
        sub1String=sindex1.toString();
        score1.textContent=sub1String
    }
 else{
     
        sindex1=sindex1-1;
        sub1String=sindex1.toString();
      //  console.log(`s1d +${sindex1}`);
        score1.textContent=sub1String
 }
 //..................sindex2 logic start here.........

 if(sindex2===0){
        sindex2=0
        console.log(`s2d +${sindex2}`);
        sub2String=sindex2.toString();
        score2.textContent=sub2String;
    }

    else{
     // sindex2=0;
   sindex2=sindex2;
      sub2String=sindex2.toString();
      // console.log(`s2d +${sindex2}`);
      score2.textContent=sub2String
    }

    }
    
    if(!player1Turn){
        if(sindex1===0){
      sindex1=0
    //  console.log(`s1d +${sindex1}`);
     
        sub1String=sindex1.toString();
        score1.textContent=sub1String
    }
 else{
     
        sindex1=sindex1;
        sub1String=sindex1.toString();
    //    console.log(`s1d +${sindex1}`);
        score1.textContent=sub1String
 }
//..................index2 logic start here............

      if(sindex2===0){
      sindex2=0
    //  console.log(`s2d +${sindex2}`);
     
        sub2String=sindex2.toString();
        score2.textContent=sub2String
    }
 else{
     
        sindex2=sindex2-1;
        sub2String=sindex2.toString();
    //    console.log(`s2d +${sindex1}`);
        score2.textContent=sub2String
 }
    }
    
 

    
    
      function showCongrat(){
        congrat.style.visibility=`visible`;
        congrat.style.backgroundColor=`black`;
        ct.style.visibility=`visible`;
        buttonReset.style.visibility=`visible`;
        buttonReset.style.backgroundColor=`green`;
        buttonReset.style.textContent=`click to play another round`;
        buttonReset.style.position=`absolute`;
        buttonReset.style.top=`48%`;
   
        ct.textContent=`its a draw game`;
        hint.style.visibility=`hidden`
        console.log(row2Children);
   
       }
       setTimeout (showCongrat,3000)
       s1=0;
       s2=0;

    }

  })
  });
  
  
  
  
  
  
  };
  
  buttonReset.addEventListener('click',function(){
       s1=0;
       s2=0;

    resetGame()
      scoreBoard.style.visibility=`visible`;
      congrat.style.visibility=`hidden`;
      ct.style.visibility=`hidden`;
      buttonReset.style.visibility=`hidden`;
      play.style.visibility=`hidden`;
      stops.style.visibility=`hidden`;
  })
  
  
  

