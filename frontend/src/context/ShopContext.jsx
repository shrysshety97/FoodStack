import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const url = "http://localhost:4000";
    const [token, setToken] = useState("");
    const [cartItems, setCartItems] = useState({});
    const [all_products, setAll_products] = useState([]);

    const addToCart = async (itemId) => {
        if (!itemId) {
            console.error('Invalid itemId:', itemId);
            return;
        }
        setCartItems((prev) => ({
            ...prev,
            [itemId]: prev[itemId] ? prev[itemId] + 1 : 1,
        }));

        if (token) {
            try {
                await axios.post(url + "/api/cart/add", { itemId }, {
                    headers: {
                        Authorization: `Bearer ${token}`, // Ensure token is included
                    },
                });
            } catch (error) {
                console.error('Error adding to cart:', error);
            }
        }
    };

    const removeFromCart = async (itemId) => {
        if (!itemId) {
            console.error('Invalid itemId:', itemId);
            return;
        }

        setCartItems((prev) => ({
            ...prev,
            [itemId]: prev[itemId] > 1 ? prev[itemId] - 1 : 0,
        }));

        if (token) {
            try {
                await axios.post(url + "/api/cart/remove", { itemId }, {
                    headers: {
                        Authorization: `Bearer ${token}`, // Ensure token is included
                    },
                });
            } catch (error) {
                console.error('Error removing from cart:', error);
            }
        }
    };

    const getTotalCartItems = () => {
        let totalItems = 0;
        for (const item in cartItems) {
            totalItems += cartItems[item];
        }
        return totalItems;
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                const itemInfo = all_products.find((product) => product._id === item);
                if (itemInfo) {
                    totalAmount += itemInfo.price * cartItems[item];
                }
            }
        }
        return totalAmount;
    };

    const fetchProductList = async () => {
        try {
            const response = await axios.get(url + "/api/product/list");
            setAll_products(response.data.data);
        } catch (error) {
            console.error('Error fetching product list:', error);
        }
    };

    const loadCartData = async () => {
        if (token) {
            try {
                const response = await axios.post(url + "/api/cart/get", {}, { headers: { token } });
                setCartItems(response.data.cartData);
            } catch (error) {
                console.error('Error loading cart data:', error);
            }
        }
    };

    useEffect(() => {
        async function loadData() {
            await fetchProductList();
            const storedToken = localStorage.getItem("token");
            if (storedToken) {
                setToken(storedToken);
                await loadCartData();
            }
        }
        loadData();
    }, []);

    const contextValue = {
        all_products,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartItems,
        getTotalCartAmount,
        url,
        token,
        setToken,
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
