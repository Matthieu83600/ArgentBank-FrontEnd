import React from 'react';
import Form from '../../components/Form.jsx';
import Footer from '../../components/Footer.jsx';
import '../../sass/pages/_SignIn.scss';

function Login () {
    return (
        <div className='signin-page'>
            <main className='bg-dark'>
                < Form />
            </main>
            < Footer />
        </div>
        
    )
}

export default Login;