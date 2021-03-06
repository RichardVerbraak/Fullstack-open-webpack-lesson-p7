import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PromisePolyFill from 'promise-polyfill'

// If global Promise object doesn't exist, meaning browser doesn't support promises, the polyfilled promise will be stored in said variable
if (!window.Promise) {
	window.Promise = PromisePolyFill
}

// Additional info on the comment below: https://stackoverflow.com/questions/54069253/usestate-set-method-not-reflecting-change-immediately

const useNotes = (url) => {
	const [notes, setNotes] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get(url)
			console.log(response)

			setNotes(response)
		}

		fetchData()
	}, [url])

	return notes
}

const App = () => {
	const [counter, setCounter] = useState(0)
	const [value, setValue] = useState([])
	const notes = useNotes(BACKEND_URL)

	// side note: the state values used in this function are based on the current closure
	// the state will be updated after re-render and the values in this functions closure will not be affected
	// simply said, state in this function will stay true to whatever the value was in that point in time
	const handleClick = () => {
		setCounter(counter + 1)
		setValue([...value, counter])
	}

	return (
		<div className='container'>
			hello webpack {counter} clicks
			<button
				onClick={() => {
					handleClick()
				}}
			>
				press
			</button>
			<div>
				{notes.length} notes on server {BACKEND_URL}
			</div>
		</div>
	)
}

export default App
