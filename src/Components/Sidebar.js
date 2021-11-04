import React  from 'react'
import './sidebar.css';

import {
	NavLink
} from "react-router-dom";
export default function Sidebar() {	
	return (
	
		<div className="sidebar">
			<header className="d-flex justify-content-center py-3 fixed">
				<ul className="nav nav-pills ">
					<li className="nav-item"><NavLink to="/Prior" className="nav-link" >Prior Knowledge</NavLink></li>
					<li className="nav-item"><NavLink to="/Task" className="nav-link">Tasks</NavLink></li>
					<li className="nav-item"><NavLink to="/Questions" className="nav-link" >Questions</NavLink></li>
					<li className="nav-item"><NavLink to="/Feedback" className="nav-link" >Feedback</NavLink></li>
				</ul>
			</header>
		</div>
	)
}
