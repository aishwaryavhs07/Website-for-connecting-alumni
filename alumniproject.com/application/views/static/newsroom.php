<html>
<div class="p1">
<div class="x1">
&nbsp; &nbsp;Add News
</div>
<a href="viewnews"><button>Back</button></a>
</div>

<div class="gap3"></div>

 <div  class="prof">
 <div class="prof2">
   <form action="" method="POST" >
     <div class="mid1" id="error"><?php echo $this->session->flashdata('message'); ?></div>
     
     <div class="mid2">
     <div class="tb2">Title:</div>
      <input  class="tb1" type="text" name="title" id="title" "></input>
     </div>
     <div class="g1"></div>
     
      <div class="mid2">
     <div class="tb2">Link:</div>
      <input  class="tb1" type="text" name="link" id="link" "></input>
     </div>
     <div class="g1"></div>
     
      <div class="mid2">
     <div class="tb2">Description:</div>
     <textarea rows="4" cols="50" id="desc" name="desc"></textarea>
     </div>
     <div class="g1"></div>
       <div class="g1"></div>
         <div class="g1"></div>
           <div class="g1"></div>
       <div class="mid2">
    
     <input type="submit" type="submit" name="submit" value="Submit" id="submit" class="sub2"></input>
     
     </div>
     
 </form>
</html>