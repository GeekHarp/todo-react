class List extends React.Component {
  constructor(){
    super()

    this.state = {
      word:"",
      list : []
    }
  }

  addItem(){
    //Grab both 'properties' in state
    const todo = this.state.word;
    const todoList = this.state.list;
    todoList.push(todo);
    //After user 'submit' set word to "" in the state, this will remove it from the<input>
    //I assume that react renders everything again after setState?
    this.setState({list : todoList, word : ""})
  }

  //Func() runs whenever the text<input> 'changes'
  changeHandler(){
    //Grab what is inside the text<input> and store it inside state..
    //Because in the onChange we have 'this' We don't need to pass in event?
    this.setState({word : event.target.value})
    // if (this.state.list) {
    //     event.target.value = "";
    // }
  }

  render() {
      // render the list with a map() here
      const todoList = this.state.list; // []
      const todos = todoList.map((todo, i) =>
        <li key={i}>{todo}</li>
      )

      return (
        // className = class
        // Renders a text<input> and button in a <div>
        <div className="list">
          <input
          onChange={() => {this.changeHandler()}}
          value={this.state.word}
          />
          <button
          onClick={() => {this.addItem()}}>add item
          </button>
          <ul>
            {todos}
          </ul>
        </div>
      );
  }
}

ReactDOM.render(
    <List/>,
    document.getElementById('root')
);