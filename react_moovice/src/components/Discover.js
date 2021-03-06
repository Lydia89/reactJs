import React, { Component } from 'react';
///import placeholder from '../img/placeholder.png'
import Card from './movie/Card'
//import moment from 'moment'
import { getLatestMovies } from '../service/network'
class Home extends Component {


    state = {
        movies: [],
        poster_path: '',
        title: '',
        overview: '',

    }

    componentDidMount() {
        //Bonuss
        getLatestMovies().then(movies => {
            this.setState({ movies })
        })
        /*
        const TODAY = moment().toISOString();
        const NEXT_WEEK = moment().add(1, 'week').toISOString()
        console.log('discover today', TODAY)
        console.log('discover NEXTWEEK', NEXT_WEEK)

       
        const url=`http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${TODAY}&primary_release_date.lte=${NEXT_WEEK}&api_key=134d92c3d72c8501356da2496ace8c7e`

        //fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=134d92c3d72c8501356da2496ace8c7e")
            
        fetch(url)
        .then(res => res.json())
            .then(json => {
                //console.log(json)
                console.log('Discover json ',json)
                const movies = json.results.map((elem) => {
                    return {

                        title: elem.title,
                        description: elem.overview,
                        imgUrl: elem.poster_path ? `https://image.tmdb.org/t/p/w300/${elem.poster_path} ` : placeholder

                    }
                })
                this.setState({ movies })

                console.log('movice', json.results)
            })
            */
    }



    render() {
        const {
            movies
        } = this.state

        return (
            <div>

                {movies.map((elem, index) => {
                    return <Card key={index} title={elem.title} description={elem.description} imgUrl={elem.imgUrl} />
                })}

            </div>
        )
    }
} export default Home