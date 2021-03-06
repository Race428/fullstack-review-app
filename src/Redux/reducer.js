const initialState = {
  user_id: null,
  username: '',
  firstname: '',
  lastname: '',
  email: '',
  balance: null,
  authenticated: false
}

const UPDATE_USER_ID = 'UPDATE_USER_ID'
const UPDATE_USERNAME = 'UPDATE_USER_NAME'
const UPDATE_USER_DETAILS = 'UPDATE_USER_DETAILS'

export function updateUserID(id) {
  return {
    type: UPDATE_USER_ID,
    payload: id
  }
}

export function updateUserName(username) {
  return {
    type: UPDATE_USERNAME,
    payload: username
  }
}

export function updateUserDetails(obj) {
  return {
    type: UPDATE_USER_DETAILS,
    payload: obj
  }
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case UPDATE_USER_ID:
      return { ...state, user_id:payload}
    case UPDATE_USERNAME:
      return { ...state, username: payload}
    case UPDATE_USER_DETAILS: 
      const { firstname, lastname, balance, email} = payload
      return { ...state, firstname, lastname, balance, email}
      default:
      return state
  }

}