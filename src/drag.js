import React from 'react';
import styled from 'styled-components'
import {Draggable} from 'react-beautiful-dnd';

const Container = styled.div`
    border: 1px solid black;
    cursor: pointer;
    padding: 8px;
    margin-bottom: 5px;
    background-color: ${props => props.isDragging ? 'lightgray' : 'gray' };
    color: ${props => props.isDragging ? 'black' : 'white' };
`;

export default class Drag extends React.Component{
    render(){
        return <Draggable draggableId={this.props.id} index={this.props.index} >
            {(provided, snapshot)=>{
            return <Container
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    isDragging={snapshot.isDragging}
                >
                    {this.props.id}
                </Container>
            }}
        </Draggable>
    }
}