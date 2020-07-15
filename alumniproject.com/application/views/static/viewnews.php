<html>
<div class="p1">
  <div class="x1">
    &nbsp; &nbsp; News
   </div>
  <a href="newsroom"><button>Add news</button></a>
</div>
<div class="cont2">

 <?php 

foreach($res as $data)
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
      <?php echo "Link:"; ?>
      </div>
       <?php echo $data->link; ?>
  </div>

<div class="s2">
     <div class="s21">
      <?php echo "Description:"; ?>
      </div>
       <?php echo $data->desc; ?>
  </div>
</div>
 
<?php }?>
<?php echo $links; ?>
</div>
</html>