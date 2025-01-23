


//api
  const url = "https://api.thecatapi.com/v1/images/search?limit=3";
  const section = document.querySelector(".cats-container");
  const button = document.querySelector(".btn");

  function startedButton(newText) {
    button.textContent = newText;
  }

  button.addEventListener("click", getRandomCats);

  function randomCatPhotos(json) {
    section.innerHTML = "";
    const cats = json.slice(0, 3);

    cats.forEach((cat) => {
      const imageContainer = document.createElement("div");
      imageContainer.classList.add("cat-card");

      const image = document.createElement("img");
      image.src = cat.url;
      image.classList.add("cat-img");

      const likeButton = document.createElement("button");
      likeButton.classList.add("like-btn");
      const heartIcon = document.createElement("i"); 
      heartIcon.classList.add("fa-regular", "fa-heart"); 

      likeButton.appendChild(heartIcon);
      section.appendChild(imageContainer);
      imageContainer.appendChild(image);
      imageContainer.appendChild(likeButton);
    });

    startedButton("Show more");
  }
  

  async function getRandomCats() {
    try {
      const response = await fetch(url);
      const json = await response.json();
      console.log("JSON:", json);
      randomCatPhotos(json);
    } catch (e) {
      console.error("Error", e);
    }
  }


//title animation
  const text = "CAAAAATS";
  const container = document.getElementById("head-title");

  text.split("").forEach((letter, index) => {
    const span = document.createElement("span");
    span.textContent = letter;
    span.className = "wave-letter";
    span.style.animationDelay = `${index * 0.1}s`;
    container.appendChild(span);
  });




