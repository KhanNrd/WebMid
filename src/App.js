import React, { Component } from 'react';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      items: [
        {id: 0,
         color: "white",
         name:"Chto", 
         textcol: "black"
        },
        {id: 1,
         color: "white",
         name:"To",
         textcol: "black"
        },
        {id: 2,
         color: "white",
         name:"Normalnoe",
         textcol: "black"
        }
      ],
      product: [
        {id: 0,
         color: "white",
         name:"Chto", 
         textcol: "black",
         val: 100
        },
        {id: 1,
         color: "white",
         name:"To",
         textcol: "black",
         val: 200
        },
        {id: 2,
         color: "white",
         name:"Normalnoe",
         textcol: "black",
         val: 300
        }
      ],
      sum: 0
    }
  }
  click = (id) =>{
    var cur = this.state.items;
    cur.map(i => {
      if(id === i.id){
        i.color = "red"
        i.textcol = "white"
      }else{
        i.color = "white"
        i.textcol = "black"
      }
      
    })
    this.setState({
      items: cur
    })
  }
  click2 = (id) =>{
    var cur = this.state.product;
    var res = this.state.sum;
    cur.map(i => {
      if(id === i.id){
        if(i.color === "red"){
          i.color = "white"
          i.textcol = "black"
          res -= i.val;
        }else{
          i.color = "red"
          i.textcol = "white"
          res += i.val
        }
      }
    })
    this.setState({
      product: cur,
      sum: res
    })
  }
  render() {
    return (
      <div>
        <div className="App">
          {this.state.items.map(button =>{
            return(
              <Button button={button} onButtonClick = {this.click}/>
            )
          })}
        </div>
        <div className="ST">
          {this.state.product.map(product =>{
            return(
              <SecondTask product={product} onButtonClick = {this.click2}/>
            )
          })}
        </div>
        <p className="A"> {this.state.sum}</p>
      </div>
    );
  }
}

class Button extends Component{

  click = ()=>{
    this.props.onButtonClick(this.props.button.id)
  }

  render(){
    return(
      <div style={{backgroundColor: this.props.button.color, color: this.props.button.textcol}}
        className = "button" onClick = {this.click}>
        {this.props.button.name}
      </div>
    )
  }
}

class SecondTask extends Component{

  click = ()=>{
    this.props.onButtonClick(this.props.product.id)
  }

  render(){
    return(
      <div style={{backgroundColor: this.props.product.color, color: this.props.product.textcol}}
        className = "product" onClick = {this.click}>
        <p> {this.props.product.name} {this.props.product.val}</p>
      </div>
    ) 
  }
}

export default App;
