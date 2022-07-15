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
            <div className={(noBorder ? s.title : (s.title + ' ' + s.border)) + (backgroundColor == TypeColor.white ? (' ' + s.white) : '') + (backgroundColor == TypeColor.black ? (' ' + s.black) : '')}>
                <h2 className={s.text}>
                    {children}
                </h2>
            </div>

        </div>
    );
};

export default SectionTitle;