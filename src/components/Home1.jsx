import React from "react";
import { Button } from "antd";
import { useHistory } from "react-router-dom";
import useRequest from "../services/RequestContext";
import useUser from "../services/UserContext";
import './Home1.css'
import background from "../images/img1.jpg";

export default function HomeNew() {
  const { updateToken } = useRequest();
  const { setUser } = useUser();

  const history = useHistory();
  const logout = async () => {
    await updateToken();
    setUser({});

    history.push("/login");
    window.location.reload(true);
  }; 

  // <Button onClick={logout}>Logout</Button>
  return (
    <div  style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }} >
    
    <div className="text-center"> 
      {/* Create home page video */}
      <div  >
       <br/><br/><br/><br/>
       <div class="a">Course Web</div>
       <div class="b">What are you waiting for?</div>
       <br/><br/>
      <div>
      <a class="btn btn-light" href="/login" role="button" onClick={logout}> LOGIN </a>
      </div>
      </div>
    </div>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <form style={{backgroundColor: "#d1d1d1"}}>
    <div style={{marginLeft:"20px", marginRight:"15px"}}>
    <h1>Welcome to Course Web</h1>
    <p>We are a leading non-state degree awarding institute approved by the University Grants Commission (UGC) under the Universities Act. We are also members of the Association of Commonwealth Universities (ACU), as well as the International Association of Universities (IAU), and the first Sri Lankan institute to be accredited by the Institution of Engineering & Technology, UK.</p> 
    <p>We are proud to be listed as a leading and formidable awarding institute authorised and approved by the University Grants Commission (UGC) under the Universities Act, and the International Association of Universities (IAU). Furthermore, not only we are the first Sri Lankan institute to be accredited by the Institute of Engineering & Technology(IET.), UK, our IT degrees are also in turn accredited by the Engineering Council, UK.</p>
    </div>
    </form>
    <br/>
    
  </div>
  );
}