import NewTaskBtn from './view/new-task.js';
import Filter from './view/filter.js';
import Sorting from './view/sorting.js';
import TaskList from './view/task-list.js';
import Task from './view/task.js';
import TaskEdit from './view/task-edit.js';
import LoadMoreButton from './view/load-more.js';
import {render} from './render.js';

const siteMainElement = document.querySelector('.main');
const siteHeaderElement = siteMainElement.querySelector('.main__control');

render(new NewTaskBtn, siteHeaderElement);
render(new Filter, siteMainElement);
render(new Sorting, siteMainElement);
render(new Task, siteMainElement);
render(new TaskEdit, siteMainElement);
render(new LoadMoreButton, siteMainElement);
