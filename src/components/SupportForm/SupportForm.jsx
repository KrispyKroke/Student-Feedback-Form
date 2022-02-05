import {useHistory} from 'react-router-dom';
import {useState} from 'react';
import {useDispatch} from 'react-redux';


function SupportForm() {

    const history = useHistory();
    const dispatch = useDispatch();
    // I used local state to track the Support input by the user to be transferred to 
    // the support reducer on submit
    const [currentSupport, setCurrentSupport] = useState('');


    function submitSupport() {
        if (currentSupport === '') {
            alert('Please do not leave the input blank!');
            return;
        } else {
            dispatch({
                type: 'SUBMIT_SUPPORT',
                payload: currentSupport
            });
            setCurrentSupport('');
            history.push('/comments');
        }
    }

    return (
        <>
            <h3>How well are you being supported?</h3><br/>
            <button onClick={() => history.push('/understanding')}>Previous</button>
            <input type="number" value={currentSupport} onChange={event => setCurrentSupport(event.target.value)} />
            <button onClick={submitSupport}>Next</button>
        </>
    );
}


export default SupportForm;