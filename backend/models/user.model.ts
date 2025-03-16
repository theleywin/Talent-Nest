import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
        default: ""
    },
    coverPicture: {
        type: String,
        default: ""
    },
    headline:{
        type: String,
        default: "Talent Nest user"
    },
    about: {
        type: String,
        default: ""
    },
    location: {
        type: String,
        default: "Planet Earth"
    },
    skills: [String],
    experience: [
        {
            title: String,
            company: String,
            from: Date,
            to: Date,
            description: String
        }
    ],
    education: [
        {
            school: String,
            degree: String,
            from: Number,
            to: Number
        }
    ],
    connections: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],


},{timestamps: true});

const User = mongoose.model("User", userSchema);

export default User;