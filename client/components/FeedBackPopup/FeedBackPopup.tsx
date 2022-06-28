import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { TypePopup } from '../../interfaces/enums';
import InputName from "react-input-mask";

import s from './FeedBackPopup.module.scss'

type FeedBackPopupProps = {
    children?: React.ReactNode
    active: boolean,
    typePopup: TypePopup
    setActive: (isActive: boolean) => void
}

const FeedBackPopup: React.FC<FeedBackPopupProps> = ({ active, typePopup, setActive, children }) => {
    const [name, setName] = useState<string>('')
    const [telNumber, setTelNumber] = useState<string>('+7 (999) 999-99-99')
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
    }

    const Send = () => {
        // Валидация полей ввода
        // Отпрака данных на сервер

        // Очистка полей ввода
        setName('')
        setTelNumber('+7 (999) 999-99-99')
        setActive(false)
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
                                        <input className={s.contentInput} type="text" value={name} onChange={ChangeName} placeholder="Введите имя" />
                                        <InputName className={s.contentInput} mask="+7 (999) 999-99-99" onChange={ChangeTelNumber} value={telNumber} onClick={ClickInputName} />
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