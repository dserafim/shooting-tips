import './NotFoundTile.css';
import {Link} from 'react-router-dom';
function NotFoundTile() {
    return (
        <div className='not-found'>
            <h2 className='not-found__title'>Сторінку не знайдено</h2>
            <p className='not-found__text'>для того щоб повернутися на головну сторінку <Link className='not-found__link' to="/">натисни сюди</Link></p>
            <p className='not-found__annotation'>Ця подія буде занесена до журналу обліку незнайдених посилань та буде винесена на найближчу нараду.</p>
        </div>
    );
}

export default NotFoundTile;