import Home from '../components/Home'
import {connect} from 'react-redux'
import {addToCart} from '../Services/Actions/action'

const mapStateToProps=state=>({
    cardData:state.cardItems
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data))

})
export default connect(mapStateToProps,mapDispatchToProps)(Home)