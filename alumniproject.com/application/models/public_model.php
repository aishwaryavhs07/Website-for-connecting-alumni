<?php 
class Public_Model extends CI_Model
{
	
   function getUserProfileById($userid)
	{
		$data=$this->mongo_db->where(array('userid'=>(int)$userid))->get('userlogin');
		return $this->mongo_db->row_array($data);
	}
	/**this is for the register page*******/
	function register($roll,$email,$pswd) 
	{		
		$userid = $this->mongo_db->automatic_inc('userlogin','userid');
		$new_member_insert_data = array(
		"roll"=>$roll,
		"email"=>$email,
		"pswd"=>$pswd,
		"userid"=>(int)$userid,
		"name"=>"",
		  "dob"=>"",
		 "gender"=>"",
		 "phone"=>"",
		  "addr"=>"",
		  "city"=>"",
		   "state"=>"",
		   "zip"=>"",
		   "yoj"=>"",
		  "yop"=>"",
		"main"=>"",
		"wexp"=>"",
		"com"=>"",
		"tot"=>""
		);
		$insert=$this->mongo_db->insert('userlogin',$new_member_insert_data);
	 if($insert)
	    {
			return 'true';
		}
	 else
	 {
			return 'false';
	 }
	
	}
	
	/*****This is for the login page*****/
	
	function login($email,$pswd)
	{
	
		$result=$this->mongo_db->where(array('email'=>$email))->where(array('pswd'=>$pswd))->get('userlogin');
		
		if(count($result)==1)
		{
			foreach($result as $row)
			{
				$usersession=array(
				'userid'=>$row->userid,
				'email'=> $row->email,
				'roll'=> $row->roll);
				
				$this->session->set_userdata($usersession);
				
				
				
			}
			
			return true;
		}
		
	  else
		{
				return false;
			
		}
	}
	
	
	
	/******this is for my profile ***************/
	
	
		function myprofile($name,$dob,$gender,$phone,$addr,$city,$state,$zip,$userid) 
	{		
	
		
		$new_member_insert_data = array(
		  "name"=>$name,
		  "dob"=>$dob,
		 "gender"=>$gender,
		  "phone"=>$phone,
		  "addr"=>$addr,
		  "city"=>$city,
		   "state"=>$state,
		   "zip"=>$zip
		   
		);
		$update = $this->mongo_db->where(array('userid' => (int)$userid))->set($new_member_insert_data)->update('userlogin');
		return $update;
	
	}
	
	
		function education($yoj,$yop,$userid,$main) 
	{		
	
		
		$new_member_insert_data = array(
	
		"yoj"=>$yoj,
		"yop"=>$yop,
		"main"=>$main
		    
		);
		$update = $this->mongo_db->where(array('userid' => (int)$userid))->set($new_member_insert_data)->update('userlogin');
		return $update;
	
	}
	 
	function workexp($wexp,$com,$tot,$userid) 
	{		
	
		
		$new_member_insert_data = array(
	
		"wexp"=>$wexp,
		"com"=>$com,
		"tot"=>$tot
		    
		);
		$update = $this->mongo_db->where(array('userid' => (int)$userid))->set($new_member_insert_data)->update('userlogin');
		return $update;
	
	}
	/********news room data************/
	
	function newsroom($title,$link,$desc)
	{
	
		$newsid = $this->mongo_db->automatic_inc('news','newsid');
		$userid=$this->session->userdata('userid');
		$new_member_insert_data = array(
		"title"=>$title,
		"link"=>$link,
		"desc"=>$desc,
		"newsid"=>(int)$newsid,
		"userid"=>(int)$userid
		);
		$insert=$this->mongo_db->insert('news',$new_member_insert_data);
	 if($insert)
	    {
			return 'true';
		}
	 else
	 {
			return 'false';
	 }
	
	}
function get_news()
	{
		$data=$this->mongo_db->get('news');
		return $data;
	}
	
	
	function get_jobs()
	{
		$data=$this->mongo_db->get('jobs');
		return $data;
	}
	
function record_count() {
        return $this->mongo_db->count("news");
    }

  function fetch_news($limit, $start) {
        $this->mongo_db->limit($limit, $start);
        $query = $this->mongo_db->get("news");

        if ($query > 0) {
            foreach ($query as $row) {
                $data[] = $row;
            }
            return $data;
        }
        return false;
   }
	
	
	
	
	
function get_reunion()
	{
		$data=$this->mongo_db->get('reunion');
		return $data;
	}
	
	function addjobs($comp,$job,$loc,$exp,$desc)
	{
		$newsid = $this->mongo_db->automatic_inc('jobs','jobid');
		$userid=$this->session->userdata('userid');
		$new_member_insert_data = array(
		"comp"=>$comp,
		"job"=>$job,
		"loc"=>$loc,
		"exp"=>$exp,
		"desc"=>$desc,
		"jobid"=>(int)$jobid,
		"userid"=>(int)$userid
		);
		$insert=$this->mongo_db->insert('jobs',$new_member_insert_data);
	 if($insert)
	    {
			return 'true';
		}
	 else
	 {
			return 'false';
	 }
	
	}
	
	
	function addreunion($title,$date,$venue,$desc)
	{
		$newsid = $this->mongo_db->automatic_inc('reunion','reunionid');
		$userid=$this->session->userdata('userid');
		$new_member_insert_data = array(
		"title"=>$title,
		"date"=>$date,
		"venue"=>$venue,
		"desc"=>$desc,
		"reunionid"=>(int)$reunionid,
		"userid"=>(int)$userid
		);
		$insert=$this->mongo_db->insert('reunion',$new_member_insert_data);
	 if($insert)
	    {
			return 'true';
		}
	 else
	 {
			return 'false';
	 }
	
	}
		
	
}

?>