import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled('div')`
  grid-area: card;
  margin: auto;
  width: 500px;
  height: 350px;
  color: #515151;
  background: #ffffff;
  border-radius: 2px;
  padding: 10px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

const Title = styled('div')`
  text-align: left;
  font-family: Open Sans, sans-serif;
  font-size: 18px;
  text-transform: uppercase;
`;

const Text = styled('div')`
  grid-area: text;
  text-align: center;
  font-family: Open Sans, sans-serif;
  font-size: 18px;
  ${props => props.active && 'color: red'};
`;

const Task = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: flex-end;
`;

const Checkbox = styled('div')`
  width: 20px;
  height: 20px;
  border-radius: 2px;
  border: 1px solid #f3f3f3;
  background-color: ${props => (props.active ? '#F3F3F3' : '#FFFFFF')};
`;

const Card = ({
  goal,
  tasks,
  setTasks,
  setActiveTaskId,
  activeTaskId,
  onClickDeleteTask,
}) => {
  return (
    <CardWrapper>
      <Title>{goal.name}</Title>
      {tasks.map((task, index) => (
        <Task onClick>
          <Checkbox active={task.checked} />
          <Text active>{task.name}</Text>
          <Text active>{task.description}</Text>
          <Text onClick>x</Text>
        </Task>
      ))}
    </CardWrapper>
  );
};

export default Card;
