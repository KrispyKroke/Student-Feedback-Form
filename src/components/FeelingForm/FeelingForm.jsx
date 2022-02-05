import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

function FeelingForm() {

    const dispatch = useDispatch();
    const [currentFeeling, setCurrentFeeling] = useState('');
    const history = useHistory();


    function submitFeeling() {
        if (currentFeeling === '') {
            alert('Please do not leave the input blank!');
            return;
        } else {
            dispatch({
                type: 'SUBMIT_FEELING',
                payload: currentFeeling
            });
            setCurrentFeeling('');
            history.push('/understanding');
        }
    }

    return (
        <>
            <h3>How are you feeling today?</h3><br/>
            <input value={currentFeeling} onChange={event => setCurrentFeeling(event.target.value)} type="number"/>
            <button onClick={submitFeeling}>Next</button>
        </>
    );
}


export default FeelingForm;