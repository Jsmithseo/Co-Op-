import React from "react"
import { Link } from "gatsby"
import { useIdentityContext } from 'react-netlify-identity';
import './layout.css'
const Profile = ({ showModal }) => {
  const identity = useIdentityContext();

  const isLoggedIn = identity && identity.isLoggedIn;

  const name = 
    identity && 
    identity.user &&
    identity.user.user_metadata &&
    identity.user.user_metadata.full_name;



  return (
    isLoggedIn && (
    <div className="dashboard-header">
      <nav>
        <Link to="/dashboard/secret" activeClassName="active">
          Secret Stuff
        </Link>
        <Link to="/dashboard/base" activeClassName="active">
          See your base
        </Link>
      </nav>
      <span className="userStatus"> Logged in as {name} <div class="status-page-link">
      <div class="status-dot"></div>
    </div> <button onClick={showModal}>Log out</button></span>
    </div>
    )
  )
}

export default Profile
