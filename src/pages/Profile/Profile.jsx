import React from 'react';
import Header from '../../components/Header.jsx';
import User from '../../components/User.jsx';
import Account from '../../components/Account.jsx';
import Footer from '../../components/Footer.jsx';
import AccountCardData from '../../data/AccountCardData.json';
import '../../sass/pages/_Profile.scss';

function UserProfile () {
    return (
        <div className='profile-page'>
            < Header />
            <main className='bg-dark'>
                < User firstname="Tony" lastname="Jarvis" />
                {AccountCardData.map((data) => (
                    <Account 
                        key={data.id}
                        title={data.title}
                        amount={data.amount}
                        description={data.description}
                    />
                ))}
            </main>
            < Footer />
        </div>
    )
}

export default UserProfile