const StartGameBtn = document.querySelector(".start__game__btn");
StartGameBtn.addEventListener("click" , StartGame);

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
    const InputPlayerNumTwo = document.getElementById("player__num__2__name");

    if(InputPlayerNumOne.value === "" || InputPlayerNumTwo.value === ""){
        alert("Please Fill Players Input Name");
        return;
    }
    if(InputPlayerNumOne.value === InputPlayerNumTwo.value){
        alert("You can't Choose Same Names");
        return;
    }
    FillUserData(InputPlayerNumOne , InputPlayerNumTwo)
    AddClassToElement(NameContainer , "hidden-style");
    RemoveClassFromElement(GameContainer , "hidden-style");
}
function FillUserData(InputPlayerNumOne , InputPlayerNumTwo){
    const UserDataPlayer1 = document.querySelector(".UserData--player1");
    const UserDataPlayer2 = document.querySelector(".UserData--player2");

    UserDataPlayer1.textContent = InputPlayerNumOne.value;
    UserDataPlayer2.textContent = InputPlayerNumTwo.value;
}