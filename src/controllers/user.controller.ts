import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../entity';

const getUsers = async (req: Request, res: Response): Promise<Response> => {
  const users = await getRepository(User).find();

  return res.json(users);
};

const getUserById = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  const user = await getRepository(User).findOne(id);

  if (user) return res.json(user);

  return res.status(404).json({ msg: 'User not found' });
};

const createUser = async (req: Request, res: Response): Promise<Response> => {
  const newUser = getRepository(User).create(req.body);
  const results = await getRepository(User).save(newUser);

  return res.json(results);
};

const updateUser = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  const user = await getRepository(User).findOne(id);

  if (user) {
    getRepository(User).merge(user, req.body);

    const updatedUser = await getRepository(User).save(user);

    return res.json(updatedUser);
  }

  return res.status(404).json({ msg: 'User not found' });
};

const deleteUser = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  const deletedUser = await getRepository(User).delete(id);

  if (deletedUser) return res.json(deletedUser);

  return res.status(404).json({ msg: 'User not found' });
};

export default { getUsers, getUserById, createUser, updateUser, deleteUser };
