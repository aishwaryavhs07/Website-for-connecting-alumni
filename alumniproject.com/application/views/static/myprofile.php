
<div class="p1">
&nbsp; <a href="myprofile">My Profile </a>&nbsp;
 | &nbsp;<a href="education"> Education &nbsp; </a> |
  &nbsp; <a href="workexp"> Work Experience </a>
</div>

<div class="gap3"></div>

 <div  class="prof">
 <div class="prof2">
   <form action="" method="POST" >
     <div class="mid1" id="error"></div>
     
     <div class="mid2">
     <div class="tb2">Full Name:</div>
      <input  class="tb1" type="text" name="name" id="name" value="<?php echo $name;?>"></input>
     </div>
     <div class="g1"></div>
       <div class="mid2">
       <div class="tb2">Date Of Birth:</div>
      <input  class="tb1" type="text" name="dob" id="dob" placeholder="ddmmyyyy" value="<?php echo $dob;?>"></input>
      
      
     </div>
     <div class="g1"></div>
      <div class="mid2">
       <div class="tb2">Gender:</div>
       <div class="tb1">
      <select name="gender" id="gender">
      <option value="male" <?php if($gender== "male"){?>selected<?php }?>>Male</option>
       <option value="female" <?php if($gender== "female"){?>selected<?php }?>>Female</option>
        <option value="others"<?php if($gender== "others"){?>selected<?php }?>>Others</option>
        </div>
      
      </select>
     </div>
     <div class="g1"></div>
         <div class="mid2">
       <div class="tb2">Email:</div>
      <input  class="tb1" type="text" name="email" id="email" value="<?php echo $email;?>"></input>
     </div>
     <div class="g1"></div>
         <div class="mid2">
       <div class="tb2">Phone :</div>
      <input  class="tb1" type="text" name="phone" id="phone" value="<?php echo $phone;?>"></input>
     </div>
     <div class="g1"></div>
         <div class="mid2">
       <div class="tb2">Current Address:</div>
      <input  class="tb1" type="text" name="addr" id="addr" value="<?php echo $addr;?>"></input>
     </div>
     <div class="g1"></div>
         <div class="mid2">
       <div class="tb2">City:</div>
      <input  class="tb1" type="text" name="city" id="city" value="<?php echo $city;?>"></input>
     </div>
     <div class="g1"></div>
         <div class="mid2">
       <div class="tb2">State:</div>
      <input  class="tb1" type="text" name="state" id="state" value="<?php echo $state;?>"> </input>
     </div>
     <div class="g1"></div>
     <div class="mid2">
       <div class="tb2">Zipcode:</div>
      <input  class="tb1" type="text" name="zip" id="zip" value="<?php echo $zip;?>"></input>
     </div>
     <div class="g1"></div>
     <div class="mid2">
    
     <input type="submit" type="submit" name="submit" value="Submit" id="submit" class="sub2"></input>
     
     </div>
     </form>
     </div>
     </div>
    </div>

