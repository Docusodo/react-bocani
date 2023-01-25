function Header() {
  return (
    <header className="d-flex justify-between align-center p-40" >
      <div className="d-flex align-center">
        <img width={40} height={40} src="/img/logotip.png" alt="meaw" />
        <div>
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className="opacity-5">Shop the best sneakers</p>
        </div>
      </div>
      <ul className="d-flex">
        <li className="mr-30">
          <img width={18} height={18} src="/img/cart.svg" alt="meaw" />
          <span>1205 lei</span>
        </li>
        <li>
          <img width={18} height={18} src="/img/user.svg" alt="meaw" />
        </li>
      </ul>
    </header>
  )
};

export default Header;