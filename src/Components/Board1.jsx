import SalesBoard from './SalesBoard'
import Layout from './Layout'
import Notification from './Notification'
import Styles from './Board.module.css'
import Notepad from './Notepad'
import Graph from './graph1.png'
import Graph2 from './graph2.png'
import Graph3 from './graph3.png'
let Board1 = () => {
	return(
		
			<Layout>
				<div className={Styles.main}>
				<input type="text" name="" id="" className={Styles.search} placeholder={`Search`}/>
				<SalesBoard></SalesBoard>
				<Notification></Notification>
				<div class={Styles.bottom_row}>
				<Notepad></Notepad>
				<div className={Styles.column1}>
					<img className={Styles.graph} src={Graph}/>
					<div className={Styles.inbox}>
						<span className={Styles.inbox_text}>Inbox</span>
						<span className={Styles.inbox_number}>23</span>
					</div>
				</div>
				<div className={Styles.column2}>
					<div className={Styles.data}>
						<div className={Styles.data_lead}>This Month</div>
						<div class={Styles.data_body}>
							<div className={Styles.data_value}>+7.8%</div>
							<img src={Graph2} className={Styles.data_graph} alt=""/>
						</div>
					</div>
					<div className={Styles.data}>
						<div className={Styles.data_lead}>Last Month</div>
						<div class={Styles.data_body}>
							<div className={Styles.data_value}>+67.4%</div>
							<img src={Graph3} className={Styles.data_graph} alt=""/>
						</div>
					</div>
				</div>
				</div>
				</div>
			</Layout>	
		)
}

export default Board1;