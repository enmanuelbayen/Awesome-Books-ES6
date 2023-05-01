// bookList fill class

import BookList from './modules/books.js';

// navbar events
import { showList, showAddbook, showContact } from './modules/navbar.js';

// Date

import { DateTime } from './node_modules/luxon/src/luxon.js';

const myBookList = new BookList();
myBookList.initialize();

const listNav = document.getElementById('list-page');
const addNewNav = document.getElementById('add-list');
const contactNav = document.getElementById('contact-list');

listNav.addEventListener('click', showList);
addNewNav.addEventListener('click', showAddbook);
contactNav.addEventListener('click', showContact);

const now = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
document.getElementById('date').innerHTML = now;