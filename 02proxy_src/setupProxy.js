const proxy = require('http-proxy-middleware')
const { func } = require('prop-types')

module.exports = function(app){
    app.use(
        proxy('/api1',{
            target:'http://localhost:3000',
            changeOrigin:true,
            pathRewrite:{
                '/api1':''
            }
        }),
        proxy('/api2',{
            target:'http://localhost:8888',
            changeOrigin:true,
            pathRewrite:{
                '/api2':''
            }
        })
    )
}