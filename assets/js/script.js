const closeBtn=document.getElementById('close-btn');
const ruleBtn=document.getElementById('rule-btn');
const ruleBox=document.querySelector('.rule-section');
const body=document.querySelector('body');
const blur=document.querySelector('.blur-section');
const gameBtn=document.querySelectorAll('.choice-section .circle');
const choiceSection=document.querySelector('.choice-section');
const gameSection=document.querySelector('.game-section');
const circle1=document.querySelector('.game-section .circle1');
const circle2=document.querySelector('.game-section .circle2');
const playAgainBtn=document.querySelector('.result-box button');
const player1=document.querySelector('.circle1 .circles');
const botPlayer=document.querySelector('.circle2 .circles');
const result=document.querySelector('.result-box h3');
const scoreField=document.querySelector('.score');
const meme=document.querySelector('.result-img img');
let score=0;
let draw;
ruleBtn.addEventListener('click',e=>{
    ruleBox.style.display='block';
    blur.style.display='block';
})
closeBtn.addEventListener('click',e=>{
    ruleBox.style.display='none';
    blur.style.display='none';
})
for(let b of gameBtn){
    b.addEventListener('click',e=>{
        choiceSection.style.display='none';
        gameSection.style.display='block';
        let img=document.createElement('img');
        let youWin=false;
        if(b.id=='paper'){
            circle1.id='game-paper';
            img.src='assets/img/icon-paper.svg';
        }else if(b.id=='rock'){
            circle1.id='game-rock';
            img.src='assets/img/icon-rock.svg';
        }else{
            circle1.id='game-scissors';
            img.src='assets/img/icon-scissors.svg';
        }
        player1.appendChild(img);
        setTimeout(bot,2000);
        function resultOutput(){
            if(b.id=='paper' && draw=='rock'){
                result.textContent='You win';
                meme.src='assets/img/Clap Applause GIF by TWICE - Find & Share on GIPHY.gif';
                youWin=true;
            }else if(b.id=='paper' && draw=='scissors'){
                result.textContent='You lose';
                meme.src='assets/img/losememe.jfif';
            }else if(b.id=='rock' && draw=='paper'){
                result.textContent='You lose';
                meme.src='assets/img/losememe.jfif';
            }else if(b.id=='rock' && draw=='scissors'){
                result.textContent='you win';
                meme.src='assets/img/Clap Applause GIF by TWICE - Find & Share on GIPHY.gif';
                youWin=true;
            }else if(b.id=='scissors' && draw=='paper'){
                result.textContent='you win';
                meme.src='assets/img/Clap Applause GIF by TWICE - Find & Share on GIPHY.gif';
                youWin=true;
            }else if(b.id=='scissors' && draw=='rock'){
                result.textContent='you lose';
                meme.src='assets/img/losememe.jfif';
            }else{
                result.textContent='draw';
                meme.src='assets/img/drawmeme.jfif';
            }
            document.querySelector('.result-box').style.display='block';
            if(youWin==true){
                score++;
                console.log(score);
                scoreField.textContent=score;
            }
        }
        setTimeout(resultOutput,3200);
    })
}
const cards=['paper','scissors','rock'];

function bot(){
    draw=cards[Math.floor(Math.random() * cards.length)];
    let img=document.createElement('img');
    if(draw=='paper'){
        circle2.id='game-paper';
        img.src='assets/img/icon-paper.svg';
    }else if(draw=='rock'){
        circle2.id='game-rock';
        img.src='assets/img/icon-rock.svg';
    }else{
        circle2.id='game-scissors';
        img.src='assets/img/icon-scissors.svg';
    }
    botPlayer.style.animation='unset';
    botPlayer.appendChild(img);
}
playAgainBtn.addEventListener('click',e=>{
    choiceSection.style.display='block';
    gameSection.style.display='none';
    circle1.id='';
    circle2.id='';
    player1.removeChild(player1.lastChild);
    botPlayer.removeChild(botPlayer.lastChild);
    document.querySelector('.result-box').style.display='none';
    botPlayer.style.animation='ripple 500ms linear infinite';
})