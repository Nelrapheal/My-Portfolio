import pic from "./assets/pp.jpg"

function About() {
    return(
        <div id="about" className="about">
            <img className="img" src={pic} />
            <div className="me">
                <h3>About</h3>
                <p>Who I am and how I build</p>
            </div>
            <div className="bio">
                <p>I’m Nelson — a frontend developer and a Ui/Ux designer who transforms ideas into immersive, usable websites using <b> HTML, CSS, React & JavaScript.</b> I focus on performance, clean UI, and delightful micro-interactions.</p>
                <div>
                    <progress value={'95'}></progress>
                    <span>HTML 95%</span>
                </div>

                <div>
                    <progress value={'90'}></progress>
                    <span>CSS 90%</span>
                </div>

                <div>
                    <progress value={'70'}></progress>
                    <span>JavaScript 70%</span>
                </div>

                <div>
                    <progress value={'50'}></progress>
                    <span>React 50%</span>
                </div>          

                <div>
                    <progress value={'98'}></progress>
                    <span>UI/Ux Design 98%</span>
                </div>                         
            </div>
        </div>
    )
}

export default About;