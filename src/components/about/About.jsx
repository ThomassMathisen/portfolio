import "./about.css"
import Award from "../../img/award.png";

export const About = () => {
  return (
    <div className="about">
      <div className="aboutLeft">
        <div className="aboutCard bg"></div>
        <div className="aboutCard">
          <img 
            src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            className="aboutImg" 
            alt="" 
          />
        </div>
      </div>
      <div className="aboutRight">
        <h1 className="aboutTitle">About Me</h1>
        <p className="aboutSub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="aboutDesc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
        </p>
        <div className="aboutAward">
          <img src={Award} alt="" className="aboutAwardImg" />
          <div className="aboutAwardTexts">
            <h4 className="aboutAwardTitle">Internation Design Awards 2022</h4>
            <p className="aboutAwardDesc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About