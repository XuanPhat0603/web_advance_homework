import actorModel from '../models/actor.model.js';

export const getActor = async (req, res) => {
    const list = await actorModel.findAll();
    res.json({
        ok: true,
        data: list,
    });
};

export const postActor = async (req, res) => {
    let actor = req.body;
    const ret = await actorModel.add(actor);

    actor = {
        actor_id: ret[0],
        ...actor,
    };

    res.json(actor);
};
