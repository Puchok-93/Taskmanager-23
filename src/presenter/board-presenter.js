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
    #tasks = []; // Массив задач, который будет наполнятся данными из модели


    // Метод отрисовки задачи
    #renderTask = (task) => {
        const taskComponent = new Task(task);
        const editTaskComponent = new TaskEdit(task);

        // Изменяем карточку на форму
        const replaceCardToForm = () => {
            this.#taskList.element.replaceChild(editTaskComponent.element, taskComponent.element);
        }

        // Изменяем форму на карточку
        const replaceFormToCard = () => {
            this.#taskList.element.replaceChild(taskComponent.element, editTaskComponent.element);
        }

        // 
        const onEscKeyDown = (e) => {
            if(e.key === 'Escape' || e.key === 'Ecs') {
                e.preventDefault();
                replaceFormToCard();
                document.removeEventListener('keydown', onEscKeyDown);
            }
        }

   
        // Находим в компоненте кнопку редактирования задачи и по клику показываем форму редактирования
        taskComponent.element.querySelector('.card__btn--edit').addEventListener('click', () => {
            replaceCardToForm();
            document.addEventListener('keydown', onEscKeyDown);
        });

        // Находим в компоненте кнопку сохранения изменений задачи и по клику показываем карточку
        editTaskComponent.element.querySelector('.card__form').addEventListener('submit', (e) => {
            e.preventDefault();
            replaceFormToCard();
            document.removeEventListener('keydown', onEscKeyDown);
        })

        render(taskComponent, this.#taskList.element)
    }

    init = (container, tasksModel) => {
        this.#container = container;
        this.#tasksModel = tasksModel;
        this.#tasks = [...this.#tasksModel.tasks]; // Получаем данные задач из модели

        render(this.#board, this.#container);
        render(new Sorting(), this.#board.element);
        render(this.#taskList, this.#board.element);

        for(let i = 1; i < this.#tasks.length; i++) {
            this.#renderTask(this.#tasks[i]);
        }

        render(new LoadMoreButton, this.#board.element);
    }
}