const express = require('express');
const app = express();
var path = require('path');
app.use('/static', express.static('public'))
app.use(express.static(__dirname));



app.get('/', function(req, res){
  res.sendFile(path.join(__dirname,'abot.html'));
});
app.listen(3000, function(){
  console.log("Listening on port 3000!")
});