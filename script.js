/*
script.js - This is where 90% of the rock-paper scissors code happens.
First, we initiate variable to keep player score, computer score, and ties.
*/
let pScore = 0;
let cScore = 0;
let tie = 0;

//We create a new function where the basic framework of the game is.
function game(){
    /* 
    Declaring various variables. We get the pictures by their ids, and put them in the player array.
    We also keep a separate array for the pictures for shuffling/replacing compImg,
    and a set of words for the computer's options. 
    */
    const rockImg = document.getElementById("rock");
    const paperImg = document.getElementById("paper");
    const scisImg = document.getElementById("scissors");
    const compImg = document.getElementById("question");
    const rpsImgs = ["rock.PNG", "scissors.PNG", "paper.PNG"]
    const pOptions = [rockImg, paperImg, scisImg];
    const cOptions = ["rock", "scissors", "paper"];

    //Since pOptions has multiple elements, we got a for loop to make sure all images are accounted for.
    for (let i = 0; i < pOptions.length; i++){
        //Adds event listener to the picture currently at index i, which initiates their function on click.
        pOptions[i].addEventListener("click", () =>{
            //pSelect grabs the id of the current pOptions image. 
            const pSelect = pOptions[i].id;
            //adds pselect class to the current pOptions image. 
            pOptions[i].classList.add("pselect");

            /*
            create randomShuffle, which sets an interval of 500ms (0.5s) 
            in which compImg's source changes to one of the pictures in the rpsImgs
            at random, with Math.floor(Math.random) generating a random number between 0 and 2.
            */
            let randomShuffle = setInterval(() => {
                compImg.src = rpsImgs[Math.floor(Math.random() * 3)];
            }, 500);
            
            /*
            after 3000ms (3s), the computer finishes thinking and initiates the following block of code.
            It starts by adding the cselect style to compImg, then stops the randomShuffle interval.
            After that, it creates a const that generates a (final) random number between 0 and 2,
            and uses it to change compImg's source and decide which cOptions text compChoice gets.
            Then, the function winner is called, using pSelect and compChoice as arguments.
            */
            setTimeout(() => {
                compImg.classList.add("cselect");
                clearInterval(randomShuffle);
                const rIndex = Math.floor(Math.random() * 3);
                compImg.src = rpsImgs[rIndex];
                const compChoice = cOptions[rIndex];
                winner (pSelect, compChoice);
            }, 3000);

            /*
            after 5000ms (5s), remove both pselect and cselect from compImg and pOptions.
            This is a more aesthetic choice.
            */
            setTimeout(()=>{
                compImg.classList.remove("cselect");
                pOptions[i].classList.remove("pselect");
            }, 5000);
            });


        }

    }

function winner(player, computer) {
    /*
    res, pscore, cscore and tiesc grab the selected classes to set-up the win message/score tallying.
    player and computer are initialized and forced into lowercase as a precaution for the if-else statements.
    */
    const res = document.querySelector('.res');
    const pscore = document.querySelector('.pscore');
    const cscore = document.querySelector('.cscore');
    const tiesc = document.querySelector('.tie');
    player = player.toLowerCase();
    computer = computer.toLowerCase();
    /* 
    A set of if-else statements.
    First, they check what the player's choice was, then compare it to the computer's choice.
    If the computer wins, cScore is incremented, res displays the appropriate win message,
    and cscore shows the computer's current score.
    If the player wins, pScore is incremented, res displays the appropriate win message,
    and pscore shows the player's current score.
    If neither win, tie is incremented, res displays the tie message, and tie shows the
    amount of ties that happened by then.
    */
    if (player == "rock"){
        if (computer == "paper"){
            cScore++;
            res.textContent = "Computer wins!";
            cscore.textContent = cScore;
        }
        else if (computer=="scissors"){
            pScore++;
            res.textContent = "You win!"
            pscore.textContent = pScore;
        }
        else{
            tie++;
            res.textContent = "It's a tie!"
            tiesc.textContent = tie;
        }
    }

    else if (player == "paper"){
        if (computer == "scissors"){
            cScore++;
            res.textContent = "Computer wins!";
            cscore.textContent = cScore;
        }
        else if (computer=="rock"){
            pScore++;
            res.textContent = "You win!"
            pscore.textContent = pScore;
        }
        else{
            tie++;
            res.textContent = "It's a tie!"
            tiesc.textContent = tie;
        }
    }

    else if (player == "scissors"){
        if (computer == "rock"){
             cScore++;
            res.textContent = "Computer wins!";
            cscore.textContent = cScore;
                
        }
        else if (computer == "paper"){
            pScore++;
            res.textContent = "You win!"
            pscore.textContent = pScore;
            }
        else {
            tie++;
            res.textContent = "It's a tie!"
            tiesc.textContent = tie;
            }
        }


}
// game is called at the end of the script as it will not work otherwise.
game(); 
