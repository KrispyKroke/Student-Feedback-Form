import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import axios from 'axios';


function Review() {
    // We bring in the whole store to access all values for display on this page
    const allValues = useSelector(store => store);
    const history = useHistory();
    // This function makes an axios POST request to store feedback in the database
    function submitData() {
        axios.post('/feedback', {feeling: allValues.feeling, understanding: allValues.understanding,
        support: allValues.support, comments: allValues.comments}).then(() => {
            history.push('/success');
        }).catch((err) => {
            alert(err);
        });
    }

    return (
        <>
            <h2>Review your feedback</h2><br/>
            <button onClick={() => history.push('/comments')}>Go back</button><br/>
            <h4>Feelings: {allValues.feeling}</h4><br/>
            <h4>Understanding: {allValues.understanding}</h4><br/>
            <h4>Support: {allValues.support}</h4><br/>
            <h4>Comments: {allValues.comments}</h4><br/>
            <button onClick={submitData}>Submit</button>
        </>
    );
}


export default Review;