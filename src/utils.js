import dayjs from 'dayjs';

// Функция генерации случайного числа
const getRandomInteger = (a = 0, b = 1) => {
    const lower = Math.ceil(Math.min(a, b));
    const upper = Math.floor(Math.max(a, b));

    return Math.floor(lower + Math.random() * (upper - lower + 1));
};

// Функция форматирования даты в человекопонятный формат

const humanizeTaskDueDate = (dueDate) => dayjs(dueDate).format('D MMMM');

// Функция проверки просрочена ли задача. Если приходящая дата после текущей, то просрочена
const isTaskExpire = (dueDate) => dueDate && dayjs().isAfter(dueDate, 'D');

// Функция проверки повторяющихся значений
const isTaskRepeating = (repeating) => Object.values(repeating).some(Boolean);
  
export {getRandomInteger, humanizeTaskDueDate, isTaskExpire, isTaskRepeating};