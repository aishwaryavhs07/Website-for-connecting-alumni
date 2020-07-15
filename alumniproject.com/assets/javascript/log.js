
function loginvalid()
{
	var email=document.getElementById("email");
	var pswd=document.getElementById("pswd");
	var error=document.getElementById("error");
	
	      if(
	         (checkTextEmpty(email,"Email",error))&&
			  (checkTextEmpty(pswd,"Password",error))&&
			  (checkPassword(pswd,error))&&
			  (validateEmail(email,"Email",error))
			 )
			 
			{
				return true;
			}
			
			else
			{
				return false;
			}
}

function valid()
{
	var roll = document.getElementById("roll");
	var email = document.getElementById("reg_email");
	var pswd = document.getElementById("reg_pswd");
	var error = document.getElementById("error");
	
	if((checkTextEmpty(roll,"Roll Number",error))&&
	 (validateintegers(roll,"Roll Number",error))&&
	  (checkTextEmpty(email,"Email",error))&&
	  (validateEmail(email,"Email",error))&&
	  (checkTextEmpty(pswd,"Password",error))&&
	  (checkPassword(pswd,error))
	  
	  
	 )
	{
		return true;
	}
	
	else
	{
		return false;
	}
	
}