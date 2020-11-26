import React from "react";
import { useSelector } from "react-redux";
import ContactListItem from "./ContactListItem";
import styled from "styled-components";
import LI from "../StyledComponents/Item";
import { TransitionGroup } from "react-transition-group";
import { getFilteredContacts } from "../Redux/slice/contacts-selectors";


const UL = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 320px;
  height: auto;
  list-style: none;
  margin: 0;
  padding: 10px 0;
`;

const ContactList = ({ onRemove }) => {
  const filtered = useSelector((state) => getFilteredContacts(state));
  return (
    <TransitionGroup component={UL}>
      {filtered.map(({ id, name, number }) => (
        <LI key={id}>
          <ContactListItem
            id={id}
            name={name}
            number={number}
            onRemove={onRemove}
          />
        </LI>
      ))}
    </TransitionGroup>
  );
};

export default ContactList;
