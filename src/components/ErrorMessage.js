import './ErrorMessage.css';
function ErrorMessage(props) {
    return (
        <div className='error-message'>{props.message ? props.message : 'Unhandled Error'}</div>
    );
}
export default ErrorMessage;