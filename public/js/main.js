const deleteBtn = document.querySelectorAll('.del')
const movieItems = document.querySelectorAll('span.not')
const movieComplete = document.querySelectorAll('span.completed')

Array.from(deleteBtn).forEach((el) => {
  el.addEventListener('click', deleteMovie)
})

Array.from(movieItems).forEach((el) => {
  el.addEventListener('click', markWatched)
})

Array.from(movieComplete).forEach((el) => {
  el.addEventListener('click', markNotWatched)
})

async function deleteTodo() {
  const todoId = this.parentNode.dataset.id
  try {
    const response = await fetch('todos/deleteTodo', {
      method: 'delete',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        'todoIdFromJSFile': todoId
      })
    })
    const data = await response.json()
    console.log(data)
    location.reload()
  } catch (err) {
    console.log(err)
  }
}
document.querySelector('#searchMovies').addEventListener('click', searchMovies)

function searchMovies() {
  const choice = document.querySelector('#movieSearch').value
  console.log(choice)

  const url = `https://imdb-api.com/en/API/SearchMovie/k_c1iz78p7/${choice}`

  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      data.results.forEach(obj => {
        const li = document.createElement('li')
        let pic = document.createElement("img")
        let addButton = document.createElement("button")
        li.textContent = `${obj.title} ${obj.description}`
        pic.src = `${obj.image}`
        addButton.innerText = 'Add This Movie!'
        // console.log(li)
        // console.log(pic)
        console.log(addButton)
        document.querySelector("ul").appendChild(li).appendChild(addButton).appendChild(pic)
        // document.querySelector("li").appendChild(addSign)
      })

    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}

async function deleteMovie() {
  const todoId = this.parentNode.dataset.id
  try {
    const response = await fetch('movies/deleteMovie', {
      method: 'delete',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        'movieIdFromJSFile': movieId
      })
    })
    const data = await response.json()
    console.log(data)
    location.reload()
  } catch (err) {
    console.log(err)
  }
}


async function markWatched() {
  const todoId = this.parentNode.dataset.id
  try {
    const response = await fetch('movies/markComplete', {
      method: 'put',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        'movieIdFromJSFile': movieId
      })
    })
    const data = await response.json()
    console.log(data)
    location.reload()
  } catch (err) {
    console.log(err)
  }
}

async function markNotWatched() {
  const todoId = this.parentNode.dataset.id
  try {
    const response = await fetch('movie/markNotWatched', {
      method: 'put',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        'movieIdFromJSFile': movieId
      })
    })
    const data = await response.json()
    console.log(data)
    location.reload()
  } catch (err) {
    console.log(err)
  }
}

//Formatting Code

