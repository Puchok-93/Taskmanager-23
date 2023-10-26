import BoardTask from "../view/board-task.js";
import Sorting from "../view/sorting.js";
import TaskList from "../view/task-list.js";
import TaskEdit from "../view/task-edit.js";
import Task from "../view/task.js";
import LoadMoreButton from "../view/load-more.js";
import { render } from "../render.js";


export default class BoardPresenter {
    board = new BoardTask(); // Общий section для доски задач
    taskList = new TaskList(); // Родительский компонент для списка задач

    init = (container, tasksModel) => {
        this.container = container;
        this.tasksModel = tasksModel;
        this.boardTasks = [...this.tasksModel.getTasks()]

        console.log(this.boardTasks)

        render(this.board, this.container);
        render(new Sorting(), this.board.getElement());
        render(this.taskList, this.board.getElement());
        render(new TaskEdit(this.boardTasks[0]), this.taskList.getElement());

        for(let i = 1; i < this.boardTasks.length; i++) {
            render(new Task(this.boardTasks[i]), this.taskList.getElement())
        }

        render(new LoadMoreButton, this.board.getElement())
    }
}