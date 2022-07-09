function hideCards(){
  const cards = document.querySelectorAll(".card");
  for (let i = 0; i < cards.length; i++){
    let card = cards[i];
    card.style.display = "none";
  }
}

function titleFilter(value){
  const titles = document.querySelectorAll(".card-title");
  hideCards();
  for (let i = 0; i < titles.length; i++){
    let title = titles[i];
    let searchBar = value.toLowerCase();
    if (title.innerText.toLowerCase().includes(searchBar)){
      title.parentNode.parentNode.style.display = "flex";
    }
  }
}

function submitFilter(input){
  let submitInput = window.location.search;
  if (submitInput.length != 0){
    submitInput = submitInput.replace("?breed-type=", "").replace("+", " ");
    input.value = submitInput;
    titleFilter(input.value);
  }
}

const searchInput = document.querySelector(".search-bar");
submitFilter(searchInput);
searchInput.addEventListener("keyup", () => {
  titleFilter(searchInput.value);
})

