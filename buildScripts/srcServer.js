import express from 'express';
import open    from 'open';
import compression from 'compression';
import buildProperties from '../build.properties';

const  port    = 3000,
       app     = express();

app.use(compression());
app.use(express.static(buildProperties.distPath));

app.listen(port, (err) => {
  err ? console.log(err) : open('http://localhost:' + port + buildProperties.prodContextRoot) ;
});
