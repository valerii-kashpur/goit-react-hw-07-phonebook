import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { editFilter } from "../Redux/slice/filerSlice";
import { filterSelector } from "../Redux/slice/contacts-selectors";

const INPUT = styled.input`
  width: 260px;
  height: 30px;
  border-radius: 3px;
  border: 1px solid #808080;
  padding: 10px;
  margin: 10px 0;
`;

const Label = styled.label`
  font-size: 20px;
  font-weight: 500;
`;

const Filter = () => {
  const filterValue = useSelector((state) => filterSelector(state));
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    e.preventDefault();
    const filterInputValue = e.target.value;
    dispatch(editFilter(filterInputValue));
  };

  return (
    <>
      <Label htmlFor="filter">Find contact by name</Label>
      <INPUT
        id="filter"
        type="text"
        value={filterValue}
        onChange={inputHandler}
      />
    </>
  );
};

export default Filter;
