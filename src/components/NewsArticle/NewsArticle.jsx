import React from 'react'
import './newsArticle.css'

export const NewsArticle = (props) => {
    const {id, imgSrc, articleTitle, articleText, articleLink} = props
    return (
        <div className="movie_news_card">
            <img src={imgSrc} alt="news image" />
            <div className="text_container">
                <a href={articleLink} target='_blank'>{articleTitle}📰</a>
                <p>{articleText}</p>
            </div>
        </div>
    )
}
