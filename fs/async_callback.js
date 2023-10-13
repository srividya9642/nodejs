//read text doc asynchronously//
const fs=require('fs')
let data=fs.readFile('data.txt','utf-8',(error,data)=>{
if (error) throw error
console.log(data)
})