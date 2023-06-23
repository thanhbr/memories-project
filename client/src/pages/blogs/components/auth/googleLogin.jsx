import React, { useEffect, useState } from 'react'
import jwt_decode from "jwt-decode"
import { Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useNavigate  } from 'react-router-dom'
import { AUTH, LOGOUT } from '../../../../constants/actionTypes'


const GoogleLoginCustom = () => {

	const clientId = "951053406419-37l9l9d9pgl4snp4pcbctvae45q5tfkf.apps.googleusercontent.com"
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")))

	console.log("user", user)


	const handleCallbackResponse = response => {
		const userObject = jwt_decode(response.credential)

		try {
			
			dispatch({type: AUTH, data: {userObject}})
			navigate('/')
		} catch (error) {
			console.log('error', error)
		}
	}

	const handleSignOut = (e) => {
		console.log(999, user)
		dispatch({type: LOGOUT})
		setUser({})
		navigate('/')
	} 
		
	useEffect(() => {
		google.accounts.id.initialize({
			client_id: clientId,
			callback: handleCallbackResponse
		})

		google.accounts.id.renderButton(
			document.getElementById("signInGoogle"),
			{ theme: "outline", size: "large" }
		)

		// google.accounts.id.prompt()
		// setUser(JSON.parse(localStorage.getItem("profile")))
	}, [])
	// If we have no user: sign in button
	//  If we hae a user: show the log out button

  return (
		<div>
			{!!user?.name
				? <Button onClick={(e) => handleSignOut(e)}>Sign Out</Button>
			 	:	<div id="signInGoogle" />
			}
			{user && 
				<div>
					<img src={user?.picture} />
					<h3>{user?.name}</h3>
				</div>
			}
		</div>
  )
}

export default GoogleLoginCustom