import Styles from './Sidebar.module.css'
import Shape1 from "./Shape.png"
import Shape2 from "./Shape (1).png"
import Shape3 from "./Shape (2).png"
import {Link} from 'react-router-dom'
let Sidebar = (props) =>{
	return(
		<div className={Styles.sidebar}>
			<ul className={Styles.sidebar_contents}>
				<li className={props.page==="1"?(Styles.sidebar_selected):null}><Link to="/screen1" style={{ textDecoration: 'none',color:"white"}}><img src={Shape1} alt=""/><span>Dashboard</span></Link></li>
				<li className={props.page==="2"?(Styles.sidebar_selected):null}><Link to="/screen2" style={{ textDecoration: 'none',color:"white"}}><img src={Shape2} alt=""/><span>Screen2</span></Link></li>
				<li><img src={Shape3} alt=""/><span>Ipsum</span></li>
			</ul>	
		</div>	
		)
}

export default Sidebar;