const withAuth = (req, res, next) => {
    if (!req.seeion.userId){
        res.redirect('./login');
    } else {
        next();
    }
};