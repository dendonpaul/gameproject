async function gameData() {
  let games = ["GTA5", "Far Cry", "Batman", "Avengers", "Age of Empires"];

  let randomNum = Math.floor(Math.random() * 5);

  let response = await fetch(
    "https://api.rawg.io/api/games?key=a6cf514da82b4cbba6d5edc45e5f8e57&search=" +
      games[randomNum]
  );

  let data = await response.json();

  let resultData = `<h2>${data.results[0].name}</h2>
  <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" src="${data.results[0].background_image}" alt="First slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="${data.results[1].background_image}" alt="Second slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="${data.results[2].background_image}" alt="Third slide">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
        </div>`;

  //   document.querySelector(".container").innerHTML = resultData;
  let gameDisplay = document.querySelector(".container");
  gameDisplay.innerHTML = resultData;
}

gameData();
