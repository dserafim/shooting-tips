import BlurredLayout from '../layouts/Blurred';
import TipTile from '../components/TipTile';
import LoadingTile from '../components/LoadingTile';
import ErrorMessage from '../components/ErrorMessage'
import { useEffect, useState, useCallback } from 'react';
import { getTipFromList } from '../modules/Tip';
import useTips from '../modules/useTips';
import { useParams, useNavigate } from 'react-router-dom'
function PrecisionPage() {
    let { tipId } = useParams();
    const navigate = useNavigate();
    let getTipInProgress = false;
    const {loading, tips, error} = useTips("precision");
    const [tipObj, setTip] = useState({ id: "", tip: "" });
    const [isVisible, setIsVisible] = useState(false);
    const getTip = useCallback((force) => {
        let tipInfo;
        if(getTipInProgress) {
            return;
        }
        getTipInProgress = true;
        if(force && setIsVisible(false)) {}
        if(force) {
            tipInfo = getTipFromList(tips)
        } else {
            tipInfo = getTipFromList(tips,tipId)
        }
        navigate("/precision/" + tipInfo.id, { replace: true });
        setTimeout(() => {
            setTip(tipInfo);
            setTimeout(()=> {
                setIsVisible(true);
                getTipInProgress = false;
            },200);
        },200);
        
    }, [tips, navigate, tipId]);
    useEffect(() => {
        if (!loading && tips.length > 0) {
            getTip()
        }
    }, [loading, tips, getTip]);
    if (loading) {
        return (
            <BlurredLayout>
                <LoadingTile></LoadingTile>
            </BlurredLayout>
        );
    } else {
        if(error !== undefined) {
            return (
                <BlurredLayout>
                    <LoadingTile></LoadingTile>
                    <ErrorMessage message={error}></ErrorMessage>
                </BlurredLayout>
            );
        } else {
            return (
                <BlurredLayout>
                    <TipTile isVisible={isVisible} tip={tipObj.tip} getNewTip={getTip}></TipTile>
                </BlurredLayout>
            );
        }
    }
}
export default PrecisionPage;