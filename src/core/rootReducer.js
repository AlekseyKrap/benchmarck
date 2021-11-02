import { combineReducers } from '@reduxjs/toolkit';
import {tableReducer} from "../reduser";


const createRootReducer = () =>
  combineReducers({
    tableReducer
  });

const RootReducer = createRootReducer();


export default RootReducer;
