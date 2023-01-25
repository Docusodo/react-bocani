import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

const arr = [
  { title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, url: '/img/galosi/1.jpg' },
  { title: 'Мужские Кроссовки Nike Air Max 270', price: 15999, url: '/img/galosi/2.jpg' },
  { title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 8499, url: '/img/galosi/3.jpg' },
  { title: 'Кроссовки Puma X Aka Boku Future Rider', price: 8999, url: '/img/galosi/4.jpg' },
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />  
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between" >
          <h1>All Sneakers</h1>
          <div className="search-block d-flex">
            <img src="/img/Search.svg" alt="Search" />
            <input placeholder="Search..." />
          </div>
        </div>

        <div className="d-flex">  
          {
            arr.map((obj) => (
              <Card
                title={obj.title}
                url={obj.url}
                price={obj.price}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
