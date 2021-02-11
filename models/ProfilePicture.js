const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
  url: {type: String, default: 'https://i.stack.imgur.com/l60Hf.png'},
  isSilhouette: {type: Boolean, default: true},
  height: {type: Number, default: 200},
  width: {type: Number, default: 200},
  userId: {type: Types.ObjectId, ref: 'User'}
})

module.exports = model('ProfilePicture', schema)
