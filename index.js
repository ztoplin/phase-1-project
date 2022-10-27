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
const fishRecipes = document.querySelector('#recipes')

const btn = document.querySelector('#recipes_button')

let selectedFish = null


fetch('https://www.fishwatch.gov/api/species')
 .then(response => response.json() )
 .then(fetchedItems => {
    console.log(fetchedItems)
    selectedFish = fetchedItems[0]
    displayInfo(selectedFish)
    fetchedItems.forEach( fetchedItem => {
        const li = document.createElement('li')
        li.textContent = fetchedItem['Species Name']
        
        li.addEventListener('click', (e) => {
            e.preventDefault()
            selectedFish = fetchedItem
            displayInfo(selectedFish)
                
        })
        
        fishNavList.append(li) 
        })

        
    })

function displayInfo(fishItem) {
    topFishName.textContent = fishItem['Species Name']

    if (fishItem['Image Gallery'] === null) {
    fishImage.src = 'https://cdn.drawception.com/images/panels/2016/6-13/mfc9ANNDpA-6.png'} else {
    fishImage.src = fishItem['Image Gallery'][0].src}

    fishPhysicalDescription.textContent = fishItem['Physical Description']
    .replaceAll('<ul>', '').replaceAll('</ul>', '').replaceAll('<li>', '').replaceAll('</li>','')

    fishCalories.textContent = `Calories: ` + fishItem['Calories']
    fishProtein.textContent = `Protein: ` + fishItem['Protein']
    fishTotalFat.textContent = `Total Fat: ` + fishItem['Fat, Total']
    fishCarbohydrate.textContent = `Carbohydrate: ` + fishItem['Carbohydrate']

    fishTaste.textContent = `Taste: ` + fishItem['Taste'].replaceAll('<p>', '').replaceAll('</p>', '').replaceAll('&nbsp;', '')
    fishTexture.textContent = `Texture: ` + fishItem['Texture'].replaceAll('<p>', '').replaceAll('</p>', '').replaceAll('&nbsp;', '')

    fishRecipes.href = `https://www.simplyrecipes.com/search?q=${fishItem['Species Name']}`    
}





