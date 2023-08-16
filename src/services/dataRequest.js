
const dataRequest = {
    post: async (endPoint, request) => {
      const jsonAddressData = JSON.stringify(request);
      try {

      const response = await fetch(endPoint, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: jsonAddressData
      });
      
      if (!response.ok) {             
          const error = new Error('Response not ok.');
          error.status = response.status;
          throw error; 
      } 
      
      const data = await response.json();
      return data;

      } catch(error){
          if(error.status === 404){
              error.message = 'Not found.'
              throw error 
          } else {
              error.message = 'Could not connect to server.';
              error.status = 503;
              throw error;
          }           
      }
  }
}

export default dataRequest;