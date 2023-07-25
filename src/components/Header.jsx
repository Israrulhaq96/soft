// functional Component (JSX)

// props = {}
// props = {p: person, age: age}

function Header() {


  
  
  
  return (
    <>
      {/* <h1> Header, Welcome {props.p} </h1> */}
      <div>
        <nav className=" header-color navbar navbar-expand navbar-light d-flex align-items-center">
          <div className="container category-container-custom">
            <div className="d-flex align-items-center">
         
              <div className="header-login   mx 2px">
                <a href="./">
                  <img
                    src="png-transparent-moisturizer-skin-care-facial-exfoliation-olives-miscellaneous-face-hand.png"
                    className="brand-logo"
                    alt="brand-logo"
                  />
                </a>
              </div>
              <div className="order-through">
                <div id="ProductleftBar" className="container">
                <h2 id="heading2" class="menu-title mt-0"><span>ШУГАРИНГ ВАКСИНГ ДЕПІЛЯЦІЯ ПОЛТАВА</span></h2>
                     

                </div>
              </div>
            </div>
          </div>
        </nav>
        
       
      </div>
    </>
  )
}

export default Header;