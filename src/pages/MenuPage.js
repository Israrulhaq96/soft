import React from 'react';
import Header from '../components/Header';
import CategoryBar from '../components/CategoryBar';
import OrderDetails from '../components/OrderDetails';


export default function MenuPage(props) {
    return (
        <div className='container'>
            <Header />
            <div id="Productmain-height" className="main-height">
                <div id="Productcontainer-xxl" className="container-xxl category-container-custom mb-md-100">
                    <div className="row" id="Productrow">
                        <CategoryMenu />
                        <OrderDetails />
                    </div>
                </div>
            </div>

        </div >
    )
}
