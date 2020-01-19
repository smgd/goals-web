import React, {
  useEffect, useRef, useState,
} from 'react';
import styled from 'styled-components';
import Button from '../common/Buttons/Button';

const Wrapper = styled('div')`
  width: 80vw;
  height: 80vh;
  background: #F0FFF1;
  display: grid;
  grid-template-areas: "list"
                       "card"
                       "input"
                       "button"
                       "text";
  grid-template-rows: auto 350px 50px 50px 40px;
  grid-gap: 10px;
`;

const InputArea = styled('div')`
  grid-area: input;
  display: flex;
  justify-content: center;
`;

const Input = styled('input')`
  width: 300px;
  height: 40px;
  border-radius: 4px;
  border: 2px solid black;
`;

const Goal = styled('div')`
  grid-area: list;
  padding: 25px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const ListCard = styled('div')`
  color: #F0FFF1;
  background-color: #B3E9C7;
  width: 75px;
  height: 75px;
  border-radius: 2px;
  border: ${(props) => (props.active ? '2px solid #B3E9C7' : 'none')};
  font-size: ${(props) => (props.active ? '24' : '16')}px;
  padding: 15px;
  margin: 2px ;
  align-content: center;
  text-align: center;
  ${(props) => props.active && 'box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25)'};
`;

const Title = styled('div')`
  text-align: center;
  font-family: Open Sans, sans-serif;
  font-size: 18px;
  text-transform: uppercase;
`;

const Text = styled('div')`
  grid-area: text;
  text-align: center;
  font-family: Open Sans, sans-serif;
  font-size: 18px;
  ${(props) => props.active && 'color: red'};
`;

const GridButtons = styled('div')`
  grid-area: button;
  display: flex;
  justify-content: center;
`;

const Card = styled('div')`
  grid-area: card;
  margin: auto;
  width: 500px;
  height: 350px;
  color: #F0FFF1;
  background-color: #B3E9C7;
  border-radius: 2px;
  border: 2px solid #B3E9C7;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

const Task = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
`;

const GoalsList = () => {
  // Goals:ArrayOf(Object)
  // id:string
  // name:string
  // description:string
  const templateGoals = [
    {
      id: 'test',
      name: 'test',
      description: 'super test',
    },
    {
      id: 'test2',
      name: 'test2',
      description: 'super test2',
    },
  ];

  // Tasks:ObjectOf(ArrayOf(Object))
  // id:string
  // name:string
  // description:string
  const templateTasks = {
    test: [
      {
        id: 'first goal',
        name: 'first goal',
        description: 'super first goal',
      },
      {
        id: 'sec goal',
        name: 'sec goal',
        description: 'super sec goal',
      },
    ],
    test2: [
      {
        id: 'first goal2',
        name: 'first goal2',
        description: 'super first goal2',
      },
      {
        id: 'sec goal2',
        name: 'sec goal2',
        description: 'super sec goal2',
      },
    ],
  };

  const [isInputsActive, setIsInputsActive] = useState(false);
  const [isGoalOpened, setIsGoalOpened] = useState(false);

  const goalNameRef = useRef(null);
  const goalDescriptionRef = useRef(null);
  const [goals, setGoals] = useState(templateGoals);
  const [goalName, setGoalName] = useState('');
  const [goalDescription, setGoalDescription] = useState('');
  const [activeGoalId, setActiveGoalId] = useState(null);
  const changeActiveGoalId = (key) => {
    if (key === 'q') {
      if (activeGoalId) {
        setActiveGoalId((prevState) => Math.max(prevState - 1, 1));
      } else {
        setActiveGoalId(1);
      }
    }
    if (key === 'e') {
      if (activeGoalId) {
        setActiveGoalId((prevState) => Math.min(prevState + 1, goals.length));
      } else {
        setActiveGoalId(goals.length);
      }
    }
  };

  const [tasks, setTasks] = useState(templateTasks);
  const [activeTaskId, setActiveTaskId] = useState(null);
  const changeActiveTaskId = (key) => {
    if (key === 'q') {
      if (activeTaskId) {
        setActiveTaskId((prevState) => Math.max(prevState - 1, 1));
      } else {
        setActiveTaskId(1);
      }
    }
    if (key === 'e') {
      if (activeTaskId) {
        setActiveTaskId((prevState) => Math.min(prevState + 1, goals.length));
      } else {
        setActiveTaskId(goals.length);
      }
    }
  };

  const createGoal = () => {
    if (goalName && goalDescription) {
      setIsInputsActive(false);
      setGoals((prevState) => [...prevState, { id: goalName, name: goalName, description: goalDescription }]);
      setTasks((prevState) => ({ ...prevState, [goalName]: [] }));
      setGoalName('');
      setGoalDescription('');
    } else if (goalName) {
      setTimeout(() => {
        goalDescriptionRef.current.focus();
      }, 0);
    } else if (goalDescription) {
      setTimeout(() => {
        goalNameRef.current.focus();
      }, 0);
    } else {
      setIsInputsActive(false);
    }
  };

  const activateInputs = () => {
    setIsInputsActive(true);
    setTimeout(() => {
      goalNameRef.current.focus();
    }, 0);
  };

  const deleteTask = () => {
    const activeGoal = goals[activeGoalId - 1].id;
    const id = activeTaskId - 1;
    setActiveTaskId(null);
    setTasks((prevState) => ({ ...prevState, [activeGoal]: prevState[activeGoal].filter((_, i) => i !== id) }));
  };

  const handleGoalOpened = () => {
    if (activeGoalId) {
      if (isGoalOpened) {
        setIsGoalOpened(false);
        setActiveTaskId(null);
      } else {
        setIsGoalOpened(true);
      }
    } else {
      console.log('set active list!');
    }
  };

  const onClickCreateGoal = () => {
    activateInputs();
    if (goalName || goalDescription) {
      createGoal();
    }
  };

  const onClickOpenGoalCard = (index) => {
    setActiveGoalId(index + 1);
    if (isGoalOpened) {
      setIsGoalOpened(false);
      setActiveTaskId(null);
    } else {
      setIsGoalOpened(true);
    }
  };

  const onClickDeleteTask = (index) => {
    setActiveTaskId(index + 1);
    deleteTask();
  };

  const handleKeyDown = (e) => {
    if (isInputsActive) {
      if (e.key === 'Enter') {
        createGoal();
      }
    } else {
      if (isGoalOpened) {
        changeActiveTaskId(e.key);
        if (e.key === 'd') {
          deleteTask();
        }
      } else {
        changeActiveGoalId(e.key);
      }
      if (e.key === ' ') {
        handleGoalOpened();
      }
      if (e.key === 'Enter') {
        activateInputs();
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keypress', handleKeyDown);
    return () => {
      window.removeEventListener('keypress', handleKeyDown);
    };
  });

  return (
    <Wrapper>
      {goals && (
        <Goal>
          {goals.map((item, index) => (
            <ListCard active={index === activeGoalId - 1} onClick={() => onClickOpenGoalCard(index)}>
              <Title>{item.name}</Title>
            </ListCard>
          ))}
        </Goal>
      )}
      {isGoalOpened && (
        <Card>
          <Title>{goals[activeGoalId - 1].name}</Title>
          {tasks[goals[activeGoalId - 1].id].map((goal, index) => (
            <Task onClick={() => setActiveTaskId(index + 1)}>
              <input type="checkbox" />
              <Text active={index === activeTaskId - 1}>{goal.name}</Text>
              <Text active={index === activeTaskId - 1}>{goal.description}</Text>
              <Text onClick={() => onClickDeleteTask(index)}>x</Text>
            </Task>
          ))}
        </Card>
      )}
      <InputArea>
        <Input
          ref={goalNameRef}
          value={goalName}
          disabled={!isInputsActive}
          onChange={(e) => setGoalName(e.target.value)}
        />
        <Input
          ref={goalDescriptionRef}
          value={goalDescription}
          disabled={!isInputsActive}
          onChange={(e) => setGoalDescription(e.target.value)}
        />
      </InputArea>
      <GridButtons>
        <Button
          title="Create list"
          type="dark"
          onClick={onClickCreateGoal}
        />
      </GridButtons>
      <Text>
        Key binds:
        <br />
        q - left
        <br />
        e - right
        <br />
        Enter - create new goal
        <br />
        Space - open/close goal
        <br />
        c - check/uncheck task (in progress)
        <br />
        d - delete task
      </Text>
    </Wrapper>
  );
};

export default GoalsList;
