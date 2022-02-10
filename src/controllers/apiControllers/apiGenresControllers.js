const db = require('../../database/models');
const fetch = require('node-fetch');
const axios = require('axios');

module.exports = {
    list: (req, res) => {
        db.Genre.findAll()
            .then((genres) => {
                res.status(200).json({
                    meta: {
                        status: 200,
                        total: genres.length,
                        url: '/api/genres',
                    },
                })
            })
    },
    detail: (req, res => {
        db.genres.findPk({
            meta: {
                status: 200,
                total: 12,
                url: `${req.baseUrl}/${req.params.id}`
            },
            fetch: (req, res) => { 
                fetch('https://restcountries.com/v3.1/all') 
                .then(response => response.json()) 
                .then(countries => { 
                    res.render('countries', {countries
                    }) 
                }) 
            },
            fetch2: (req, res) => { 
                axios.get('http://localhost:3001/api/genres')
                .then(result=>{
                    res.render('genresList',{
                        genres: resault.data
                    })
                })
                /* fetch('http://localhost:3001/api/genres') 
                .then(response => response.json()) 
                .then(genres => { 
                    res.render('genresList', {
                 genres: genres.data 
                    })
                }) */
            }
        })
    })
}