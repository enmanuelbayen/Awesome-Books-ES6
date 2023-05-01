import BookList from './modules/books.js';
import { showList, showAddbook, showContact } from './modules/navbar.js';
import { DateTime } from './node_modules/luxon/src/luxon.js';

// bookList fill class
const myBookList = new BookList();
myBookList.initialize();
// navbar events
const listNav = document.getElementById('list-page');
const addNewNav = document.getElementById('add-list');
const contactNav = document.getElementById('contact-list');

listNav.addEventListener('click', showList);
addNewNav.addEventListener('click', showAddbook);
contactNav.addEventListener('click', showContact);
// Date
const now = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
document.getElementById('date').innerHTML = now;
