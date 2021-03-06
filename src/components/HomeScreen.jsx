import React from 'react';

/* Components -------------------------------- */
import ProductsGrid from './Products/ProductsGrid'
import Carousel from './Carousel/Carousel.jsx'
import Loading from './LoadingScreen'


const HomeScreen = ({ products, loading, onAdd, showAlert }) => {

    if (loading) {
        return (
            <>
                <Loading />
            </>
        )
    }

    return (
        <>

            <div className="main-content-wrapper">
                {
                    <Carousel items={products} image_path={'e-commerce/banners/'} image_height={500} image_width={1000} showAlert={showAlert} />
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