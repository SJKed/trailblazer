import React, { useState, useEffect } from 'react';
import { getUserDetails } from '../utils/api';
import '../stylesheets/Frontpage.scss'
import { Link } from 'react-router-dom';


export function Frontpage() {
    const [user, setUser] = useState({ username: 'Temp name', id: 1, discordid: '1231321', email: 'email@email.com', gameLanguage: 'ENG', gameVersion: 'Scarlet', missingPokemon: [1, 2, 3] })

    function moveBackgroundImage(e: MouseEvent) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        const backgroundImage = document.querySelector('.FrontpageBackground') as HTMLElement;
        if (!backgroundImage) return console.log('No background image');
        backgroundImage.style.backgroundPosition = `calc(50% + ${x * -50}px) calc(50% + ${y * -50}px)`;
    }

    async function checkAuth() {
        const response = await getUserDetails();
        if (response) { return response }
    }

    useEffect(() => {
        document.addEventListener('mousemove', moveBackgroundImage);
        checkAuth().then((res) => {
            setUser(res.user);
        }).catch((err) => {
            window.location.href = `${process.env.NX_FRONTEND_URL}`;
        });
    }, []);

    return (
        <div className="wrapper">
            <div className='FrontpageBackground' />
            <div className="LeftSideFade" />
            <div className="RightSideFade" />
            <div className="FrontendContentWrapper">
                <div className="LeftSide">
                    <div className="Head">
                        <Link to={`/profile`}>
                            <h2>{user.username.toUpperCase()}</h2>
                        </Link>
                        <h1>TRAILBLAZER</h1>
                    </div>
                    <div className="Selection">
                        <ul>
                            <li>
                                <Link to='/dashboard'>TRADES</Link>
                            </li>
                            <li>
                                <Link to='/profile'>PROFILE</Link>
                            </li>
                            <li>
                                <Link to='/dashboard'>NEWS</Link>
                            </li>
                            <li>
                                <Link to='/dashboard'>CONTACT</Link>
                            </li>
                            <li>
                                <Link to='/dashboard'>LOG OUT</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="RightSide">
                    <div className="Cards">
                        <div className="NewsCard"></div>
                        <div className="NewsCardSmall"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Frontpage;