import { TypeRoomers, TypeTransaction } from './enums';

// Интерфейс квартира
export interface IFlat{
    _id?: string,                     // Id
    transactionType: TypeTransaction, // Тип сделки
    rooms: number,                    // Количество комнат
    price: number,                    // Цена
    area?: number,                    // Площадь
    roomers?: TypeRoomers,            // Квартиранты 
    curentFloor: number,              // Этаж
    maxFloor: number,                 // Этажность
    mainImgUrl: string,               // Url изображения  
    url: string                       // Ссылка на квартиру
}