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

    return (
        <>
            <header className='App-header'>
                <h1 className='App-title'>Reflection Time!</h1>
            </header>
            <div onClick={clickHandler}>{!hasStarted && <><h3>Welcome to the Feedback Form!</h3><br/><button>Begin</button></>}</div>
        </>
    );
}


export default WelcomeScreen;