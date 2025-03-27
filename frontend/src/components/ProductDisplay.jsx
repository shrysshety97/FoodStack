import React from 'react';
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Item from './Item';

const ProductDisplay = ({ category }) => {
  const { all_products } = useContext(ShopContext);

  return (
    <section id='foods' className='max-padd-conatiner py-16 xl:py-28'>
      <div className="max-w-[622px] pb-20 mx-auto text-center">
        <h3 className="h3 uppercase">Your Chosen Flavours</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          gravida neque nisi, et ornare magna pellentesque sed.
        </p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-padd-container'>
        {all_products && all_products.map((product) => {
          if (category === "All" || category === product.category) {
            return (
              <div key={product._id}>
                <Item product={product} />
              </div>
            );
          }
          return null;
        })}
      </div>
    </section>
  );
};

export default ProductDisplay;
