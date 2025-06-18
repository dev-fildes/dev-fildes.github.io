import './windowsCSS.css';
import './assets/minimize.svg'
import selfie from './assets/instant messenger_messenger_icon.png';

const Windows = () => {
    window.addEventListener('load', () => {
        const tabButtons = document.querySelectorAll(`.tabs--pills .btn`)
        const tabContents = document.querySelectorAll(`.tabs--panels > div`)

        if (tabButtons && tabContents) {
            tabButtons.forEach((tabBtn) => {
                tabBtn.addEventListener("click", () => {
                    const tabId = tabBtn.getAttribute("data-id");
                    tabButtons.forEach((btn) => btn.classList.remove('active'));
                    tabBtn.classList.add('active');

                    tabContents.forEach((content) => {
                        content.classList.remove('active');

                        if (content.id === tabId) {
                            content.classList.add('active');
                        }
                    });
                });
            });
        }
    });

    return (<div className="windowsContainer">
        <div className="windows--windowMain">
            <div className="windows--titleBar">
                <span className="windows--titleBarText">Sarah Fildes // Portfolio</span>
                <div className="windows--titleBarControls">
                    <button aria-label="Minimize"></button>
                    <button aria-label="Maximize"></button>
                    <button aria-label="Close"></button>
                </div>
            </div>


            <div className="windows--contentContainer">
                <div className="windows--creatorPane">
                    <div className="windows--creatorPaneContent">
                        <img src={selfie} className="windowSelfie" alt="picture"/>
                        <div className="windows--creatorInfo">
                            Sarah Fildes <span className="windows--creatorStatus">(Available)</span>
                            <div className="windows--creatorStatus"><a href="https://docs.google.com/document/d/1JkPcXgVyxcBRyjM_m6nOTXONDxcG_2I81Qu2MpJffS8/edit?usp=sharing" alt={"Link to resume"}>{`Download Resume`}</a></div>
                        </div>
                    </div>
                </div>
                <div className="windows--browserPane">
                    <div className="tabs">
                        <div className="tabs--pills">
                            <button className="btn active" data-id="about">
                                about
                            </button>
                            <button className="btn" data-id="projects">
                                projects
                            </button>
                            <button className="btn" data-id="other">
                                other
                            </button>
                        </div>
                        <div className="tabs--panels">
                            <div id="about" className="active">
                                Software Engineer, PC-builder, and creative writer. Based out of Boston, Massachusetts.
                                <br/><br/>
                                e-mail: devfildes@gmail.com
                            </div>
                            <div id="projects">Off the Rails: Project done utilizing Javascript, React and Ruby on Rails during my time during Launch Academy with three other project members. (Currently offline, working on redeploying) </div>
                            <div id="other">
                                Theme: Windows 98 Throwback</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
export default Windows;