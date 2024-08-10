const axios = require('axios');         //inisiasi library axios untuk melakukan get ke OpenWeather

const getWeather =  async (req, res) => {
    const city = req.query.city;
    const apiKey = process.env.API_KEY;

    //memastikan apakah city ada atau belum
    if (!city) {
        return res.status(400).json({ error: 'City name is required' });
    }

    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
            params: {
                q: city,
                appid: apiKey,
                units: 'metric'
            }
        });

        const weatherData = response.data;
        res.json({
            city: weatherData.name,
            temperature: weatherData.main.temp,
            description: weatherData.weather[0].description,
            humidity: weatherData.main.humidity,
            windSpeed: weatherData.wind.speed,
        })
    } catch (error) {
        //kondisi jika city tidak ada dan gagal mengambil data
        if (error.response && error.response.status === 404) {
            res.status(404).json({ error: 'City not found' });
        } else {
            res.status(500).json({ error: 'Failed to fetch weather data' });
        }
    }
}

module.exports = {
    getWeather
}