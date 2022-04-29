import { combineReducers } from '@reduxjs/toolkit';
import { appSlice } from 'appSlice';

const rootReducer = combineReducers({ app: appSlice.reducer });

export default rootReducer;
