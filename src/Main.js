import './Main.css'
import Tree from './Tree'
import PhotoCard from './PhotoCard';
import { useEffect, useState } from 'react';
import Snowfall from 'react-snowfall'

export default function Main(props) {

    const [showTree, setShowTree] = useState(false)
    const [showStar, setShowStar] = useState(false)
    const [showSanta, setShowSanta] = useState(false)
    const [showWreath, setShowWreath] = useState(false)

    const [snow, setSnow] = useState(false)

    useEffect(() => {
        if (showSanta && showStar && showTree && showWreath) {
            setSnow(true)
            const audio = new Audio("./we-wish-you-a-merry-christmas.mp3")
            audio.volume = 0.1
            audio.play()
        }
    })
    return (
        <div className='container'>
            <Tree showTree={showTree} showStar={showStar} showSanta={showSanta} showWreath={showWreath} />
            {snow && <div className='title'>岑宝2022年圣诞节快乐！</div>}
            <div className='photo-cards'>
                <PhotoCard show={() => setShowTree(true)} image={'./photos/banna.jpg'} title='西双版纳' content='去年圣诞节最快乐的一次出游！'/>
                <PhotoCard show={() => setShowStar(true)} image={'./photos/shenzhen.jpg'} title='深圳' content='跨入虎虎的本命年啦！'/>
                <PhotoCard show={() => setShowSanta(true)} image={'./photos/guilin.jpg'} title='桂林' content='桂林游山玩水，柳州吃螺蛳粉！'/>
                <PhotoCard show={() => setShowWreath(true)} image={'./photos/shanghai.jpg'} title='上海' content='来上海当天选打工人！'/>
            </div>

            <div>
                {snow && <Snowfall />}
            </div>
        </div>
    );
}
