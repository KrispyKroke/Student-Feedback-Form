import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';

function WelcomeScreen() {

    const history = useHistory();
    const hasStarted = useSelector(store => store.start);
    const dispatch = useDispatch();
    const [passwordInput, setPasswordInput] = useState('');

    const clickHandler = () => {
        dispatch({
            type: 'START'
        });
        history.push('/feeling');
    }

    const goToAdminPage = () => {
        if (passwordInput === 'KrispyKroke') {
            dispatch({
                type: 'START'
            });
            setPasswordInput('');
            history.push('/admin');
        } else {
            alert('Invalid password. Try again.');
            setPasswordInput('');
            return;
        }
    }

    // I used conditional rendering and a dispatch to a reducer which stores a boolean that
    // determines whether or not the welcome text and button is shown.
    // There is also a link to the admin page which requires a password input to get there.
    // This also uses conditional rendering and a dispatch to get rid of the welcome screen text as well.
    return (
        <>
            <header className='App-header'>
                <h1 className='App-title'>Reflection Time!</h1>
            </header>
            <div>{!hasStarted && <><h3>Welcome to the Feedback Form!</h3><br/><button className="beginBtn" onClick={clickHandler}>Begin</button></>}</div><br/>
            <div className="adminPortal">{!hasStarted && <><input placeholder="Password" value={passwordInput} onChange={event => setPasswordInput(event.target.value)}/><button className="adminBtn" onClick={goToAdminPage}>Go to Admin Page</button></>}</div>
        </>
    );
}


export default WelcomeScreen;