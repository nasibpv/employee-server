const db=require('./db')

// create methode for all employee
const allEmplloyee=()=>{
    return db.Employee.find().then(result=>{
        if(result){
            return{
                statusCode:200,
                employees:result
            }
        }
        else{
            return{
                statusCode:404,
                message:'no data is available'
            }
        }
    })
}

// 

const addEmployee=(id,uname,age,designation,salary)=>{
   return db.Employee.findOne({id}).then(result=>{  //id(key)==id(argmnt)=={id}
    if(result){
        return {
        statusCode:404,
        message:"employee already exist"
    }
    }
    else{
       
        const newEmp=new db.Employee({
             // id:id, (key : value )
            id,  // key and value are same
            uname,
            age,
            designation,
            salary
        })
        newEmp.save()
        return {
            statusCode:200,
            message:'employee added successfully'
        }
    }
   }) 
}

// 

const removeEmployee=(eid)=>{
    return db.Employee.deleteOne({id:eid}).then(result=>{
    if(result){
        return {
            statusCode:200,
            message:'removed employee'
        }
    }
    else{
        return {
            statusCode:404,
            message:'employee not present'
        }
    }
})
}

// 

const getAnEmp=(id)=>{
    return db.Employee.findOne({id}).then(result=>{
        if(result){
            return{
                statusCode:200,
                employee:result
            } 
        }
        else{
                return{
                   statusCode:404,
                   message:'employee not present' 
                }
            }
    })
}

// 

const updateEmp=(id,uname,age,designation,salary)=>{
   return db.Employee.findOne({id}).then(result=>{
        if(result){
           result.id=id
           result.uname=uname
           result.age=age
           result.designation=designation
           result.salary=salary

           result.save()
           return{
            statusCode:200,
            message:'Employee data updated'
           }
        }
        else{
            return{
                statusCode:404,
                message:'employee not present'
            }
        }
    })

}
// 

const viewEmployee=(id)=>{
    return db.Employee.findOne({id}).then(result=>{
        if(result){
            return{
                statusCode:200,
                employee:result
            } 
        }
        else{
                return{
                   statusCode:404,
                   message:'employee not present' 
                }
            }
    })
}

// 
module.exports={
    allEmplloyee,addEmployee,removeEmployee,getAnEmp,updateEmp,viewEmployee
}