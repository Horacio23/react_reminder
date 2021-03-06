import {ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from '../constants';
import {bake_cookie, read_cookie} from 'sfcookies';

const reminder = (action) => {
    let { text, dueDate } = action;
    return {
        id: Math.random(),
        text,
        dueDate
    }
}

const reminders = (state = [], action) => {
    let reminders = null;
    state = read_cookie('reminders')
    switch(action.type) {
        case ADD_REMINDER:
            reminders = [...state, reminder(action)]
            bake_cookie('reminders', reminders)
            return reminders
        case DELETE_REMINDER:
            reminders= state.filter(reminder=>reminder.id!==action.id)
            bake_cookie('reminders',reminders)
            return reminders
        case CLEAR_REMINDERS:
            bake_cookie('reminders',[])
            return [];
        default :
            return state
    }
}

export default reminders;