import * as api from "../api/index";
import {
  CREATEPRODUCTS,
  DELETEPOST,
  GETPRODUCT,
  GETPRODUCTBYID,
  GETPRODUCTS,
  UPDATEPRODUCT,
} from "../types";

export const getProduct = (id) => async (dispatch) => {
  try {
    const { data } = await api.getProduct(id);

    dispatch({ type: GETPRODUCT, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const getProductById = (id) => async (dispatch) => {
  try {
    const {data} = await api.getProductById(id)
    dispatch({type: GETPRODUCTBYID, payload: data})
  } catch (error) {
    console.log(error);

  }
};

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await api.getProducts();
    dispatch({ type: GETPRODUCTS, payload: data });
  } catch (error) {
    console.log({ message: error.message });
  }
};

export const createProduct = (product) => async (dispatch) => {
  try {
    const { data } = await api.createProducts(product);
    dispatch({ type: CREATEPRODUCTS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateProduct = (id, form) => async (dispatch) => {
  try {
    const { data } = await api.updateProduct(id, form);
    dispatch({ type: UPDATEPRODUCT, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deleteProducts(id);
    dispatch({ type: DELETEPOST, payload: id });
  } catch (error) {
    console.log(error);
  }
};
