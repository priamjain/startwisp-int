import Sales from './Sales.png'
import Styles from './SalesBoard.module.css'
let SalesBoard = () =>{
	return(
		<div className={Styles.sales}>
			<div className={Styles.sales_data}>
			<div className={Styles.sales_head}>Sales Report <span className={Styles.sales_month}>September 2020</span></div>
			<img src={Sales} alt="" style={{height:"365px",width:"755px",marginLeft:"52px"}}/>
			</div>
			<div className={Styles.sales_anal} >
				<div className={Styles.sales_date}>17 Sep</div>
				<div className={Styles.sales_num} style={{backgroundColor:"#FFE700"}}>
					<div className={Styles.sales_num_val}>$1,204.33</div>
					<div className={Styles.sales_num_name}>Revenue</div>
				</div>
				<div className={Styles.sales_num} style={{backgroundColor:"#1FFD77"}}>
					<div className={Styles.sales_num_val}>$1,204.33</div>
					<div className={Styles.sales_num_name}>Revenue</div>
				</div>
			</div>
		</div>
		)
}

export default SalesBoard;