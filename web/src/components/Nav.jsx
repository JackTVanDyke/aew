import React, { useState } from 'react'
import { AppContext } from '../lib/contextLib'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { Link, useNavigate } from 'react-router-dom'
export default function Nav() {
  const [isAuthenticated, userHasAuthenticated] = useState(false)
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState(false)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  async function handleLogout() {
    await Auth.signOut()
    userHasAuthenticated(false)
    navigate('/')
  }
  return (
    <header>
      <nav>
        <div className='div-container'>
          <div className='w-full flex flex-row justify-evenly items-center'>
            <div className='w-1/2 flex flex-row'>
              <h1 className=''>
                <Link to='/'>AceEssayWriter</Link>
              </h1>
            </div>
            <div className='w-1/2 flex flex-row justify-end items-center'>
              <Button
                id='basic-button'
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                disableTouchRipple={true}
              >
                {open ? (
                  <AiOutlineClose className='w-10 h-10 my-4 mx-8' />
                ) : (
                  <AiOutlineMenu className='w-10 h-10 my-4 mx-8' />
                )}
              </Button>
              <Menu
                id='basic-menu'
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
                  <MenuItem onClick={handleClose}>
                    <a href='/#pricing'>Pricing</a>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link to='/Purchase'>Purchase</Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link to='/Subscribe'>Subscribe</Link>
                  </MenuItem>

                  {isAuthenticated ? (
                    <MenuItem onClick={handleClose}>
                      <Link onClick={handleLogout} to='/'>
                        Logout
                      </Link>
                    </MenuItem>
                  ) : (
                    <MenuItem onClick={handleClose}>
                      <Link to='/Account'>Account</Link>
                    </MenuItem>
                  )}
                </AppContext.Provider>
              </Menu>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
