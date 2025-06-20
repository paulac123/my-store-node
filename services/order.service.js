const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize');

class OrderService {
  constructor() {}

  async create(data) {
    const newOrder = await models.Order.create(data);
    return newOrder;
  }

  async addItem(data) {
    const newItem = await models.OrderProduct.create(data);
    return newItem;
  }

  async find() {
    return [];
  }

  async findOne(id) {
    const order = await models.Order.findByPk(id, {
      include: [
        {
          association: 'customer',
          include: ['user'], // si usas user dentro de customer
        },
        {
          association: 'items',
          through: {
            attributes: ['amount'], // para acceder a item.OrderProduct.amount
          },
        },
      ],
    });

    // Validación opcional para ver si items llegó
    console.log('Items cargados:', order.items?.length);
    console.log('Total:', order.total);

    return order;
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }
}

module.exports = OrderService;
