import { Component } from "react";
import check from './check.png';

export class GroceryList extends Component {
    state = {
        userInput: '',
        groceryList: []

    }

onChangeEvent(e) {
    // console.log(event.target.value);
    this.setState({userInput: e});
    console.log(e);
}
addItem(input) {
    if (input === '') {
        alert ('Please enter an item')
    } else {
    let listArray = this.state.groceryList;
    listArray.push(input);
    this.setState({groceryList: listArray, userInput: ''});
    // console.log(listArray);
}
}
deleteItem(){
    let listArray = this.state.groceryList;
    listArray = [];
    this.setState({groceryList: listArray});
}
crossedWord(event) {
const li =  event.target;
li.classList.toggle("crossed");
}
onFormSubmit (e){
e.preventDefault();
}
    render() {
        return(
            <div>
            <form onSubmit={this.onFormSubmit}>
            <div className="container">
                <input type="text" placeholder="What would you like to buy?"
                    // onChange={this.onChangeEvent}
                    onChange={(e) => {this.onChangeEvent(e.target.value)}}
                        value={this.state.userInput}/>
            </div>
           <div className="container">
                <button className="container btn btn-add" onClick={ () => this.addItem(this.state.userInput)} >ADD</button>
                </div>
            <div>
                <ul>
                {this.state.groceryList.map((item, index) => (
                    <li onClick={this.crossedWord} key={index}>
                    <img src={check} width="20px" alt="checkmark"/>
                    {item}
                     </li>
                ))}
                    {/* <li></li> */}
                </ul>
                <div  className="container">
                <button  onClick={ () => this.deleteItem()} className=" btn btn-delete">DELETE</button>
                </div>
            </div>
</form> 
            </div>
        )
    }
}