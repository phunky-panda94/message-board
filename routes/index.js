var express = require('express');
var router = express.Router();

const messages = [
    {
        text: 'Hi there!',
        user: 'John',
        added: new Date().toLocaleDateString()
    },
    {
        text: 'Hey',
        user: 'Charlie',
        added: new Date().toLocaleDateString()
    }
]

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Message Board',
        messages: messages
    });
});

router.post('/new', function (req, res, next) {
    messages.push(
        {
            text: req.body.message,
            user: req.body.author,
            added: new Date().toLocaleDateString()
        }
    );
    res.redirect('/');
})

module.exports = router;
