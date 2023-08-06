import {createElement} from '../render.js'


const createNewTaskBtnTemplate = () => `<button class="control__button">+ ADD NEW TASK</button>`;

export default class NewTaskBtn {

    getTemplate() { // Получаем шаблон разметки
      return createNewTaskBtnTemplate(); // Возвращаем полученный шаблон
    }
    
    getElement() { // Получаем элемент
      if (!this.element) { // Если элемента нет
        this.element = createElement(this.getTemplate()); // Создаем элемент, получив его шаблон
      }
    
      return this.element; // Если элемента ест, возвращаем его
    }
    
    removeElement() {
      this.element = null;
    }
}