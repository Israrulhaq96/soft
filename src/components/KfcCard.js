//it will print only one card
// loop called from MenuPage.js
import React, { useState } from "react";

export default function Card(props) {

    const [selectedHeart, setSelectedHeart] = useState(''); // null or ''

    const heartClick = (iconId) => {

        setSelectedHeart(iconId);// for setting "fa-heart" class set userstate

        //alert(catName + "["+catId+"] Button is clicked");

        // toggle isActive state on click
        //if selected and user clicked again thn make it unselected
        if (selectedHeart)
            setSelectedHeart('');

        //user only select option once
        //if (!selectedHeart)
        //setSelectedHeart(iconId);

    };
    const catgoryData = props.CI;
    const productData = props.PI;

    const uniqueCardKey = catgoryData.cat_id + "_" + productData.p_id;
    
    return (

        <div className="col-lg-4 col-md-4 col-6 px-larg-4" key={uniqueCardKey}>
            <div className="card menu-card ">
                <a key={"cardHref_"+uniqueCardKey} href={"#item/" + productData.p_name} className="manu-img-item">
                    <img key={"cardImg_"+uniqueCardKey}
                        className="card-img-top card-img"
                        src={"" + productData.p_img}
                        alt={productData.p_alttxt}
                    />
                </a>
                <div key={"card-body-"+uniqueCardKey} className="card-body p-0">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="card-title">{productData.p_name}</h5>
                        <span>
                            <div>
                                <button key={"cardbtn_"+uniqueCardKey} className="btn-item">
                                    {" "}
                                    {/* <i className="ri-heart-line" /> */}

                                    <i id={"hearticon_" + uniqueCardKey} className={`fa ${selectedHeart ? 'fa-heart' : 'fa-heart-o'}`} aria-hidden="true" style={{ color: 'red' }}
                                        onClick={() => heartClick("hearticon_" + uniqueCardKey)}></i>
                                </button>
                            </div>
                        </span>
                    </div>
                    <p className="card-text">
                        {productData.p_desc}
                    </p>
                    <h4 className="kfc-price">Price. {productData.p_price} </h4>
                    <div className="price-label">
                      
                    </div>
                </div>
            </div>
        </div>

    );
}
