<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Welcome extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -  
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in 
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see http://codeigniter.com/user_guide/general/urls.html
	 */
function general()
	{
		$data["header"]="public/header";
		$data["layout"]="public/layout";
		$data["footer"]="public/footer";
		return $data;
		
	}
	
	function index()
	{
		$data=$this->general();
		$data["body"]="static/homepage";
		$data["pagename"]="homepage";
		$this->load->view("welcome",$data);
	}
	function login()
	{
		$data=$this->general();
			
	 if($this->session->userdata('userid') !='')
			 {
			 	
			 	redirect('myprofile');
			 	
			 }
	
	       
			 
		if($this->input->post('login'))
		{
			
		
		  $email = $this->input->post('email');
		   $pswd = $this->input->post('pswd');
		   if($email!='')
		   {
		     $msg = $this->public_model->login($email,$pswd);
		      if($msg==true)
		      {
	          
	        	redirect('myprofile');
		       }
	          else
	          {
	             redirect('register');}
		   }
		}
			 
		$data["body"]="static/login";
		$data["pagename"]="login";
		$this->load->view("welcome",$data);
	}
	
	
	
function register()
	{
		$data=$this->general();
		if($this->input->post('submit'))
		  {
		  
		  	$roll = $this->input->post('roll');
		   $email = $this->input->post('email');
		   $pswd = $this->input->post('pswd');
		  	 $query=$this->public_model->register($roll,$email,$pswd);
		  if($query) { redirect('login'); }
		  else
		  redirect('/');
		  }
		$data["body"]="static/register";
		$data["pagename"]="register";
		$this->load->view("welcome",$data);
	}
	
function forgotpassword()
	{
		$data=$this->general();
		$data["body"]="static/forgotpassword";
		$data["pagename"]="forgotpassword";
		$this->load->view("welcome",$data);
	}
	
	

function logout()
	{
		
		$usersession = array('email_id' => '','userid'=>'');
		$this->session->unset_userdata($usersession);
		redirect('/');
	}
function myprofile()
	{
		$data=$this->general();
		if($this->session->userdata('userid') =='') { redirect('/'); }
	
		    $userid = $this->session->userdata('userid');
		
			$profileData = $this->public_model->getUserProfileById($userid);
		  	if($this->session->userdata('userid') =='') { redirect('/'); }
	
				
		    $data['name']=$profileData[0]['name'];
	        $data['dob'] = $profileData[0]['dob'];
		  	$data['gender'] = $profileData[0]['gender'];
		  	$data['phone'] = $profileData[0]['phone'];
		  	$data['email'] = $profileData[0]['email'];
		  	$data['addr'] = $profileData[0]['addr'];
		  	$data['city'] = $profileData[0]['city'];
		  	$data['state'] = $profileData[0]['state'];
		  	$data['zip'] = $profileData[0]['zip'];
	if($this->input->post('submit'))
		  {
		  	$name = $this->input->post('name');
		   $dob = $this->input->post('dob');
		   $gender = $this->input->post('gender');
		    
		    $phone = $this->input->post('phone');
		     $addr = $this->input->post('addr');
		      $city = $this->input->post('city');
		       $state = $this->input->post('state');
		        $zip = $this->input->post('zip');
		  	 $query=$this->public_model->myprofile($name,$dob,$gender,$phone,$addr,$city,$state,$zip,$userid);
		  if($query) { redirect('myprofile'); }

		  }
		
		
		$data["body"]="static/myprofile";
		$data["pagename"]="myprofile";
		$this->load->view("welcome",$data);
	}
function education()
	{
		$data=$this->general();
	if($this->session->userdata('userid') =='') { redirect('/'); }
	
		    $userid = $this->session->userdata('userid');
		
			$profileData = $this->public_model->getUserProfileById($userid);
		  	if($this->session->userdata('userid') =='') { redirect('/'); }

		   $data['roll'] = $profileData[0]['roll'];
		  	$data['yoj'] = $profileData[0]['yoj'];
		  	$data['yop'] = $profileData[0]['yop'];
		  	$data['main']=$profileData[0]['main'];
		  	
	if($this->input->post('submit'))
		  {
		  
		   $yoj = $this->input->post('yoj');
		   $yop = $this->input->post('yop');
		     $main = $this->input->post('main');
		  
		  	 $query=$this->public_model->education($yoj,$yop,$userid,$main);
		  if($query) { redirect('workexp'); }

		  }
		$data["body"]="static/education";
		$data["pagename"]="education";
		$this->load->view("welcome",$data);
	}
function workexp()
	{$data=$this->general();
	if($this->session->userdata('userid') =='') { redirect('/'); }
	
		    $userid = $this->session->userdata('userid');
		
			$profileData = $this->public_model->getUserProfileById($userid);
		  	if($this->session->userdata('userid') =='') { redirect('/'); }

		   $data['wexp'] = $profileData[0]['wexp'];
		  	$data['com'] = $profileData[0]['com'];
		  	$data['tot'] = $profileData[0]['tot'];
		  	
		  	
	if($this->input->post('submit'))
		  {
		  
		   $wexp = $this->input->post('wexp');
		   $com = $this->input->post('com');
		     $tot = $this->input->post('tot');
		  
		  	 $query=$this->public_model->workexp($wexp,$com,$tot,$userid);
		  if($query) { redirect('workexp'); }

		  }
		$data["body"]="static/workexp";
		$data["pagename"]="workexp";
		$this->load->view("welcome",$data);
	}
	
	function newsroom()
	{
		
		$data=$this->general();
	
	
		    $newsid = $this->session->userdata('newsid');
	    	
		
		  
		if($this->input->post('submit')){
			
			$title=$this->input->post('title');
			$link=$this->input->post('link');
			$desc=$this->input->post('desc');
		    $query=$this->public_model->newsroom($title,$link,$desc);
		  if($query) { 
		  	$this->session->set_flashdata('message', 'successfully submitted!');
		   redirect("newsroom");
		  }
		}
		
		$data["body"]="static/newsroom";
		$data["pagename"]="newsroom";
		$this->load->view("welcome",$data);
		
		
	}

	
function gallery()
	{
		$data=$this->general();
		$data["body"]="static/gallery";
		$data["pagename"]="gallery";
		$this->load->view("welcome",$data);
	}
	
function reunion()
	{
		$data=$this->general();
		$data['result'] = $this->public_model->get_reunion();
		
	
		$data["body"]="static/reunion";
		$data["pagename"]="reunion";
		$this->load->view("welcome",$data);
	}
	
	function addreunion()
	{
			$data=$this->general();
	
		    $jobid = $this->session->userdata('reunionid');
	    	 
		if($this->input->post('submit')){
			
			$title=$this->input->post('title');
			$date=$this->input->post('date');
			$venue=$this->input->post('venue');
	         $desc=$this->input->post('desc');
		    $query=$this->public_model->addreunion($title,$date,$venue,$desc);
		  if($query) { 
		  	$this->session->set_flashdata('message', 'successfully submitted!');
		   redirect("addreunion");
		  }
		}
		
		$data["body"]="static/addreunion";
		$data["pagename"]="addreunion";
		$this->load->view("welcome",$data);
	}
	
	
function viewnews()
	{
		$data=$this->general();
		$data['result'] = $this->public_model->get_news();
		$this->load->library("Pagination");
		
		 $config = array();
        $config["base_url"] = base_url() . "viewnews/";
        $config["total_rows"] = $this->public_model->record_count();
        $config["per_page"] = 5;
        $config["uri_segment"] = 4;

        $this->pagination->initialize($config);

        $page = ($this->uri->segment(4)) ? $this->uri->segment(4) : 0;
        $data["res"] = $this->public_model->fetch_news($config["per_page"], $page);
        $data["links"] = $this->pagination->create_links();
	
		$data["body"]="static/viewnews";
		$data["pagename"]="viewnews";
		$this->load->view("welcome",$data);
	}
function addjobs()
	{
		$data=$this->general();
	
		    $jobid = $this->session->userdata('jobid');
	    	 
		if($this->input->post('submit')){
			
			$comp=$this->input->post('comp');
			$job=$this->input->post('job');
			$loc=$this->input->post('loc');
			$exp=$this->input->post('exp');
			$desc=$this->input->post('desc');
		    $query=$this->public_model->addjobs($comp,$job,$loc,$exp,$desc);
		  if($query) { 
		  	$this->session->set_flashdata('message', 'successfully submitted!');
		   redirect("addjobs");
		  }
		}
		
		$data["body"]="static/addjobs";
		$data["pagename"]="addjobs";
		$this->load->view("welcome",$data);
	}
	
function job()
	{
		$data=$this->general();
		$data['result'] = $this->public_model->get_jobs();
		
	
		$data["body"]="static/job";
		$data["pagename"]="job";
		$this->load->view("welcome",$data);
	}
	
	
	
}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */
?>