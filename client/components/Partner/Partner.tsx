import Image from 'next/image';
import React from 'react'

import s from './Partner.module.scss'

type PartnerProps = {
    path: string,
    width: string,
    height: string
}

const Partner: React.FC<PartnerProps> = ({ path, width, height }) => {
    return (
        <div className={s.partner}>
            <div className={s.partnerImg}>
                <Image className={s.partnerImg} src={path} width={width} height={height} alt="partner-img" />
            </div>
        </div>
    );
};

export default Partner;