export const handler = async function (event, context) {
    const value = import.meta.env.VITE_EDAMAM_APP_ID;
  
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Value of VITE_EDAMAM_APP_ID is ${value}.` }),
    };  
  };