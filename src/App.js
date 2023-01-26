import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
import React from 'react';



function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [items,setItems] = React.useState([])
  const [cartItems,setCartItems] = React.useState([])
  
  React.useEffect(()=>{
    fetch('https://63d2be3e4abff888341229b8.mockapi.io/items')
    .then((res) =>{
      return res.json();
    })
    .then((json) =>{
      setItems(json);
    })
  });

  const onAddToCard = (obj) =>{
    setCartItems(prev =>[...prev,obj]);
  };
 

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between" >
          <h1>All Sneakers</h1>
          <div className="search-block d-flex">
            <img src="/img/Search.svg" alt="Search" />
            <input placeholder="Search..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {
            items.map((item) => (
              <Card
                title={item.title}
                url={item.url}
                price={item.price}
                onClickFavorite={() => console.log('Add to favorite')}
                onClickAdd={(obj) =>onAddToCard(obj)}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
