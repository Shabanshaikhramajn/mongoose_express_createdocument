import mongoose from "mongoose";


//defining schema
const studentSchema =  new mongoose.Schema({
    name : {type:String,required :true, trim:true},
    age :{type:Number,required : true, min:18, max: 50},
    fees:{type:mongoose.Decimal128, required:true, validate: (v)=>v>= 5500.50},
    hobbies:{type:Array},
    isactive:{type:Boolean},
    comments:[{value:{type:String}, publish:{type:Date, default : Date.now}}],
    join: {type:Date,default:Date.now}
})


//compliing schema
const studentModel = mongoose.model('student',studentSchema)

// const createDoc = async()=>{
//     try {
//         const studentDoc = new studentModel ({
//             name:'rahul',
//             age: 25,
//             fees: 6500.40,
//             hobbies:['dancing','reading'],
//             isactive:true,
//             comments:[{value:'this is good mongoose'}]
//         })
        
        
//         // saving document 
//         const result = await studentDoc.save();
        
//         console.log(result)
        
//     } catch (error) {
//         console.log(error)
//     }
// }


const createDoc = async(nm,ag,fe,hob,isact,comt)=>{
    try {
        const studentDoc = new studentModel ({
            name:nm,
            age: ag,
            fees: fe,
            hobbies:hob,
            isactive:isact,
            comments:comt
        })
        
        
        // saving document 
        const result = await studentDoc.save();
        
        console.log(result)
        
    } catch (error) {
        console.log(error)
    }
}


export default createDoc