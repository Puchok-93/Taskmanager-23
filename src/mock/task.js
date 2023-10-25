import { getRandomInteger } from "../utils"

// Фнкция получения случайного описания и массива
const generateDescription = () => {
    const descriptions = ['Учиться', 'Работать', 'Отдыхать'];
    const randomIndex = getRandomInteger(0, descriptions.length - 1);
    return descriptions[randomIndex]
}

// Функция генерации таски
export const generateTask = () => ({
    description: generateDescription(),
    dueDate: "2023-10-26",
    repeating: {
        mo: false,
        tu: false,
        we: true,
        th: false,
        fr: false,
        sa: false,
        su: false,
    },
    color: 'yellow',
    isArchive: true,
    isFavorite: true,    
})