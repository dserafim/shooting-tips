import './Blurred.css';
import Footer from '../components/Footer';
function BlurredLayout(props) {
    return (
        <div className='layout-blurred'>
            <div className='layout-blurred__content'>
                {props.children}
            </div>
            <div className='layout-blurred__footer'>
                <Footer></Footer>
            </div>
        </div>
    );
}

export default BlurredLayout;