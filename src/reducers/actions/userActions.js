import * as api from "../api/index";
import { AUTH } from "../types";

export const signin = (form, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signin(form);

    dispatch({ type: AUTH, payload: data });
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};
export const signup = (form, navigate) => async (dispatch) => {
  try {
    const {data} = await api.signup(form)
    console.log(data);

    dispatch({type: AUTH, payload: data})
    navigate("/")
    
  } catch (error) {
      console.log({message: error.message});
  }
};
