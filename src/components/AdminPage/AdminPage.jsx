import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import axios from 'axios';

function AdminPage() {
    
    const dispatch = useDispatch();
    const history = useHistory();
    const userData = useSelector(store => store.userData);
    
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


    useEffect(() => {
        fetchData();
    }, [])
    
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
                            <td>{feedback.support}</td><td>{feedback.comments}</td><td><button className="deleteBtn">Delete</button></td></tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}


export default AdminPage;