import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.json({ message: 'Habits' })
})

router.get(':id', (req, res) => {
  res.json({ message: 'get one habit' })
})

router.post('/', (req, res) => {
  res.json({ message: 'create habit' }).status(201)
})

router.delete('/:id', (req, res) => {
  res.json({ message: 'delete habit' })
})

router.post('/:id/complete', (req, res) => {
  res.json({ message: 'completed habit' }).status(201)
})

export default router
