import Link from 'next/link'

export const Sidebar = () => {
  return (
    <div className="w-64 h-full bg-[#f0f0f0] p-5 fixed shadow-md">
      <h3 className='font-bold mb-5'>BNCS Product Portal</h3>
      <ul>
        <li className='mb-2'>
          <Link className='mr-5 hover:text-[#333] hover:font-bold transition-all ease-in-out duration-150' href="/">
            Home
          </Link>
        </li>
        <li className='mb-2'>
          <Link className='mr-5 hover:text-[#333] hover:font-bold transition-all ease-in-out duration-150' href="/dashboard">
            Dashboard
          </Link>
        </li>
        <li className='mb-2'>
          <Link
            className='mr-5 hover:text-[#333] hover:font-bold transition-all ease-in-out duration-150'
            href="https://bncs.atlassian.net/servicedesk/customer/portal/1/user/login?destination=portal%2F1"
          >
            Submit a Ticket
          </Link>
        </li>
        <li className='mb-2'>
          <Link className='mr-5 hover:text-[#333] hover:font-bold transition-all ease-in-out duration-150' href="/api/auth/logout">
            Logout
          </Link>
        </li>
      </ul>
    </div>
  )
}
