import { v4 as uuidv4 } from 'uuid';

const initState = {  //step 5
    Newname:"",
    students: [
        {id:1,name:"moemen",age:24},
        {id:2,name:"mazen",age:17},
        {id:3,name:"yahya",age:23}
    ],
    courses: [
        { id : "1", name :"react"},
        { id : "2", name :"java"},
        { id : "3", name :"kotlin"},
    ]
}

const rootReducer = (state = initState, action)=>{  // step 6
    // eslint-disable-next-line default-case
    switch (action.type) {

        case 'ADD-STUDENT':
            action.payload.id = uuidv4();
            state = {...state,students: [...state.students, action.payload]}
            // state = {
            //     students: [...state.students, action.payload],
            //     courses: [...state.courses]
            // }
            return state
            // eslint-disable-next-line no-unreachable
            break;

        case 'REMOVE-STUDENT':
            state = {...state,students: state.students.filter(x=>x.id !== action.payload.id)}
            break;

            case 'ADD-COURSE':
                state = {...state,courses: [...state.courses, action.payload]}
            break;


    }
    return state
}

export default rootReducer;