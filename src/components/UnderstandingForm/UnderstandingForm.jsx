import {useHistory} from 'react-router-dom';
import {useState} from 'react';
import {useDispatch} from 'react-redux';

function UnderstandingForm() {
    // This component functions similarly to the other 3 feedback pages, with slight variations.

    const history = useHistory();
    const dispatch = useDispatch();
    const [currentUnderstanding, setCurrentUnderstanding] = useState('');

    function submitUnderstanding() {
        if (currentUnderstanding === '') {
            alert('Please do not leave the input blank!');
            return;
        } else {
            dispatch({
                type: 'SUBMIT_UNDERSTANDING',
                payload: currentUnderstanding
            });
            setCurrentUnderstanding('');
            history.push('/support');
        }
    }

    return (
        <>
            <h3>How well are you understanding the content?</h3><br/>
            <button onClick={() => history.push('/feeling')}>Previous</button>
            <input type="number" value={currentUnderstanding} onChange={event => setCurrentUnderstanding(event.target.value)} />
            <button onClick={submitUnderstanding}>Next</button>
        </>
    );
}


export default UnderstandingForm;