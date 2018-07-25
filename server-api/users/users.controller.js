// var connectionPool = require('../util/dbconnection');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
var moment = require('moment')
var users = require("./users.model");
const sequelize = require('../util/dbconnection');

exports.register = (req, res, next) => {

    sequelize.sync().then(() => users.findOne({ where: { email: req.body.email } }).then(_user => {
        console.log('_user : ' + _user);
        if (_user == null) {
            console.log('Not Registered');
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if (err) {
                    return res.status(500).json({
                        error: "password hashing failed! detailed error as follows - " + err
                    });
                } else {                    
                    users.create({
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        email: req.body.email,
                        password: hash
                    }).then((_user) => {
                        res.status(200).json({
                            message: "User # " + req.body.firstName + " " + req.body.lastName + " Registered Successfully",
                            user : _user
                        });
                    })
                }
            })
        } else {
            console.log('User Registered');
            return res.status(409).json({
                message: "User # " + req.body.firstName + " " + req.body.lastName + " already registered",
                user : _user
            })
        }

    }
    )
    )
}

exports.login = (req, res, next) => {

    sequelize.sync().then(() => users.findOne({
        where: { email: req.body.email }
    }).then(_user => {

        bcrypt.compare(req.body.password, _user.password, (err, result) => {
            if (err) {
                return res.status(409).json({
                    message: "authentication failed"
                });
            }

            if (result) {
                const token = jwt.sign(
                    {
                        email: _user.email,
                        userId: _user.userId
                    }, 'philance_secret',
                    process.env.JWT_KEY,
                    {
                        expiresIn: "1h"
                    }
                );
                return res.status(200).json({
                    message: "authentication successful",
                    token: token
                });
            }
            res.status(409).json({
                message: "authentication failed"
            });
        });

    })
    )

}
    
exports.search = (req, res, next) => {
    //TODO: Add Validators
    var userName;
    if(Object.keys(req.query).length === 0){
        var searchQuery = 'SELECT * from users';
        connectionPool.query(searchQuery, (err, users) => {
            if (err) {
                res.status(500).send('Error with the database')
                return;
            } else {
                res.status(200).send(users);
            }
        })
    }else{
        var firstName=req.query.fname;
        var personType=req.query.pType;
        var lastName=req.query.lname;
        var location=req.query.loc;
        var distance=req.query.dist;
        var searchQuery = 'SELECT * FROM users WHERE fname LIKE ? AND lname LIKE ?';
        connectionPool.query(searchQuery,[firstName,lastName],(err,users)=>{
            if (err) {
                res.status(500).send('Error with the database'+err)
                return;
            } else {
                res.status(200).send(users);
            }
        })
        // res.status(200).send(req.query);
    }
}

exports.passwordReset = (req, res, next) => {
    //   User.remove({ _id: req.params.userId })
    //     .exec()
    //     .then(result => {
    //       res.status(200).json({
    //         message: "User deleted"
    //       });
    //     })
    //     .catch(err => {
    //       console.log(err);
    //       res.status(500).json({
    //         error: err
    //       });
    //     });
    console.log("In user password reset Controller");
};


