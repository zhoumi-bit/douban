var Mock = require('mockjs');
Mock.mock('/part','get',require('./json/shouye.json'));
Mock.mock('/find','get',require('./json/find.json'));
Mock.mock('/dianying','get',require('./json/move.json'));
Mock.mock('/tushu','get',require('./json/tushu.json'));
Mock.mock('/team','get',require('./json/team.json'));


