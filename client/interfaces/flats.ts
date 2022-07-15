import { TypeResidents, TypeTransaction } from './enums';

// Интерфейс квартира
export interface IFlat{
    _id?: string,                     // Id
    transactionType: TypeTransaction, // Тип сделки
    rooms: number,                    // Количество комнат
    price: string,                    // Цена
    area?: number,                    // Площадь
    address: string,                  // Адрес
    zone: string,                     // Район
    description: string               // Описание
    residents?: TypeResidents,        // Квартиранты 
    curentFloor: number,              // Этаж
    maxFloor: number,                 // Этажность
    photosArr: string[],              // Массив фотографий
}