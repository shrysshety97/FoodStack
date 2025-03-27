import React, { useContext, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';

const Verify = () => {
  const [searchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  const { url } = useContext(ShopContext);
  const navigate = useNavigate();
  console.log(success, orderId);

  const verifyPayment = async () => {
    try {
      const response = await axios.post(`${url}/api/order/verify`, { success, orderId });
      if (response.data.success) {
        navigate("/myorders");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error("Error verifying payment:", error);
      navigate("/");
    }
  };

  useEffect(() => {
    verifyPayment();
  }, []);

  return (
    <div>
      <div className='min-h-[60vh] grid'>
        <div className='h-24 w-24 place-self-center border-4 border-t-secondary rounded-full animate-spin'>
        </div>
      </div>
    </div>
  );
};

export default Verify;
