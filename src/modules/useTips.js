import {useState, useEffect} from 'react';
import { getPrecisionTips } from '../modules/Tip';

function useTips(type, options) {
    const [status, setStatus] = useState({
        loading: false,
        tips: [],
        error: undefined
    });
    let isTypeError = false;
    let sourceHandler;
    switch(type) {
        case 'precision': 
            sourceHandler = getPrecisionTips;
            break;
        default:
            isTypeError = true;
            break;
    }
    useEffect(() => {
        if(isTypeError) {
            setStatus(prevState => {return {...prevState, loading: false, error: 'Wrong source Type'}});
            return;
        }
        setStatus(prevState => {return {...prevState, loading: true}});
        sourceHandler().then((tipsList) => {
            setStatus(prevState => {return {...prevState, loading: false, tips: tipsList, error: undefined}})
        });
    }, [sourceHandler, isTypeError]);

    return {...status};
}


export default useTips;