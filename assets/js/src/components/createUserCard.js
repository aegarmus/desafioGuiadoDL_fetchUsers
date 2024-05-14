import { getRandomUsers } from "../helpers/fetchUserApi.js";


export const createUserCardHtml = async () => {
  try {
    const randomUsers = await getRandomUsers();

    let htmlCardCode = "";

    randomUsers.forEach((user) => {
      htmlCardCode += `
                <div class="card">
                    <div class="card__header">
                        <img 
                            class="card__img" 
                            src="${user.picture.medium}" 
                            alt="foto de ${user.name.title} ${user.name.first} ${user.last}"
                        >
                    </div>
                    <div class="card__body">
                        <h2 class="card__title">${user.name.first} ${user.name.last}</h2>
                        <p class= "card__email">${user.email}</p>
                        <p class= "card__phone">${user.phone}</p>
                    </div>
                </div>
            `;
    });
    return htmlCardCode;
  } catch (error) {
    throw new Error("No pudimos generar la tarjeta");
  }
};
