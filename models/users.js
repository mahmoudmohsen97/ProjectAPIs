const mongoose = require("mongoose");

// defining assignment schema
const UsersSchema = mongoose.Schema({
    user:{
        type:Number,
        require: true,
    },
    Password:{
        type:Number,
        require: true,
    },
    CreatedAt: {
        type: Date,
        default: () => Date.now(),
    }
  
});

module.exports = mongoose.model("Users", UsersSchema);
