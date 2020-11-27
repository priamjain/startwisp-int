import Styles from './Notification.module.css'
import NotiMsg from './NotiMsg'
let Notification = ()=>{
	return(
		<div>
				<button className={Styles.noti_tab}>
					Notifications
				</button>
				<button className={Styles.event_tab}>
					Events
				</button>
				<div className={Styles.notifications}>

				</div>	
				<div className={Styles.noti_content}>
					<ul>
						<NotiMsg name="Admin" msg="Your faculty uploaded the syllabus." time="3" color="FFD9D9"></NotiMsg>
						<NotiMsg name="Student" msg="Your faculty uploaded the syllabus." time="3" color="D9FFE1"></NotiMsg>
						<NotiMsg name="Teacher" msg="Your faculty uploaded the syllabus." time="3" color="BA99FF"></NotiMsg>
						<NotiMsg name="Admin" msg="Your faculty uploaded the syllabus." time="3" color="F5E764"></NotiMsg>
						<NotiMsg name="Admin" msg="Your faculty uploaded the syllabus." time="3" color="F5E764"></NotiMsg>
						<NotiMsg name="Admin" msg="Your faculty uploaded the syllabus." time="3" color="F5E764"></NotiMsg>	
				
					</ul>
				</div>
				<button className={Styles.viewall}>
					View All
				</button>
		</div>
		)
}
export default Notification