const logoutController = {};

logoutController.logout = async(req, res) =>{
    //limpiar cookies

    res.clearCokie("authToken");
    return res.json({message: "Session closed"});

};

export default logoutController