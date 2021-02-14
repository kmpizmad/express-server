import { Controller, Message } from '../../../types';
import { setLogging } from '../../middlewares';

export const getController: Controller = async (req, res, next) => {
  const msg: Message<'Info'> = {
    name: 'Test',
    message: 'Successfully loaded the test route!',
  };

  res.json(msg);

  setLogging({ req, res, next }, { level: 'info' });
  next();
};
