const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
  firstName: {type: String, required: true},
  surname: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  following: [{type:Types.ObjectId, ref: 'Follower' }]
})

module.exports = model('User', schema)
