import React from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {
    const { push } = useHistory()

    const handleClick = (e) => {
        e.preventDefault();
        push('/login');
    }

    return(
        <div className='home'>
            <header className='hero-img'>
                <h1>Goal Tracker App</h1>
                <button onClick={handleClick}>Create Goals</button>
            </header>
            <section>
                <h2>about app</h2>
                <p>Paragraph about the app</p>
            </section>
            <section> 
                <p>...</p>
            </section>
            <section>
                <p>...</p>
            </section>
        </div>
    )
}

export default Home;