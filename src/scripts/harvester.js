const harvestedSeeds = []

export const harvestPlants = (planting) => { //must accept planting array as input
    for (const plant of planting) {
        if (plant.type === "Corn") {
            for (let i = (plant.output / 2); i > 0; i--) {
                harvestedSeeds.push(plant)
            }
        } else {
            for (let i = 0; i < plant.output; i++) {
                harvestedSeeds.push(plant)


            }
        }



    }
    return harvestedSeeds
}
