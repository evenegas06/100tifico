import getData from '../utils/getData'

const Footer = async () => {
    const data = await getData();

    let ancles = [];
    for (let i = 1; i <= data.info.pages; i++){
        ancles.push(i);
    }

    let a = 0;
    const view = `
    <p class="center-align" style="padding-top:50px;">Pagination</p>
    <ul class="pagination">
        ${ancles.map(() => 
            `<li class=""><a href="#/?page=${++a}/">${a}</a</li>`
        ).join('')}
    </ul>
    `;
    return view
}

export default Footer;