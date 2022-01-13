
const router = require('express')
  .Router();

const jwt = require('express-jwt')
const guard = require('express-jwt-permissions')({
  permissionsProperty: 'scope'
})

const userController = require('../controller/user.controller')

require('dotenv').config()

router.use(jwt(
  {
    secret: process.env.SECRET_JWT,
    algorithms: ['HS256']
  }

))


router.use((err, req, res, next) => {
  if (err.code === 'permission_denied') {
    res.status(403).send({ message: "Forbidden" })
  }

});


router.get('/',
  guard.check(['admin']),
  userController.allUsers
)

router.get('/:id',
  guard.check(
    ['admin'],
    ['user:read']
  ),
  userController.getOne
)


router.put('/:id',
  guard.check(
    ['admin'],
    ['user:read', 'user:write']
  ),
  userController.editUser
)


router.delete('/:id',
  guard.check(['admin']),
  userController.deleteUser)



module.exports = router
