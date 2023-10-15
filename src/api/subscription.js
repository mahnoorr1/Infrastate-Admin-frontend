import Axios from "./connect";
let baseURL = '/subscription'

export const getsubscriptions = async () => {

    try {
      const response = await Axios.get(`${baseURL}/getsubscriptions`);
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

export const getOnesubscription = async (sid) => {

    try {
      const response = await Axios.get(`${baseURL}/getOnesubscription/${sid}`);
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

export const createSubscription = async (subData) => {

    try {
      const response = await Axios.post(`${baseURL}/createSubscription` , {subData});
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

export const deletesubscription = async (sid) => {

    try {
      const response = await Axios.delete(`${baseURL}/deletesubscription/${sid}`);
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

  export const updateSubscription = async (sid,type,
                                                price,
                                                duration,
                                                projectsAllowed,
                                                constructionPlanAllowed,
                                                RoadPlanAllowed,
                                                routesAccess,
                                                rulesAccess,
                                                support_per_day) => {

    try {
      const response = await Axios.put(`${baseURL}/updateSubscription/${sid}` , 
      {
        type,
        price,
        duration,
        projectsAllowed,
        constructionPlanAllowed,
        RoadPlanAllowed,
        routesAccess,
        rulesAccess,
        support_per_day
    }
    );
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


