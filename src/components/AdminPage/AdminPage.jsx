import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import axios from 'axios';

function AdminPage() {
    
    const dispatch = useDispatch();
    const history = useHistory();
    const userData = useSelector(store => store.userData);
    // This runs an axios GET request to the server, populating the adminReducer on success.
    function fetchData() {
        axios.get('/feedback').then((response) => {
            dispatch({
                type: 'ADD_FEEDBACK',
                payload: response.data
            });
        }).catch(err => {
            alert(err);
        });
    }

    // This function makes a dispatch to delete a specific row and refreshes the data.
    function deleteRow(feedback) {
        axios.delete(`/feedback/${feedback.id}`).then( () => {
            dispatch({
                type: 'REMOVE_ITEM',
                payload: feedback
            });
            fetchData();
        }).catch(err => {
            alert(err);
            return;
        });
    }
    // This function triggers when the Go home button is clicked, resetting
    // everything and going back to the start page.
    function goHome() {
        dispatch({
            type: 'RESET'
        });
        history.push('/');
    }

    useEffect(() => {
        fetchData();
    }, [])
    // Below a map function is used to display the data in a table.
    return (
        <>
            <h1>Feedback Results</h1><br/>
            <table>
                <thead>
                    <tr><th>Feeling</th><th>Comprehension</th><th>Support</th><th>Comments</th><th>Delete</th></tr>
                </thead>
                <tbody>
                    {userData.map(feedback => {
                        return (
                            <tr key={feedback.id}><td>{feedback.feeling}</td><td>{feedback.understanding}</td>
                            <td>{feedback.support}</td><td>{feedback.comments}</td><td><button className="deleteBtn" onClick={() => deleteRow(feedback)}>Delete</button></td></tr>
                        );
                    })}
                </tbody>
            </table>
            <div className="backToHomeDiv"><button className="homeButton"onClick={goHome}>Go back to Home</button></div>
        </>
    );
}


export default AdminPage;