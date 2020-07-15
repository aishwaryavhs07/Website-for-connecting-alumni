<?php
Public function test_page($offset) {
  $this->load->library('Pagination');
  $config['base_url'] = 'http://localhost/alumniproject.com/';
  $config['total_rows'] = 200;
  $config['per_page'] = 5; 
  $this->pagination->initialize($config); 
}
?>

