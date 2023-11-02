import {configureStore} from '@reduxjs/toolkit'
import  userSlice  from './slice/UserSlice'
import Message from './slice/Message';
import Loggeduser from './slice/Loggeduser';
import Context from './slice/Context';

const store = configureStore({
    reducer : {
        Folders : userSlice,
        Messages : Message,
        LoggedUser : Loggeduser,
        socket : Context,
    }
})


export {store};