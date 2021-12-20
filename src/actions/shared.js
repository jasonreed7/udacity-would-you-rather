import { _getUsers, _getQuestions } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading";
import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";
import { setAuthedUser } from "./authedUser";

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return Promise.all([_getUsers(), _getQuestions()]).then(([users, questions]) => {
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
            dispatch(hideLoading())

            // TODO: remove when dev complete
            dispatch(setAuthedUser('sarahedo'))
        })
    }
}