const authReducer = (state = { name: "Lenard", role: "Software Engineer" }, action) => {
    switch(action.type) {
      case "LOGGED_IN_USER":
        return {
          ...state,
          ...action.payload
        }
      case "LOGOUT":
        return action.payload
      default:
        return state
    }
  }

export default authReducer