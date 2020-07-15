<html>
<div class="p1">
  <div class="x1">
    &nbsp; &nbsp; Reunion
   </div>
  <a href="addreunion"><button>Add Reunions</button></a>
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
      <?php echo "Title:"; ?>
      </div>
       <?php echo $data->title; ?>
  </div>

<div class="s1">
     <div class="s11">
      <?php echo "Date:"; ?>
      </div>
       <?php echo $data->date; ?>
  </div>
  
  <div class="s1">
     <div class="s11">
      <?php echo "Venue:"; ?>
      </div>
       <?php echo $data->venue; ?>
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