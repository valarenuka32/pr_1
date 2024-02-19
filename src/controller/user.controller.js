const { userService } = require("../services");

const register = async (req, res) => {
    try {
        const reqBody = req.body;

        const user = await userService.register(reqBody);
        if (!user) {
            throw new Error("User not found")
        }

        res.status(201).json({
            success: true,
            message: "User create successfully!",
            data: user
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

const login = async (req, res) => {
    try {
        const reqBody = req.body;

        const user = await userService.findUser(reqBody.email)

        if (!user) {
            throw new Error("User not found")
        }

        if (body.password != user.password) {
            res.status(400).json({ message: 'password invalid' })
        }

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }



}

module.exports = {
    register,
    login
};