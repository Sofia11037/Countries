const row = document.querySelector('.row');

const renderCards = (array) => {
    for (let i = 0; i < array.length; i += 5) {
        const name = array[i].name.official
        const region = array[i].region

        const population = array[i].population
        const people = population / 1000000;
        people.toFixed(1);
        if (!population) {
            people = '-';
        };

        const languages = array[i].languages
        if (!languages) {
            languages = '-';
        }
        const langs = Object.values(languages);
        const langsString = langs.join(', ');

        const currencies = array[i].currencies;
        const currenciesArr = Object.values(currencies);

        const curs = currenciesArr.map(item => item.symbol + ' ' + item.name);
        const stringCurs = curs.join(', ')

        const flag = array[i].flags.svg



        row.insertAdjacentHTML('beforeend', `
        <div class="col">
        <div class="card h-100">
            <img src="${flag}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">${region}</p>
                <p class="card-text">&#x1F46A ${people} mln</p>
                <p class="card-text">&#x1F4AC ${langsString}</p>
                <p class="card-text">&#x1F4B0 ${stringCurs}</p>
            </div>
        </div>
    </div>`)
    }
}




const getData = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then((response) => response.json())
        .then((array) => renderCards(array))
};

getData();