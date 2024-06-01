import * as mongoose from 'mongoose';

export async function connect(connectionString:string){
    try{
        await mongoose.connect(connectionString)
    }catch(error){
        throw new Error(error)
    }
}