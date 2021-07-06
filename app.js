// app.js
const express = require('express')
// Create Express app
const app = express()

app.use('/', express.static(__dirname + ''))

app.get('*', (req, res) => {
    res.send('hello 404')
})
// A sample route
// app.get('/', (req, res) => res.send('Hello World!'))

// Start the Express server
app.listen(3000, () => console.log('Server running on port 3000!'))
