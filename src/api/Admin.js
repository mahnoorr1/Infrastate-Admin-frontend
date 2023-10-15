import Axios from "./connect";
let baseURL = '/Admin'


export const registerAdmin = async(
                                firstname = "John", 
                                lastname = "Doe", 
                                email = "johndoe@gmail.com",
                                password = "1234",
                                Image = null,
                                isApproved = false
                                ) => {
try {
const response = await Axios.post(`${baseURL}/signup` , { firstname, 
                                                            lastname, 
                                                            email,
                                                            password,
                                                            Image,
                                                            isApproved });
return response.status; 
} catch (error) {


if (error.response && error.response.status === 401) {
if (error.response.data.message === 'Not Authorized No Token.') {
const errorMessage = error.response.data.message + ' Please Login First';
alert(errorMessage);
window.location.href = '/Admin/Login';
} else if (error.response.data.message === 'UnAuthorized Token.') {
const errorMessage = "You don't have access to this page.";
alert(errorMessage);
window.location.href = '/Home';
} else {
alert(error.response.data.message);
}
} else {
alert("An error occurred. Please try again later.");
}

return null; 
}

}

export const loginUser = async (email, password) => {



    try {
      const response = await Axios.post(`${baseURL}/login`, { email, password });
  
      localStorage.setItem("LoggedIn" , true)
      localStorage.setItem("token", response.data.token);
      return true;
  
  
    } catch (error) {
      if (error.response && error.response.status === 401) {
        if (error.response.data.message === 'Not Authorized No Token.') {
          const errorMessage = error.response.data.message + ' Please Login First';
          alert(errorMessage);
          window.location.href = '/';
        } else if (error.response.data.message === 'UnAuthorized Token.') {
          const errorMessage = "You don't have access to this page.";
          alert(errorMessage);
          window.location.href = '/Home';
        } else {
          alert(error.response.data.message);
        }
      } else {
        alert("An error occurred. Please try again later.");
      }
      
      return null; // Return null in case of an error
    }
  }

export const getProfile = async () => {

    try {
      const response = await Axios.get(`${baseURL}/profile`);
      return response.data;
  
  
    } catch (error) {
      if (error.response && error.response.status === 401) {
        if (error.response.data.message === 'Not Authorized No Token.') {
          const errorMessage = error.response.data.message + ' Please Login First';
          alert(errorMessage);
          window.location.href = '/';
        } else if (error.response.data.message === 'UnAuthorized Token.') {
          const errorMessage = "You don't have access to this page.";
          alert(errorMessage);
          window.location.href = '/Home';
        } else {
          alert(error.response.data.message);
        }
      } else {
        alert("An error occurred. Please try again later.");
      }
      
      return null; // Return null in case of an error
    }
  }

export const updateProfile = async (
                                firstname, 
                                lastname, 
                                email,
                                Image,
  ) => {

    try {
      const response = await Axios.put(`${baseURL}/profile`,{firstname, 
        lastname, 
        email,
        Image,});
      return response.data;
  
  
    } catch (error) {
      if (error.response && error.response.status === 401) {
        if (error.response.data.message === 'Not Authorized No Token.') {
          const errorMessage = error.response.data.message + ' Please Login First';
          alert(errorMessage);
          window.location.href = '/';
        } else if (error.response.data.message === 'UnAuthorized Token.') {
          const errorMessage = "You don't have access to this page.";
          alert(errorMessage);
          window.location.href = '/Home';
        } else {
          alert(error.response.data.message);
        }
      } else {
        alert("An error occurred. Please try again later.");
      }
      
      return null; // Return null in case of an error
    }
  }

export const getAllAdmins = async () => {

    try {
      const response = await Axios.get(`${baseURL}/getAllAdmins`);
      return response.data;
  
  
    } catch (error) {
      if (error.response && error.response.status === 401) {
        if (error.response.data.message === 'Not Authorized No Token.') {
          const errorMessage = error.response.data.message + ' Please Login First';
          alert(errorMessage);
          window.location.href = '/';
        } else if (error.response.data.message === 'UnAuthorized Token.') {
          const errorMessage = "You don't have access to this page.";
          alert(errorMessage);
          window.location.href = '/Home';
        } else {
          alert(error.response.data.message);
        }
      } else {
        alert("An error occurred. Please try again later.");
      }
      
      return null; // Return null in case of an error
    }
  }

export const DeleteProfile = async (Uid) => {
    try {
      const response = await Axios.delete(`${baseURL}/deleteAdmin`);
      return response.status;
  
  
    } catch (error) {
      if (error.response && error.response.status === 401) {
        if (error.response.data.message === 'Not Authorized No Token.') {
          const errorMessage = error.response.data.message + ' Please Login First';
          alert(errorMessage);
          window.location.href = '/';
        } else if (error.response.data.message === 'UnAuthorized Token.') {
          const errorMessage = "You don't have access to this page.";
          alert(errorMessage);
          window.location.href = '/Home';
        } else {
          alert(error.response.data.message);
        }
      } else {
        alert("An error occurred. Please try again later.");
      }
      
      return null; // Return null in case of an error
    }
  }