import React, { useEffect } from "react";
import Form from "./Form";
import { v4 as uuidv4 } from "uuid";
import Filter from "./Filter";
import ContactList from "./ContactList";
import styled from "styled-components";
import transition from "styled-transition-group";
import FilterContainer from "../StyledComponents/FilterContainer";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem, addItem } from "../Redux/slice/contactsSlice";
import { setError, resetError } from "../Redux/slice/error";
import {
  postContactOperation,
  deleteContactOperation,
  getContactsOperation,
} from "../Redux/slice/operations";
import { loaderOff, loaderOn } from "../Redux/slice/loader";
import {
  contactsSelector,
  errorSelector,
  loaderSelector,
} from "../Redux/slice/contacts-selectors";

const Container = styled.div`
  max-width: 300px;
  margin: 0 auto;
`;

const App_title = transition.h1.attrs({
  unmountOnExit: true,
  mountOnEntry: true,
  timeout: 500,
})`
  color: #016f91;
  font-size: 30px;
  font-weight: 800;
  text-align: center;
  margin-bottom: 20px;

  &:enter { opacity: 0; 
    transform: translateX(-100%); }
  &:enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 500ms cubic-bezier(0.4, 0, 0.2, 1), transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:exit { opacity: 1;
  transform: translateX(0); }
  &:exit-active {
    opacity: 0;
    transform: translateX(-100%);
    transition: opacity 500ms cubic-bezier(0.4, 0, 0.2, 1), transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

const Error = transition.div.attrs({
  unmountOnExit: true,
  mountOnEntry: true,
  timeout: 500,
})`
position: absolute;
padding: 5px 10px;
width: 300px;
top: 10px;
left: 10px;
background-color: #b81d3f;
border-radius: 8px;
text-align: center;
color: white;
  &:enter { opacity: 0; 
    transform: translateX(-100%); }
  &:enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 500ms cubic-bezier(0.4, 0, 0.2, 1), transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:exit { opacity: 1;
  transform: translateX(0); }
  &:exit-active {
    opacity: 0;
    transform: translateX(-100%);
    transition: opacity 500ms cubic-bezier(0.4, 0, 0.2, 1), transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

const App = () => {
  const loader = useSelector((state) => loaderSelector(state));
  const error = useSelector((state) => errorSelector(state));
  const contacs = useSelector((state) => contactsSelector(state));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loaderOn());
    dispatch(getContactsOperation());
    dispatch(loaderOff());
  }, []);

  const addContact = (name, number) => {
    const contact = {
      name,
      number,
      id: uuidv4(),
    };
    dispatch(postContactOperation(contact));

    dispatch(addItem(contact));
  };

  const removeContact = (id) => {
    dispatch(deleteItem(id));
    dispatch(deleteContactOperation(id));
  };

  const getError = () => {
    dispatch(setError());
    setTimeout(() => {
      dispatch(resetError());
    }, 3000);
  };

  return (
    <>
      <Error in={error}>
        <p>alredy in contacts!</p>
      </Error>
      <Container>
        <App_title in={true}>Phonebook</App_title>
        {loader && <div>Custom loader...</div>}
        <Form
          onAddContact={addContact}
          contacts={contacs}
          getError={getError}
        />
        <FilterContainer in={contacs.length > 0}>
          <Filter />
        </FilterContainer>
        <ContactList onRemove={removeContact} />
      </Container>
    </>
  );
};

export default App;
