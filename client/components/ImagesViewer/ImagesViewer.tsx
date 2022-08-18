import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { Grad, toBase64 } from '../../services/image';

import s from './ImagesViewer.module.scss'

type ImagesViewerProps = {
    photos: string[],
    mainPhotoNum?: number,
    widthContent: number,
    // widthBigPhoto: number,
    // heightBigPhoto: number,
    widthSmallPhoto: number,
    heightSmallPhoto: number,
    gapSmallPhoto: number
}

const ImagesViewer: React.FC<ImagesViewerProps> = ({ photos, mainPhotoNum, widthContent, widthSmallPhoto, heightSmallPhoto, gapSmallPhoto }) => {
    const [currentPhotoNum, setcurrentPhotoNum] = useState<number>(mainPhotoNum || 0)
    const [activePopup, setActivePopup] = useState<boolean>(false)

    const HandleClick = () => {
        setActivePopup(true)
    }
    const ClosePopup = () => {
        setActivePopup(false)
    }

    useEffect(() => {
        if (activePopup) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "visible"
        }
    }, [activePopup])

    return (
        <div className={s.photo} style={{ maxWidth: widthContent + 'px' }}>
            <div className={s.mainPhoto}>
                <Image
                    alt="main_photo"
                    src={photos[currentPhotoNum]}
                    width="440"
                    height="580"
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(Grad(440, 580))}`}
                    onClick={() => HandleClick()}
                />
            </div>
            <div className={s.smallPhotoList}>
                {
                    photos.map((item, index) => (
                        <div className={s.smallPhoto} style={{ marginRight: gapSmallPhoto + 'px', marginBottom: gapSmallPhoto + 'px' }} key={index}>
                            <Image
                                alt="small_photo"
                                src={item}
                                width="60"
                                height="60"
                                placeholder="blur"
                                blurDataURL={`data:image/svg+xml;base64,${toBase64(Grad(60, 60))}`}
                                onClick={() => setcurrentPhotoNum(index)} key={index} style={{ width: widthSmallPhoto + 'px', height: heightSmallPhoto + 'px' }}
                            />
                        </div>
                    ))
                }
            </div>
            {
                activePopup &&
                (
                    <div className={s.popup + ' ' + s.active}>
                        <div className={s.content + ' ' + s.active} onClick={e => e.stopPropagation()}>
                            <div className={s.popupBigPhoto}>
                                <Image
                                    alt="main-photo"
                                    src={photos[currentPhotoNum]}
                                    width="600"
                                    height="700"
                                    placeholder="blur"
                                    blurDataURL={`data:image/svg+xml;base64,${toBase64(Grad(600, 700))}`}
                                    onClick={() => setcurrentPhotoNum((prev) => prev < photos.length - 1 ? prev + 1 : 0)}
                                />
                            </div>
                            <div className={s.popupSmallPhotoList}>
                                {
                                    photos.map((item, index) => (
                                        <div className={s.popupSmallPhoto} key={index}>
                                            <Image
                                                className={s.popupSmallPhoto}
                                                alt="small-photo"
                                                src={item}
                                                width={80}
                                                height={80}
                                                placeholder="blur"
                                                blurDataURL={`data:image/svg+xml;base64,${toBase64(Grad(80, 80))}`}
                                                onClick={() => setcurrentPhotoNum(index)}
                                            />
                                            {/* <img className={s.popupSmallPhoto} src={item} alt="small-photo" onClick={() => setcurrentPhotoNum(index)} key={index} /> */}
                                        </div>
                                    ))
                                }
                            </div>
                            <div className={s.closeBtn} onClick={ClosePopup}>x</div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default ImagesViewer;