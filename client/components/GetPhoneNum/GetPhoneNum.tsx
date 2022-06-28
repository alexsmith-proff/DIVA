import React, { useState } from 'react'
// import Link from 'next/link'
import InputTelNumber from "react-input-mask";

import s from './GetPhoneNum.module.scss'
import { TypePopup } from '../../interfaces/enums';
import FeedBackPopup from '../FeedBackPopup/FeedBackPopup';

type GetPhoneNumProps = {}

const GetPhoneNum: React.FC<GetPhoneNumProps> = () => {
    const [activeDialogPopup, setActiveDialogPopup] = useState<boolean>(false)
    const [telNumber, setTelNumber] = useState<string>('+7 (999) 999-99-99')

    const onClickInput = () => {
        setTelNumber('')
    }
    const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTelNumber(e.target.value)
    }
    const onClickBtn = () => {
        // Отправка на сервер telNumber

        // Очистка поля ввода telNumber
        setTelNumber('+7 (999) 999-99-99')

        // Вызов диалогового окна
        setActiveDialogPopup(true)
    }
    return (
        <div className={s.wrap}>
            <FeedBackPopup active={activeDialogPopup} setActive={setActiveDialogPopup} typePopup={TypePopup.Dialog}>
                <div className={s.popupText}>
                    Данные успешно отправлены
                </div>
            </FeedBackPopup>
            <div className={s.getPhoneNum}>
                <InputTelNumber className={s.input} mask="+7 (999) 999-99-99" onChange={onChangeText} onClick={onClickInput} value={telNumber} />
                {/* <Link href="/"> */}
                <button className={s.btn} onClick={onClickBtn}>получить консультацию</button>
                {/* </Link> */}
            </div>
        </div>

    );
};

export default GetPhoneNum;