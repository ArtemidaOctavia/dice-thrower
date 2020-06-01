import React from 'react';
import {Main} from "./Main";
import {connect} from "react-redux";
import {setNumberOfDices, setRequiredValue, throwDices} from "../../redux/mainReducer";

const mapStateToProps = (state) => {
  return {
    numberOfDices: state.main.numberOfDices,
    requiredValue: state.main.requiredValue,
    results: state.main.results
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setNumberOfDices: (numberOfDices) => dispatch(setNumberOfDices(numberOfDices)),
    setRequiredValue: (requiredValue) => dispatch(setRequiredValue(requiredValue)),
    throwDices: (number) => dispatch(throwDices(number))
  }
};

export const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);