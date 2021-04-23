import React from 'react';
import styled from 'styled-components';
import {Droppable} from 'react-beautiful-dnd';
import Drag from "./drag";

const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    width: 100%;
`;
const Title = styled.h3`
    padding: 8px;
`;
const DragList = styled.div`
    padding: 2px;
    margin: 15px;
    background-color: ${props => props.isDraggingOver ? '#555' : '#222'};
    height: 100%;
`;


export default class Column extends React.Component {
    render() {
        return (
            <Container>
                    <Title>{this.props.column.title}</Title>
                    <Droppable droppableId={this.props.column.id}>
                        {(provided, snapshot) => {
                        return <DragList
                            ref={provided.innerRef}
                            isDraggingOver={snapshot.isDraggingOver}
                        >
                            {this.props.column.id_list.map((id,index) => <Drag key={id} id={id} index={index}/>)}
                            {provided.placeholder}
                        </DragList>
                        }}
                    </Droppable>
            </Container>
        );
    }
}