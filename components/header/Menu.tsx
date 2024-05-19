'use client'
import useCartService from '@/lib/hooks/useCartStore'
import useLayoutService from '@/lib/hooks/useLayout'
import { signIn, signOut, useSession } from 'next-auth/react'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { SearchBox } from './SearchBox'

const Menu = () => {
  const { items, init } = useCartService()
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  const signoutHandler = () => {
    signOut({ callbackUrl: '/signin' })
    init()
  }

  const { data: session } = useSession()

  const { theme, toggleTheme } = useLayoutService()

  const handleClick = () => {
    ;(document.activeElement as HTMLElement).blur()
  }

  return (
    <>
      <div>
        <ul className="flex items-stretch">
          <li>
            <Link
              className="btn btn-ghost rounded-btn text-xs md:text-base"
              href="/cart"
            >
              Cart
              {mounted && items.length != 0 && (
                <div className="bg-[#fbbf24] py-1 px-1 rounded-sm text-black text-xs md:text-base lg:text-base">
                  {items.reduce((a, c) => a + c.qty, 0)}{' '}
                </div>
              )}
            </Link>
          </li>
          {session && session.user ? (
            <>
              <li>
                <div className="dropdown dropdown-bottom dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost rounded-btn text-xs md:text-base lg:text-base"
                  >
                    {session.user.name}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-2 h-2 md:w-6 lg:h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu dropdown-content z-[1] p-2 shadow bg-[#1b2528] rounded-box w-52 "
                  >
                    {session.user.isAdmin && (
                      <li onClick={handleClick}>
                        <Link
                          href="/admin/dashboard"
                          className="text-sm md:text-base lg:text-base"
                        >
                          Admin Dashboard
                        </Link>
                      </li>
                    )}

                    <li onClick={handleClick}>
                      <Link
                        href="/order-history"
                        className="text-sm md:text-base lg:text-base"
                      >
                        Order history{' '}
                      </Link>
                    </li>
                    <li onClick={handleClick}>
                      <Link
                        href="/profile"
                        className="text-sm md:text-base lg:text-base"
                      >
                        Profile
                      </Link>
                    </li>
                    <li onClick={handleClick}>
                      <button
                        type="button"
                        className="text-sm md:text-base lg:text-base"
                        onClick={signoutHandler}
                      >
                        Sign out
                      </button>
                    </li>
                  </ul>
                </div>
              </li>
            </>
          ) : (
            <li>
              <button
                className="btn btn-ghost rounded-btn text-xs md:text-base lg:text-base"
                type="button"
                onClick={() => signIn()}
              >
                Sign in
              </button>
            </li>
          )}
        </ul>
      </div>
    </>
  )
}

export default Menu
