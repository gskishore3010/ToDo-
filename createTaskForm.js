import React, {Component} from "react"

export default class CreateTaskForm extends Component{

  constructor(props){
    super(props)
    this.state = {
      taskName:""
    }
    this.handleAddTask = this.handleAddTask.bind(this)

  }

  static proptypes = {
    newTask: React.PropTypes.func.isRequired
  }


  render(){
    return(
      <div className = "row">
				<div className = "col-md-6 col-md-offset-3">
					<div style = {{margin:"20px"}}>
							<div className="row">
								<div className="col-md-7">
										<input
                      type="text"
                      className="form-control"
                      placeholder="your task"
                      onChange = {e => this.updateTaskName(e)}
                      value = {this.state.taskName}
                      onKeyPress = {e => this.checkEnterKey(e)}
                    />
								</div>

								<div className="col-md-4">
									<button type = "button" className="btn btn-primary" onClick = {this.handleAddTask}> Create New Task </button>
								</div>

							</div>

					</div>
				</div>
			</div>
    )
  }

  checkEnterKey(e){
    var keyCode = e.which || e.keyCode;
    if(keyCode == 13){
      if(this.state.taskName.trim() !== ""){
          this.props.newTask(this.state.taskName)
      }
    }
  }

  updateTaskName(e){
    this.setState({taskName: e.target.value})
  }

  handleAddTask(e){
    let name = e.target.value
    if(this.state.taskName.trim() !== "")
      this.props.newTask(this.state.taskName)
  }
}
