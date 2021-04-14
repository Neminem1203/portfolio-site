import React from 'react';

class Draggable extends React.Component{
  constructor(props){
    super(props);
    let x = this.props.x ? this.props.x : 0
    let y = this.props.y ? this.props.y : 0
    let hidden = this.props.hidden !== undefined ? this.props.hidden : false;
    this.title = this.props.title !== undefined ? this.props.title : "Show"
    this.state ={
      pos:{
        x:x,
        y:y
      },
      dragging: false,
      rel: null,
      hidden: hidden,
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
    this.setState({dragging: false})
    e.stopPropagation()
    e.preventDefault()
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
    e.preventDefault();
    this.setState({dragging: false, hidden: !this.state.hidden});
  }



  render(){
    let className = this.state.hidden ? 'my-draggable hidden' : 'my-draggable';
    let hideText = this.state.hidden ? this.title : 'Hide';
    return <div ref={this.ref}
      style={{position:"absolute",left:this.state.pos.x,top:this.state.pos.y}}
      >
        <div className="hideButton noselect" onClick={this.toggleHidden}>
          {hideText}
        </div>
        <div className={className}
          onMouseDown={e=>this.onMouseDown(e)}
          >
          {this.props.children}
        </div>
      </div>

  }
}

export default Draggable;