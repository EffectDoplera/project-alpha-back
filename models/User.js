const {Schema, model, Types} = require('mongoose')

const UserSchema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  about: String,
  picture: {type: Types.ObjectId, ref: 'ProfilePicture'},
  location: {
    city: String,
    country: String
  },
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  following: [{type:Types.ObjectId, ref: 'Follower' }]
})

module.exports = model('User', UserSchema)
