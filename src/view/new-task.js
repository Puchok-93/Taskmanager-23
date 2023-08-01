import {createElement} from '../render.js'


const createNewTaskBtnTemplate = () => ` <button class="control__button">+ ADD NEW TASK</button>`;

export default class NewTaskBtn {
    getTemplate() {
        return createNewTaskBtnTemplate();
      }
    
      getElement() {
        if (!this.element) {
          this.element = createElement(this.getTemplate());
        }
    
        return this.element;
      }
    
      removeElement() {
        this.element = null;
      }
}