import getHash from '../utils/getHash';
import getData from '../utils/getData';

const Character = async () => {
  const id = getHash();
  const character = await getData(id);
  
  const view = `


    <div class="row center-align ">
    <h4 style="letter-spacing: 4px;">${character.name}</h4>
    <br>
      <div class="col s12 m4 ">
        <img src="${character.image}" alt="${character.name}" style=""
          class="responsive-img">
      </div>
      <div class="col s12 m6 left-align z-depth-5 ">
        <p style="font-size: 20px;"><b>Episodes:</b> <span>${character.episode.length}</span></p>
        <p style="font-size: 20px;"><b>Status:</b> <span>${character.status}</span></p>
        <p style="font-size: 20px;"><b>Species:</b> <span>${character.species}</span></p>
        <p style="font-size: 20px;"><b>Gender:</b> <span>${character.gender}</span></p>
        <p style="font-size: 20px;"><b>Origin:</b> <span>${character.origin.name}</span></p>
        <p style="font-size: 20px;"><b>Last Location:</b> <span>${character.location.name}</span></p>
      </div>
    </div>
    <div class="center-align">
      <ul class="pagination">
        <li class=""><a href="#/${character.id - 1}/"><i class="material-icons">chevron_left</i></a></li>
        <li class="active teal darken-2"><a href="#/${character.id}/">${character.id}</a></li>
        <li class="waves-effect"><a href="#/${character.id + 1}/"><i class="material-icons">chevron_right</i></a></li>
      </ul>
    </div>
  `;
  return view;
};

export default Character;