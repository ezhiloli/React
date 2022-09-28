
import React from 'react'; 

 class CartItem extends React.Component{
  
    increseQuantity=()=>{
        // SetState Form 1
        // this.setState({
        //     qty: this.state.qty+1 
        // })

        // Setstate Form 2 
        this.setState((prevState)=>{
            if(prevState.qty===10){
                return {qty:10}
            }
            return{

                qty:prevState.qty+1 
            }
        },()=>{console.log(this.state)})
    }
    decreseQuantity=()=>{
        this.setState((prevState)=>{
            if(prevState.qty===1){
                return{qty:1}
            }
            this.setState((prevState)=>{
                return{
                    qty:prevState.qty-1
                }
            })
        })
    }
    render(){
     
        const{price,title,qty}=this.props.product
        return(
            <div className="cart-item">

                <div className="left-block">
 
                    <img style={styles.image} />

                </div>

                <div className ="right-block">

                    <div style={{fontSize:25}}>{title } </div>
                    <div style={{color:'blue'}}> Rs.{price} INR</div>
                    <div style={{color:'blue'}}>{qty}</div>

                    <div className="cart-item-actions">

                        {/* Buttons */}

                        <img 
                            alt="increase" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                            onClick={this.increseQuantity.bind(this)}
                        />
                        <img  
                            alt="decrese"
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/2767/2767170.png"
                            onClick={this.decreseQuantity.bind(this)}
                        />
                        <img  
                            alt="delete" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/64/64022.png"
                        />

                    </div>



                </div>


            </div>
        )
    }
 }

 const styles = {
    image:{
        height:150,
        width:150,
        borderRadius:4,
        background:'#ccc',
        marginLeft:20
    }
 }

 export default CartItem;   