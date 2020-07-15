<html>
<div class="p1">
&nbsp; <a href="myprofile">My Profile </a>&nbsp;
 | &nbsp;<a href="education"> Education &nbsp; </a> |
  &nbsp; <a href="workexp"> Work Experience </a>
</div>



<div class="gap3"></div>

 <div  class="prof">
    <div class="prof2">
       <form action="" method="POST">
          <div class="mid1" id="error"></div>
     
          <div class="mid2">
              <div class="tb2">Roll Number:</div>
             <input  class="tb1" type="text" name="roll" id="roll"value="<?php echo $roll;?>"></input>
          </div>
         <div class="g1"></div>
       <div class="mid2">
         <div class="tb2">Year of Joining:</div>
         <input  class="tb1" type="text" name="yoj" id="yoj" value="<?php echo $yoj;?>"></input>
        </div>
      
     
     <div class="g1"></div>
         <div class="mid2">
           <div class="tb2">Year of Passing:</div>
           <input  class="tb1" type="text" name="yop" id="yop" value="<?php echo $yop;?>"></input>
       </div>
        <div class="g1"></div>
         <div class="mid2">
           <div class="tb2">Main Stream :</div>
          <div class="tb1">
          <select name="main" id="main">
           <option value="btech" <?php if($main== "btech"){?>selected<?php }?>>Btech</option>
           <option value="mtech"<?php if($main== "mtech"){?>selected<?php }?>>Mtech</option>
          </select>
          </div>
       </div>
     
     <div class="g1"></div>
     
       <div class="mid2">
        <input type="submit" type="submit" name="submit" value="Submit" id="submit" class="sub2"></input>
      </div>
   </form>
   </div>
   </div>
   

 
   </html>
   
    