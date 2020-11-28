import Layout from './Layout'
import Styles from './Board2.module.css'
import {useState} from 'react'
import Attach from './attach.png'
import Share_dd from './share_dd.png'
import Post from './Post'
let Board2 = () =>{
	const [text,setText] = useState("");
	const [posts,setPosts] = useState([]); 
	return(
		<Layout page="2">
			<div className={Styles.main}>
			<div className={Styles.post_box}>
				<textarea cols="30" rows="10" type="text" value={text} onChange={e=>setText(e.target.value)} className={Styles.post_input} placeholder="Share Something"/>
				<div className={Styles.options}>
					<div className={Styles.cancel}>Cancel</div>
					<div className={Styles.more_options}>
						<div className={Styles.attach}><img className={Styles.icon} src={Attach} alt="attach"/></div>
						<div className={Styles.share}>
							<div className={Styles.share_text} onClick={e=>{setPosts([...posts,text]);setText("");}}><p>Share</p></div>
							<div className={Styles.share_dropdown}>
								<img src={Share_dd} className={Styles.icon} alt="Share logo"/>
							</div>
						</div>
					</div>

				</div>
			</div>
			
			{
				posts.slice(0).reverse().map((post,index)=>{
					if(index===0){
						return(<Post key={index} state={true} post={post}></Post>);
					}
					else{
						return(<Post key={index} state={false} post={post}></Post>);
					}
					
				})
			}
			<Post key="demo" state={true} 
			post='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'>
			</Post>
			</div>
		</Layout>
		)
}

export default Board2;