function Drawer() {
    return (
        <div style={{ display: 'none' }} className="overlay">
            <div className="drawer ">
                <h2 className="mb-30 d-flex justify-between ">Carzina <img className="removeBtn cu-p" src="/img/Btn-remove.svg" alt="Remove Button" /> </h2>
                <div className="items">

                    <div className="cartItem d-flex align-center mb-20">
                        <div style={{ backgroundImage: 'url(/img/galosi/1.jpg)' }} className="cartItemImg"></div>
                        <div className="mr-20 flex">
                            <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
                            <b>dohuia</b>
                        </div>
                        <img className="removeBtn" src="/img/Btn-remove.svg" alt="Remove Button" />
                    </div>

                    <div className="cartItem d-flex align-center mb-20">
                        <div style={{ backgroundImage: 'url(/img/galosi/1.jpg)' }} className="cartItemImg"></div>
                        <div className="mr-20 flex">
                            <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
                            <b>dohuia</b>
                        </div>
                        <img className="removeBtn" src="/img/Btn-remove.svg" alt="Remove Button" />
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
                    <button className="greenButton">Oformiti zacaz <img src="/img/strelca.svg" alt="Strelca" /></button>
                </div>

            </div>
        </div>
    );
}

export default Drawer;