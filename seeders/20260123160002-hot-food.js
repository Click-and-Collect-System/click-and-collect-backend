'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [
      {
        name: 'Bosna mit Sweet-Chili und Röstzwiebel',
        price: 4.00,
        category: 'Warmspeisen',
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Hühnerschnitzel Semmel',
        price: 4.00,
        category: 'Warmspeisen',
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Crocodille / Pierre Baguette',
        price: 4.00,
        category: 'Warmspeisen',
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Schinken-Käse Toast',
        price: 3.50,
        category: 'Warmspeisen',
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Toast mit Käse',
        price: 3.50,
        category: 'Warmspeisen',
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Käseleberkäsesemmel',
        price: 3.50,
        category: 'Warmspeisen',
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Leberkäsesemmel',
        price: 3.50,
        category: 'Warmspeisen',
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Wraps',
        price: 4.00,
        category: 'Warmspeisen',
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Pommes',
        price: 3.00,
        category: 'Warmspeisen',
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('products', {
    name: [
      'Bosna mit Sweet-Chili und Röstzwiebel',
      'Hühnerschnitzel Semmel',
      'Crocodille / Pierre Baguette',
      'Schinken-Käse Toast',
      'Toast mit Käse',
      'Käseleberkäsesemmel',
      'Leberkäsesemmel',
      'Wraps',
      'Pommes',
    ],
  });
  },

};
