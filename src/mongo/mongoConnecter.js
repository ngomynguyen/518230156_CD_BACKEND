import mongoose from "mongoose";
const uri = "mongodb://127.0.0.1:27017/"
const dbName = "cd_backend"

 export default function mongoConnecter(){
    try {
        mongoose.connect(`${uri}${dbName}`)
        console.log("Connected to mongo successfully!")
    } catch (error) {
        console.log(error)
        console.log("Connected to mongo failed!")
        
    }
    
}