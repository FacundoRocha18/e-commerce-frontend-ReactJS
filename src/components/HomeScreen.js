import React, { useState } from 'react';

/* Components -------------------------------- */
import ProductsGrid from './Products/ProductsGrid'
import Carousel from './Carousel/Carousel.jsx'

const HomeScreen = ({ products, loading, onAdd, showAlert, categories }) => {

    return (
        <>

            <div className="main-content-wrapper">
                {
                    <Carousel />
                }
                <div className='mb-2'>
                    <h1 className='title-center'>Productos</h1>
                </div>

                {
                    <ProductsGrid
                        products={products}
                        loading={loading}
                        onAdd={onAdd}
                        showAlert={showAlert}
                    />
                }

            </div>
        </>
    )
}

export default HomeScreen;