import React from 'react'

// Webpack can only deal with plain JS and not JSX
// A "loader" like Babel is needed so JSX gets processed before being bundled by webpack

const App = () => <div>hello webpack</div>

export default App
