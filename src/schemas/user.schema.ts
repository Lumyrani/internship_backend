import * as mongoose from 'mongoose'
import * as bcrypt from 'bcrypt';
import { RolesDto } from 'src/dto/roles.dto';

export const UserSchema = new mongoose.Schema({
    fullName: String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    
    roles: [],
    college: String,
    userMobile: Number,
    dateOfBirth: Date,
    hometown: String,
    address: String,
    martialStatus: String,
    degree: String,
    department: String,
    state: String,
    board: String,
    percentage: Number,
    companyName: String,
    skill: String,
    skill_id: String

    // created_at: { type: Date, default: Date.now }
})

// NOTE: Arrow functions are not used here as we do not want to use lexical scope for 'this'
UserSchema.pre('save', function (next) {
    let user = this;
    console.log('user in schema', user)

    // Make sure not to rehash the password if it is already hashed
    if (!user.isModified('password')) return next();

    // Generate a salt and use it to hash the user's password
    bcrypt.genSalt(10, (err, salt) => {
        if (err) return next(err)
        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) return next(err)
            user.password = hash
            next()
        })
    })
})

UserSchema.methods.checkPassword = function (attempt, callback) {
    let user = this;

    bcrypt.compare(attempt, user.password, (err, isMatch) => {
        if (err) return callback(err);
        callback(null, isMatch);
    });

};
