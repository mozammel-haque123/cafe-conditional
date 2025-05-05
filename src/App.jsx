import { useState } from 'react'
import './App.css'
import Blog from './Component/Blog/Blog'
import BookMark from './Component/BookMark/BookMark'
import Header from './Component/Header/Header'

function App() {

  const [bookmark, setbookMark] = useState([])

  const [MarkasRead ,setMarkasRead] = useState(0)

const handlaeBookMark = (blog)=>{
  const isBoommark = bookmark.find((p)=> p.id == blog.id)
  if(isBoommark){
    alert('dabul click')
  }else{
     const newBookMark = [...bookmark ,blog]
  setbookMark(newBookMark)
  }
 
}

const handaleMarkasRead = (time,id)=>{
  const newTime = time + MarkasRead;
  setMarkasRead(newTime)

  const newFilter = bookmark.filter((books)=> books.id !== id)
  setbookMark(newFilter)
}

  return (
    <>
<Header></Header>
<div className='md:flex justify-between max-w-7xl mx-auto mt-5'>
<Blog handlaeBookMark={handlaeBookMark} handaleMarkasRead={handaleMarkasRead}></Blog>
<BookMark bookmark={bookmark} MarkasRead={MarkasRead}></BookMark>
</div>
    </>
  )
}

export default App
