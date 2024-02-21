const { companyService } = require("../services");

// create company
const createCompany = async (req, res) => {
    try {
        const reqBody = req.body;

        const company = await companyService.createCompany(reqBody);

        res.status(200).json({
            success: true,
            message: "company create successfully!",
            data: { company },
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// get list
const companyList = async (req, res) => {
    try {
        const getList = await companyService.companyList();

        res.status(200).json({
            success: true,
            message: "Get company list successfully!",
            data: { getList }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// update detailes
const updateRecode = async (req, res) => {
    try {
        const companyId = req.params.companyId;

        const companyEx = await companyService.getCompanyById(companyId);
        if (!companyEx) {
            throw new Error("company not found");
        }

        await companyService.updateRecode(companyId, req.body);
        res.status(200).json({
            success: true,
            message: "company detiles update successfully!"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// delete list
const deleteRecode = async (req, res) => {
    try {
        const companyId = req.params.companyId;

        const companyEx = await companyService.getCompanyById(companyId);
        if (!companyEx) {
            throw new Error("company not found");
        };

        await companyService.deleteRecode(companyId, req.body);
        res.status(200).json({
            success: true,
            message: "company detiles delete successfully !"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = { createCompany, companyList, deleteRecode, updateRecode }