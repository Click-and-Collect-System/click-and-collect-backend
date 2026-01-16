'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [
      {
        name: 'Plunder',
        price: 3.00,
        category: 'Snack',
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Plunder Schnecke',
        price: 3.00,
        category: 'Snack',
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Gefüllter MUFFIN',
        price: 2.50,
        category: 'Snack',
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Gefüllte DONUTS',
        price: 2.50,
        category: 'Snack',
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'MUFFIN Vanille oder Schoko',
        price: 2.00,
        category: 'Snack',
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Müsliriegel',
        price: 2.00,
        category: 'Snack',
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Mars, Twix, Snickers, Bueno',
        price: 2.00,
        category: 'Snack',
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'M&M\'s, Kit Kat, Skittles',
        price: 2.00,
        category: 'Snack',
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Tortenecken, Baumstämme',
        price: 2.50,
        category: 'Snack',
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Mannerschnitten',
        price: 2.50,
        category: 'Snack',
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Pringles',
        price: 3.00,
        category: 'Snack',
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', {
      name: [
        'Plunder',
        'Plunder Schnecke',
        'Gefüllter MUFFIN',
        'Gefüllte DONUTS',
        'MUFFIN Vanille oder Schoko',
        'Müsliriegel',
        'Mars, Twix, Snickers, Bueno',
        'M&M\'s, Kit Kat, Skittles',
        'Tortenecken, Baumstämme',
        'Mannerschnitten',
        'Pringles',
      ],
    });
  },
};
