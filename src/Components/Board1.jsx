import SalesBoard from './SalesBoard'
import Layout from './Layout'
import Notification from './Notification'
import Styles from './Board.module.css'
import Shape from './Shape (3).png'

let Board1 = () => {
	return(
		
			<Layout>
				<div className={Styles.main}>
				<input type="text" name="" id="" className={Styles.search} placeholder={`Search`}/>
				<SalesBoard></SalesBoard>
				<Notification></Notification>
				</div>
			</Layout>	
		)
}

export default Board1;