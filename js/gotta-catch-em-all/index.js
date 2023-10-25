/*
  1. W pliku data.js pod zmienna "pokemons" znajduje się tablica zawierająca dane wielu pokemonów, masz do niej dostęp również w tym pliku. 
  Chciałbym, abyś użył jej do wyświetlenia wszystkich pokemonów w naszym Pokedexie. 
  W tym celu dla każdego z nich możesz stworzyć nowy element drzeewa DOM i umieścić w nim informacje o Pokemonie (możesz zawrzeć tam jego nazwę, zdjęcie, a na kontener w którym się znajduje nadać specjalną klasę zależnie od typu)
*/

// tutaj złapiemy sekcję, do której będziemy dodawać pokemony
const pokemonsContainer = document.querySelector(".pokemons");

function renderPokemons(pokemons) {
  // uzupełnij tutaj
  pokemons.forEach(pokemon => {
    const container = document.createElement('div');
    container.classList.add('pokemon');

    const {types, id, name, image} = pokemon;
    container.classList.add(...types);

    const pokemonName = document.createElement('div');
    const pokemonNameSpan = document.createElement('span');
    pokemonName.classList.add('pokemon_name');
    pokemonNameSpan.textContent = name;
    pokemonName.appendChild(pokemonNameSpan);

    const pokemonImageContainer = document.createElement('div');
    const pokemonImage = document.createElement('img');
    pokemonImageContainer.classList.add('pokemon_image');
    pokemonImage.src = image;
    pokemonImageContainer.appendChild(pokemonImage);

    container.appendChild(pokemonImageContainer);
    container.appendChild(pokemonName);

    pokemonsContainer.appendChild(container);

  });
}

// następnie wykonaj uzupełnioną metodę z tablicą pokemons, aby sprawdzić czy wszystko działa
renderPokemons(pokemons);

/*
  2. Przeglądanie całej listy pokemonów może okazać się trochę uciążliwe. Fajnie byłoby skorzystać z filtrów, które już znajdują sie w pliku html. 
  Napisz ciało funkcji które pozwoli nam na:
  - filtrowanie po typie
  - filtrowanie po nazwie (wpisany fragment zawiera się w nazwie pokemona)
*/

function filterPokemons(pokemons, filters) {
  // uzupełnij tutaj
  // zwróć odfiltrowaną tablicę pokemonów
  return pokemons.filter(pokemon => {
    const { types, name } = pokemon;

    if (Array.isArray(filters)) {
      return filters.some(filter => types.includes(filter));
    } else {
      return name.toUpperCase().includes(filters.toUpperCase());
    }

  });
}

const form = document.querySelector("form");

function submitForm(event) {
  event.preventDefault();
  // następnie wykonaj uzupełnioną metodę z tablicą pokemons, aby sprawdzić czy wszystko działa
  const inputs = Array.from(document.querySelectorAll('input[type=checkbox]'));
  
  const filters = [];

  inputs.forEach(input => {
    return input.checked ? filters.push(input.id) : '';
  });

  pokemonsContainer.innerHTML = '';

  const textFilter = document.querySelector('input[type=text]');
  
  const filteredPokemons = textFilter.value.trim().length > 0 ? filterPokemons(pokemons, textFilter.value.trim()) : filterPokemons(pokemons, filters);

  if (filteredPokemons.length === 0) {
    pokemonsContainer.innerHTML = `<h1 style="grid-column: span 8;">Nie znaleziono pokemona o imieniu ${textFilter.value.trim()}</h1>`;
  } else {
    renderPokemons(filteredPokemons);
  }

  if (textFilter.value.trim().length > 0) {
    inputs.map(input => input.checked = false);
  } else {
    textFilter.value = '';
  }
}

form.addEventListener("submit", submitForm);

const showAllBtn = document.querySelector('.show_all');

showAllBtn.addEventListener('click', () => {

  pokemonsContainer.innerHTML = '';

  renderPokemons(pokemons);

  const inputs = Array.from(document.querySelectorAll('input[type=checkbox]'));
  inputs.map(input => input.checked = true);

  const textFilter = document.querySelector('input[type=text]');
  textFilter.value = '';

});

/*
  3. Pokedex powinien wyglądać trochę lepiej, niż ten tutaj. W folderze znajdziesz plik style.css, w którym możesz ulepszyć wygląd naszego pokedexa
  Liczymy na Twoją kreatywność 😉
*/
