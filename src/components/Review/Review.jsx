import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';


function Review() {

    const allValues = useSelector(store => store);

    return (
        <>
            <h2>Review your feedback</h2><br/>
            <h4>Feelings: {allValues.feeling}</h4><br/>
            <h4>Understanding: {allValues.understanding}</h4><br/>
            <h4>Support: {allValues.support}</h4><br/>
            <h4>Comments: {allValues.comments}</h4><br/>
            <button>Submit</button>
        </>
    );
}


export default Review;