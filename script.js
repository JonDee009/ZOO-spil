// ELEMENTER
const dragFoodBox = document.querySelectorAll(".foodcontainer article");
const targetAnimal = document.querySelectorAll(".animal div");

const pointBox = document.querySelector("#score span");
const foodBox = document.querySelector("#foods .foodcontainer");

// event listener for drag og drop elementer
dragFoodBox.forEach(function (element) {
  element.addEventListener("dragstart", startDrag);
});

targetAnimal.forEach(function (element) {
  element.addEventListener("dragover", cancelDefault);
  element.addEventListener("drop", dropMad);
});

// AUDIO

const successAudio = document.getElementById("succesAudio");
const failureAudio = document.getElementById("failureAudio")
failureAudio.load();




// FUNKTIONER

function startDrag(event) {
  event.dataTransfer.setData("foodId", this.id);
  event.dataTransfer.setData("foodName", this.dataset.food);
}

function cancelDefault(event) {
  event.preventDefault();
}

function dropMad(event) {
  let madId = event.dataTransfer.getData("foodId");
  let madType = event.dataTransfer.getData("foodName");

  if (madType == this.dataset.food) {
    let hearts = this.querySelectorAll("p > .heart");
    let heartCount = hearts.length + 1;
    let fontSize = heartCount * 55; 
    successAudio.play();
    hearts.forEach(function (heart) {
      heart.remove();
    });

    let p = this.querySelector("p");
    let emoji = p.textContent.trim();

    for (let i = 0; i < heartCount; i++) {
      let heart = document.createElement("span");
      heart.classList.add("heart");
      heart.innerHTML = "";
      p.appendChild(heart);
    }

    p.style.fontSize = fontSize + "px";
    pointBox.innerHTML = parseInt(pointBox.innerHTML) + 100;
  }
  
  else {
    failureAudio.play();
    alert("Ups! Forkert mad");
    
    /*pointBox.innerHTML = parseInt(pointBox.innerHTML) - 100;
    foodBox.removeChild(document.querySelector("#" + madId));*/
    
  }
}


successfulIfStatements++;
if (successfulIfStatements === 5) {
  // Trigger your desired event here
  console.log("Congratulations, you've made 5 successful moves!");
  successfulIfStatements = 0; // Reset counter
}
else {
alert("Puhaaaa!");
pointBox.innerHTML = parseInt(pointBox.innerHTML) - 100;
foodBox.removeChild(document.querySelector("#" + madId));
failureAudio.play();
}


