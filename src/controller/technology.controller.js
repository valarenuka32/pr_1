const { technologyService } = require("../services");

const createTechnology = async (req, res) => {
    try {
        const reqBody = req.body;

        const technology = await technologyService.createTechnology(reqBody);

        res.status(200).json({
            success: true,
            message: "technology create successfully!",
            data: { technology },
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// get list
const technologyList = async (req, res) => {
    try {
        const getList = await technologyService.technologyList();

        res.status(200).json({
            success: true,
            message: "Get technology list successfully!",
            data: { getList }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// update detailes
const updateRecode = async (req, res) => {
    try {
        const technologyId = req.params.technologyId;

        const technologyEx = await technologyService.getTechnologyById(technologyId);
        if (!technologyEx) {
            throw new Error("technology not found");
        }

        await technologyService.updateRecode(technologyId, req.body);
        res.status(200).json({
            success: true,
            message: "technology detiles update successfully!"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// delete list
const deleteRecode = async (req, res) => {
    try {
        const technologyId = req.params.technologyId;

        const technologyEx = await technologyService.getTechnologyById(technologyId);
        if (!technologyEx) {
            throw new Error("technology not found");
        };

        await technologyService.deleteRecode(technologyId, req.body);
        res.status(200).json({
            success: true,
            message: "technology detiles delete successfully !"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = { createTechnology, technologyList, deleteRecode, updateRecode }