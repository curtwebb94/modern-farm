import { createAsparagus } from "./seeds/asparagus.js" //need to import all functions to invoke
import  {createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createWheat } from "./seeds/wheat.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createSoybean } from "./seeds/soybean.js"
import { addPlant } from "./field.js"






const asparagusSeed = createAsparagus()  //invoke all the functions to a variable
const cornSeed = createCorn()
const potatoSeed = createPotato()
const wheatSeed = createWheat()
const sunflowerSeed = createSunflower()
const soybeanSeed = createSoybean()

export const plantSeeds = (yearlyPlan) => { //yearly plan will be the parameters
    for (const row of yearlyPlan) { //invokes the yearlyplan parent array
        for (const seed of row) {  //invokes the child array of row of yearlyplan
            if (seed === "Asparagus") {
                addPlant(asparagusSeed) //if asparagus run addplant function that pushes seed name into a empty array
            } else if (seed === "Potato") {
                addPlant(potatoSeed)
            } else if (seed === "Soybean") {
                addPlant(soybeanSeed)
            } else if (seed === "Corn") {
                addPlant(cornSeed)
            } else if (seed === "Sunflower") {
                addPlant(sunflowerSeed)
            } else if (seed === "Wheat") {
                addPlant(wheatSeed)
            }
        }
    }
}