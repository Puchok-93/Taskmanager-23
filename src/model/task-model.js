import { generateTask } from "../mock/task.js";
import { getRandomInteger } from "../utils";

export default class TaskModel {
    #count = getRandomInteger(0,32); 
    #tasks = Array.from({length: this.#count}, generateTask);

    get tasks() {
        return this.#tasks;
    }
}