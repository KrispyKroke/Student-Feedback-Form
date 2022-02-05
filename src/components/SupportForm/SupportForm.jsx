import {useHistory} from 'react-router-dom';
import {useState} from 'react';
import {useDispatch} from 'react-redux';


function SupportForm() {

    const history = useHistory();
    const dispatch = useDispatch();
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
            <input type="number" value={currentSupport} onChange={event => setCurrentSupport(event.target.value)} />
            <button onClick={submitSupport}>Next</button>
        </>
    );
}


export default SupportForm;