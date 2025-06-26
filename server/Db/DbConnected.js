import mongoose from "mongoose";
const DbConnect = mongoose.connect(() => {
    try {
        
    } catch (error) {
        console.log("Server Error")
    }
}) 
export default DbConnect