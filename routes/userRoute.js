const express =require('express');
const userRouter = express.Router();
const {getUser,getAllUsers,createUser,updateUser} =require('../controller/userController');

userRouter.route('/').get(getAllUsers).post(createUser);
userRouter.route('/:id').get(getUser).patch(updateUser);

module.exports = userRouter;