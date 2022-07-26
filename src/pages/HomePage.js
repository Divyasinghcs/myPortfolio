import "./HomePage.css";
import mypic from '../Resources/photo.jpeg';
function HomePage(props){
    return(
        <div >
            <div className="home">
                <div className="description">
                   <div className="image">

                   <img src={mypic}></img>
                   </div> 
                    <div className="detail"><h1 >
                       <em>
                       
                       Divya Singh
                      
                        </em> 
                    </h1>
                    <p>
                        I am a final year student.<br/>
                        Pursuing Information Technology from <br/>
                        University Institute of Technology, Burdwan.
                    </p>
                    </div>
                </div>

            </div>
            
        </div>

    );

}
export default HomePage;