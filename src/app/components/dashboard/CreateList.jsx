import React, {
  useContext, useEffect, useRef, useState,
} from 'react';
import styled from 'styled-components';
import { LoginContext } from '../authentication/LoginContext';
import Button from '../common/Buttons/Button';
import history from '../../router/history';

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

const InputName = styled('input')`
  width: 300px;
  height: 40px;
  border-radius: 4px;
  border: 2px solid black;
`;

const List = styled('div')`
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
  border: ${props => props.active ? '2px solid #B3E9C7' : 'none'};
  font-size: ${props => props.active ? '24' : '16'}px;
  padding: 15px;
  margin: 2px ;
  align-content: center;
  text-align: center;
  ${props => props.active && 'box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25)'};
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

const CreateList = () => {
  const [listName, setListName] = useState('');
  const [isNameInput, setIsNameInput] = useState(false);
  const [activeListId, setActiveListId] = useState(null);
  // take from api, place in api
  const [list, setList] = useState(['abc', 'test', 'abc', 'test', 'abc', 'test', 'abc', 'test', 'abc', 'test']);

  const [isActiveListOpened, setIsActiveListOpened] = useState(false);

  const inputRef = useRef(null);

  const createList = () => {
    if (listName) {
      setIsNameInput(false);
      setList((prevState) => [...prevState, listName]);
      setListName('');
    } else {
      setIsNameInput(true);
      setTimeout(() => {
        inputRef.current.focus();
      }, 0);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      createList();
    }
    if (!isNameInput) {
      if (e.key === 'q') {
        if (activeListId) {
          setActiveListId(prevState => Math.max(prevState - 1, 1));
        } else {
          setActiveListId(1);
        }
      }
      if (e.key === 'e') {
        if (activeListId) {
          setActiveListId(prevState => Math.min(prevState + 1, list.length));
        } else {
          setActiveListId(list.length);
        }
      }
      if (e.key === ' ') {
        if (activeListId) {
          if (isActiveListOpened) {
            setIsActiveListOpened(false);
          } else {
            setIsActiveListOpened(true);
          }
        } else {
          console.log('set active list!');
        }
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
      {list && (
        <List>
          {list.map((item, index) => (
            <ListCard active={index === activeListId - 1}>
              <Title>{item}</Title>
            </ListCard>
          ))}
        </List>
      )}
      {isActiveListOpened && (
        <Card>
          <Title>{list[activeListId - 1]}</Title>
        </Card>
      )}
      {isNameInput && (
        <InputArea>
          <InputName
            ref={inputRef}
            value={listName}
            onChange={(e) => setListName(e.target.value)}
          />
        </InputArea>
      )}
      <GridButtons>
        <Button
          title="Create list"
          type="dark"
          onClick={createList}
        />
      </GridButtons>
      <Text>
        Key binds:
        q - left
        e - right
        Enter - create new list
        Space - open list
      </Text>
    </Wrapper>
  );
};

export default CreateList;
