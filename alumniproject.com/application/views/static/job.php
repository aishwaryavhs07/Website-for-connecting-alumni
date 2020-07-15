<html>
<div class="p1">
  <div class="x1">
    &nbsp; &nbsp; Jobs
   </div>
  <a href="addjobs"><button>Add Jobs</button></a>
</div>
<div class="cont2">

 <?php 

foreach($result as $data)
{?>
<div class="g1">
</div>
<div class="jobs">
  <div class="s1">
     <div class="s11">
      <?php echo "Company:"; ?>
      </div>
       <?php echo $data->comp; ?>
  </div>

<div class="s1">
     <div class="s11">
      <?php echo "Job:"; ?>
      </div>
       <?php echo $data->job; ?>
  </div>
  
  <div class="s1">
     <div class="s11">
      <?php echo "Location:"; ?>
      </div>
       <?php echo $data->loc; ?>
  </div>

<div class="s1">
     <div class="s11">
      <?php echo "Experience:"; ?>
      </div>
       <?php echo $data->exp; ?>
  </div>
  
<div class="s2">
     <div class="s21">
      <?php echo "Description:"; ?>
      </div>
       <?php echo $data->desc; ?>
  </div>
</div>
<?php }?>

</div>
</html>