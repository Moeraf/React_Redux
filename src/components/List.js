import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { students: state.students, courses : state.courses };  //step 7
};

const mapDispatchToProps = (dispatch) => {
  return {
      removeStudent: student =>
           {
            dispatch({type: 'REMOVE-STUDENT',payload:{id:student.id} });
           }
    };
};

const ConnectedList = ({ students, courses, removeStudent }) => (  //step 8
<>
  <h1>Students</h1>
  <ul>{students.map(el => (<li key={el.id}>{el.name} <button onClick={()=>{removeStudent(el)}} style={{color: 'red'}}>X</button></li>))}
  </ul>

  <h1>courses</h1>
  <select>
      {courses.map(el => (
      <option key={el.id}>{el.name}</option>
    ))}
  </select>
</>
);

const List = connect(mapStateToProps,mapDispatchToProps)(ConnectedList);

export default List;