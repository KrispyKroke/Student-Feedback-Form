import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

function SuccessPage() {

    const dispatch = useDispatch();
    const history = useHistory();

    function resetApplication() {
        dispatch({
            type: 'RESET',
        });
        history.push('/');
    }

    // When the button below is clicked it makes a dispatch to reset all reducers and return to the welcome screen
    return (
        <>
            <h1>Thank you!</h1><br/>
            <button onClick={resetApplication}>Leave New Feedback</button>
        </>
    );
}

export default SuccessPage;