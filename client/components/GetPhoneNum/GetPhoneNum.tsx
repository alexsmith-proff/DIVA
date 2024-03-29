import React, { useRef, useState } from 'react'
// import Link from 'next/link'
import InputTelNumber from "react-input-mask";

import validator from 'validator';

import s from './GetPhoneNum.module.scss'
import { TypePopup } from '../../interfaces/enums';
import FeedBackPopup from '../FeedBackPopup/FeedBackPopup';
import allEndPoints from '../../services/api/api';

type GetPhoneNumProps = {}

const GetPhoneNum: React.FC<GetPhoneNumProps> = () => {
    const [activeDialogPopup, setActiveDialogPopup] = useState<boolean>(false)
    const [telNumber, setTelNumber] = useState<string>('+7 (999) 999-99-99')
    const [telNumberAlert, setTelNumberAlert] = useState<boolean>(false)

    const inputRef = useRef<HTMLInputElement>(null)


    const onClickInput = () => {
        setTelNumber('')
        inputRef.current.selectionStart = 4
        inputRef.current.selectionEnd = 4
    }
    const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTelNumber(e.target.value)
    }
    const onClickBtn = async() => {
        // Валидация телефонного номера 
        // Убираем '(', ')', '-' и пробелы. (+7 (963) 111-96-12 приводим к +79631119612)
        const telNumberProcessed = telNumber.replace(/[\(\)\-\s]/g, '')

        // Проверяем Российский номер и номер не +79999999999
        if ((validator.isMobilePhone(telNumberProcessed, 'any')) && (telNumberProcessed != '+79999999999')) {
            setTelNumberAlert(false)
            // Отправка на сервер telNumber
            try {
                await allEndPoints.auth.sendPhoneNumberToMail({phone: telNumber})
                
            } catch (error) {
                console.log(error);
            }


            // Очистка поля ввода telNumber
            setTelNumber('+7 (999) 999-99-99')

            // Вызов диалогового окна
            setActiveDialogPopup(true)


        } else {
            setTelNumberAlert(true)
        }



    }
    return (
        <div className={s.wrap}>
            <FeedBackPopup active={activeDialogPopup} setActive={setActiveDialogPopup} typePopup={TypePopup.Dialog}>
                <div className={s.popupText}>
                    Данные успешно отправлены
                </div>
            </FeedBackPopup>
            <div className={s.getPhoneNum}>
                <div className={telNumberAlert ? (s.inputWrap + ' ' + s.alert) : s.inputWrap}>
                    <InputTelNumber className={(s.input)} mask="+7 (999) 999-99-99" onChange={onChangeText} onMouseDown={onClickInput} onClick={onClickInput} value={telNumber} ref={inputRef} />
                </div>
                <button className={s.btn} onClick={onClickBtn}>получить консультацию</button>
            </div>
        </div>

    );
};

export default GetPhoneNum;