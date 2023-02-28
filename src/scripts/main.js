import { usePlants } from './field.js'
import { plantSeeds } from './tractor.js'
import { createPlan } from './plan.js' //imports function createPlan from plan.js
import { harvestPlants } from './harvester.js'
import { catalog } from './catalog.js'




const yearlyPlan = createPlan() //invokes the createPlan function
// plantSeeds(yearlyPlan) //invokes the function that plants all seeds



const planting = usePlants() //invokes the usePlant function from the field.js

export const harvesting = harvestPlants(planting) //invokes and exports the harvestPlants function with planting input.
const doneCatalog = catalog(harvesting) // invokes the new catolog function with the new export harvesting as a input. 



console.log("Welcome to the main module")

console.log(plantSeeds(yearlyPlan))
console.log(yearlyPlan)
console.log(planting)
console.log(harvesting)
console.log(doneCatalog)

const parentHTMLElement = document.querySelector(".container") //document.query selector grabs class container from index.html (which is the selector)

parentHTMLElement.innerHTML = catalog(harvesting) //gets the HTML Markup within the element listed