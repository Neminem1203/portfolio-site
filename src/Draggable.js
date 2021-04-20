import React from 'react';

class Draggable extends React.Component{
  constructor(props){
    super(props);
    let x = this.props.x !== undefined ? this.props.x : 0
    let y = this.props.y !== undefined ? this.props.y : 0 
    let hidden = this.props.hidden !== undefined ? this.props.hidden : true;
    this.title = this.props.title !== undefined ? this.props.title : "Show"
    this.classes = this.props.className;
    this.state ={
      pos:{
        x:x,
        y:y
      },
      dragging: false,
      rel: null,
      hidden: hidden,
      toggleable: this.props.toggleable
    }
    this.windowHeight = window.innerHeight;
    this.windowWidth = window.innerWidth;
    this.ref = React.createRef();
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.toggleHidden = this.toggleHidden.bind(this);
  }

  componentDidUpdate(props, state) {
    if (this.state.dragging && !state.dragging) {
      this.ref.current.addEventListener('mousemove', this.onMouseMove)
      this.ref.current.addEventListener('mouseup', this.onMouseUp)
    } else if (!this.state.dragging && state.dragging) {
      this.ref.current.removeEventListener('mousemove', this.onMouseMove)
      this.ref.current.removeEventListener('mouseup', this.onMouseUp)
    }
  }
  onMouseUp(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({dragging: false})
  }

  onMouseDown(e) {
    // only left mouse button
    if (e.button !== 0) return
    var pos = this.ref.current;
    this.setState({
      dragging: true,
      rel: {
        x: e.pageX - pos.offsetLeft,
        y: e.pageY - pos.offsetTop
      }
    })
    e.stopPropagation()
    e.preventDefault()
  }


  onMouseMove(e) {
    e.preventDefault();
    if (!this.state.dragging) return
    // setup for window width, height and x and y of the react component
    let x = e.pageX - this.state.rel.x;
    let y = e.pageY - this.state.rel.y;
    let boxWidth = this.ref.current.offsetWidth;
    let boxHeight = this.ref.current.offsetHeight;
    // x bounds
    if(x < 0){
        x = 0;
    } else if (x > this.windowWidth-boxWidth){
        x = this.windowWidth-boxWidth;
    }
    // y bounds
    if(y < 0){
        y = 0;
    } else if(y > this.windowHeight-boxHeight){
        y = this.windowHeight-boxHeight-1;
    }
    this.setState({
      pos: {
        x: x,
        y: y
      }
    })
    e.stopPropagation()
    e.preventDefault()
  }

  toggleHidden(e){
    if(!this.state.toggleable) return;
    e.preventDefault();
    e.stopPropagation();
    this.setState({dragging: false, hidden: !this.state.hidden});
  }



  render(){
    let classNameBox = this.state.hidden ? 'my-draggable hidden' : 'my-draggable';
    classNameBox += " " + this.classes;
    let classNameFloat = this.state.hidden? "floating book hideButton noselect" : "floating hideButton noselect"
    let hideText = this.state.hidden ? this.title : 'Hide';
    if(!this.state.toggleable){
      hideText = null;
    }
    return <div ref={this.ref} onMouseDown={e=>this.onMouseDown(e)}
      style={{position:"absolute",left:this.state.pos.x,top:this.state.pos.y}}
      >
        <div className={classNameFloat}  onDoubleClick={this.toggleHidden} style={{backgroundColor:this.props.backgroundColor}}>
          {hideText}
        </div>
        <div className={classNameBox}
          >
          {this.props.children}
        </div>
      </div>

  }
}

export default Draggable;