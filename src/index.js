// document.addEventListener('DOMContentLoaded', e => {
//   const domController = new DOMController
// })



document.addEventListener('DOMContentLoaded', e => {
  fetch("http://localhost:3000/pups")
    .then(res => res.json())
    .then(dogsArr => {
      dogsArr.forEach(dogObj => {
        newDogNameDiv(dogObj)
      })
    })
})

const newDogNameDiv = (dog) => {
  const dogNameSpan = document.createElement('span')
  const dogBar = document.querySelector("#dog-bar")
  dogNameSpan.textContent = `${dog.name}`

  dogNameSpan.addEventListener("click", event => {
    const dogInfoDiv = document.querySelector("#dog-info")
    const dogDiv = document.createElement('div')
    const dogImg = document.createElement('img')
    const dogName = document.createElement('h2')
    const dogBtn = document.createElement('button')
    dogBtn.className = "good-or-bad-button"
    
    dogImg.src = `${dog.image}`
    dogName.textContent = `${dog.name}`

    if (dog.isGoodDog === true ) {
      dogBtn.textContent = "Bad Dog!"
     } else { 
       dogBtn.textContent = "Good Dog!"
     }

     dogBtn.addEventListener("click", event => {
      if (dogBtn.textContent === "Bad Dog!") {
        dogBtn.textContent = "Good Dog!"
        fetch(`http://localhost:3000/pups/${dog.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            "isGoodDog": false
          }),
        })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
      } else if (dogBtn.textContent === "Good Dog!") {
        dogBtn.textContent = "Bad Dog!"
        fetch(`http://localhost:3000/pups/${dog.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            "isGoodDog": true
          }),
        })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        })
      }
    }) 

    dogDiv.append(dogImg, dogName, dogBtn)
    dogInfoDiv.innerHTML = null
    dogInfoDiv.append(dogDiv)
    
  })

  dogBar.append(dogNameSpan)
}

// fetch(`http://localhost:3000/pups/${dog.id}` {
//   method: 'PUT',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     "isGoodDog": true
//   }),
// })
// .then(response => response.json())
// .then(data => {
//   console.log('Success:', data);
// })
// .catch((error) => {
//   console.error('Error:', error);
// })

// const newDogDiv = (dog) => {
//   const dogDiv = document.createElement('div')
//   const dogImg = document.createElement('img')
//   const dogName = document.createElement('h2')
//   const dogNameSpan = document.createElement('span')
//   const dogBtn = document.createElement('button') 

  
// }
