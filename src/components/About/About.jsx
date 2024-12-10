import React from 'react'
import './about.css'

const About = () => {
    return (
        <div className='about_container'>
            {/* Title */}
            <div className="about_title_container">
                {/* <h1 className='about_title' style={{backgroundImage: "url(./images/about_title_bg.png)"}}>#What's About</h1> */}
                <h1>#What's About</h1>
                {/* <img src="./images/about_title_bg.png" alt="about_title_bg" /> */}
                <div className="about_title_bg" style={{ backgroundImage: "url(/my-movie-app/images/about/about_title_bg_img.png)" }}></div>
            </div>

            {/* Contents */}
            <section className="contents">
                {/* Content1 */}
                <article className="content1">
                    {/* Contents1 Title */}
                    <h1>Don't know which movie to watch?</h1>
                    {/* Contents1 text */}
                    <div className="content1_text_container">
                        <p>Hayashi-Movie-App's helpful for your choice</p>
                        <p>Hayashi-Movie-App's provids Top Movie List by each Genres that "Adventure", "Action", "Crime" etc...</p>
                        <p>This Service more helpful to your choice When "I can't choice to witch movie😢"</p>
                        <p>N' Provided Top Movie List by each Genres also helpful "You wish to a particular Genre Movie"</p>
                        <p>Enjoy! for your Movie Select👍</p>
                    </div>
                    {/* Contents1 Img */}
                    <div className="content01_img">
                        <img src="" alt="" />
                    </div>
                    {/* bg Popcorn Image */}
                    <img src="/my-movie-app/images/about/popcorn_img_01.png" alt="Popcorn Image01" id='popcorn1' />
                    <img src="/my-movie-app/images/about/popcorn_img_01.png" alt="Popcorn Image01" id='popcorn2' />
                    <img src="/my-movie-app/images/about/popcorn_img_02.png" alt="Popcorn Image02" id='popcorn3' />
                </article>

                {/* Content2 */}
                <article className="content2">
                    {/* Contetn2 Imgas */}
                    <div className="content2_img_container">
                        <img src="/my-movie-app/images/about/will_smith.png" alt="will smith" />
                    </div>
                    <div className="content2_text_container">
                        {/* Content2 Title */}
                        <h1>How to?</h1>
                        {/* Content2 Text */}
                        <div className="content2_text">
                            <p><span>Step1.</span> Select wish Movie Genre at Genres will provides Top Movie List by slected movie genre</p>
                            <p><span>Step2.</span> N, avaliable each movie short inforamtion likes title When you mouse enter each Movie Poster</p>
                            <p><span>Step3.</span> Click! any movie or your choice that more detail Information will be provide</p>
                            <p>In addition Each Movies detail page contained recommended similar movie list</p>
                        </div>
                    </div>
                </article>

            </section>

            {/* Content3 */}
            <section className='content3'>
                <img src="/my-movie-app/images/about/contents03_img.png" alt="bottom img" id='content2_bg' />
            </section>
        </div>
    )
}

export default About
