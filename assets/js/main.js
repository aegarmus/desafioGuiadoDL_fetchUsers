import { createUserCardHtml } from "./src/components/createUserCard.js";
import { printHtmlCard } from "./src/views/printCard.js";



(async() => {
    const usersContainer = document.getElementById("data-user-container");

    const cardUserTemplate = await createUserCardHtml()

    printHtmlCard(usersContainer, cardUserTemplate)
})()