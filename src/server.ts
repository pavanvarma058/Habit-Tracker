import express from 'express'

const app = express()

app.get('/health', (req, res) => {
  res.json({
    message: 'Hello World',
  })
})

app.post('/cake/:name', (req, res) => {
  res.send(`Hello ${req.params.name}`)
})
// Export the app for use in other modules (like tests)
export { app }

// Default export for convenience
export default app
