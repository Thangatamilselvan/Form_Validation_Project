const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validation()
})



function validation(){
  

    const userNameval=username.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    if(userNameval === ''){
         setError(username,'Please Enter the User name');
    }
    else{
        setSuccess(username);
    }

    if(passwordVal === ''){
        setError(password,'Please Enter the Password')
  }
  else if(passwordVal.length < 6){
        setError(password,'Password must contain atleast 6 character, number or symbols')
  }
  else{
        setSuccess(password);
  }

  if(cpasswordVal === ''){
    setError(cpassword,'Please Enter the Password')
}
else if(cpasswordVal != passwordVal){
    setError(cpassword,' Confirm Password must match given password')
}
else{
    setSuccess(cpassword);
}

}

function setError(element,message) {
    const containerField = element.parentElement;
    const errorElement = containerField.querySelector('.error');
      errorElement.innerText= message;

      containerField.classList.add('error');
      containerField.classList.remove('success');
}

function setSuccess(element) {
    const containerField = element.parentElement;
    const errorElement = containerField.querySelector('.error');
      errorElement.innerText= '';

      containerField.classList.add('success');
      containerField.classList.remove('error');
}