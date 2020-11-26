import axios from "axios";
import { setError } from "./error";
import { loaderOn, loaderOff } from "./loader";
import { addItem, deleteItem, setItems } from "./contactsSlice";

const options = {
  header: { "Content-Type": "application/json" },
};

const URL = `http://localhost:3001/contacts`;

export const getContactsOperation = () => async (dispatch) => {
  dispatch(loaderOn());
  axios
    .get(URL)
    .then((responses) => dispatch(setItems(responses.data)))
    .catch((error) => dispatch(setError(error)))
    .finally(dispatch(loaderOff()));
  // try {
  //   dispatch(loaderOn());
  //   const result = await axios.get(`http://localhost:3000/contacts`);
  //   console.log(result.data);
  //   dispatch(setItems(result.data));
  // } catch (error) {
  //   dispatch(setError(error));
  // } finally {
  //   dispatch(loaderOff());
  // }
};

export const postContactOperation = (contact) => async (dispatch) => {
  dispatch(loaderOn());
  axios
    .post(URL, contact, options)
    .catch((error) => dispatch(setError(error)))
    .finally(dispatch(loaderOff()));
  // try {
  //   dispatch(loaderOn());
  //   const result = await axios.post(
  //     `http://localhost:3000/contacts`,
  //     contact,
  //     options
  //   );
  // } catch (error) {
  //   dispatch(setError(error));
  // } finally {
  //   dispatch(loaderOff());
  // }
};

export const deleteContactOperation = (id) => async (dispatch) => {
  try {
    dispatch(loaderOn());
    const result = await axios.delete(`${URL}/${id}`);
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(loaderOff());
  }
};
