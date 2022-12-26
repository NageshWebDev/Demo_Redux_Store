import style from './CartItems.module.css'


export default function CartItems() {
    return (
        <main className={style.main}>
            <section className={style.section}>
                <h1 className={style.h1}>Your Shopping Cart</h1>
                <div className={style.ECDiv}>
                    <h1 className="display-6"> <i className={`fa-solid fa-cart-shopping ${style.cart}`}></i> Your Cart is Empty</h1>
                </div>
                <div className={style.div}>
                    <span className={style.span}>Total Amount</span>
                    <span className={style.span}><i className="fa-solid fa-indian-rupee-sign fa-sm"></i> 0</span>
                </div>

                <button className={style.btn} ><i className="fa-solid fa-credit-card fa-sm"></i> Order it</button>
                <button className={style.btn} ><i className={`fa-solid fa-star ${style.star}`}></i> Special Product</button>
                {/* api - https://fakestoreapi.com/products/1 */}
            </section>
        </main>
    )
}