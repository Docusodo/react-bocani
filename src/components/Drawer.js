function Drawer({onClose,items=[] }) {
    return (
        <div  className="overlay">
            <div className="drawer ">
                <h2 className="mb-30 d-flex justify-between ">Carzina <img onClick={onClose} className="removeBtn cu-p" src="/img/Btn-remove.svg" alt="Remove Button" /> </h2>
                <div className="items">
                  {items.map((obj) => (
                    <div className="cartItem d-flex align-center mb-20">
                        <div style={{ backgroundImage: `url(${obj.url})` }} className="cartItemImg"></div>
                        <div className="mr-20 flex">
                            <p className="mb-5">{obj.title}</p>
                            <b>{obj.price} lei</b>
                        </div>
                        <img className="removeBtn" src="/img/Btn-remove.svg" alt="Remove Button" />
                    </div>
                    ))}

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