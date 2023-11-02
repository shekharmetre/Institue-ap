import React, { useEffect, useState } from "react";
import Usernotfound from "./Usernotfound";
import Userfound from "./Userfound";
import axios from 'axios'

const Profile = () => {
  const token = sessionStorage.getItem('token');
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('https://computer-insititute.onrender.com/api/socket/tokenuser', { token });
        setData(response.data); 
      } catch (error) {
        console.error('Error fetching user data:', error);
        setData(null); // Set data to null in case of an error
      }
    };

    fetchData(); // Call the async function to fetch user data
  }, [token]);
  
  return (
    <div>
      {token ? (
        <Userfound userPresent={data} />
      ) : (
        <Usernotfound />
      )}
    </div>
  );
};

export default Profile;
