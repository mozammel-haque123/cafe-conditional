import { useState, useEffect } from "react"
import BlogData from "../BlogData/BlogData";

export default function Blog({handlaeBookMark,handaleMarkasRead}) {

const [blogsUse, setBlogsUse] = useState([])

useEffect(()=>{
fetch('blogs.json')
.then(res => res.json())
.then(data => setBlogsUse(data))
} ,[])

  return (
    <div className="w-2/3 px-4">
      {/* <h3> Blog {blogsUse.length}</h3> */}
     {
      blogsUse.map((blog)=> <BlogData key={blog.id} blog={blog} handaleMarkasRead={handaleMarkasRead} handlaeBookMark={handlaeBookMark}></BlogData>)
     }
    
    </div>
  )
}
