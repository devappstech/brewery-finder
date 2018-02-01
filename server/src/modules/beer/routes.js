import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
  res.json([
    {
      name: 'Budweiser',
    },
    {
      name: 'Coors light',
    },
  ]);
});

export default routes;
