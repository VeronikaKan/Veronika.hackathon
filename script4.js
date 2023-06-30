const categoriesText = [
    {
        name: 'Персонажи',
        id: 0,
        url: "https://swapi.dev/api/people/"
    },
    {
        name: 'Звездные корабли',
        id: 1,
        url: "https://swapi.dev/api/starships/"
    },
    {
        name: 'Планеты',
        id: 2,
        url: "https://swapi.dev/api/planets/"
    },

    {
        name: 'Фильмы',
        id: 3,
        url: "https://swapi.dev/api/films/"

    }
]
let sWarsHeader = document.querySelector('.sWars__header')
let sWarsList = document.createElement('ul')
sWarsHeader.appendChild(sWarsList)
sWarsList.className = 'sWars__list'
categoriesText.forEach((el) => {
    let sWarsCategories = document.createElement('li')
    sWarsList.appendChild(sWarsCategories)
    sWarsCategories.className = 'sWars__categories'
    sWarsCategories.innerHTML = el.name
    sWarsCategories.id = el.id
    sWarsCategories.addEventListener('click', async (el) => {
        const id = el.currentTarget.id
        let sWarsCardsWrapper = document.querySelector('.sWars__cards')
        let starWarsContent = document.querySelectorAll('.sWars__card')
        if (starWarsContent.length === 0) {
            console.log(id);
            switch (id) {
                case '0':
                    sWarsCardsWrapper = getSWarsHero(sWarsCardsWrapper)
                    break;
                case '1':
                    sWarsCardsWrapper = getSWarsShips(sWarsCardsWrapper)
                    break;
                case '2':
                    sWarsCardsWrapper = getSWarsPlanets(sWarsCardsWrapper)
                    break;
               
                default:console.log(3);
                    sWarsCardsWrapper = getSWars(sWarsCardsWrapper)
                    break;
            }
        } else {
            sWarsCardsWrapper.remove()
            const sWarsHeader = document.querySelector('.sWars__header')
            const newSwarsWrapper = document.createElement('div')
            newSwarsWrapper.classList.add('sWars__cards')
            sWarsHeader.appendChild(newSwarsWrapper)
        }
    })
})




const getSWarsHero = async (wrapper) => {
    let res = await fetch('https://swapi.dev/api/people/')
    let data = await res.json()
    return data.results.forEach((el) => {
        let sWarsCard = document.createElement('div')
        wrapper.appendChild(sWarsCard)
        sWarsCard.className = 'sWars__card'
        let sWarsDesc = document.createElement('p')
        sWarsDesc.className = 'sWars__desc'
        sWarsCard.appendChild(sWarsDesc)
        sWarsDesc.innerText = `Name:${el.name}`
        let sWarsBirth = document.createElement('p')
        sWarsCard.appendChild(sWarsBirth)
        sWarsBirth.innerText = `Date of Birth:${el.birth_year}`
        let sWarsEyes = document.createElement('p')
        sWarsCard.appendChild(sWarsEyes)
        sWarsEyes.innerText = `Eyes color:${el.eye_color}`
        let sWarsHeight = document.createElement('p')
        sWarsCard.appendChild(sWarsHeight)
        sWarsHeight.innerText = `Height:${el.height}`
        sWarsCard.style.display = 'flex'
    })
}


// {
//     "name": "CR90 corvette", 
//     "model": "CR90 corvette", 
//     "manufacturer": "Corellian Engineering Corporation", 
//     "cost_in_credits": "3500000", 
//     "length": "150", 
//     "max_atmosphering_speed": "950", 
//     "crew": "30-165", 
//     "passengers": "600", 
//     "cargo_capacity": "3000000", 
//     "consumables": "1 year", 
//     "hyperdrive_rating": "2.0", 
//     "MGLT": "60", 
//     "starship_class": "corvette", 
//     "pilots": [], 
//     "films": [
//         "https://swapi.dev/api/films/1/", 
//         "https://swapi.dev/api/films/3/", 
//         "https://swapi.dev/api/films/6/"
//     ], 
//     "created": "2014-12-10T14:20:33.369000Z", 
//     "edited": "2014-12-20T21:23:49.867000Z", 
//     "url": "https://swapi.dev/api/starships/2/"
// }

const getSWarsShips = async (wrapper) => {
    let res = await fetch('https://swapi.dev/api/starships/')
    let data = await res.json()
    console.log(data);
    return data.results.forEach((el) => {
        let sWarsCard = document.createElement('div')
        wrapper.appendChild(sWarsCard)
        sWarsCard.className = 'sWars__card'
        let sWarsDesc = document.createElement('p')
        sWarsDesc.className = 'sWars__desc'
        sWarsCard.appendChild(sWarsDesc)
        sWarsDesc.innerText = `Name:${el.name}`
        let sWarsModel = document.createElement('p')
        sWarsCard.appendChild(sWarsModel)
        sWarsModel.innerText = `Model:${el.model}`
        let sWarsManufacturer = document.createElement('p')
        sWarsCard.appendChild(sWarsManufacturer)
        sWarsManufacturer.innerText = `Manufacturer:${el.manufacturer}`
        let sWarsPassenger = document.createElement('p')
        sWarsCard.appendChild(sWarsPassenger)
        sWarsPassenger.innerText = `Passenger:${el.passenger}`
        sWarsCard.style.display = 'flex'
    })
}

// "name": "Tatooine", 
// "rotation_period": "23", 
// "orbital_period": "304", 
// "diameter": "10465", 
// "climate": "arid", 
// "gravity": "1 standard", 
// "terrain": "desert", 
// "surface_water": "1", 
// "population": "200000"

const getSWarsPlanets = async (wrapper) => {
    let res = await fetch('https://swapi.dev/api/starships/')
    let data = await res.json()
    console.log(data);
    return data.results.forEach((el) => {
        let sWarsCard = document.createElement('div')
        wrapper.appendChild(sWarsCard)
        sWarsCard.className = 'sWars__card'
        let sWarsDesc = document.createElement('p')
        sWarsDesc.className = 'sWars__desc'
        sWarsCard.appendChild(sWarsDesc)
        sWarsDesc.innerText = `Name:${el.name}`
        let sWarsDiameter = document.createElement('p')
        sWarsCard.appendChild(sWarsDiameter)
        sWarsDiameter.innerText = `Diameter:${el.diameter}`
        let sWarsRotationPeriod = document.createElement('p')
        sWarsCard.appendChild(sWarsRotationPeriod )
        sWarsRotationPeriod .innerText = `Rotation period:${el.rotation_period}`
        let sWarsClimate = document.createElement('p')
        sWarsCard.appendChild(sWarsClimate)
        sWarsClimate.innerText = `Passenger:${el.climate}`
        sWarsCard.style.display = 'flex'
    })
}


const getSWars = async (wrapper) => {
    let res = await fetch('https://swapi.dev/api/starships/')
    let data = await res.json()
    console.log(data);
    return data.results.forEach((el) => {
        let sWarsCard = document.createElement('div')
        wrapper.appendChild(sWarsCard)
        sWarsCard.className = 'sWars__card'
        let sWarsDesc = document.createElement('p')
        sWarsDesc.className = 'sWars__desc'
        sWarsCard.appendChild(sWarsDesc)
        sWarsDesc.innerText = `Title:${el.title}`
        let sWarsEpisode = document.createElement('p')
        sWarsCard.appendChild(sWarsEpisode)
        sWarsEpisode.innerText = `Episode:${el.episode_id}`
        let sWarsDirector= document.createElement('p')
        sWarsCard.appendChild(sWarsDirector)
        sWarsDirector .innerText = `Diretor:${el.director}`
        let sWarsProducer = document.createElement('p')
        sWarsCard.appendChild(sWarsProducer)
        sWarsProducer.innerText = `Passenger:${el.producer}`
        sWarsCard.style.display = 'flex'
    })
}

// "title": "A New Hope", 
// "episode_id": 4, 
// "opening_crawl": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....", 
// "director": "George Lucas", 
// "producer": "Gary Kurtz, Rick McCallum", 
// "release_date": "1977-05-25", 
// "characters"