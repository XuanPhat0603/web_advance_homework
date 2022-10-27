const validate = (schema) => {
    return async (req, res, next) => {
        try {
            await schema.validate({
                body: req.body,
                query: req.query,
                params: req.params,
            });
            next();
        } catch (error) {
            return res.status(400).json({ ok: false, error: error.message });
        }
    };
};

export default validate;
