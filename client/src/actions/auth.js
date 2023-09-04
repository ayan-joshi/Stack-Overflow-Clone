import * as api from '../api'


export const signup = (authData, navigate) => async (dispatch) => {
    try{
        const { data} = await api.signup(authData)
        dispatch({ type: 'AUTH', data})
    } catch(error){

    }
}

export const login = (authData, navigate) => {}
