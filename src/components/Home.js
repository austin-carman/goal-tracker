import React from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {
    const { push } = useHistory()

    const handleClick = (e) => {
        e.preventDefault();
        push('/register');
    }

    return(
        <div className='home'>
            <header className='hero-img'>
                <h1>Goal Tracker Title</h1>
                <button onClick={handleClick}>Start New Goal</button>
            </header>
            <section>
                <h2>All your goals in one place</h2>
                <p>Writing your goals down and have them accessible to read everyday helps you achieve your goals.  </p>
            </section>
            <section>
                <h2>Break your goals down into steps</h2>
                <p>Some goals can be a little daunting to work toward. Try breaking up your goal into smaller achievable landmark goals. You can mark these steps as you complete them to see how far you've come and keep track of your progress.</p>
            </section>
            <section>
                <h2>Follow Your Friends</h2>
                <p>Friends can follow each other and keep each other accountable and leave comments for encouragement and suggestions to keep each other accountable and reach your goals together.</p>
            </section>
        </div>
    )
}

export default Home;