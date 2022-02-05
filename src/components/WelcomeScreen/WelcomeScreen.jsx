import {useHistory} from 'react-router-dom';
import {useState} from 'react';
function WelcomeScreen() {

    const history = useHistory();
    const [hasBegun, setHasBegun] = useState(false);


    const clickHandler = () => {
        setHasBegun(true);
        history.push('/feeling');
    }

    return (
        <>
            <header className='App-header'>
                <h1 className='App-title'>Reflection Time!</h1>
            </header>
            <div onClick={clickHandler}>{!hasBegun && <><h3>Welcome to the Feedback Form!</h3><br/><button>Begin</button></>}</div>
        </>
    );
}


export default WelcomeScreen;