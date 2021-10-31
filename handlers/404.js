module.exports = (req, res) => {
    res.status(404).send({
        error: 404,
        message: 'So Path Not Found'
    })
}