/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const PostContext = createContext();

const PostProvider = ({ children }) => {
   const [posts, setPosts] = useState([]);

   return (
        <PostContext.Provider value={{ posts, setPosts }}>
             {children}
        </PostContext.Provider>
   )
}

export default PostProvider;
