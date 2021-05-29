import React from 'react'

const Home = (props) => {

    return (
        <div>   
            <div className='add-to-cart'>
                <span>{props.data}</span>
                <img src="https://image.flaticon.com/icons/png/512/34/34627.png" alt="" />
            </div>
            <h1>Home Component</h1>
            <div className='cart-wrapper'>
                <div className='img-wrapper item'>
                    <img className='myimg' src="https://images.pexels.com/photos/4483775/pexels-photo-4483775.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="Image" />
                </div>
                <div className='texr-wrapper item'>
                <span>
                    Factory Store
                </span>
                <span>
                    Price: $1000
                </span>
                    </div>
                <div className='btn-wrapper item'>
                    <button onClick={()=>props.addToCartHandler({price:1000,name:'iPhone'})}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home
