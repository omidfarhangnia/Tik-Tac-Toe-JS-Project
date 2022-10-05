const NameContainer = document.querySelector(".name__container");
const InputPlayerNumOne = document.getElementById("player__num__1__name");
const InputPlayerNumTwo = document.getElementById("player__num__2__name");
const StartGameBtn = document.querySelector(".start__game__btn");

StartGameBtn.addEventListener("click" , StartGame);
function StartGame(){
    AddElementClass(NameContainer , "d-none");
}
function AddElementClass(element , className){
    element.classList.add(className);
}
function RemoveElementClass(element , className){
    element.classList.Remove(className);
}