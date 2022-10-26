const URL = 'https://www.fishwatch.gov/api/species'

const topFishName = document.querySelector('#fish_name')
const fishImage = document.querySelector('#fish_image')
const fishPhysicalDescription = document.querySelector('#fish_description')
const fishCalories = document.querySelector('#calories')
const fishProtein = document.querySelector('#protein')
const fishTotalFat = document.querySelector('#total_fat')
const fishCarbohydrate = document.querySelector('#carbohydrate')
const fishTaste = document.querySelector('#taste')
const fishTexture = document.querySelector('#texture')
const fishNavList = document.querySelector('#fish_list')

fetch('https://www.fishwatch.gov/api/species')
 .then(response => response.json() )
 .then(fetchedItems => {
    console.log(fetchedItems)
    displayInfo(fetchedItems[0])
    fetchedItems.forEach( fetchedItem => {
        const li = document.createElement('li')
        li.textContent = fetchedItem['Species Name']
        fishNavList.append(li) 
    
        li.addEventListener('click', (e) => {
                e.preventDefault()
                displayInfo(fetchedItem)
                
            })})

        // li.addEventListener('click', (e) => {
        //     e.preventDefault()
        //     displayInfo(fetchedItem)
            
        // })
    })

function displayInfo(fishItem) {
    topFishName.textContent = fishItem['Species Name']
    fishImage.src = fishItem['Image Gallery'][0].src
    fishPhysicalDescription.textContent = fishItem['Physical Description']
    .replace('<ul>', '').replace('</ul>', '').replace('<li>', '').replace('</li>','')
    fishCalories.textContent = fishItem['Calories']
    fishProtein.textContent = fishItem['Protein']
    fishTotalFat.textContent = fishItem['Total Fat']
    fishCarbohydrate.textContent = fishItem['Carbohydrate']

    
    
}
 




