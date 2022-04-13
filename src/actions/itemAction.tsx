
import axios from 'axios'

export const deleteItem= (id:any) =>{
    axios.delete(`http://localhost:5000/api/items/${id}`).then((res:any)=>{
        console.log("ok");  
    })
    
}
export const addItem=(item:any)=>{
    axios.post('https://jsonplaceholder.typicode.com/posts').then((res:any)=>{
       return res.data
   })

}
export const setItemsLoading=()=>{
    return{
        
    }
}
