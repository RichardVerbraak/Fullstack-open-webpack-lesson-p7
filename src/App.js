import React, { useState } from 'react'
import './index.css'

// Additional info on the comment below: https://stackoverflow.com/questions/54069253/usestate-set-method-not-reflecting-change-immediately

const App = () => {
	const [counter, setCounter] = useState(0)
	const [value, setValue] = useState([])

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
		</div>
	)
}

export default App
