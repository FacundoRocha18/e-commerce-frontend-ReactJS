import React from 'react';
import placeholderImage from '../../public/img/imagepreviewdefault.png';
import { Link } from 'react-router-dom';


/* Styles imports -------------------------------- */
import style from "./ShoppingCartItem.module.css";
import css from "classnames";



const ShoppingCartItem = ({ item, onAdd, onRemove, onDelete, setIsShowing, setMessage, setType }) => {

  const { id, image, name, price, qty } = item;

  const handleRemove = (e) => {

    e.preventDefault()
    onRemove(item)
    setMessage('La cantidad fue disminuida correctamente')
    setType('success')
    setIsShowing(true)
  }

  const handleAdd = (e) => {

    e.preventDefault()
    onAdd(item, 1)
    setMessage('La cantidad fue aumentada correctamente')
    setType('success')
    setIsShowing(true)
  }

  const handleDelete = (e) => {

    e.preventDefault();
    onDelete(item);
    setMessage('El producto se eliminó del carrito correctamente')
    setType('success')
    setIsShowing(true)
  }

  return (
    <>
      {
        <div key={id} className={css(style.cartItem, "row animate__animated animate__bounceInDown animate__fast")}>
          <div className={style.column}>
            <div className={css(style.container, style.info)}>
              <div className={style.imageContainer}>
                <img src={image} className="shopping-cart-image"></img>
              </div>
              <div className={style.titleContainer}>
                <Link to={`/api/products/product/${id}`} replace>
                  <h6 className={css('title-center', style.title)}>{name}</h6>
                </Link>
              </div>
            </div>
          </div>
          <div className={style.column}>
            <div className={style.container}>
              <p className="shoppingCartItemPrice">USD <span className={style.itemPrice}>{price}</span> x unidad</p>
            </div>
          </div>
          <div className={style.column}>
            <div className={style.container}>
              <div className={style.quantityContainer}>
                <div className={css(style.quantityBtn, style.down)} onClick={(e) => handleRemove(e)}><span>-</span></div>
                <input className={style.qtyInput} type="number" value={qty} min="1" max="101" onChange={() => qty}></input>
                <div className={css(style.quantityBtn, style.up)} onClick={(e) => handleAdd(e)}><span>+</span></div>
              </div>
              <div className={style.removeButtonContainer}>
                <button className="btn btn-danger remove-item-btn" type="button" onClick={(e) => handleDelete(e)}><span className="material-icons-outlined">close</span></button>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )

}

ShoppingCartItem.defaultProps = {
  itemTitle: 'Product name',
  itemImage: placeholderImage,
  itemPrice: 0
}

export default ShoppingCartItem;