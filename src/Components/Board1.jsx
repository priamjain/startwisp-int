import react from 'react'
import Layout from './Layout'
import Notification from './Notification'
import Styles from './Board.module.css'
import Shape from './Shape (3).png'
import Sales from './Sales.png'
let Board1 = () => {
	return(
		
			<Layout>
				<div className={Styles.main}>
				<input type="text" name="" id="" className={Styles.search} placeholder={`Search`}/>
				<div className={Styles.sales}>
					<div className={Styles.sales_data}>
					<div className={Styles.sales_head}>Sales Report <span className={Styles.sales_month}>September 2020</span></div>
					<img src={Sales} alt="" style={{height:"365px",width:"755px",marginLeft:"52px"}}/>
					</div>
					<div className={Styles.sales_anal}>
						
					</div>
				</div>
				<Notification></Notification>
				</div>
			</Layout>	
		)
}

export default Board1;