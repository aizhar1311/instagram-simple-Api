const axios = require('axios');
const qs = require("qs")
const cheerio = require("cheerio")

function igdl(link){
	return new Promise((resolve, reject) => {
		let config = {
			'url': link
		}
		axios.post('https://saveinsta.net/download.php',qs.stringify(config),{
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:104.0) Gecko/20100101 Firefox/104.0",
            }
		})
		.then(({ data }) => {
		const $ = cheerio.load(data)
		resolve(
            {
            type: $('#downloadBox > video > source').attr('type'),
            Thumbnail: $('#downloadBox > img').attr('src'),
	        Poster: $('#downloadBox > video').attr('poster'),
            LinkDown: $('#downloadBox > a').attr('href'),
			})
		})
	.catch(reject)
	})
}
module.exports.igdl = igdl