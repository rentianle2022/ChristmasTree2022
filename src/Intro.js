import './Intro.css'
import { ArrowRightCircleIcon } from '@heroicons/react/24/solid'

export default function Intro(props) {
    return (
        <div className='container'>
            <div className='text'>
                Memories are the best gift of the year
                <br />
                <div className='signature'>
                    By Tyler
                </div>
            </div>

            <ArrowRightCircleIcon
                className='next-button'
                onClick={() => props.gotoNextPage()}
            />
        </div>
    );
}
