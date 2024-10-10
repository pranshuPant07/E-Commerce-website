import React, { useEffect } from 'react'
import { capitalizeFirstLetter } from '../Utility/CapitalLetter'
import { useDispatch, useSelector } from 'react-redux';
import CategorySlice, { fetchCategory } from '../Features/Category/CcatgorySlice';

function SelectCaterory() {
    const categoryState = useSelector((state) => {
        return state.Category
    })
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCategory())
    }, [])
    function Clicked_Categorydata(e) {
        dispatch(CategorySlice.actions.changeCategory(e.target.innerText));
    }
    return (
        <>
            <div className="col-lg-3 d-none d-lg-block">
                <a
                    className="btn d-flex align-items-center justify-content-between bg-primary w-100"
                    data-toggle="collapse"
                    href="#navbar-vertical"
                    style={{ height: 65, padding: "0 30px" }}
                >
                    <h6 className="text-dark m-0">
                        <i className="fa fa-bars mr-2" />
                        {categoryState.selectedCategory}
                    </h6>
                    <i className="fa fa-angle-down text-dark" />
                </a>
                <nav
                    className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light"
                    id="navbar-vertical"
                    style={{ width: "calc(100% - 30px)", zIndex: 999 }}
                >
                    <div className="navbar-nav w-100">
                        {categoryState.arrCategory.map((e, index) => (<div data-toggle="collapse"
                            href="#navbar-vertical" onClick={Clicked_Categorydata} key={index} className="nav-item nav-link">
                            {capitalizeFirstLetter(e)}
                        </div>))}
                    </div>
                </nav>
            </div>
        </>
    )
}

export default SelectCaterory