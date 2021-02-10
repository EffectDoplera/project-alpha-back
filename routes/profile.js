const { Router } = require('express')
const User = require('./../models/User')
const router = Router()

router.get(
  '/:uid',
  [],
  async (req, res) => {
    try {
      const user = await User.findOne({ _id: req.params.uid })

      res.json(user)
    } catch (e) {
      res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
  },
)

module.exports = router
