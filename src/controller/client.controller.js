const { clientService } = require("../services");

// create client
const createClient = async (req, res) => {
    try {
        const reqBody = req.body;

        const client = await clientService.createClient(reqBody);

        res.status(200).json({
            success: true,
            message: "client create successfully!",
            data: { client },
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// get list
const clientList = async (req, res) => {
    try {
        const getList = await clientService.clientList();

        res.status(200).json({
            success: true,
            message: "Get client list successfully!",
            data: { getList }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// update detailes
const updateRecode = async (req, res) => {
    try {
        const clientId = req.params.clientId;

        const clientEx = await clientService.getClientById(clientId);
        if (!clientEx) {
            throw new Error("client not found");
        }

        await clientService.updateRecode(clientId, req.body);
        res.status(200).json({
            success: true,
            message: "client detiles update successfully!"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// delete list
const deleteRecode = async (req, res) => {
    try {
        const clientId = req.params.clientId;

        const clientEx = await clientService.getClientById(clientId);
        if (!clientEx) {
            throw new Error("client not found");
        };

        await clientService.deleteRecode(clientId, req.body);
        res.status(200).json({
            success: true,
            message: "client detiles delete successfully !"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = { createClient, clientList, deleteRecode, updateRecode }