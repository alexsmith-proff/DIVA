import { TypeRoomers, TypeTransaction } from './enums';

// Интерфейс квартира
export interface IFlat{
    _id?: string,                     // Id
    transactionType: TypeTransaction, // Тип сделки
    rooms: number,                    // Количество комнат
    price: number,                    // Цена
    area?: number,                    // Площадь
    address: string,                  // Адрес
    zone: string,                     // Район
    description: string               // Описание
    roomers?: TypeRoomers,            // Квартиранты 
    curentFloor: number,              // Этаж
    maxFloor: number,                 // Этажность
    mainImgPath: string,              // Путь к основному изображению
    smallImgArrPath: string[],        // Массив маленьких изображений
    BigImgArrPath: string[],            // Массив больших изображений
}