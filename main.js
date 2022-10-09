const StartGameBtn = document.querySelector(".start__game__btn");
StartGameBtn.addEventListener("click" , StartGame);
var PlayerTurns = 0 , playerX = new Set() , playerO = new Set();

// فانکشنی برای اضافه کردن کلاس 
function AddClassToElement(element , className){
    element.classList.add(className);
}
// فانکشنی برای حذف کردن کلاس 
function RemoveClassFromElement(element , className){
    element.classList.remove(className);
}
const GameContainer = document.querySelector(".game__container");
function StartGame(){
    const NameContainer = document.querySelector(".name__container");
    const InputPlayerNumOne = document.getElementById("player__num__1__name");
    const ColorPlayerNumOne = document.getElementById("PlayerOneColor");
    const InputPlayerNumTwo = document.getElementById("player__num__2__name");
    const ColorPlayerNumTwo = document.getElementById("PlayerTwoColor");
        

    if(InputPlayerNumOne.value === "" || InputPlayerNumTwo.value === ""){
        alert("Please Fill Players Input Name");
        return;
    }
    if(InputPlayerNumOne.value === InputPlayerNumTwo.value){
        alert("You can't Choose Same Names");
        return;
    }
    FillUserData(InputPlayerNumOne , ColorPlayerNumOne , InputPlayerNumTwo , ColorPlayerNumTwo);
    AddClassToElement(NameContainer , "hidden-style");
    RemoveClassFromElement(GameContainer , "hidden-style");
}
const UserDataPlayer1 = document.querySelector(".UserData--player1");
const UserDataPlayer2 = document.querySelector(".UserData--player2");
function FillUserData(Player1Input , Player1Color , Player2Input , Player2Color){
    // این فانکشن چک میکند که اگر رنگ وارد شده روشن است رنگ متن را تغییر میدهد که دیده شود
    let CheckTheColor = (hex , element) => {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        result = result ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        } : null;
 
        if(result.r >= 170 && result.g >= 170 && result.b >= 170){
            element.style.color = "#000"
        }
    }

    UserDataPlayer1.textContent = Player1Input.value;
    UserDataPlayer2.textContent = Player2Input.value;

    UserDataPlayer1.style.background  = Player1Color.value;
    UserDataPlayer2.style.background  = Player2Color.value;
 
    CheckTheColor(Player1Color.value , UserDataPlayer1)
    CheckTheColor(Player2Color.value , UserDataPlayer2)
}

const BoardCells = document.querySelectorAll(".board-cells");
BoardCells.forEach((element) => {
    element.addEventListener("click" , () => {
        var ElementChild = element.querySelector("span");
        FillCellWithSymbols(ElementChild);
        SaveSelectedCells(element);
        IsWinner();
    })
})

function FillCellWithSymbols(ElementChild){
    if(ElementChild.textContent !== "") return;
    ElementChild.textContent = (PlayerTurns % 2 === 0) ? "X" : "O";
    PlayerTurns++;
}

function SaveSelectedCells(element){
    var SelectedCellNum = element.classList[0].match(/(\d)/g)[0];
    if(PlayerTurns % 2 === 0){
        playerX.add(SelectedCellNum);
    }else{
        playerO.add(SelectedCellNum);
    }
}

function IsWinner(){
    var WinnerSituations = [
        ["1" , "2" , "3"],
        ["4" , "5" , "6"],
        ["7" , "8" , "9"],
        ["1" , "4" , "7"],
        ["2" , "5" , "8"],
        ["3" , "6" , "9"],
        ["1" , "5" , "9"],
        ["3" , "5" , "7"]
    ];

    CheckPlayerIsWinner(playerX , WinnerSituations , "player2");
    CheckPlayerIsWinner(playerO , WinnerSituations , "player1");
}

function CheckPlayerIsWinner(player , WinnerSituations , playerNum){
    player = Array.from(player);
    if(player.length < 3) return;
    for(var j = 0; j < WinnerSituations.length; j++){
        if(WinnerSituations[j].every(r=> player.indexOf(r) >= 0)){
            WeHaveWinner(playerNum == "player1" ? UserDataPlayer1 : UserDataPlayer2 , playerNum == "player1" ? "X" : "O");
        }
    }
}

const WinnerPageContainer = document.querySelector(".winnerPage__container");
function WeHaveWinner(playerNum , playerSymbol){
    const WinnerPageHeader = WinnerPageContainer.querySelector("h1");
    const WinnerPageSymbol = WinnerPageContainer.querySelector("p");
    // ما در اینجا به پیغام تبریک نیاز داریم 
    setTimeout(() => {
        AddClassToElement(GameContainer , "hidden-style");
        RemoveClassFromElement(WinnerPageContainer , "hidden-style");
        var WinnerNameContainers = document.querySelectorAll(".WinnerName");
        Array.from(WinnerNameContainers).forEach(element => {
            element.textContent = `${playerNum.textContent.trim()}`; 
        });
        document.getElementById("WinnerSymbol").textContent = playerSymbol;
    }, 400);
}

const PlayAgainBtn = document.getElementById("PlayAgainBtn");
PlayAgainBtn.addEventListener('click' , PlayAgain)

function PlayAgain(){
    BoardCells.forEach((element) => {
        ElementChild = element.querySelector("span");
        ElementChild.textContent = "";
    });
    // با اینکار صفحه را خالی میکنیم
    RemoveClassFromElement(GameContainer , "hidden-style");
    AddClassToElement(WinnerPageContainer , "hidden-style");
    
    playerO.clear();
    playerX.clear();
}