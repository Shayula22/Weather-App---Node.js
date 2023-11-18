const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const message1 = document.querySelector('#message-1')
const message2 = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
     e.preventDefault() 

     const location = search.value
     
     message1.textContent = 'Loading...'
     message2.textContent = ''

     fetch('http://localhost:8888/weather?address=' + location).then((response) => {
     response.json().then((data) => {
          if(data.error){
               message1.textContent = 'An error occured, try again'
               message2.textContent = ''
          }else{
               message1.textContent = ''
               message2.textContent = data.forecast + data.location
          }
     })
})
})