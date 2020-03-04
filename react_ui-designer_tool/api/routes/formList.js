var express = require('express');
var router = express.Router();
var allFormList = [{
  name: 'Form builder 1',
  id:1,
  authior:'admin'
},{
  name: 'Form builder 1',
  id:1,
  authior:'manager'
},{
  name: 'Form builder 1',
  id:1,
  authior:'super_admin'
},{
  name: 'Form builder 1',
  id:1,
  authior:'user'
}]
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(allFormList);
});

module.exports = router;