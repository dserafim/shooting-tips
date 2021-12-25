import './LoadingTile.css'

function LoadingTile(props) {
    return (
        <div className='loading-tile'>
            <div className='loading-tile__header'>
                завантажую поради
            </div>
            <div className='loading-tile__content'>
                <span className='loading-tile__text'>...Згадую дуже розумну пораду...</span>
            </div>
        </div>
    );
}

export default LoadingTile;