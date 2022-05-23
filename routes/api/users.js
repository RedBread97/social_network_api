const router = require('express').Router();
const { getUsers, createUser, getSingleUser, updateUser, deleteUser } = require('../../controllers/usersController');
const { addFriend, removeFriend } = require('../../controllers/friends')

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);



router.route('/:userId/friend/:friendId').put(addFriend).delete(removeFriend);

module.exports = router;