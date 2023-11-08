import React from "react";
import { connect } from "react-redux";


const mapStateToProps = state => {
    return { students: state.students, Newname: state.Newname };  //step 7
  };


const mapDispatchToProps = (dispatch) => {
    return {
        addStudent: student =>
             {
              dispatch({type: 'ADD-STUDENT',payload:student });
              dispatch({type: 'ADD-COURSE',payload:{id:11,name:'nodejs'} });
             }
      };
};

const Sketcher = ({ addStudent }) => (  //step 8
<>
    <input type="text"></input>
    <button onClick={()=>{addStudent({name:'moemen'})}}>Add Student</button>
</>
);

const AddToList = connect(mapStateToProps,mapDispatchToProps)(Sketcher);

export default AddToList;