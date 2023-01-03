import { useState } from 'react';
import './PhotoCard.css'
import { HeartIcon } from '@heroicons/react/24/solid';

export default function PhotoCard(props) {

    const [flipState, setFlipState] = useState(true)

    const { title, content, image } = props

    const stopFlip = () => {
        const audio = new Audio('/fairy-bell.mp3');
        audio.volume = 0.1
        setFlipState(false)
        props.show()
        audio.play()
    }

    console.log(props.image)
    return (
        <div class="flip-card">
            <div class={flipState ? "flip-card-inner" : ''}>
                <div class={flipState ? 'flip-card-front' : 'card-front'}>
                    <h1>{title}</h1>
                    <div>{content}</div>
                </div>
                <div class={flipState ? 'flip-card-back' : 'card-back'}>
                    <HeartIcon className={flipState ? 'heart-empty' : 'hide'} onClick={stopFlip} />
                    <img src={require(`${image}`)} className={flipState ? 'image' : 'image-flip'} />
                </div>
            </div>
        </div>
    );
}
