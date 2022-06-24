import React from 'react'
import { TypeColor } from '../../interfaces/enums';

import s from './SectionTitle.module.scss'

type SectionTitleProps = {
    children: React.ReactNode,
    backgroundColor: TypeColor // Цвет фона
    noBorder?: boolean, // Если noBorder = true, то НЕТ border 
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, backgroundColor, noBorder }) => {
    return (
        <div className={s.sectionTitle}>
            <div className={(noBorder ? s.title : (s.title + ' ' + s.border)) + (backgroundColor == TypeColor.white ? (' ' + s.white) : '')}>
                <div className={s.text}>
                    {children}
                </div>
            </div>

        </div>
    );
};

export default SectionTitle;