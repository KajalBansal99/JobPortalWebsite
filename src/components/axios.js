import axios from 'axios';

const submitHandler = async (event) => {
  event.preventDefault();
  try {
    const response = await axios.post('http://localhost:5173/api/v1/register' , 'http://localhost:4000/api/v1/user/login' ,  {
      // Your data here
    });
    console.log('Signup successful:', response.data);
  } catch (error) {
    console.error('Signup error:', error);
  }
};
