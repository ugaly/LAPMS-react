import React from "react";
import AuthService
 from "../services/auth/auth_service";
 import { jwtDecode } from "jwt-decode";
var UserStateContext = React.createContext();
var UserDispatchContext = React.createContext();

function userReducer(state, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, isAuthenticated: true };
    case "SIGN_OUT_SUCCESS":
      return { ...state, isAuthenticated: false };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function UserProvider({ children }) {
  var [state, dispatch] = React.useReducer(userReducer, {
    isAuthenticated: !!sessionStorage.getItem("id_token"),
  });

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
}

function useUserState() {
  var context = React.useContext(UserStateContext);
  if (context === undefined) {
    throw new Error("useUserState must be used within a UserProvider");
  }
  return context;
}

function useUserDispatch() {
  var context = React.useContext(UserDispatchContext);
  if (context === undefined) {
    throw new Error("useUserDispatch must be used within a UserProvider");
  }
  return context;
}

export { UserProvider, useUserState, useUserDispatch, loginUser, signOut };

// ###########################################################

// function loginUser(dispatch, login, password, history, setIsLoading, setError) {
//   setError(false);
//   setIsLoading(true);

//   if (!!login && !!password) {
//     setTimeout(() => {
//       localStorage.setItem('id_token', 1)
//       setError(null)
//       setIsLoading(false)
//       dispatch({ type: 'LOGIN_SUCCESS' })

//       history.push('/app/dashboard')
//     }, 2000);
//   } else {
//     dispatch({ type: "LOGIN_FAILURE" });
//     setError(true);
//     setIsLoading(false);
//   }
// }


function loginUser(dispatch, login, password, history, setIsLoading, setError) {
  setError(false);
  setIsLoading(true);

  if (!!login && !!password) {
    // Log username and password
    console.log("Username:", login);
    console.log("Password:", password);

    const data = {
      username: login,
      password: password
    }

    AuthService.login(data).then(
      response => {
        console.log(response)
        if (response.status === 200) {


          const token = response.data.access;
          const decoded = jwtDecode(token);
          console.log(decoded);
          sessionStorage.setItem('token', response.data.access)
          sessionStorage.setItem('fullname', decoded.full_name )
          sessionStorage.setItem('phone_number', decoded.phone_number )
          sessionStorage.setItem('id_token', 1)

          if (decoded.is_landofficer === true) {
            dispatch({ type: 'LOGIN_SUCCESS' })
            window.location.reload();
            history.push('/app/dashboard')
          } else if (decoded.role === "user") {
            // history.push('/app/dashboard')
          }

          
          setError(null)
          setIsLoading(false)
          // dispatch({ type: 'LOGIN_SUCCESS' })

        }
        // localStorage.setItem('id_token', 1)
        // setError(null)
        // setIsLoading(false)
        // dispatch({ type: 'LOGIN_SUCCESS' })
      }
    )

    // setTimeout(() => {
    //   localStorage.setItem('id_token', 1)
    //   setError(null)
    //   setIsLoading(false)
    //   dispatch({ type: 'LOGIN_SUCCESS' })

    //   history.push('/app/dashboard')
    // }, 2000);
  } else {
    dispatch({ type: "LOGIN_FAILURE" });
    setError(true);
    setIsLoading(false);
  }
}


function signOut(dispatch, history) {
  sessionStorage.removeItem("id_token");
  dispatch({ type: "SIGN_OUT_SUCCESS" });
  history.push("/login");
}
