import BoardTask from "../view/board-task.js";
import Sorting from "../view/sorting.js";
import TaskList from "../view/task-list.js";
import TaskEdit from "../view/task-edit.js";
import Task from "../view/task.js";
import LoadMoreButton from "../view/load-more.js";
import { render } from "../render.js";

const TASK_COUNT_PER_STEP = 8;

export default class BoardPresenter {
    #board = new BoardTask(); // Общий section для доски задач
    #taskList = new TaskList(); // Родительский компонент для списка задач
    #loadMoreBtn = new LoadMoreButton();

    #container = null;
    #tasksModel = null;
    #tasks = []; // Массив задач, который будет наполнятся данными из модели
    #renderedTaskCount = TASK_COUNT_PER_STEP

    init = (container, tasksModel) => {
        this.#container = container;
        this.#tasksModel = tasksModel;
        this.#tasks = [...this.#tasksModel.tasks]; // Получаем данные задач из модели

        render(this.#board, this.#container);
        render(new Sorting(), this.#board.element);
        render(this.#taskList, this.#board.element);

        for(let i = 0; i < Math.min(this.#tasks.length, TASK_COUNT_PER_STEP); i++) {
            this.#renderTask(this.#tasks[i])
        }

        // Если задач больше, чем количество дозакгружаемых задач, 
        // отрисовываем кнопку loadmore и вещаем на нее обработчик события 
        if(this.#tasks.length > TASK_COUNT_PER_STEP) {
            render(this.#loadMoreBtn, this.#board.element);
            this.#loadMoreBtn.element.addEventListener('click', this.#loadMoreClickHandler);
        }
    }

    #loadMoreClickHandler = (e) => {
        e.preventDefault();

        // Делим массив задач на группы
        // Берем часть массива уже отрисованных задач - this.#renderedTaskCount. Слайсим от индекса 8, до индекса 8 + количество задач за шаг
        // До части отрисованных задач + количество задач за шаг
        // По данному куску массива проходим с помощью forEach и отрисовываем задачи на основе асти массива
        this.#tasks.slice(this.#renderedTaskCount, this.#renderedTaskCount + TASK_COUNT_PER_STEP).forEach((task) => this.#renderTask(task));


        // Увеличиваем счет отрисованных задач на количество задач за шаг
        this.#renderedTaskCount += TASK_COUNT_PER_STEP

        // Делаем проверку 
        // Если количество задач за шаг больше длинны массива
        if(this.#renderedTaskCount >= this.#tasks.length) {
            this.#loadMoreBtn.element.remove(); // Удаляем кнопку loadmore 
            this.#loadMoreBtn.removeElement(); // Удаляем ссылку на элемент loadmore 
        }
    }


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
}