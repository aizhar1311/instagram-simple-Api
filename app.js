const axios = require('axios')
const qs = require("qs")
const cheerio = require('cheerio')
const izhar = require('./fun');
const port = 7777;
const express = require('express')
const app = express();

require ('./settings')


app.get('/igd', async (req, res, next) => {
	var url = req.query.url
	if (!url ) return res.json({ status : false, message : "[!] masukan parameter url"})   
	
	izhar.igdl(url)
	.then(data => {
		if (!data ) return res.json(loghandler.noturl)
		var result = data
        // console.log(result)
		res.json({
            status :true,
			result
		})
		})
         .catch(e => {
            res.json(loghandler.error)
			 res.send(console.log(e))
        })
})
const ListApi =([
    {
        nama:'instagram Api',
        api:'domain/igd?url=urlig'
    },
    {
        sss:"adawd"
    }   
 ]) 
let CApi = ListApi.length
app.get('/', (req, res) => {
    res.json({
        Status:'instagram Api',
        Creator :'Ahmad Izhar',
        Instagram :'https://instagram.com/ahmadiizhar',
        jumlahApi :CApi,
        ListApi
     })
  })


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })