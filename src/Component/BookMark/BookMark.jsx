import BookMarkData from "../BookMarkData/BookMarkData"

export default function BookMark({bookmark,MarkasRead}) {
  return (
    <div className="w-1/3 bg-stone-100 pt-2 rounded-md">
<div className="px-4">
<div className="bg-indigo-100 text-center p-5 border-3 border-indigo-600 rounded-lg">
        <h1 className="text-indigo-600 text-2xl font-bold">Spent time on read : {MarkasRead} min</h1>
      </div>

      <div className="border-b">
        <h1 className="font-bold text-2xl my-6">Bookmarked Blogs : {bookmark.length}</h1>
      </div>

      <div>
      {
      bookmark.map((bookData, idx)=> <BookMarkData key={idx} bookData={bookData}></BookMarkData>)
      }
      </div>
</div>
    </div>
  )
}
