import React from "react"
import {render} from "react-dom"

//Components
import ListTaskContainer from "./containers/listTaskContainer.js"
import CreateTaskForm from "./components/createTaskForm.js"
import Task from "./components/task.js"

class MainContainer extends React.Component{

	constructor(props){
		super(props)

		this.state = {
			taskList:[]
			}

			this.handleRemoveTask = this.handleRemoveTask.bind(this)
			this.handleAddTask = this.handleAddTask.bind(this)
	}

	componentDidMount(){
		this.setState({
			taskList:["Custom Task 1", "Custom Task 2"]
		})
	}

	render(){
		return(
			<div>
					<div className = "row">
						<div className="col-md-12">
								<div style = {{textAlign:"center"}}>
										<h2> Bootstrap React TODO Application </h2>
								</div>
						</div>
					</div>

					{/*Create Task Form */}
					<CreateTaskForm
						newTask = {this.handleAddTask}
					/>

					{/* Show Task list */}
					<ListTaskContainer
						list = {this.state.taskList}
						removeTask = {this.handleRemoveTask}
					/>
			</div>

			)
	}

	handleRemoveTask(id){
		let array = this.state.taskList;

		/* Remove selected value from array */
		array = array.filter(function (el, index) {
			 return index !== id
		});

		this.setState({taskList: array});
	}

	handleAddTask(name){
		let tmp = this.state.taskList;
		tmp.push(name);
		this.setState({taskList: tmp})
	}

}


render(
	<MainContainer/>
	,
	document.getElementById("root")
	)
