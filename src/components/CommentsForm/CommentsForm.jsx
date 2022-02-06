import {useHistory} from 'react-router-dom';
import {useState} from 'react';
import {useDispatch} from 'react-redux';

function CommentsForm() {

    const history = useHistory();
    const dispatch = useDispatch();
    const [currentComments, setCurrentComments] = useState('');

    // Function makes a dispatch to store the comment in its reducer
    function submitComments() {
        dispatch({
            type: 'SUBMIT_COMMENT',
            payload: currentComments
        });
        setCurrentComments('');
        history.push('/review');
    }
    // Added the ability to go back to the previous page on button click
    return (
        <>
            <h3>Any Comments you want to leave?</h3><br/>
            <button className="prevBtn" onClick={() => history.push('/support')}>Previous</button>
            <input className="feedback" type="text" value={currentComments} onChange={event => setCurrentComments(event.target.value)} />
            <button className="nextBtn" onClick={submitComments}>Next</button>
        </>
    );
}

export default CommentsForm;

