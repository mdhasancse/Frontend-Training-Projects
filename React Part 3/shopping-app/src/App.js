import React , { useState } from 'react';
import Navbar from './components/Navbar';
import Productsmap from './components/Productsmap';
import Cart from './components/Cart';
import Login from './components/Login'; 
import './styles/productsmap.css';

const App = () => {
    const [loggedIn, setLoggedIn] = useState(false); 
    const [cart, setCart] = useState([]);
    const [warning, setWarning] = useState(false);

    const handleLogin = (email, password) => {
        if (email === 'md@gmail.com' && password === '12345') {
            setLoggedIn(true);
        } else {
            alert('Invalid credentials! Please try again.');
        }
    };

    const handleClick = (item) => {
        let isPresent = false;
        cart.forEach((product) => {
            if (item.id === product.id)
            isPresent = true;
        })
        if (isPresent) {
            setWarning(true);
            setTimeout(() => {
                setWarning(false);
            }, 2000);
            return ;
        }
        setCart([...cart, item]);
    }

    const handleChange = (item, d) => {
        let ind = -1;
        cart.forEach((data, index) => {
            if (data.id === item.id)
                ind = index;
        });
        const tempArr = [...cart]; 
        tempArr[ind].amount += d;

        if (tempArr[ind].amount === 0)
            tempArr[ind].amount = 1;
        setCart(tempArr);
    }

    return (
        <React.Fragment>
            {!loggedIn ? (
                <Login handleLogin={handleLogin} />
            ) : (
                <React.Fragment>
                    <Navbar size={cart.length} />
                    <Productsmap handleClick={handleClick} />
                    {warning && <div className='warning'>Item is already added to your cart</div>}
                    <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
                </React.Fragment>
            )}
        </React.Fragment>
    )
}

export default App;







