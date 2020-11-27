import {useState} from 'react'
import Styles from './Notepad.module.css'
let Notepad = () =>{

	return(
		<div className={Styles.main}>
			<div className={Styles.head}>Notepad</div>
			<div className={Styles.list}>
				<div className={Styles.list_element}>
					<span className={Styles.element_body}>title</span>
					<span className={Styles.element_body} style={{color:"#D0D0D0"}}>parah</span>
				</div>
				<div className={Styles.list_element}>
					<span className={Styles.element_body}>title</span>
					<span className={Styles.element_body} style={{color:"#D0D0D0"}}>parah</span>
				</div>
				<div className={Styles.list_element}>
					<span className={Styles.element_body}>title</span>
					<span className={Styles.element_body} style={{color:"#D0D0D0"}}>parah</span>
				</div>
			</div>
			<div>
				<button className={Styles.add_sign}>+</button>
			</div>
		</div>
		)
}

export default Notepad;