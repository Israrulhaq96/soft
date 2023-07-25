// functional Component (JSX)

function OrderDetails(props) {


    return (
        <>
            <div className="col-lg-4 col-md-8">
                <div className="basket-conainet-sticky">
                    <div className="basket-items">
                        <div className="item-add">
                            <h3>Ласкаво просимо до "Soft Touch"</h3>
                            <div className="kfc-box-theme">
                                <span />
                                <span />
                                <span />
                            </div>
                        </div>
                        <div className="add-to-basket">
                            <div
                                className="kfc-basket"
                                style={{ aspectRatio: "0 / 1" }}
                            >
                                <img
                                    src="sofia.png"
                                    alt=""
                                />
                                <h5 className="color-white mt-4 font-bold">

                                    ШУГАРІНГ ВОСКОВА ДЕПІЛЯЦІЯ ПОЛТАВА
                                    Привіт - я Софія, піднімаю настрій гладкою шкірою.
                                    Ось про небажане волосся та життя без них.
                                </h5>
                            </div>
                        </div>
                    </div>
                    <a href="https://www.instagram.com/soft.__touch">
                        <div className="kfc-card-price">
                            <div className="d-flex justify-content-between">

                                <div className="d-flex align-items-center">
                                    <h2 className="kfc-mmm px-2">Instagram </h2>


                                    <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

            </div>
        </>
    )
}

export default OrderDetails;