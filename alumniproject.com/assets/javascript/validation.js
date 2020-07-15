/****************************Ajax HTTP Request CODE START****************************/
var xmlHttp; 
if (window.XMLHttpRequest)
{
    try 
    {
        xmlHttp = new XMLHttpRequest();
    } catch (e) { xmlHttp = false; }
}
else if (window.ActiveXObject) {
    try {
        xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
    }
    catch (e) {
        try {
            xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        catch (e) { xmlHttp = false; }
    }
}
//alert(scid);
var xmlhttp=false;	
try{
	xmlhttp=new XMLHttpRequest();
}
catch(e)	{		
	try{			
		xmlhttp= new ActiveXObject("Microsoft.XMLHTTP");
	}
	catch(e){
		try{
		xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch(e1){
			xmlhttp=false;
		}
	}
}
/****************************Ajax HTTP Request CODE END****************************/

/****************************INTEGER VALIDATION START****************************/
/****************************Allows user to enter only integers from keyboard****************************/
	function onlynumbercheck(evt)
	{
		var charCode = (evt.which) ? evt.which : evt.keyCode
		if(charCode == 48 || charCode == 37 || charCode == 39 )
		return true;
		if(charCode > 31 && (charCode < 49 || charCode > 57) || charCode==17)
	    return false;
		else
		return true;
	}
/****************************Allows user to enter only integers & dot(.) from keyboard****************************/
	function valuecheck(evt)
	{
		var charCode = (evt.which) ? evt.which : evt.keyCode
		if(charCode == 46 || charCode == 48)
		return true;
		if (charCode > 31 && (charCode < 49 || charCode > 57) || charCode==17)
		return false;
		else
		return true;
	}
/****************************Allows user to not to copy text using mouse****************************/
	function noCopyMouse(evts)
	{
	   var isRight = (evts.button) ? (evts.button == 2) : (evts.which == 3);
       if(isRight)
       {
    	   return false;
	   }
	   return true;
	}
/****************************Allows user to not to copy text using keyboard (disable CTRL+X,V,C)****************************/
	function noCopyKey(evts)
	{
		var forbiddenKeys = new Array('c','x','v');
		var keyCode = (evts.keyCode) ? evts.keyCode : evts.which;
		var isCtrl;
		if(window.event)
			isCtrl = evts.ctrlKey
		else
			isCtrl = (window.Event) ? ((evts.modifiers & Event.CTRL_MASK) == Event.CTRL_MASK) : false;
		if(isCtrl)
		{
			for(i = 0; i < forbiddenKeys.length; i++)
			{
				if(forbiddenKeys[i] == String.fromCharCode(keyCode).toLowerCase())
				{
					alert('You are prompted to type this twice for a reason!');
					return false;
				}
			}
		}
		return true;
	}
/******************************  Allows valid integers only ****************************************/
	function validateintegers(id,message,lbl)
	{
		var alp = "1234567890";
		for (var i=0;i<id.value.length;i++)
		{
			temp=id.value.substring(i,i+1);
			if (alp.indexOf(temp)==-1)
			{
				var resstr="&nbsp;&nbsp;Invalid "+message+", [0-9] allowed ";
				lbl.innerHTML = resstr;
				id.value='';
				//lbl.setAttribute("class", "errorbackbg");
				id.focus();
				return false;
			}
		}
		lbl.innerHTML="";
		//lbl.setAttribute("class", "");
		return true;
	}
	/********password validation******/
	 function checkPassword(id,lbl)
	  {
	    var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
	   if(!re.test(id.value))
	   {
		   lbl.innerHTML="enter a valid password";
		   return false;
	   }
	   else
		   return true;
	  } 
/******************************  Allows valid integets only Regular Expression ****************************************/
	function ValidNumber(id,message,lbl)
	{
		var re=/^[0-9]+$/;
		if(!re.test(id.value))
		{
			lbl.innerHTML =message+"&nbsp;&nbsp;allows numbers only";
			//lbl.setAttribute("class", "errorbackbg");
			id.focus();
			return false;
		}
		lbl.innerHTML="";
		return true;
	}
	function check_greaters(id1,id2,message,lbl)
	{
		var strt = id1.value;
		var end = id2.value;
		if(parseInt(strt) > parseInt(end))
		{
			lbl.innerHTML = message;
			id1.focus();
			id2.focus();
			return false;
		}
		lbl.innerHTML = "";
		return true;
	}
	function check_box_select_any(id1,message,lbl)
	{
		//var box1 = id1.value;
		//var box2 = id2.value;
		if((id1.checked == false))
		{
			lbl.innerHTML = message+ "is required";
			id1.focus();
			id2.focus();
			return false;
		}
		lbl.innerHTML = "";
		return true;
	}
	function check_box_select_any_three(id1,id2,id3,message,lbl)
	{
		//var box1 = id1.value;
		//var box2 = id2.value;
		//var box3 = id3.value;
		if((id1.checked == false) && (id2.checked == false)&& (id3.checked == false))
		{
			lbl.innerHTML = message+"is required";
			id1.focus();
			id2.focus();
			id3.focus();
			return false;
		}
		lbl.innerHTML = "";
		return true;
	}
	function check_box_select_any_five(id1,id2,id3,id4,id5,message,lbl)
	{
		//var box1 = id1.value;
		//var box2 = id2.value;
		//var box3 = id3.value;
		if((id1.checked == false) && (id2.checked == false)&& (id3.checked == false)&&(id4.checked == false)&& (id5.checked == false))
		{
			lbl.innerHTML = message+"is required";
			id1.focus();
			id2.focus();
			id3.focus();
			id4.focus();
			id5.focus();
			return false;
		}
		lbl.innerHTML = "";
		return true;
	}
/***********************************  Integer Validation END *************************************/
/****************************** EMPTY(OR)NULL(OR)ZERO VALIDATION START ***********************************/
	function checkTextEmpty(id,message,lbl)
	{
		if(id.value=="")
			{
				lbl.innerHTML=message + " is required";
				id.focus();
				return false;
			}
		lbl.innerHTML="";
		return true;
	}
	function checkTextEmpty_hide(id,message,lbl)
	{
		if(id.value=="")
			{
				lbl.innerHTML=message + " is required";
				return false;
			}
		lbl.innerHTML="";
		return true;
	}
	function checkText1Empty(id,message,lbl)
	{
		if(id.value=="")
		{
			lbl.innerHTML=message;
			id.focus();
			return false;
		}
		else 
		{
			lbl.innerHTML="";
			return true;
		}
	}
	function checkTextareaEmpty(id,message,lbl)
	{
		if(id.value=="")
			{
			
				lbl.innerHTML=message + " Should Not Be Empty";
				id.focus();
				
				return false;
			}
		lbl.innerHTML="";
		return true;
	}
	function checkFileEmpty(id,message,lbl)
	{
		if(id.value=="")
			{
			
				lbl.innerHTML=message + " Select a File";
				id.focus();
				
				return false;
			}
		lbl.innerHTML="";
		return true;
	}
	function checkTempEmpty(id,message,lbl)
	{
		if(id.value=='' || id.value==0)
		{
			lbl.innerHTML=message + " is required";
			//lbl.setAttribute("class", "errorbackbg");
			id.focus();
			return false;
		}
		lbl.innerHTML="";
		return true;
	}
	function Name_FirstCharacter_Check(id,message,lbl)
	{
		var keynum=id.value;
		var name_value=keynum.charCodeAt(0);		
		if(name_value==32 && name_value>=48 && name_value<=57)
		{			
			lbl.innerHTML=message+" first character should be an alphabet or symbol";
			lbl.setAttribute("class", "errorbackbg");
			id.focus();			
		return false;
		}
		lbl.innerHTML="";
		return true;
	}
	function first_character_space_check(id,message,lbl)
	{
		var k = id.value;
		if(k.charAt(0) == " ")
		{
			lbl.innerHTML=message+" first character should be an alphabet or symbol";
			//lbl.setAttribute("class", "errorbackbg");
			id.focus();			
		return false;
		}
		else
		{
			lbl.innerHTML = message;   
			return true;
		}
	}
	function Name_FirstCharacter_Check1(id,message,lbl)
	{
		//var keynum=id.value;
		//var name_value=keynum.charCodeAt(0);
		var name_value= id.value;
		if(name_value==32 && name_value>=48 && name_value<=57)
		{			
			lbl.innerHTML=message+" first character should be an alphabet or symbol";
			//lbl.setAttribute("class", "errorbackbg");
			id.focus();			
		return false;
		}
		lbl.innerHTML="";
		return true;
	}
	function first_character_space_check1(id,message,lbl)
	{
		var k = id.value;
		if(k.charAt(0)	 == " ")
		{
			lbl.innerHTML=message+"first character should be an alphabet or symbol";
			//lbl.setAttribute("class", "errorbackbg");
			id.focus();			
		return false;
		}
		else
		{
			lbl.innerHTML = message;   
			return true;
		}
	}
	function checkQuestionEmpty(id,message,lbl)
	{
		if(id.value=="" || id.value=="Enter Question")
			{
				lbl.innerHTML=message + " is required";
				id.focus();
				
				return false;
			}
		lbl.innerHTML="";
		return true;
	}
	function checkDescriptionEmpty(id,message,lbl)
	{
		if(id.value=="" || id.value=="Type Here")
			{
				lbl.innerHTML=message + " is required";
				id.focus();
				
				return false;
			}
		lbl.innerHTML="";
		return true;
	}
	function checkTopicsEmpty(id,message,lbl)
	{
		if(id.value=="" || id.value=="Enter Topics")
			{
				lbl.innerHTML=message + " is required";
				id.focus();
				
				return false;
			}
		lbl.innerHTML="";
		return true;
	}
	function checkTextareaEmpty2(id,message,lbl)
	{
		if(id=="")
			{
			
				lbl.innerHTML=message + " Should Not Be Empty";
				id.focus();
				
				return false;
			}
		lbl.innerHTML="";
		return true;
	}
/************************************ EMPTY(OR)NULL VALIDATION END *******************************/

/*********************************  EMAIL VALIDATION START ***************************************/
function validateEmail(id,message,lbl)
	{
		str1=id.value.charAt(0);
		var emailRegEx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if(str1 == '.' || str1 == '_')
			{
				resstr="Email id should start with alphaNumeric";
				lbl.innerHTML = resstr;
				id.value='';
				id.focus();
				return 0;
			}
		if(id.value.match(emailRegEx))
			{
				return true;
			}
		else
			{
				lbl.innerHTML="Invalid email address";
				id.focus();
				return false;
			}
	}
function newvalidateEmail(id,message,lbl)
{
	str1=id.value.charAt(0);
	var emailRegEx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if(str1 == '.' || str1 == '_')
		{
			resstr="Email id should start with alphaNumeric";
			lbl.innerHTML = resstr;
			id.value='';
			id.focus();
			return 0;
		}
	if(id.value.match(emailRegEx))
		{
			return true;
		}
	else
		{
			lbl.innerHTML="Invalid email address";
			id.focus();
			return false;
		}
}
function validateEmailids(id,message,lbl)
{
	if(id.value == ''){ return true;}
	str1=id.value.charAt(0);
	var emailRegEx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if(str1 == '.' || str1 == '_')
		{
			resstr="Email id should start with alphaNumeric";
			lbl.innerHTML = resstr;
			id.value='';
			id.focus();
			return 0;
		}
	if(id.value.match(emailRegEx))
		{
			return true;
		}
	else
		{
			lbl.innerHTML="Invalid email address";
			id.focus();
			return false;
		}
}
function validateEmailinvisible(id,message,lbl)
{
	str1=id.value.charAt(0);
	var emailRegEx = /^[a-z0-9._%-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i;
	if(str1 == '.' || str1 == '_')
		{
			resstr="Email id should start with alphaNumeric";
			lbl.innerHTML = resstr;
			id.value='';
			id.focus();
			return 0;
		}
	if(id.value.match(emailRegEx) || id.value =='')
		{
			return true;
		}
	else
		{
			lbl.innerHTML="Invalid email address ";
			id.focus();
			return false;
		}
}
function checkEmailEmpty(id,message,lbl)
{
	if(id.value==" ")
		{
			lbl.innerHTML=message + " is required";
			id.focus();
			
			return false;
		}
	lbl.innerHTML="";
	return true;
}
/***********************************  EMAIL VALIDATION END ***************************************/

/*************************  MINIMUM LENGTH WITH LOOP VALIDATION START ****************************/
	function minimum_lengths(str,message,count,lbl)
	{
		k = str.value;
		if(str.value.length < count)
		{
			lbl.innerHTML = message;
			str.value='';
			lbl.setAttribute("class", "errorbackbg");
			str.focus();
			return false;
		}		
		lbl.innerHTML ="";
		return true;
	}
	function pwdminimum_lengths(str,message,count,lbl)
	{
		k = str.value;
		if(str.value.length < count)
		{
			lbl.innerHTML = message;
			str.value='';
			str.focus();
			return false;
		}		
		lbl.innerHTML ="";
		return true;
	}
/******************************  MINIMUM LENGTH WITH LOOP VALIDATION END *************************/

/*****************************  MINIMUM VALIDATION WITHOUT LOOP  START ***************************/
	function minimum_lengths1(id,output,lbl)
	{
		k = id.value;
		if( id.value.length !=10 && id.value.length !=7)
		{
			lbl.innerHTML = output;
			id.focus();
			lbl.setAttribute("class", "errorbackbg");
			return false;
		}	
		lbl.innerHTML="";
		return true;	
	}
	function minimum_length1(id,output,lbl,minlen,maxlen)
	{
		k = id.value;
		if( (k.length >= minlen) && (k.length <= maxlen))
		{
			lbl.innerHTML="";
			return true;	
		}	
		else
		{
			lbl.innerHTML = output+"Length must be between 5 to 500";
			//lbl.setAttribute("class", "errorbackbg");
			id.focus();
			return false;
		}
	}
	function minimum_length11(id,output,lbl,minlen,maxlen)
	{
		k = id.value;
		if( (k.length >= minlen) && (k.length <= maxlen))
		{
			lbl.innerHTML="";
			return true;	
		}	
		else
		{
			lbl.innerHTML = output;
			//lbl.setAttribute("class", "errorbackbg");
			id.focus();
			return false;
		}
	}

	function minimum_length(id,output,lbl)
	{
		k = id.value;
		if(id.value.length > 1000)
		{
			lbl.innerHTML = output;
			lbl.setAttribute("class", "errorbackbg");
			id.focus();
			return false;
		}	
		lbl.innerHTML="";
		return true;	
	}
	function minimum_lengths(id,output,lbl)
	{
		k = id.length;
		if(k > 2000)
		{
			lbl.innerHTML = output + "Allows upto 2000 characters only";
			//alert(lbl.innerHTML);
			//lbl.innerHTML = output;
			//lbl.setAttribute("class", "errorbackbg");
			//id.focus();
			return false;
		}
		lbl.innerHTML="";
		return true;	
	}
	function minimum_lengths_5k(id,output,lbl)
	{
		k = id.length;
		if( (k <= 30) && (k >= 5000))
		{
			lbl.innerHTML = output + "Allows upto 30 to 5000 characters only";
			//alert(lbl.innerHTML);
			//lbl.innerHTML = output;
			//lbl.setAttribute("class", "errorbackbg");
			//id.focus();
			return false;
		}
		lbl.innerHTML="";
		return true;	
	}
	function check_min_expyears(id,output,lbl)
	{
		k = id.value;
		if(k < 1 && k!='')
		{
			lbl.innerHTML = output + "Minimum experience should be 1 year";
			id.focus();
			return false;
		}
		lbl.innerHTML="";
		return true;	
	}	
	function minimum_lengths_5k_cmpany(id,output,lbl)
	{
		k = id.length;
		if(k == 0)
		{
			lbl.innerHTML = output + " is Required!";
			return false;
		} else if((k <= 30) && (k >= 5000)) {
			lbl.innerHTML = output + " Allows upto 30 to 5000 characters only!";
			id.focus();
			return false;
		}
		lbl.innerHTML="";
		return true;	
	}
	function minimum_lengths_msg(id,output,lbl)
	{
		k = id.value;
		if( (k.length >= 15) && (k.length <= 1000))
		{
			lbl.innerHTML="";
			return true;
		}
		lbl.innerHTML = output + " Length must be between 15 to 1000";
		return false;
	}
	function minimum_lengths_postmsg(id,output,lbl)
	{
		k = id.value;
		if(k.length <= 15)
		{
			lbl.innerHTML = output + " Minimum Lenght should be atleast 15 characters";
			return false;
		}
		lbl.innerHTML = "";
		return true;
	}
	function checkSkillEmpty(id,output,lbl)
	{
		k = id;
		if((k.length != 0))
		{
			lbl.innerHTML="";
			return true;
		}
		lbl.innerHTML = output + " is Required";
		return false;
	}
/******************************** MINIMUM VALIDATION WITHOUT LOOP  START *************************/

/*************************  ALLOW ONLY TEXT VALIDATION  START ************************************/
	function textOnly_div(id,message,lbl)
	{
		var alp="{}:;\[]~`@!#$%^&*()-_+=|\/.><,?";
		for (var i=0;i<id.value.length;i++)
		{
			temp=id.value.substring(i,i+1);
			if (alp.indexOf(temp)!=-1)
			{
				lbl.innerHTML = message +" allows only text and numbers";
				lbl.setAttribute("class", "errorbackbg");
				id.focus();
				return 0;
			}
		} 
		lbl.innerHTML="";
		return true;
	} 
	/***********************************************************************allow only numbers **********************************************************************/
	function numbercheck(evt,message,lbl)
	{
		   // alert("in")
		 var charCode = (evt.which) ? evt.which : evt.keyCode
				// alert(charCode)
		 if(charCode == 48)
			 return true;
		 if (charCode > 31 && (charCode < 49 || charCode > 57) || charCode==17)
		 {
			lbl.innerHTML = message +" allows only text and numbers";
			lbl.setAttribute("class", "errorbackbg");
			id.focus();
		    return false;
		 }
		 else
		 return true;
	}
	
	
/***************************  ALLOW ONLY TEXT VALIDATION  END ************************************/

/***************************** PINCODE VALIDATION  START *****************************************/
	function pincode_length(str,message,count,lbl)
	{
		k = str.value;
		if((str.value.length < count) || (str.value.length > count) )
			{
				lbl.innerHTML = message ;
				str.value='';
				lbl.setAttribute("class", "errorbackbg");
				str.focus();
				return false;
			}		
		lbl.innerHTML ="";
		return true;
	}
/**********************************  PINCODE VALIDATION  END *************************************/
/***************************  DROPDOWN SELECT VALIDATION  START **********************************/
	function checkSelEmpty(id,message,lbl)
	{
		if (id.value == "" || id.value == '0')
		{
			lbl.innerHTML="Please select " + message;
		//	lbl.setAttribute("class", "errorbackbg");
			id.focus();
			return false;
		}
		lbl.innerHTML="";
		return true;
	}
	function checkSelEmpty_null(id,message,lbl)
	{
		if (id.value == "" || id.value == '0')
		{
			lbl.innerHTML= "Please select " + message;
			//lbl.setAttribute("class", "errorbackbg");
			id.focus();
			return false;
		}
		lbl.innerHTML="";
		return true;
	}
	function checkSelEmpty_four(id,message,lbl)
	{
		if (id.value == "" || id.value == '4')
		{
			lbl.innerHTML= "Please select " + message;
			//lbl.setAttribute("class", "errorbackbg");
			id.focus();
			return false;
		}
		lbl.innerHTML="";
		return true;
	}
/*************************  DROPDOWN SELECT VALIDATION  END **************************************/

/*************************  CHECKBOX SELECT VALIDATION  START ************************************/
	function checkboxselect(message,lbl)
	{
		var numChecked=0;
		var checkboxArr = document.getElementById('postcal').getElementsByTagName("input");
		for (i=1; i<checkboxArr.length; i++)
		{
			if (checkboxArr[i].type == "checkbox" && checkboxArr[i].checked == true)
			{
				numChecked++;
			}
		}
		if(numChecked <= 0)
		{
			lbl.innerHTML=message;
			lbl.setAttribute("class", "errorbackbg");
			return false;
		}
		lbl.innerHTML=""
		return true;
	}
/*************************  CHECKBOX SELECT VALIDATION  END **************************************/

/*************************  ONLY TEXT VALIDATION  START ******************************************/
	function ValidText(id,message,lbl)
	{
		var re=/^[a-zA-Z ]+$/;
		if(!re.test(id.value))
		{
			var resstr=message+"should contain only alphabets";
			lbl.innerHTML = resstr;
			lbl.setAttribute("class", "errorbackbg");
			id.focus();
			return false;
		}
		lbl.innerHTML="";
		return true;
	}
/*************************  ONLY TEXT VALIDATION  END ********************************************/
/*************************  SMALL ALPHANUMERIC VALIDATION  START ******************************************/
	function ValidText3(id,message,lbl)
	{
		var re=/^[a-z0-9._]/;
		if(!re.test(id.value))
		{
			var resstr=message+"&nbsp;allows numbers and small alphabets  only";
			lbl.innerHTML = resstr;
			//lbl.setAttribute("class", "errorbackbg");
			id.focus();
			return false;
		}
		lbl.innerHTML="";
		return true;
	}
/*************************  ONLY TEXT VALIDATION  END ********************************************/

/*************************  ALPHA NUMERIC VALIDATION  START **************************************/
	function ValidNumtext(id,message,lbl)
	{
		var re=/^[a-zA-Z0-9]+$/;
		if(!re.test(id.value))
		{
			lbl.innerHTML =message+"&nbsp;&nbsp;allows numbers and alphabets only";
			//lbl.setAttribute("class", "errorbackbg");
			id.focus();
			return false;
		}
		lbl.innerHTML="";
		return true;
	}
/*************************  ALPHA NUMERIC VALIDATION  END ****************************************/
	/*************************  NUMERIC VALIDATION  START **************************************/
	function ValidNumber_new(id,message,lbl)
	{
		var re=/^[0-9-+]+$/;
		if(id.value == ''){ return true;}
		if(!re.test(id.value))
		{
			lbl.innerHTML =message+"&nbsp;&nbsp;allows numbers only";
			//lbl.setAttribute("class", "errorbackbg");
			id.focus();
			return false;
		}
		lbl.innerHTML="";
		return true;
	}
/*************************  ALPHA NUMERIC VALIDATION  END ****************************************/
/************************* ALL SPACES VALIDATION  START*******************************************/
	function ifallspacespwd(id,message,lbl)
	{
		allSpaces = 0;
		k = id.value;
		for (var i=0;i<k.length;i++)
		{			
			if(k.charAt(i) == " ")
			allSpaces++;
		}		
		if(allSpaces == k.length || allSpaces>0)
		{	
			lbl.innerHTML = message;   
			//lbl.setAttribute("class", "errorbackbg");
			id.focus();
			return 0;
		}
		else
		{
			lbl.innerHTML = message;   
			//lbl.setAttribute("class", "errorbackbg");
			return true;
		}
	}
	function ifallspaces(id,message,lbl)
	{
		allSpaces = 0;
		k = id.value;
		for (var i=0;i<k.length;i++)
		{			
			if(k.charAt(i) == " ")
			allSpaces++;
		}		
		if(allSpaces == k.length)
		{	
			lbl.innerHTML = message + " should not allow spaces";   
			//lbl.setAttribute("class", "errorbackbg");
			id.focus();
			return 0;
		}
		else
		{
			lbl.innerHTML = '';   
			//lbl.setAttribute("class", "errorbackbg");
			return true;
		}
	}
/***************************** ALL SPACES VALIDATION  END*****************************************/

/*****************************URL VALIDATION START ***********************************************/
	function urlvalidation(id,message,lbl)
	{
		var filter=/[a-z0-9\-\.]+\.[a-z]{2,3}(:[a-z0-9]*)?\/?([a-z0-9\-\._\?\,\'\/\\\+&amp;%\$#\=~])*$/i;
		if(id.value == ''){
			return true;
		}
		if (!filter.test(id.value))
			{
				lbl.innerHTML=message;
				id.focus();
				//lbl.setAttribute("class", "errorbackbg");
				return false;
			}
		lbl.innerHTML="";
		return true;
	}
	function youtubeurlvalidation(id,message,lbl)
	{
		var filter=/^http:\/\/(?:www\.)?youtube.com\/watch\?(?=.*v=\w+)(?:\S+)?$/;
		if (!filter.test(id.value))
		{
			lbl.innerHTML=message;
			id.focus();
			lbl.setAttribute("class", "errorbackbg");
			return false;
		}
		lbl.innerHTML="";
		return true;
	}
/******************************URL VALIDATION END ************************************************/

/****************************** VALIDATION FOR SPECIAL CHARACTERS ******************************************/
	function textOnly(id,message,lbl)
	{
		var alp="{}:;\[]~`@!#$%^&*()_+=|\/.><,?";
		for (var i=0;i<id.value.length;i++)
		{
			temp=id.value.substring(i,i+1);
			if (alp.indexOf(temp)!=-1)
			{
				lbl.innerHTML = message +"doesn't allow special characters";
				lbl.setAttribute("class", "errorbackbg");
				id.focus();
				return 0;
			}
		} 
		lbl.innerHTML="";
		return true;
	} 
/****************************** VALIDATION FOR SPECIAL CHARACTERS END *****************************************/
	function roundNumber(number,decimal_points)				// function that generates to zeros after point
	{
		if(!decimal_points) return Math.round(number);
		if(number == 0)
		{
			var decimals = "";
			for(var i=0;i<decimal_points;i++) decimals += "0";
			return "0."+decimals;
		}
		var exponent = Math.pow(10,decimal_points);
		var num = Math.round((number * exponent)).toString();
		return num.slice(0,-1*decimal_points) + "." + num.slice(-1*decimal_points)
	}

/****************************** VALIDATION FOR COUNT CHARCTERS IN THE TEXTAREA FIELD END *****************************************/
	function alertMsgLengths()
	{
	    var strLength;
	    var strMsg;
	    if(document.getElementById('description').value.length > 1000)
	    {
	        strMsg=document.getElementById('description').value;
	        document.getElementById('description').value = strMsg.substring(0,1000);
		    document.getElementById('description').focus();
			return false;
		}
		strLength=document.getElementById('description').value.length;
		document.getElementById('txt_counts').value= 1000-strLength +' characters left ';
		
	}
	function alertMsgLength()
	{
	    var strLength;
	    var strMsg;
	    if(document.getElementById('pridesc').value.length > 200)
	    {
	        strMsg=document.getElementById('pridesc').value;
	        document.getElementById('pridesc').value = strMsg.substring(0,200);
		    document.getElementById('pridesc').focus();
			return false;
		}
		strLength=document.getElementById('pridesc').value.length;
		document.getElementById('txt_count').value= 200-strLength +' characters left ';
	}
	function xyz()
	{
		return true;
		window.event.returnValue=false;
		window.clipboardData.effectAllowed=true
		window.clipboardData.clearData();    
	}
/****************************** VALIDATION FOR COUNT CHARCTERS IN THE TEXTAREA FIELD END *****************************************/
/***********************IMAGE VALIDATION******************************/
	function  checkimagevalidation(jp,message,lbl)
	{
		var filetype=jp.split(".");
		if(filetype[1]!="pdf")
		{
			if(filetype[1]!="ppt")
			{
				if(filetype[1]!="doc")
				{	
					if(filetype[1]!="docx"){    
						lbl.innerHTML=message + " allows ppt/pdf/doc/docx";
						lbl.setAttribute("class", "errorbackbg");
						return false;
					} else {
						return true;
					}	
				} else {
					return true;
				}	
			} else {
				return true;
			}
	   } else {
		   return true;
	   }
	}

	function newcheckTextEmpty(id,message,lbl)
	{
		if(id.value=="")
		{
			lbl.innerHTML=message + " is required";
			id.focus();
			//lbl.setAttribute("class", "errorbackbg");
			return false;
		}
		lbl.innerHTML="";
		return true;
	}
	function comparepasswords(passwordid,cpasswordid,lbl)
	{
		if(passwordid.value!=cpasswordid.value)
		{
			html="";
			html+="Password and confirm password should be same";
			lbl.innerHTML = html;
			passwordid.value = "";
			cpasswordid.value = "";
			passwordid.focus();
			return false;
		}
		lbl.innerHTML ="";
		return true;
	}
	function nocomparepasswords(passwordid,cpasswordid,lbl)
	{
		if(passwordid.value==cpasswordid.value)
		{
			html="";
			html+="Old password and new password should not be same";
			lbl.innerHTML = html;	
			lbl.setAttribute("class", "errorbackbg");
			cpasswordid.value="";
			cpasswordid.focus();
			return false;
		}
		lbl.innerHTML ="";
		return true;
	}
	function check_experience(id1,id2,message,lbl)
	{
		var strt = id1.value;
		var end = id2.value;
		if(parseInt(strt) >= parseInt(end))
		{
			lbl.innerHTML = message;
			id1.focus();
			id2.focus();
			return false;
		}
		lbl.innerHTML = "";
		return true;
	}

	function tmc_editor_validation(str,message,lbl)
	{
		if(str == '')
		{
			lbl.innerHTML = message;
//			str='';
//			str.focus();
			return false;
		}		
		lbl.innerHTML ="";
		return true;
	}


	function checkradio(id,lbl)
	{
		if(male == false && female == false && others== false)
		{
			lbl.innerHTML="please enter your gender";
			return false;
		}
		else	
		{
			return true;
		}
	}