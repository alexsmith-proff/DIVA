import React, { useState } from 'react'
import { TypeBtn, TypePopup } from '../../interfaces/enums';
import Btn from '../Btn/Btn';
import FeedBackPopup from '../FeedBackPopup/FeedBackPopup';

import s from './FeedBackSection.module.scss'

type FeedBackSectionProps = {}

const FeedBackSection: React.FC<FeedBackSectionProps> = () => {
    const [active, setActive] = useState<boolean>(false)
    return (
        <>
            {/* Добавляем FeedBackPopup чтобы не прокидывать пропсы из index */}
            <FeedBackPopup active={active} setActive={setActive} typePopup={TypePopup.FeedBack}/>
            <div className="container">
                <section className={s.feedbackSection}>
                    <h3 className={s.text}>Остались вопросы ?</h3>
                    <div className={s.btnList}>
                        <div className={s.firstBtn}>
                            <Btn typeBtn={TypeBtn.ToCallPhone}>позвонить нам</Btn>
                        </div>
                        <Btn typeBtn={TypeBtn.ToFeedBackPopup} setActive={setActive}>оставить заявку</Btn>
                    </div>
                </section>
            </div>
        </>
    );
};

export default FeedBackSection;