import BoardTask from "../view/board-task.js";
import Sorting from "../view/sorting.js";
import TaskList from "../view/task-list.js";
import TaskEdit from "../view/task-edit.js";
import Task from "../view/task.js";
import LoadMoreButton from "../view/load-more.js";
import { render } from "../render.js";


export default class BoardPresenter {
    #board = new BoardTask(); // Общий section для доски задач
    #taskList = new TaskList(); // Родительский компонент для списка задач

    #container = null;
    #tasksModel = null;
    #tasks = [];

    init = (container, tasksModel) => {
        this.#container = container;
        this.#tasksModel = tasksModel;
        this.#tasks = [...this.#tasksModel.tasks]; // Получаем данные задач из модели

        render(this.#board, this.#container);
        render(new Sorting(), this.#board.element);
        render(this.#taskList, this.#board.element);
        render(new TaskEdit(this.#tasks[0]), this.#taskList.element);

        for(let i = 1; i < this.#tasks.length; i++) {
            render(new Task(this.#tasks[i]), this.#taskList.element)
        }

        render(new LoadMoreButton, this.#board.element)
    }
}