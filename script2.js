const getData = async () => {
    let res = await fetch('https://api.themoviedb.org/3/discover/movie?language=ru-RUS&api_key=baacee587b52679e93f67d12424c4cb3')
    let data = await res.json()
    let movieCard = document.querySelectorAll('.movie__card')
    movieCard.forEach((el, i) => {


        let movieImg = document.createElement('div')
        let movieTitle = document.createElement('h1')
        let img = document.createElement('img')
        movieImg.appendChild(img)
        img.className = 'movie__img'

        el.appendChild(movieImg)
        movieImg.className = 'movie__img__box'
        el.appendChild(movieTitle)
        movieTitle.className = 'movie__title'
        el.id = i

        movieTitle.innerText = data.results[i].title
        img.src = `https://image.tmdb.org/t/p/original${data.results[i].poster_path}`

        el.addEventListener('click', () => {

            let modal = document.querySelector('.movie__modal')

            let modalCard = document.createElement('div')
            modalCard.classList.add('modal__card')
            console.log(modalCard);
            modal.appendChild(modalCard)
           
            let modalImg = document.createElement('div')
            modalCard.appendChild(modalImg)
            modalImg.className = 'modal__img__box'
            let modalImage = document.createElement('img')
            modalImg.appendChild(modalImage)
            modalImage.className = 'modal__img'
            modalImage.src = `https://image.tmdb.org/t/p/original${data.results[i].poster_path}`
            let modalText = document.createElement('p')
            modalCard.appendChild(modalText)
            modalText.className = 'modal__text'
            modalText.innerText = `Описание:${data.results[el.id].overview}`
            let modalRelease = document.createElement('p')
            modalCard.appendChild(modalRelease)
            modalRelease.className = 'modal__release'
            modalRelease.innerText = `Дата выхода: ${data.results[el.id].release_date}`
            modal.style.display = 'flex'
            let closeButton = document.createElement('button')
            modalCard.appendChild(closeButton)
            closeButton.innerText = '❌'
            closeButton.className = 'close__button'
            closeButton.addEventListener('click', () => {
                modal.style.display = 'none'
                modalCard.remove()
            })

        })

    })

}
getData()

