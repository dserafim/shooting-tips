import './TipTile.css'

function TipTile(props) {
    return (
        <div data-testid="parent-tile" className={"tip-tile " + (props.isVisible ? "" : "tip-tile__hidden")}>
            <div className='tip-tile__header'>
                нагадування для високоточника
                <span data-testid="refresh-button" className='tip-tile__refresh' onClick={() => {props.getNewTip(true)}}></span>
                </div>
            <div className='tip-tile__content'>
                <span data-testid="tip-text-container" className='tip-tile__text'>{props.tip}</span>
            </div>
        </div>
    );
}

export default TipTile;