const prisma = require('../prismaC');
const bcrypt = require('bcrypt');

const getUsers = async (req, res) => {
  const { limit = 10, sort = 'id', order = 'asc' } = req.query;
  try {
    const users = await prisma.user.findMany({
      take: parseInt(limit),
      orderBy: {
        [sort]: order
      }
    });
    if (users.length === 0) return res.status(404).json({ message: "No users found" });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: { id: parseInt(id) }
    });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createUser = async (req, res) => {
  const { username, password, email } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
        email
      }
    });
    res.status(201).json({ id: user.id, message: "User created!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { username, password, email } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.update({
      where: { id: parseInt(id) },
      data: {
        username,
        password: hashedPassword,
        email
      }
    });
    res.status(200).json({ message: "User updated!", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.order.deleteMany({
      where: { userId: parseInt(id) }
    });
    const user = await prisma.user.delete({
      where: { id: parseInt(id) }
    });
    res.status(200).json({ message: "User deleted!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getUsers, getUser, createUser, updateUser, deleteUser };

