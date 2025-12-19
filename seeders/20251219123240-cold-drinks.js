'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [
      {
        name: 'Vöslauer Mineral 0.5L',
        price: 2.00,
        category: 'Getränk',
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Coca Cola 0.5L',
        price: 2.50,
        category: 'Getränk',
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Red Bull',
        price: 2.80,
        category: 'Energy Drink',
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', {
      name: [
        'Vöslauer Mineral 0.5L',
        'Coca Cola 0.5L',
        'Red Bull',
      ],
    });
  },
};
