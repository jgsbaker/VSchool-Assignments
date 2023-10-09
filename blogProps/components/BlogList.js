import React from "react"
import BlogPost from "./BlogPost"
export default function BlogList(){
    const post = blog.map((item)=><BlogPost {...item} />)
    return(
        <div>
            {post}
        </div>
    )
}