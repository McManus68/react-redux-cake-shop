import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from '../redux'

function UserContainer() {
  const userData = useSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <div className='wrapper'>
      {userData.loading ? (
        <h2>Loading</h2>
      ) : userData.error ? (
        <h2>{userData.error}</h2>
      ) : (
        <div>
          <h2>User list</h2>
          <div>
            {userData &&
              userData.users &&
              userData.users.map(user => <p>{user.name}</p>)}
          </div>
        </div>
      )}
    </div>
  )
}

export default UserContainer
