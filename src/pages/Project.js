import "./Project.css";
import gp from "../Resources/gp.png";
import mathguide from "../Resources/mathguide.png";
function Project(props) {
  return (
    <div>
      <div className="project">
        <h1>Project</h1>

        <div className="allProject">
          <div className="projectCard">
            <div className="projectimage">
              <img src={gp} alt="gp"></img>
            </div>
            <div className="contents">
              <h2>Gaming Paradise (React js)</h2>
              <br />
              <br />
              <p>
                • This is a gaming website where user have choice of 6 games
                like sudoku, block smasher, Flames, Snake games, etc.
                <br />• I used React routes, states, hooks and other react tools
                for project.
              </p>
            </div>
          </div>
          <div className="projectCard">
            <div className="projectimage">
              <img src={mathguide} alt="mathguide"></img>
            </div>
            <div className="contents">
              <h2>Mathguide (ReactJS)</h2>
              <br />
              <br />
              <p>
                • This is a static website where you will find some usefull
                calculators/convertors.
                <br />• There are 5 functions on this website <br />
                <b>
                  Simple Calculator, Temperature Converter, Quadratic Equation
                  Solver, Logarithm Solver, HCF & LCM Solver
                </b>{" "}
                .
              </p>
            </div>
          </div>
          <div className="projectCard">
            <div className="projectimage">
              <img src={gp} alt="gp"></img>
            </div>
            <div className="contents">
              <h2>The Gaming paradise is a React js project</h2>
              <br />
              <br />
              <p>
                • This is a gaming website where user have choice of 6 games
                like sudoku, block smasher, Flames, Snake games, etc.
                <br />• I used React routes, states, hooks and other react tools
                for project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Project;
