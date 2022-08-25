import React from 'react';
import imran from "../../Assets/images/story_image.jpg";
import jira from "../../Assets/images/jira.jfif";
import'./NewsFeed.css'
import { AiOutlinePlus } from "react-icons/ai";
import { FiCircle } from "react-icons/fi";
import stroy1 from "../../Assets/images/story.jpg";
import stroy2 from "../../Assets/images/story1.jpg";
import wp from "../../Assets/images/wp.png";
import'./NewsFeed.css'
import Post from '../Post/Post';
const NewsFeed = () => {
    return (
        <div className=' mx-auto mt-6 max-w-sm md:max-w-md lg:max-w-lg'>
           {/* post  */}
           <Post/>

        </div>
    );
};

export default NewsFeed;