export const showMsg = (req, res) => {
    res.status(200).send(req.params.message)
}

export const userRegister = async (req, res) => {
    console.log(req.body)
}