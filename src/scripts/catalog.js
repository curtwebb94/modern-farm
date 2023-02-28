import { harvesting } from "./main.js"

export const catalog = (harvesting) => { //harvest contains all the seeds used and that were "harvested"

    const itsDone = harvesting //invoked harvesting from the import

    let htmlString = ""

    for (const done of itsDone) {

        htmlString += `<article class = "Harvested">
        
        <section class="plant">${done.type}</section>
        `

        htmlString += `</article>`
    }

    

    return htmlString 

}