import NewTaskBtn from './view/new-task.js';
import Filter from './view/filter.js';
import {render} from './render.js';

const siteMainElement = document.querySelector('.main');
const siteHeaderElement = siteMainElement.querySelector('.main__control');

render(new NewTaskBtn, siteHeaderElement);
render(new Filter, siteMainElement)