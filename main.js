// Get external menu items data
import {menu_items as menu} from './menu_items.js';

// Select content element in html
const sectionContent = document.getElementById('content');

// On page load, dynamically add all menu items to content element.
window.addEventListener('DOMContentLoaded', () => {
  menu.map((menu_item) => {
    // Create new article for menu item and populate to match template.
    const article = document.createElement('article');
    article.classList.add('menu-item');
    // Create and append img to article.
    const img = document.createElement('img');
    img.src = `${menu_item['img']}`;
    img.classList.add('photo');
    img.alt = 'menu item';
    article.appendChild(img);
    // Create section
    const section = document.createElement('section');
    section.classList.add('item-info');
    // Create header
    const header = document.createElement('header');
    header.classList.add('menu-heading');
    // Create and append title to header
    const title = document.createElement('h4');
    title.textContent = `${menu_item['title']}`;
    header.appendChild(title);
    // Create and append price to header
    const price = document.createElement('h4');
    price.classList.add('price');
    price.textContent = `$${menu_item['price']}`;
    header.appendChild(price);
    // Append completed header to section
    section.appendChild(header);
    // Create and append item text to section
    const item_text = document.createElement('p');
    item_text.classList.add('item-text');
    item_text.textContent = `${menu_item['desc']}`;
    section.appendChild(item_text);
    // Append completed section to article
    article.appendChild(section);
    // Append completed article to sectionContent
    sectionContent.appendChild(article);
  })
});