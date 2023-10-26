import dayjs from "dayjs";
import { getRandomInteger } from "../utils";
import { COLORS } from "../const";

// Фнкция получения случайного описания и массива
const generateDescription = () => {
    const descriptions = ['Учиться', 'Работать', 'Отдыхать'];
    const randomIndex = getRandomInteger(0, descriptions.length - 1);
    return descriptions[randomIndex]
}

// Функция получения случайного булевого значения для арихива
const generateArchive = () => {
    const archive = getRandomInteger(0, 1);

    return archive
}

// Функция получения случайного булевого значения для избранного
const generateFavorite = () => {
    const favorite = getRandomInteger(0, 1);

    return favorite
}

const generateDueDate = () => {
    // Дата есть или нет
    const date = getRandomInteger(0, 1);

    // Если дата = 0, то возвращаем null, в задаче даты не будет 
    if(!date) {
        return null
    }

    const maxDaysGap  = 7; // максимальный разброс дат (Одна неделя)
    const daysGap = getRandomInteger(-maxDaysGap , maxDaysGap);

    return dayjs().add(daysGap, 'day').toDate()
}


// Функция получения случайного цвета. 
const generateColor = () => {
    const randomIndex = getRandomInteger(0, COLORS.length - 1);

    return COLORS[randomIndex]
}

const generateReRepeating = () => ({
    repeating: {
        mo: getRandomInteger(0, 1),
        tu: false,
        we: getRandomInteger(0, 1),
        th: false,
        fr: false,
        sa: false,
        su: false,
    },
})

// Функция генерации таски

export const generateTask = () => {
    const description = generateDescription();
    const dueDate = generateDueDate();

    const repeating = dueDate === null ? generateReRepeating() : {
        mo: false,
        tu: false,
        we: false,
        th: false,
        fr: false,
        sa: false,
        su: false,
    };

    const color = generateColor();
    const isArchive = generateArchive();
    const isFavorite = generateFavorite();

    return {
        description,
        dueDate,
        repeating,
        color,
        isArchive,
        isFavorite,
    }
}