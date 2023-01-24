function App() {
  return (  
    <div className="wrapper clear">
      <div className="overlay">
        <div className="drawer">
          <h3 className="mb-30">Carzina</h3>
          <div className="items">
              
            <div className="cartItem d-flex align-center mb-20">
              <div style={{backgroundImage:'url(/img/galosi/1.jpg)'}} className="cartItemImg"></div>
                <div className="mr-20 flex">
                  <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
                  <b>dohuia</b>
                </div> 
                <img className="removeBtn" src="/img/Btn-remove.svg" alt="Remove Button"/>
              </div>

            <div className="cartItem d-flex align-center mb-20">
                <div style={{backgroundImage:'url(/img/galosi/1.jpg)'}} className="cartItemImg"></div>
                  <div className="mr-20 flex">
                    <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
                    <b>dohuia</b>
                </div> 
                <img className="removeBtn" src="/img/Btn-remove.svg" alt="Remove Button"/>
            </div>

          </div>
          <div className="cartTotalBlock">
          <ul>
            <li className="d-flex">
              <span>Final:</span>
              <div> </div>
              <b>dohuia</b>
            </li>
            <li className="d-flex">
              <span>Tax 5%</span>
              <div> </div>
              <b>dohuia</b>
            </li>
          </ul>
          <button className="greenButton">Oformiti zacaz <img src="/img/strelca.svg" alt="Strelca"/></button>
          </div>
          
        </div>
      </div>


      <header className="d-flex justify-between align-center p-40" >
        <div className="d-flex align-center"> 
        <img width={40} height={40} src="/img/logotip.png" alt="meaw"/>
            <div>
              <h3 className="text-uppercase">React Sneakers</h3>
              <p className="opacity-5">Shop the best sneakers</p>
            </div>
        </div> 
        <ul className="d-flex">
          <li className="mr-30">
          <img width={18} height={18} src="/img/cart.svg" alt="meaw"/>
            <span>1205 lei</span>
          </li>
          <li>
          <img width={18} height={18} src="/img/user.svg" alt="meaw"/>
          </li>
        </ul>
      </header>
    
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between" >
          <h1>All Sneakers</h1>
          <div className="search-block d-flex">
            <img src="/img/Search.svg" alt="Search"/>
            <input placeholder="Search..."/>
          </div>
        </div>

        <div className="d-flex">
        <div className="card">
          <div className="favorite">
            <img src="/img/Heart-unchecked.svg" alt="Like button"/>
          </div>
          <img width={133} height={112} src="/img/galosi/1.jpg" alt="galosiNr1" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Pret:</span>
              <b>dohuia</b>
            </div>           
            <button className="button">
              <img width={11} height={11}  src="/img/plus.svg" alt="Plus" />
            </button>
          </div>
        </div>

        <div className="card">
          <img width={133} height={112} src="/img/galosi/2.jpg" alt="galosiNr1" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Pret:</span>
              <b>dohuia</b>
            </div>           
            <button className="button">
              <img width={11} height={11}  src="/img/plus.svg" alt="Plus" />
            </button>
          </div>
        </div>

        <div className="card">
          <img width={133} height={112} src="/img/galosi/3.jpg" alt="galosiNr1" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Pret:</span>
              <b>dohuia</b>
            </div>           
            <button className="button">
              <img width={11} height={11}  src="/img/plus.svg" alt="Plus" />
            </button>
          </div>
        </div>

        <div className="card">
          <img width={133} height={112} src="/img/galosi/4.jpg" alt="galosiNr1" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Pret:</span>
              <b>dohuia</b>
            </div>           
            <button className="button">
              <img width={11} height={11}  src="/img/plus.svg" alt="Plus" />
            </button>
          </div>
        </div>
        </div>

      </div>
      
    </div>
  );
}

export default App;
