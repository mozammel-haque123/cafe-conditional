import profile from '../Header../../../assets/images/profile.png'
export default function Header() {
  return (
    <div className='max-w-7xl mx-auto'>
 <div className='flex justify-between items-center border-b-1 border-b-gray-300 p-3'>
 <div>
  <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
  </div>

    <div>
    <img className='w-16' src={profile} alt='Not loding imgs' />
    </div>
 </div>

    </div>
  )
}
