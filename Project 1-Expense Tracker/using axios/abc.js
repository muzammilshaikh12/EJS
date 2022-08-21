let crud_crud_url ='https://crudcrud.com/api/4e80dc22d2b8426597dc67a717736055/mydata'
function uploadToCrudCrud(event){
    event.preventDefault();
   let obj = {
    amount:document.getElementById('amount'),
    description:document.getElementById('description'),
    category:document.getElementById('category')
   }
    axios.post(crud_crud_url,obj)
        .then((response) => {
            showUserOnScreen(response.data)
            // console.log(response)
        }).catch((err) => {
            console.log(err)
        });
}

window.addEventListener("DOMContentLoaded",()=>{
    axios.get(crud_crud_url)
        .then((response)=>{
            console.log(response)
            for(var i=0;i<response.data.length; i++){
                showUserOnScreen(response.data[i])
            }
        }).catch((err)=>{
            console.log(err)
        })
})


function showUserOnScreen(user){
    const parentNode=document.getElementById('details');
    const childHTML=`<li id=${user._id}> ${user.amount}- ${user.description}- ${user.category}
                        <button onClick=deleteUser('${user._id}')>Delete User</button> 
                    </li>`
    parentNode.innerHTML=parentNode.innerHTML + childHTML;
    
}
function deleteUser(userId){
    axios.delete(`${crud_crud_url}/${userId}`)
        .then((response)=>{
            removeUserFromScreen(userId)
            console.log(response)
        }).catch((err)=>{
            console.log(err)
        })
}
function removeUserFromScreen(userId){
    const Parent = document.getElementById('details')
    const childNodeToBeDeleted = document.getElementById(userId)
    
    Parent.remove(childNodeToBeDeleted)
    console.log(childNodeToBeDeleted)
}