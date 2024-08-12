
const DashboardLayout = ({children}) => {
  return (
    <>
        <div className='border-b border-purple-500 mb-4'>
      <ul className='flex gap-5 p-4'>
          <li>Analytics</li>
          <li>Settings</li>
        </ul>
    </div>
    {children}
    </>
  )
}

export default DashboardLayout
