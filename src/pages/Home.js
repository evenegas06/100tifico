import getData from '../utils/getData';
import getHash from '../utils/getHash';

const Home = async () => {
  const page = await getHash();
  const characters = await getData(page);

  const view = `
    <h4 class="center-align">
      <img src="https://help.redbubble.com/hc/article_attachments/360002309526/Rick_and_Morty_-_logo__English_.png" style="width: 150px;" alt="">
      directory using <a href="https://rickandmortyapi.com" target="_blank" style="color:white; text-decoration:underline;">The Rick & Morty API</a>
    </h4>
    <div class="row">
    ${characters.results.map(character => `
      <div class="col s6 m3">
        <a href="#/${character.id}/" style="color: white;">
          <div class="card teal darken-2" style="max-width: 220px;">
            <div class="card-image" style="border-radius: 25%;">
              <img src="${character.image}" alt="${character.name}">
            </div>
            <div class="card-content" style="padding: 0; margin: 0; line-height: 0;">
              <p class="truncate card-title center-align" style="font-size: 16px;"><b>${character.name}</b></p>
              <p class="truncate card-title center-align" style="font-size: 14px;">${character.species}</p>
            </div>
          </div>
        </a>
      </div>
      `).join('')}
    </div>
  `;
  return view;
};

export default Home;