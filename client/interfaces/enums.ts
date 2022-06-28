// Тип кнопки
export enum TypeBtn {
    ToCallPhone,     // Позвонить по телефонному номеру
    ToFeedBackPopup, // Открыть FeedbackPopup
    ToLink,      //Перейти по ссылке
}

// Цвета
export enum TypeColor {
    white,
    black
}

// Квартиранты
export enum TypeRoomers {
    Male = 'мужчина',     // Один мужчина/парень
    Males = 'мужчины',    // Мужчины/парни
    Female = 'женщина',   // одна женщина/девушка
    Females = 'женщины',  // Женщины/девушки
    Students = 'студенты', // Студенты
    All = 'все',      // Все     
}

// Тип сделки
export enum TypeTransaction {
    Sale, // Продажа
    Rent, // Аренда
}

// Тип Popup окна
export enum TypePopup {
    Dialog, // Продажа
    FeedBack, // Аренда
}