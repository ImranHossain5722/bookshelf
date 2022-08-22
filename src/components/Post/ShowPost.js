import React, { useEffect } from 'react'

const ShowPost = () => {
    const [userPost, setUserPost] = useState([])
    useEffect(() => {
        fetch("https://book-shelf-webapp.herokuapp.com/")
          .then((response) => response.json())
          .then((data) => console.log(data));
          
      }, []);
  return (
    <div>ShowPost</div>
  )
}

export default ShowPost