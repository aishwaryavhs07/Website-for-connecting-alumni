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
              <div class="tb2">Work Experience:</div>
             <input  class="tb1" type="text" name="wexp" id="wexp" value="<?php echo $wexp;?>"></input>
          </div>
         <div class="g1"></div>
       <div class="mid2">
         <div class="tb2">Current Company:</div>
         <input  class="tb1" type="text" name="com" id="com" value="<?php echo $com;?>"></input>
        </div>
      
     
     <div class="g1"></div>
         <div class="mid2">
           <div class="tb2">Total Industrial Experience:</div>
           <input  class="tb1" type="text" name="tot" id="tot" value="<?php echo $tot;?>"></input>
       </div>
        <div class="g1"></div>
        
       <div class="mid2">
        <input type="submit" type="submit" name="submit" value="Submit" id="submit" class="sub2"></input>
      </div>
   </form>
   </div>
   
   </div>

 
   </html>