import React, { useState } from 'react'
import Link from 'next/link'
import InputTelNumber from "react-input-mask";

import s from './GetPhoneNum.module.scss'

type GetPhoneNumProps = {}

const GetPhoneNum: React.FC<GetPhoneNumProps> = () => {
    const [telNumber, setTelNumber] = useState<string>('+7 (999) 999-99-99')

    const onClickInput = () => {
        setTelNumber('')
    }
    const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTelNumber(e.target.value)
    }
    const onClickBtn = () => {
        // Отправка на сервер telNumber
        telNumber
        // Вызов диалогового окна
        // <FeedBackPopup active={active} setActive={setActive} typePopup={TypePopup.FeedBack}/>
    }
    return (
        <div className={s.wrap}>
            <div className={s.getPhoneNum}>
                <InputTelNumber className={s.input} mask="+7 (999) 999-99-99" onChange={onChangeText} onClick={onClickInput} value={telNumber} />
                <Link href="/">
                    <a className={s.btn} onClick={onClickBtn}>получить консультацию</a>
                </Link>
            </div>
        </div>

    );
};

export default GetPhoneNum;