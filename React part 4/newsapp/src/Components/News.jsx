import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
    static defaultProps = {
        country: 'us',//india,
        pageSize:5,
        category:'general'
      }

      static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
      }

    constructor() {
        super();
        console.log("check constructor");
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0 // Initialize totalResults in the state
        };
    }

    async componentDidMount() {
        console.log("cdm");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4ee7896ee7494e00ae85408e9b702f8f&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, 
            loading:false });
    }

    handlePrevClick = async () => {
        console.log("prev");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4ee7896ee7494e00ae85408e9b702f8f&page=
        ${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading:false,
        });
    }

    handleNextClick = async () => {
        console.log("next");
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
            // return; // No need to fetch next page if already at the end
        
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}category=${this.props.category}&apiKey=4ee7896ee7494e00ae85408e9b702f8f&page=
            ${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({loading:true});
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading:false,
            });
        }
    }

    render() {
        console.log('render');
        return (
            <div className='container my-3'>
                <h2 className='text-center'>Top News</h2>
                {this.state.loading && <Spinner/>}
                <div className='row'>
                    {!this.state.loading && this.state.articles.map((element) => {
                        return (
                            <div className='col-md-4' key={element.url}>
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                            </div>
                        );
                    })}
                </div>
                <div className='container d-flex justify-content-between'>
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; previous</button>
                    <button disabled={(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))} type="button" className="btn btn-dark" onClick={this.handleNextClick}>next &#8594;</button>
                </div>
            </div>
        );
    }
}

export default News;
