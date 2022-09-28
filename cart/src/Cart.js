import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component{
    constructor(){
        super();
        this.state={
            products:[
            {
            price:25999,
            title:'Realme Pad X',
            qty:1,
            img:'',
            id:1
            },
            {
                price:999,
                title:'Smart Watch',
                qty:3,
                img:'',
                id:2
            }, 
            {
                price:29999,
                title:'Asus VivoBook 15',
                qty:5,
                img:'',
                id:3
            }
        ]
        }
    }
    render(){
        const { products } = this.state;
        return(
            <div className="cart">
             
               {products.map((product)=>{
                    return <CartItem product={product} key={product.id} />
               })}

            </div> 
        )};
    
}
export default Cart;
