// Write your JS here.
// window.addEventListener('DOMContentLoaded', () => {

//     setInterval(() => {
//       const moleHeads = document.querySelectorAll('.wgs__mole-head');
//       for (let moleHead of moleHeads) {
//         moleHead.classList.toggle('wgs__mole-head--hidden');
//       }
//     }, 1000);

//   });

window.addEventListener('DOMContentLoaded', (e) => {
    setTimeout(popUpRandomMole, 0)


})

function popUpRandomMole() {
    const moleList = document.querySelectorAll(".wgs__mole-head");
    const randomNum = Math.floor(Math.random() *  8);
    const mole = moleList[randomNum];
    mole.classList.remove("wgs__mole-head--hidden");
    setTimeout(() => {
        hideMole(mole);
    }, 1000);
}

function hideMole(element){
    element.classList.add("wgs__mole-head--hidden")
    setTimeout(popUpRandomMole, 1000);

}



// console.log(popUpRandomMole());
