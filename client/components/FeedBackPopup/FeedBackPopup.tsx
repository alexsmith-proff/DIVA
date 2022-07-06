import React, { useEffect, useRef, useState } from 'react'
import validator from 'validator';
import Link from 'next/link';
import { TypePopup } from '../../interfaces/enums';
import InputName from "react-input-mask";

import s from './FeedBackPopup.module.scss'
import allEndPoints from '../../services/api/api';

type FeedBackPopupProps = {
    children?: React.ReactNode
    active: boolean,
    typePopup: TypePopup
    setActive: (isActive: boolean) => void
}

const FeedBackPopup: React.FC<FeedBackPopupProps> = ({ active, typePopup, setActive, children }) => {
    const [name, setName] = useState<string>('')
    const [telNumber, setTelNumber] = useState<string>('+7 (999) 999-99-99')
    const [nameAlert, setNameAlert] = useState<boolean>(false)
    const [telNumberAlert, setTelNumberAlert] = useState<boolean>(false)

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (active) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "visible"
        }
    }, [active])

    const ChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }
    const ChangeTelNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTelNumber(e.target.value)
    }
    const ClickInputName = () => {
        setTelNumber('')
        inputRef.current.selectionStart = 4
        inputRef.current.selectionEnd = 4
    }

    const Send = async() => {
        // Валидация полей ввода
        // Убираем '(', ')', '-' и пробелы. (+7 (963) 111-96-12 приводим к +79631119612)
        const telNumberProcessed = telNumber.replace(/[\(\)\-\s]/g, '')

        // Проверяем на пустоту имя
        if (name == '') {
            setNameAlert(true)
        }else {
            setNameAlert(false)
        }
        if (validator.isMobilePhone(telNumberProcessed, 'any') && (telNumberProcessed != '+79999999999')) {
            setTelNumberAlert(false)
        }else{
            setTelNumberAlert(true)
        }
        // Проверяем Российский номер и номер не +79999999999
        if ((validator.isMobilePhone(telNumberProcessed, 'any')) && (telNumberProcessed != '+79999999999')&&(name != '')) {
            // Отпрака данных на сервер
            await allEndPoints.auth.sendNameAndPhoneNumberToMail({
                name: name,
                phone: telNumber
            })

            // Очистка полей ввода
            setName('')
            setTelNumber('+7 (999) 999-99-99')
            setActive(false)

        }

    }

    return (
        <>
            {
                active &&
                (
                    <div className={s.FeedBackPopup + ' ' + s.active} onClick={() => setActive(false)}>
                        <div className={s.content + ' ' + s.active} onClick={e => e.stopPropagation()}>
                            {
                                !children &&
                                <>
                                    <div className={s.contentWrap}>
                                        <div className={s.closeBtn} onClick={() => setActive(false)}>x</div>
                                        <div className={nameAlert ? (s.inputWrap + ' ' + s.alertName) : s.inputWrap}>
                                            <input className={s.contentInput} type="text" value={name} onChange={ChangeName} placeholder="Введите имя" />
                                        </div>
                                        <div className={telNumberAlert ? (s.inputWrap + ' ' + s.alertTelNum) : s.inputWrap}>
                                            <InputName className={s.contentInput} mask="+7 (999) 999-99-99" onChange={ChangeTelNumber} value={telNumber} onMouseDown={ClickInputName} onClick={ClickInputName} ref={inputRef} />
                                        </div>
                                        <Link href="/policy">
                                            <a className={s.policy}>Политика конфиденциальности</a>
                                        </Link>
                                    </div>
                                </>
                            }

                            {children}

                            {
                                typePopup == TypePopup.Dialog &&
                                <div className={s.btnWrap}>
                                    <button className={s.btn} onClick={() => setActive(false)}>Закрыть</button>
                                </div>
                            }
                            {
                                typePopup == TypePopup.FeedBack &&
                                <div className={s.btnWrap}>
                                    <button className={s.btn} onClick={Send}>Отправить</button>
                                    {/* <button className={s.btn} onClick={() => setActive(false)}>Закрыть</button> */}
                                </div>
                            }

                        </div>
                    </div>
                )
            }
        </>


    );
};

export default FeedBackPopup;