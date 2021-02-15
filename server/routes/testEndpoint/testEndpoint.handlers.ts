import { Controller, Message } from '../../../types';
import { setLogging } from '../../middlewares';

const data: any[] = [
  {
    name: 'Viktor',
    age: 23,
    occupations: ['Software developer', 'University student'],
    interests: ['IT', 'League of Legends', 'anime', 'TV shows', 'music'],
  },
  {
    name: 'Beni',
    age: 20,
    occupations: ['University student'],
    interests: ['League of Legends', 'anime', 'music'],
  },
  {
    name: 'Zsófi',
    age: 22,
    occupations: ['Assistant', 'University student'],
    interests: ['anime', 'TV shows', 'music', 'korean stuff', 'nails', 'art'],
  },
];

export const getController: Controller = async (req, res, next) => {
  const msg: Message<'Info'> = {
    name: 'Test',
    message: 'Successfully loaded the test route!',
    data,
  };

  res.json(msg);

  setLogging({ req, res, next }, { level: 'info' });
  next();
};

export const postController: Controller = async (req, res, next) => {
  const { body } = req;

  if (data.includes(body)) {
    const err: Message<'Error'> = {
      name: 'Error',
      code: 1046,
      type: 'ERR_DATA_EXISTS',
      message: 'Posted data already exists!',
    };

    return next(err);
  }

  const msg: Message<'Info'> = {
    name: 'Test',
    message: 'Successfully loaded the test route!',
    data: body,
  };

  res.status(201).json(msg);

  setLogging({ req, res, next }, { level: 'info' });
  next();
};
