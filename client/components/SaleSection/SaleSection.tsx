import React from 'react'
import { TypeBtn, TypeColor } from '../../interfaces/enums';
import Btn from '../Btn/Btn';
import CardsList from '../CardsList/CardsList';
import SectionTitle from '../SectionTitle/SectionTitle';

import s from './SaleSection.module.scss'

type SaleSectionProps = {}

const SaleSection: React.FC<SaleSectionProps> = () => {
    return (
        <div className={s.section}>
            <SectionTitle backgroundColor={TypeColor.white}>
                Продажа
            </SectionTitle>
            <div className="container">
                <CardsList />
                <div className={s.btn}>
                    <Btn typeBtn={TypeBtn.ToLink} link="/">
                        Посмотреть все варианты
                    </Btn>
                </div>

            </div>

        </div>
    );
};

export default SaleSection;