<div class="header1">
  <div class="logo"></div>
  <div class="middle"></div>
  <div class="right">
    <div class="up"></div>
     
    <?php if($this->session->userdata('userid') ==''){?>
		<div class="down"> <a href="<?php echo base_url();?>register" style="color:#000;"><?php echo $this->lang->line('register');?></a> | <a href="<?php echo base_url();?>login" style="color:#000;"><?php echo $this->lang->line('login');?></a></div>
		<?php }?>
		<?php if($this->session->userdata('userid') !=''){?>
		<div class="down"><a href="<?php echo base_url();?>logout"><?php echo $this->lang->line('logout');?></a></div>
		<?php }?>
    
       
     
     
   </div>
 
</div>

<div class="header2">

 <div class="gap"></div>
 
 <div class="box"><a href="viewnews">News Room</a></div>
   <div class="box"><a href="job">Jobs</a></div>
   <div class="box"><a href="gallery">Gallery</a></div>
    <div class="box"><a href="reunion">Reunion</a></div>
</div>