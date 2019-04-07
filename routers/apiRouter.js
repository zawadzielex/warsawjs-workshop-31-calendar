const { Router } = require('express');
const api = require('../db/api');

const router = Router();

const CALENDAR_RESPONSE = { "data": [{ "date": "2019-04-01", "events": [] }, { "date": "2019-04-02", "events": [] }, { "date": "2019-04-03", "events": [] }, { "date": "2019-04-04", "events": [] }, { "date": "2019-04-05", "events": [] }, { "date": "2019-04-06", "events": [{ "title": "asdasd", "id": "5ca8d236b88ea80031689143" }, { "title": "2", "id": "5ca8df04253edf003193e41a" }, { "title": "asdasd", "id": "5ca9c0d769afb7003101cd3d" }] }, { "date": "2019-04-07", "events": [] }, { "date": "2019-04-08", "events": [] }, { "date": "2019-04-09", "events": [] }, { "date": "2019-04-10", "events": [] }, { "date": "2019-04-11", "events": [] }, { "date": "2019-04-12", "events": [] }, { "date": "2019-04-13", "events": [] }, { "date": "2019-04-14", "events": [] }, { "date": "2019-04-15", "events": [] }, { "date": "2019-04-16", "events": [] }, { "date": "2019-04-17", "events": [] }, { "date": "2019-04-18", "events": [{ "title": "tet", "id": "5ca4c3f7b992740031c55154" }] }, { "date": "2019-04-19", "events": [] }, { "date": "2019-04-20", "events": [] }, { "date": "2019-04-21", "events": [] }, { "date": "2019-04-22", "events": [] }, { "date": "2019-04-23", "events": [] }, { "date": "2019-04-24", "events": [] }, { "date": "2019-04-25", "events": [] }, { "date": "2019-04-26", "events": [] }, { "date": "2019-04-27", "events": [] }, { "date": "2019-04-28", "events": [] }, { "date": "2019-04-29", "events": [] }, { "date": "2019-04-30", "events": [] }, { "date": "2019-05-01", "events": [] }, { "date": "2019-05-02", "events": [] }, { "date": "2019-05-03", "events": [] }, { "date": "2019-05-04", "events": [] }, { "date": "2019-05-05", "events": [] }, { "date": "2019-05-06", "events": [] }, { "date": "2019-05-07", "events": [] }, { "date": "2019-05-08", "events": [] }, { "date": "2019-05-09", "events": [{ "title": "asdasda", "id": "5ca4c406b992740031c55155" }] }, { "date": "2019-05-10", "events": [] }, { "date": "2019-05-11", "events": [] }, { "date": "2019-05-12", "events": [] }] };

const DAY_RESPONSE = {"data":[{"id":"5ca5ea7a3353960031b8b5eb","description":"brak opisu","time":"2019-04-12T02:00","title":"marchewkowe polejjjj","notification":true}]};

router.use('/', (req, res, next) => {
    if (req.isAuthenticated()) {
      next();
    } else {
        res.status(401);
      res.send('Session expired! Plese refresh page!');
    }
});

router.get('/api/calendar', async (req, res) => {
    const data = await api.getMonth(req.user.userId, req.query.month);

    console.log(['api/calendar']);
    res.status(200);
    res.send({ data });
});

router.get('/api/day', async (req, res) => {

    console.log(['api/day']);

    const data = await api.getDayEvents(req.user.userId, req.query.date);
    res.status(200);
    res.send({ data });
});

router.post('/api/event', async (req, res) => {

    console.log(['api/event'], req.body);
    const id = await api.addEvent(req.user.userId, req.body);
    res.status(200); // nie jest konieczne przy jawnej odpowiedz json
    res.send({ id });
});

router.put('/api/event/:id', async (req, res) => {

    console.log(['api/event'], req.body, req.params);
    res.status(200); // nie jest konieczne przy jawnej odpowiedz json
    const id = await api.updateEvent(req.params.id, req.body);
    res.send({ id });
});

router.delete('/api/event/:id', async (req, res) => {

    console.log(['api/event'], req.params);
    res.status(200); // nie jest konieczne przy jawnej odpowiedz json
    const id = await api.deleteEvent(req.params.id);
    res.send({ id });
});

module.exports = router;