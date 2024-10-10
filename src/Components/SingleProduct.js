import React from 'react'
import { getPriceAfterDiscount } from '../Utility/Common'
import { useDispatch } from 'react-redux'
import cartSlice from '../Features/Cart/cartSlice';

function SingleProduct(props) {

    const dispatch=useDispatch();
    function addToCart_click(e){
        dispatch(cartSlice.actions.addtoCart({product:props.Products,quantity:1}))
        return alert('ADDED TO CART SUCCESSFULLY')
    }
    return (
        <>
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <div className="product-item bg-light mb-4">
                    <div className="product-img position-relative overflow-hidden">
                        <img className="img-fluid w-100" src={props.Products.thumbnail} alt="" />
                        <div className="product-action">
                            <div onClick={addToCart_click} className="btn btn-outline-dark btn-square" href="/">
                                <i className="fa fa-shopping-cart" />
                            </div>
                            <a className="btn btn-outline-dark btn-square" href="/">
                                <i className="far fa-heart" />
                            </a>
                            <a className="btn btn-outline-dark btn-square" href="/">
                                <i className="fa fa-sync-alt" />
                            </a>
                            <a className="btn btn-outline-dark btn-square" href="/">
                                <i className="fa fa-search" />
                            </a>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <a className="h6 text-decoration-none text-truncate" href="/">
                            {props.Products.title}
                        </a>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>${getPriceAfterDiscount(props.Products.price,props.Products.discountPercentage)}</h5>
                            <h6 className="text-muted ml-2">
                                <del>${props.Products.price}</del> 
                            </h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-center mb-1">
                            <small className="fa fa-star text-primary mr-1" />
                            <small className="fa fa-star text-primary mr-1" />
                            <small className="fa fa-star text-primary mr-1" />
                            <small className="fa fa-star text-primary mr-1" />
                            <small className="fa fa-star text-primary mr-1" /> 
                            <small>{props.Products.rating}</small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleProduct