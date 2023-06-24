import React, { useEffect } from 'react'
import jwt_decode from "jwt-decode"
import { useDispatch } from 'react-redux'
import { useNavigate  } from 'react-router-dom'
import { AUTH } from '../../../../constants/actionTypes'


const GoogleLoginCustom = () => {

	const clientId = "951053406419-37l9l9d9pgl4snp4pcbctvae45q5tfkf.apps.googleusercontent.com"
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleCallbackResponse = response => {
		const token = response.credential
		const result = jwt_decode(response.credential)
		console.log('response', response)

		try {
			dispatch({type: AUTH, data: {result, token }})
			navigate('/')
		} catch (error) {
			console.log('error', error)
		}
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

		google.accounts.id.prompt()
	}, [])
	// If we have no user: sign in button
	//  If we hae a user: show the log out button

  return (
		<div id="signInGoogle" />
  )
}

export default GoogleLoginCustom