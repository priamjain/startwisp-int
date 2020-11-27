import {useState} from 'react'
import Styles from './Notepad.module.css'
let Notepad = () =>{
	const [list,setList] = useState([]);
	const [title, setTitle] = useState("")
	const [note, setNote] = useState("")
	const [np,setNp] = useState(true);
	let addToArray = () =>{
		if(np===true){
			setNp(inp=>!inp)
		}
		else{
		setList([...list,{title,note}]);
		setTitle("");
		setNote("");
		setNp(inp=>!inp)
		}
	}
	return(
		<div className={Styles.main}>
			<div className={Styles.head}>Notepad</div>
			<div className={`${Styles.list} ${np?(Styles.show):(Styles.hide)}`}>
				{	
					list.map((data,index)=>{
						return(
					<div key={index} className={Styles.list_element}>
									<span className={Styles.element_body}>{data.title}</span>
									<span className={Styles.element_body} style={{color:"#D0D0D0"}}>{data.note}</span>
					</div>)
							})
				}
				
			</div>
			<div className={`${Styles.input_form} ${!np?(Styles.show):(Styles.hide)}`}>
				<div className={Styles.element_body}>Title</div>
				<input className={`${Styles.input_title} ${Styles.input}`} type="text" name="title" value={title} onChange={(e)=>setTitle(e.target.value)} id=""/>
				<div className={Styles.element_body}>Note</div>
				<textarea className={`${Styles.input} ${Styles.input_note}`} name="para" id="" cols="30" rows="10" value={note} onChange={(e)=>setNote(e.target.value)}></textarea>
				<button onClick={(e)=>{setNp(inp=>!inp)}} className={`${Styles.sign} ${Styles.cross_sign} ${!np?(Styles.show):(Styles.hide)}`}>x</button>
			</div>
			<div>
				<button onClick={(e)=>{addToArray()}} className={`${Styles.sign} ${Styles.add_sign}`}>+</button>
			</div>
		</div>
		)
}

export default Notepad;