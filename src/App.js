import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import { useEffect } from 'react';
import cartItems from './cartItem';
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotals } from './features/cart/CartSlice';
import Modal from './components/Modal';

function App() {
  const {cartItems} = useSelector((state) => state.cart)
  const {isOpen } = useSelector((state) => state.modal)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(calculateTotals())

  },[cartItems])
  return (
    <main>
      {isOpen && <Modal />}

      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
