const StartGameBtn = document.querySelector(".start__game__btn");
StartGameBtn.addEventListener("click" , StartGame);
var PlayerTurns = 0;

// فانکشنی برای اضافه کردن کلاس 
function AddClassToElement(element , className){
    element.classList.add(className);
}
// فانکشنی برای حذف کردن کلاس 
function RemoveClassFromElement(element , className){
    element.classList.remove(className);
}
function StartGame(){
    const NameContainer = document.querySelector(".name__container");
    const GameContainer = document.querySelector(".game__container");
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
function FillUserData(Player1Input , Player1Color , Player2Input , Player2Color){
    const UserDataPlayer1 = document.querySelector(".UserData--player1");
    const UserDataPlayer2 = document.querySelector(".UserData--player2");

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
        FillCellWithSymbols(element)
    })
})

function FillCellWithSymbols(element){
    var ElementChild = element.querySelector("span");
    ElementChild.textContent = (PlayerTurns % 2 === 0) ? "X" : "O";
    PlayerTurns++;
}