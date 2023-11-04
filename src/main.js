import NewTaskBtn from './view/new-task.js';
import Filter from './view/filter.js';
import BoardPresenter from './presenter/board-presenter.js';
import TaskModel from './model/task-model.js';
import {render} from './render.js';

const siteMainElement = document.querySelector('.main');
const siteHeaderElement = siteMainElement.querySelector('.main__control');

const taskModel = new TaskModel();
const boardPresenter = new BoardPresenter(siteMainElement, taskModel);

render(new NewTaskBtn, siteHeaderElement);
render(new Filter, siteMainElement);

boardPresenter.init();
