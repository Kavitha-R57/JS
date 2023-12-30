function checkData(){
    var enteremail = document.getElementById('email').value;
    var enterpwd = document.getElementById('pwd').value;
    var getEmail= localStorage.getItem('userEmail'); 
    var getpwd= localStorage.getItem('userpwd');
    if(enteremail==getEmail)
    {
        if(enterpwd==getpwd){
            alert("Login Successfully");
        }else{
        alert("Password Wrong");} 
    }else{
       alert("Invalid Data");
}   

        
}