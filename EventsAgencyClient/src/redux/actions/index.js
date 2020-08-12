import users from '../apis/users';



export const createUserProfile=formValues=> async dispatch=>{
    users.post('/users', formValues);
    }
