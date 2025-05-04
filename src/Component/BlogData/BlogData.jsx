import { FaBookmark } from "react-icons/fa";
import BlogArray from "../BlogArray/BlogArray";
export default function BlogData({blog,handlaeBookMark,handaleMarkasRead}) {
  // console.log(blog)
  const {cover,author,author_img,posted_date,reading_time,title,hashtags,id} = blog
  return (
    <div>
    <div>
    <img className="w-full rounded-md" src={cover} alt={author}/>

  <div className="flex justify-between items-center my-2">
  <div className="flex items-center gap-3">
      <img className="w-16" src={author_img} alt={author} />
      <div>
        <h5 className="text-2xl font-bold">{author}</h5>
        <p>{posted_date}</p>
      </div>
    </div>

    <div>
    <span className="mx-2">{reading_time} min read</span>
    <button onClick={()=>handlaeBookMark(blog)}><FaBookmark /></button>
    </div>
  </div>

  <h1 className="font-bold text-4xl my-4">{title}</h1>
    </div>
    <div className="flex gap-3">
      {
      hashtags.map((has,idx)=> <BlogArray key={idx} has={has}></BlogArray>)
    } 
    </div>
    <button className="underline underline-offset-1 font-bold text-indigo-600 my-4" onClick={()=>handaleMarkasRead(reading_time,id)}>Mark as read</button>
   <div className="border-b-1 border-b-gray-200 my-5"></div>
    </div>
  )
}
