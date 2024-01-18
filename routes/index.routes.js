const router = require('express').Router()

router.get('/', (req, res) => {
  res.json('All good in here')
})

// Starting with /api/books
router.get('/books', (req, res) => {
  res.json('All good in here')
})

module.exports = router
