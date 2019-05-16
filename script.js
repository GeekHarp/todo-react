class List extends React.Component {
  constructor(){
    super()
    //What does the following do?
    this.changeHandler = this.changeHandler.bind(this);
    // this.state = {word : ""}
  }

  state = {
    list : [],
    word : ""
  }

  //This func() runs when the text<input> 'changes'
  changeHandler(event){
    // console.log(this)
    this.setState({word : event.target.value});
    // console.log(event.target.value);
  }

  clickHandler = () => {
    let word = this.state.word;
    //updatedList is 'current' state's []
    let updatedList = this.state.list;
    let newKey = updatedList.length;
    console.log(updatedList);
    updatedList.push(<ListItem key={newKey} item={this.state.word} />);
    this.setState({
        list: updatedList
    });
  }

  render() {
      // render the list with a map() here
      let listLis = this.state.list;
      console.log('rendering', listLis)
      return (
        <div className="list">
          <input
          onChange={this.changeHandler}
          value={this.state.word}
          />
          <button
          onClick={this.clickHandler}
          >add item</button>
          <ul>
            {listLis}
          </ul>
        </div>
      );
  }
}

class ListItem extends React.Component {
    render() {
        let todo = this.props.item;
        return <li>{todo}</li>;
    }
}

ReactDOM.render(
    <List/>,
    document.getElementById('root')
);