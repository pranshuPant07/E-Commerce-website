import React, { useEffect } from 'react'
import SingleProduct from './SingleProduct'
import { useDispatch, useSelector } from 'react-redux'
import { fetch_Product } from '../Features/Products/Products'


function Products() {

    const Product_State = useSelector((state) => {
        return state.Product
    });
    const selected_Category = useSelector((state) => {
        return state.Category.selectedCategory
    });
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetch_Product())
    }, []);


    return (
        <>
            <div className="container-fluid pt-5 pb-3">
                <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
                    <span className="bg-secondary pr-3">Featured Products</span>
                </h2>
                <div className="row px-xl-5">
                    {
                        Product_State.data.filter(e=>e.category.toUpperCase() == selected_Category.toUpperCase()).map((e,index)=><SingleProduct Products={e}/>)
                    }
                </div>
            </div>

        </>
    )
}

export default Products