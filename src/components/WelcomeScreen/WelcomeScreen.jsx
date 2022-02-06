import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';


function WelcomeScreen() {

    const history = useHistory();
    const hasStarted = useSelector(store => store.start);
    const dispatch = useDispatch();


    const clickHandler = () => {
        dispatch({
            type: 'START'
        });
        history.push('/feeling');
    }
    // I used conditional rendering and a dispatch to a reducer which stores a boolean that
    // determines whether or not the welcome text and button is shown.
    return (
        <>
            <header className='App-header'>
                <h1 className='App-title'>Reflection Time!</h1>
            </header>
            <div>{!hasStarted && <><h3>Welcome to the Feedback Form!</h3><br/><button className="beginBtn" onClick={clickHandler}>Begin</button></>}</div>
        </>
    );
}


export default WelcomeScreen;