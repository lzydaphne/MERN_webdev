import mongoose from 'mongoose';

/* mongoose.Schema 
define the structure of a MongoDB document(row). To use it, you need to pass an object that defines the fields(col) and their data types as arguments to the constructor function.*/
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    name: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likes: { type: [String], default: [] },
    comments: { type: [String], default: [] },
    createdAt: {
        type: Date,
        default: new Date(), //creates a new Date object that represents the current date and time.
    }, 
})
 
var PostMessage = mongoose.model('PostMessage', postSchema);
// define a `PostMessage` schema with 9 fields

export default PostMessage;
//export the 'PostMessage' model, which we can use to interact with the posts collection in the database.

/*
MongoDB	    MySQL
----------------------
database	database
collection	table
document	row
field	    column

*/