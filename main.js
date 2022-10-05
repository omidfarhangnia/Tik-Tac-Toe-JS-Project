const StartGameBtn = document.querySelector(".start__game__btn");
StartGameBtn.addEventListener("click" , StartGame);

function StartGame(){
    const NameContainer = document.querySelector(".name__container");
    const GameContainer = document.querySelector(".game__container")
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

    AddClassToElement(NameContainer , "hidden-style");
    RemoveClassFromElement(GameContainer , "hidden-style");
}
function AddClassToElement(element , className){
    element.classList.add(className);
}
function RemoveClassFromElement(element , className){
    element.classList.Remove(className);
}