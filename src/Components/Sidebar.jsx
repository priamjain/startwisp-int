import Styles from './Sidebar.module.css'
import Shape1 from "./Shape.png"
import Shape2 from "./Shape (1).png"
import Shape3 from "./Shape (2).png"

let Sidebar = () =>{
	return(
		<div className={Styles.sidebar}>
			<ul className={Styles.sidebar_contents}>
				<li className={Styles.sidebar_selected}><img src={Shape1} alt=""/><span>Dashboard</span></li>
				<li><img src={Shape2} alt=""/><span>Lorem</span></li>
				<li><img src={Shape3} alt=""/><span>Ipsum</span></li>
			</ul>	
		</div>	
		)
}

export default Sidebar;