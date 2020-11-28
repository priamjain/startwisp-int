import {useState} from 'react'
import Styles from './Post.module.css'
import UserImg from './user.png'
import Send from './send.png'

let Post = (props) =>{
	const [state,setState] = useState(props.state);
	return(
		<div className={`${Styles.post}`} onClick={(e)=>{e.stopPropagation();setState(old=>!old);}}>
			<div className={Styles.main}>
				<img src={UserImg} alt="" className={Styles.user_img}/>
				<div className={Styles.body}>
					<p>Teacher</p>
					<p style={{fontWeight:"200",color:"#A0A0A0"}}> {props.post} </p>
				</div>

			</div>
			<div className={`${!state?(Styles.hide):(Styles.comments)}`} onClick={e=>e.stopPropagation()}>
					<img src={UserImg} alt="" className={Styles.this_user}/>
					<input type="text" className={Styles.input} placeholder="Write a comment"/>
					<img src={Send} alt="" style={{height:"29px",width:"39px",cursor:"pointer"}}/>
			</div>
		</div>

		)	
}

export default Post;