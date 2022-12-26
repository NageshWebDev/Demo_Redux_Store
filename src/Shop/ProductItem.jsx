import style from './ProductItem.module.css';

const ProductItem = (props) => {
  const { id, title, price, description, icon, quantity} = props;

  return (
    <li className={style.item}>
      <main>
        <header>
          <h3><i className={icon} style={{color: 'lightseagreen'}}></i> {title}</h3>
          <div className={style.price}><i className="fa-solid fa-indian-rupee-sign fa-sm"></i> {price.toFixed(1)}</div>
        </header>
        <p>{description}</p>
        <div className={style.actions}>
          <button className={style.btn}>Add to Cart</button>
        </div>
      </main>
    </li>
  );
};

export default ProductItem;