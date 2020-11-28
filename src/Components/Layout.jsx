import Sidebar from './Sidebar'
import Styles from './Layout.module.css'
let Layout = (props) =>{
	return(
		<div className={Styles.display}>
			<Sidebar page={props.page}></Sidebar>
			{props.children}
		</div>
		)
}

export default Layout;