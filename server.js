const http=require('http');
const app=require('./app');

const server=http.createServer(app);

const post=process.env.PORT || 80;
server.listen(post,()=>{
    console.log('Server is running on port 3000');
});