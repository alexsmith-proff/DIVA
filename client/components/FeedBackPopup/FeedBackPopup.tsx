import React from 'react'
import { TypePopup } from '../../interfaces/enums';

import s from './FeedBackPopup.module.scss'

type FeedBackPopupProps = {
    children?: React.ReactNode
    active: boolean,
    typePopup: TypePopup
    setActive: (isActive: boolean) => void
}

const FeedBackPopup: React.FC<FeedBackPopupProps> = ({ active, typePopup, setActive, children }) => {
    return (
        <div className={active ? (s.FeedBackPopup + ' ' + s.active) : s.FeedBackPopup} onClick={() => setActive(false)}>
            <div className={active ? (s.content + ' ' + s.active) : s.content} onClick={e => e.stopPropagation()}>
                {
                    !children &&
                    <>
                        <div>Здесь должна быть форма обратной связи</div>
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
                        <button className={s.btn + ' ' + s.send}>Отправить</button>
                        <button className={s.btn} onClick={() => setActive(false)}>Закрыть</button>
                    </div>
                }

            </div>
        </div>
    );
};

export default FeedBackPopup;