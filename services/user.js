const mongo = require('./mongo')
const UserCollection = mongo.collection('user')

/**
 * init User object with uid and pw
 * @param uid
 * @param pw
 * @return {{uid: *, pw: *}}
 */
function newUser (uid, pw) {
  return {
    uid,
    pw
  }
}

/**
 * sign up
 * @param uid
 * @param pw
 * @return {string}
 */
exports.signUp = async (uid, pw) => {
  if (await isUidExists(uid)) {
    return  uid + 'is not available. Please change your user name'
  }

  const { insertedCount } = await UserCollection.insertOne(newUser(uid, pw))

  if (insertedCount !== 1) {
    return 'Sign up failed, Please try again.'
  }
}

/**
 * check if uid exists
 * @param uid
 * @return {boolean}
 */
const isUidExists = async (uid) => {
  return await UserCollection.find({ uid }).count() !== 0
}

exports.checkUidPw = async (uid, pw) => {
  if (await UserCollection.find({uid, pw}).count() === 1) {
    return
  }

  return 'The password or the username is wrong, please check and try again.'
}