import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPriceAfterDiscount, getTotalPriceOfCart, limitToTwoDecimalPlaces } from '../Utility/Common';
import cartSlice from '../Features/Cart/cartSlice';

function Cart() {
  const arrCart = useSelector((state) => {
    return state.Cart.arrCart
  });
  const dispatch=useDispatch();
  function increaseQuantity(productID){
    let p=arrCart.find(e=>e.product.id==productID)
    dispatch(cartSlice.actions.increaseQuantity(p))
  }
  function decreaseQuantity(productID){
    let p=arrCart.find(e=>e.product.id==productID)
    dispatch(cartSlice.actions.decreaseQuantity(p))
  }
  function deleteItem(p){
    dispatch(cartSlice.actions.removefromCart(p))
  }
  const subTotalAmount=limitToTwoDecimalPlaces(getTotalPriceOfCart(arrCart));
  const totalCartAmount=limitToTwoDecimalPlaces(subTotalAmount+25);
  return (
    <div className="container-fluid">
      <div className="row px-xl-5">
        <div className="col-lg-8 table-responsive mb-5">
          <table className="table table-light table-borderless table-hover text-center mb-0">
            <thead className="thead-dark">
              <tr>
                <th>Products</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody className="align-middle">
              {arrCart.map(e => (
                <tr>
                  <td className="align-middle">
                    <img src={e.product.thumbnail} alt="" style={{ width: 50 }} />{" "}
                    {e.product.title}
                  </td>
                  <td className="align-middle">${getPriceAfterDiscount(e.product.price, e.product.discountPercentage)}</td>
                  <td className="align-middle">
                    <div
                      className="input-group quantity mx-auto"
                      style={{ width: 100 }}
                    >
                      <div className="input-group-btn">
                        <button onClick={()=>decreaseQuantity(e.product.id)} className="btn btn-sm btn-primary btn-minus">
                          <i className="fa fa-minus" />
                        </button>
                      </div>
                      <input
                        type="text"
                        className="form-control form-control-sm bg-secondary border-0 text-center"
                        value={e.quantity}
                      />
                      <div className="input-group-btn">
                        <button onClick={()=>increaseQuantity(e.product.id)} className="btn btn-sm btn-primary btn-plus">
                          <i className="fa fa-plus" />
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="align-middle">${limitToTwoDecimalPlaces(getPriceAfterDiscount(e.product.price, e.product.discountPercentage)*e.quantity)}</td>
                  <td className="align-middle">
                    <button onClick={()=>deleteItem()} className="btn btn-sm btn-danger">
                      <i className="fa fa-times" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-lg-4">
          <form className="mb-30" action="">
            <div className="input-group">
              <input
                type="text"
                className="form-control border-0 p-4"
                placeholder="Coupon Code"
              />
              <div className="input-group-append">
                <button className="btn btn-primary">Apply Coupon</button>
              </div>
            </div>
          </form>
          <h5 className="section-title position-relative text-uppercase mb-3">
            <span className="bg-secondary pr-3">Cart Summary</span>
          </h5>
          <div className="bg-light p-30 mb-5">
            <div className="border-bottom pb-2">
              <div className="d-flex justify-content-between mb-3">
                <h6>Subtotal</h6>
                <h6>${subTotalAmount}</h6>
              </div>
              <div className="d-flex justify-content-between">
                <h6 className="font-weight-medium">Shipping</h6>
                <h6 className="font-weight-medium">$25</h6>
              </div>
            </div>
            <div className="pt-2">
              <div className="d-flex justify-content-between mt-2">
                <h5>Total</h5>
                <h5>${totalCartAmount}</h5>
              </div>
              <button className="btn btn-block btn-primary font-weight-bold my-3 py-3">
                Proceed To Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Cart