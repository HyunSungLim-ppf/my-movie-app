import React from 'react'
import './news.css'
import { Link } from 'react-router-dom'
import { CommingMovie } from '../CommingMovie/CommingMovie'
import { NewsArticle } from '../NewsArticle/NewsArticle'
const News = () => {
    return (
        <div className='news_container'>
            {/* Title */}
            <div className="news_title_container">
                <h1>#News</h1>
                <div className="news_title_bg" style={{ backgroundImage: "url(/my-movie-app/images/news/news_title_bg_img.png)" }}></div>
            </div>
            {/* Container */}
            <div className="new_movies_container">
                {/* New Movies Title */}
                <h1>Up Comming New Movies</h1>

                {/* New Movies Card Container */}
                <div className="new_movie_card_container">

                    {/* New Movie Card */}
                    <CommingMovie id={1} imgSrc={`/my-movie-app/images/news/new_movie_0${1}_logo.png`} commingDate="2025.06.06" traillerLink="http://www.naver.com" />
                    <CommingMovie id={2} imgSrc={`/my-movie-app/images/news/new_movie_0${2}_logo.png`} commingDate="2025.06.06" traillerLink="http://www.naver.com" />
                    <CommingMovie id={3} imgSrc={`/my-movie-app/images/news/new_movie_0${3}_logo.png`} commingDate="2025.06.06" traillerLink="http://www.naver.com" />
                    <CommingMovie id={4} imgSrc={`/my-movie-app/images/news/new_movie_0${4}_logo.png`} commingDate="2025.06.06" traillerLink="http://www.naver.com" />
                </div>

                {/* Movie News Container */}
                <div className="movie_news_container">
                    {/* Title */}
                    <h1>Now News</h1>
                    {/* Movie News Card Container */}
                    <div className="movie_news_card_container">
                        {/* Movie News Card */}
                        <NewsArticle id={1} imgSrc={`/my-movie-app/images/news/news_img_0${1}.png`}
                            articleLink="https://variety.com/2024/film/awards/afi-awards-top-10-wicked-anora-dune-2-1236236697/"
                            articleTitle="AFI Awards: ‘Anora,’ ‘Emilia Pérez’ and ‘Wicked’ Among 10 Best Films, Top TV Shows Include ‘The Penguin’ and ‘Shogun’"
                            articleText="The American Film Institute has unveiled its list of the 10 best films and television programs of the year, a selection that reflects the rich diversity of storytelling across genres, budgets and platforms. The 2024 AFI Awards honorees highlight a blend of blockbuster hits, indie darlings, and bold artistic visions, cementing their place as a pivotal moment in the awards season calendar." />

                        <NewsArticle id={2} imgSrc={`/my-movie-app/images/news/news_img_0${2}.png`}
                            articleLink="https://deadline.com/2024/12/bobby-farrelly-to-direct-drivers-ed-comedy-jonas-pate-agc-studios-1236195215/"
                            articleTitle="Bobby Farrelly To Direct Road Trip Comedy ‘Driver’s Ed’ For ‘Outer Banks’ Jonas Pate & AGC Studios"
                            articleText="Exclusive: Following the November 25 Paramount+ launch of his holiday comedy Dear Santa, Bobby Farrelly has closed a deal to direct Driver’s Ed, a teen ensemble comedy to be fully financed and co-produced by Stuart Ford’s AGC Studio." />

                        <NewsArticle id={3} imgSrc={`/my-movie-app/images/news/news_img_0${3}.png`}
                            articleLink="https://www.thewrap.com/50-cent-action-fast-channel-roku-lionsgate/"
                            articleTitle="50 Cent to Curate Fast Channel on Roku in Partnership With Lionsgat"
                            articleText="Curtis “50 Cent” Jackson will curate a new Fast channel in partnership with Roku and Lionsgate.

                            The 50 Cent Action Channel, which is slated to launch on Dec. 10, will draw from Lionsgate’s library of more than 20,000 titles to curate the media mogul’s favorite TV shows and movies, including “The Expendables,” “The Hitman’s Bodyguard,” “Rambo” and the original “Power” series. The channel, which marks one of the first talent-branded Fast channels, will also feature over a dozen films featuring 50 Cent himself." />
                    </div>

                    {/* More News */}
                    <div className='more_news_container'>
                        <a href="https://www.imdb.com/news/movie/" target='_blank'>More News</a>
                        <div className="line"></div>
                        <p>provided by imdb.com News Feed</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default News
