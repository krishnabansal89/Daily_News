import React, { Component } from 'react'
import Loader from './Loader'

import NewsCom from './NewsCom';

export default class News extends Component {
    article = []

    constructor(props) {
        super(props);
        console.log(this.props)
        // console.log('hello')
        this.state = {
            article: this.article,
            image: './logo512.png',
            page: 1,
            total: 15,
            cg: this.props.category,
            loading: false,
        }
        this.updateNews = this.updateNews.bind(this);
        { this.state.loading && <Loader /> }
    }

    async Next() {
        if (this.state.page + 1 <= Math.ceil(this.state.total / 15)) {
            await this.setState({ page: this.state.page + 1 })
            console.log(this.state.page)
            this.updateNews()
        }

    }
    async Previous() {
        if (this.state.page >1) {
            await this.setState({ page: this.state.page -1 })
            console.log(this.state.page)
            this.updateNews()
        }
        

    }
    async updateNews() {
        this.setState({ loading: true })
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.state.cg}&pageSize=15&apiKey=ec9be39662364ef2ba726aecb78cda5d&page=${this.state.page}`
        let data = await fetch(url)
        let parsed = await data.json()
        this.setState({ article: parsed.articles, total: parsed.totalResults, loading: false })
    }


    async componentDidMount() {
        this.setState({ loading: true })
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.state.cg}&pageSize=15&apiKey=ec9be39662364ef2ba726aecb78cda5d&page=${this.state.page}`
        let data = await fetch(url)
        let parseddata = await data.json()
        // console.log('fff')
        this.setState({ article: parseddata.articles, total: parseddata.totalResults, loading: false })
    }
    render() {
        return (
            <>
                <div className='items'>
                    {this.state.loading && <Loader />}
                    {this.state.article.map((element) => {
                        console.log(element.publishedAt)
                        return <div key={element.url}>
                            <NewsCom title={!element.urlToImage ? this.state.image : element.urlToImage} url={element.url} desc={element.title.slice(0, 80) + '...'} date = {!element.publishedAt?'Unknown' : element.publishedAt.substring(0, 10)} />
                        </div>
                    }
                    )}

                </div>
                <div className="buttons">
                    <button onClick={this.Previous.bind(this)}>Previous</button>

                    <button onClick={this.Next.bind(this)}>Next</button>

                </div>
            </>
    )}


}
