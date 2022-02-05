import {useHistory} from 'react-router-dom';
import {useState} from 'react';
import {useDispatch} from 'react-redux';

function CommentsForm() {

    const history = useHistory();
    const dispatch = useDispatch();
    const [currentComments, setCurrentComments] = useState('');


    function submitComments() {
        dispatch({
            type: 'SUBMIT_COMMENT',
            payload: currentComments
        });
        setCurrentComments('');
    
    }

    return (
        <>
            <h3>Any Comments you want to leave?</h3><br/>
            <input type="text" value={currentComments} onChange={event => setCurrentComments(event.target.value)} />
            <button onClick={submitComments}>Next</button>
        </>
    );
}

export default CommentsForm;

