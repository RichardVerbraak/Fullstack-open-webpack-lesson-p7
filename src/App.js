import React, { useState } from 'react'
import './index.css'

const App = () => {
	const [counter, setCounter] = useState(0)
	const [value, setValue] = useState()

	const handleClick = () => {
		setCounter(counter + 1)
		setValue(counter)
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
