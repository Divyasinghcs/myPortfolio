import "./About.css";
import mypic from '../Resources/photo.jpeg';
import {AiFillFilePdf,AiFillLinkedin,AiOutlineMail,AiFillGithub} from "react-icons/ai";
import {SiLeetcode} from "react-icons/si";
function About(props){
    return(
        <div>
            <div className="head">
                <div className="card">
                   <div className="picture">
                      <img src={mypic}></img>
                     </div>
                  <div className="detailing">
                      <div className="desc">
                           <h1>
                                  Divya Singh
                            </h1>
            <p>
                Java | Python | Html | Css | JavaScript | React js
            </p>
            </div> 
           
            <p>
                I am a final year Engineering student.<br/>
                Pursuing Information Technology from
                University Institute of Technology, Burdwan.<br/>
                You can contact me or download my resume from the below details.

            </p>
            
            </div>
                 <div className="lowericon">
                    <div className="icon">
                    <a href="https://bit.ly/3PzMiBl" target="_blank">
                        <AiFillFilePdf size={50}/>


                    </a>
                    <p>
                        Resume
                    </p>
                    </div>
                    <div className="icon">
                    <a href="https://leetcode.com/divyasinghcsit/" target="_blank">
                        <SiLeetcode size={50}/>


                    </a>
                    <p>
                        Leetcode
                        </p>
                    </div>
                    
                    <div className="icon">
                    <a href="https://bit.ly/3NTBEUx" target="_blank">
                        <AiFillLinkedin size={50}/>


                    </a>
                    <p>
                        Linkedin
                    </p>
                    </div>
                    <div className="icon">
                    <a href="https://github.com/Divyasinghcs" target="_blank">
                        <AiFillGithub size={50}/>


                    </a>
                    <p>
                        Github
                    </p>
                    </div>
                    <div className="icon">
                        <AiOutlineMail size={50}/>

                    <p>
                        divyasinghcsit@gmail.com
                    </p>
                    </div>

                 </div>
            </div>
            </div>
        </div>
    );

}
export default About;