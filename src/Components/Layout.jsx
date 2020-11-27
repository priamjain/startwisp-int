import Sidebar from './Sidebar'
import Styles from './Layout.module.css'
let Layout = (props) =>{
	return(
		<div className={Styles.display}>
			<Sidebar></Sidebar>
			{props.children}
		</div>
		)
}

export default Layout;