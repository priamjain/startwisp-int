import Styles from './NotiMsg.module.css'
let NotiMsg = (props) =>{
return(
	<li>
		<div className={Styles.noti_img} style={{backgroundColor:`#${props.color}`}}>
		</div>
		<div className={Styles.noti_body}>
			<span className={Styles.noti_name}>
				{props.name}
			</span>
			<span className={Styles.noti_msg}>
				{props.msg}
			</span>
			<span className={Styles.noti_time}>
				{props.time} min ago
			</span>
		</div>
	</li>)
}

export default NotiMsg;