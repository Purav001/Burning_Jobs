'use client'

import { User } from '@/lib/models/UserModel'
import { formatId } from '@/lib/utils'
import Link from 'next/link'
import toast from 'react-hot-toast'
import useSWR from 'swr'
import useSWRMutation from 'swr/mutation'

export default function Users() {
  const { data: users, error } = useSWR(`/api/admin/users`)
  const { trigger: deleteUser } = useSWRMutation(
    `/api/admin/users`,
    async (url, { arg }: { arg: { userId: string } }) => {
      const toastId = toast.loading('Deleting user...')
      const res = await fetch(`${url}/${arg.userId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const data = await res.json()
      res.ok
        ? toast.success('User deleted successfully', {
            id: toastId,
          })
        : toast.error(data.message, {
            id: toastId,
          })
    }
  )
  if (error) return 'An error has occurred.'
  if (!users) return 'Loading...'

  return (
    <div >
      <h1 className="py-4 text-2xl text-black font-bold">Users</h1>

      <div className="overflow-x-auto bg-white">
        <table className="table table-zebra">
          <thead>
            <tr style={{color:'black', fontSize:'14px'}}>
              <th>id</th>
              <th>name</th>
              <th>email</th>
              <th>admin</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody className='text-black'>
            {users.map((user: User) => (
              <tr key={user._id} style={{backgroundColor:'white'}}>
                <td>{formatId(user._id)}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.isAdmin ? 'YES' : 'NO'}</td>

                <td>
                  <Link
                    href={`/admin/users/${user._id}`}
                    type="button"
                    className="bg-[#4F4A45] text-[#F6F1EE] hover:bg-[#F6F1EE] hover:text-[#4F4A45] px-2 py-2 rounded text-xs md:text-base"
                    >
                    Edit
                  </Link>
                  &nbsp;
                  <button
                    onClick={() => deleteUser({ userId: user._id })}
                    type="button"
                    className="btn btn-ghost btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
