import React, {Component} from "react"

export default class Task extends Component{
  constructor(props) {
    super(props)
    this.handleCloseTask = this.handleCloseTask.bind(this)
  }

  static propTypes = {
    id: React.PropTypes.number.isRequired, //Define that id of type int is needed when you use this component
    name: React.PropTypes.string.isRequired, //Define that name of type string is needed when you use this component
    onClose: React.PropTypes.func.isRequired,//Define that onClose function is needed when you use this component
  }

  render(){
    return(
      <a href="#" className="list-group-item">
        {this.props.name}
        <button onClick = {this.handleCloseTask} style = {{float:"right"}}>
          <i className="glyphicon glyphicon-remove"> </i>
        </button>
      </a>
    )
  }

  handleCloseTask(){
    this.props.onClose(this.props.id)
  }
}
