import Layout from './Layout'
import Styles from './Board2.module.css'
import {useState} from 'react'
import Attach from './attach.png'
import Share_dd from './share_dd.png'
let Board2 = () =>{
	const [text,setText] = useState("");
	return(
		<Layout>
			<div className={Styles.main}>
			<div className={Styles.post_box}>
				<textarea cols="30" rows="10" type="text" value={text} onChange={e=>setText(e.target.value)} className={Styles.post_input} placeholder="Share Something"/>
				<div className={Styles.options}>
					<div className={Styles.cancel}>Cancel</div>
					<div className={Styles.more_options}>
						<div className={Styles.attach}><img className={Styles.icon} src={Attach} alt="attach"/></div>
						<div className={Styles.share}>
							<div className={Styles.share_text}><p>Share</p></div>
							<div className={Styles.share_dropdown}>
								<img src={Share_dd} className={Styles.icon}/>
							</div>
						</div>
					</div>

				</div>
			</div>
			
			</div>
		</Layout>
		)
}

export default Board2;