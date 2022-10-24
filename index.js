console.log('I am working')

fetch('https://dadjokes.com/')
 .then(res => res.json())
 .then(data => {
