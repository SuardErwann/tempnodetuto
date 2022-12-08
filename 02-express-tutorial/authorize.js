const authorize = (req, res, next) => {
    const {user} = req.query;
    if(user){
        req.user = {name: user, id: 1};
        // console.log(req.user);
    } 
    else {
        req.user = {name: 'Guest', id: 0};
        // console.log(req.user);
    }
    next();
};

module.exports = authorize;