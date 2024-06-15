import axios from 'axios';
import thunk from 'redux-thunk';
import {
  ADDNEW_TASKS,
  GETALL_TASKS,
  TOGGLE_TASK,
  UPDATE_TASK,
    DELETE_TASK,
  TOGGLE_TAB
} from "./type";

const API_URL = "https://taskmanagementapp1822.onrender.com";

export const addNewTasks = (data) => async (dispatch) => {
  try {
      const res = await axios.post(`${API_URL}/tasks`, { data });
      
      dispatch({type:ADDNEW_TASKS, payload: res.data});
  } catch (error) {
    console.log("error while calling addNewTask API", error.message);
  }
};

export const getAllTasks = () => async(dispatch)=> {
    try {
      const res = await axios.get(`${API_URL}/tasks`);

      dispatch({ type: GETALL_TASKS, payload: res.data });
    } catch (error) {
      console.log("error while calling getAllTasks API", error.message);
    }
}

export const toggleTask = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/tasks/${id}`);

    dispatch({ type: TOGGLE_TASK, payload: res.data });
  } catch (error) {
    console.log("error while calling toggleTasks API", error.message);
  }
};

export const updateTask = (id , data) => async (dispatch) => {
  try {
    const res = await axios.put(`${API_URL}/tasks/${id}`, {data});

    dispatch({ type: UPDATE_TASK, payload: res.data });
  } catch (error) {
    console.log("error while calling updateTasks API", error.message);
  }
};

export const deleteTask = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`${API_URL}/tasks/${id}`);

    dispatch({ type: DELETE_TASK, payload: res.data });
  } catch (error) {
    console.log("error while calling deleteTasks API", error.message);
  }
};

export const toggleTab = (tab) => async (dispatch) => {
    dispatch({ type: TOGGLE_TAB, selected:tab });
}