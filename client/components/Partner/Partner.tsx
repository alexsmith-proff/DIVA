import Image from 'next/image';
import React from 'react'
import { Grad, toBase64 } from '../../services/image';

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
                <Image
                    className={s.partnerImg}
                    alt="partner-img"
                    src={path}
                    width={width}
                    height={height}
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(Grad(600, 700))}`}
                />
            </div>
        </div>
    );
};

export default Partner;