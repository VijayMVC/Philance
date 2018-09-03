var config={
    development:{
        unsecure:{
            protocol:'http://',
            host:'localhost',
            port:':3000'
        }
    },
    testing:{
        unsecure:{
            protocol:'http://',
            host:'philance.hopto.org',
            port:':3001'
        },
        secure:{
            protocol:'https://',
            host:'philance.hopto.org',
            port:':3001'
        },
    },
    production:{
        unsecure:{
            protocol:'http://',
            host:'philance.hopto.org',
            port:':3001'
        },
        secure:{
            protocol:'https://',
            host:'philance.hopto.org',
            port:':3001'
        },
    },
}
module.exports=config;