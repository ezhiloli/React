import React from 'react'; 

 class CartItem extends React.Component{
    render(){
        return(
            <div className="cart-item">

                <div className="left-block">

                    <img style={styles.image } />

                </div>

                <div className="right-block">

                    <div style={{fontSize:25}}>Phone </div>
                    <div style={{color:'blue'}}> 999</div>
                    <div style={{color:'blue'}}>1</div>

                    <div className="cart-items-actions">

                        {/* Buttons */}

                    </div>



                </div>


            </div>
        )
    }
 }

 const styles = {
    image:{
        height:100,
        width:100,
        borderRadius:4,
        background:'#ccc'
    }
 }

 export default CartItem;