const mongoose = require('mongoose');
const { number } = require('zod');

// Connect to MongoDB
mongoose.connect('mongodb+srv://adeshwasane04:04%40Desh2004@cluster0.9g4wbuu.mongodb.net/usersingupdata');

// Define schemas
const AdminSchema = new mongoose.Schema({
   username:String,
   password:String,
  
});

const UserSchema = new mongoose.Schema({
    username:String,
   password:String,
   
});

const CourseSchema = new mongoose.Schema({
    title: String,
    description: String,
    imageLink: String,
    price: Number
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}