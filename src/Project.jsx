import pic1 from "./assets/spendly.png";
import pic2 from "./assets/50days.png";
import pic3 from "./assets/port.png";
import pic4 from "./assets/irth.png";
import pic5 from "./assets/todo.png";
import pic6 from "./assets/cal.png";

function Project() {
    return(
        <div id="project" className="whole">
            <div className="proj">
                <h3>My Projects ⚙️</h3>
                <p>Featured work — live demos & source</p>
            </div>
            <div className="projects">
                <div className="d">
                    <img src={pic1} />
                    <h4>Spendly — Expense Tracker</h4>
                    <p>A modern expense tracking web app with quick-add expenses, monthly summaries, and responsive UI. <a href="https://spendly-blue.vercel.app" target="_blank">View Live</a></p>
                </div>
                
                <div className="d">
                    <img src={pic2} />
                    <h4>50 Days Exercise — Fitness Tracker</h4>
                    <p>Daily workout tracker with progress view, motivational badges and responsive design to keep users consistent. <a href="https://subtle-maamoul-4cfe3f.netlify.app" target="_blank">View Live</a></p>
                </div>

                <div className="d">
                    <img src={pic3} />
                    <h4>My First Portfolio Website</h4>
                    <p>My very first step into web development. A simple yet creative personal portfolio built with pure HTML, CSS, and a bit of JavaScript to showcase my skills, projects, and growth as a developer. <a href="https://superlative-alfajores-9248b0.netlify.app" target="_blank">View Live</a></p>
                </div>

                <div className="d">
                    <img src={pic4} />
                    <h4>My Mum’s Birthday Website</h4>
                    <p>A heartfelt, custom-built webpage I designed to celebrate my mum’s birthday. It featured animations, photos, and personalized messages — combining creativity and emotion through code. <a href="https://lambent-empanada-f2dc79.netlify.app" target="_blank">View Live</a></p>
                </div>

                <div className="d">
                    <img src={pic5} />
                    <h4>React To-Do List App</h4>
                    <p>My first React project, built to manage daily tasks with a clean interface and real-time updates. It helped me understand React’s components, state management, and user interaction flow. <a href="https://spiffy-klepon-3ae5f2.netlify.app" target="_blank">View Live</a></p>
                </div>

                <div className="d">
                    <img src={pic6} />
                    <h4>Calculator</h4>
                    <p>A functional and responsive calculator built with HTML, CSS, and JavaScript. It performs basic arithmetic operations with a clean UI and smooth button interactions, showcasing my JavaScript logic and design skills. <a href="https://famous-fenglisu-08694f.netlify.app" target="_blank">View Live</a></p>
                </div>
            </div>
        </div>
    )
}

export default Project;