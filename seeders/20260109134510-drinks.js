'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [
     

      // KALTGETRÄNKE
      {
        name: 'Vöslauer Mineral 0.5L',
        price: 2.00,
        category: 'Kaltgetränk',
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Vöslauer Balance 0.5L',
        price: 2.50,
        category: 'Kaltgetränk',
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Vöslauer Sport Still 0.75L',
        price: 2.50,
        category: 'Kaltgetränk',
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Eistee 0.5L',
        price: 2.50,
        category: 'Kaltgetränk',
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Fruchtsäfte 0.5L',
        price: 2.50,
        category: 'Kaltgetränk',
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Multivitamin 0.5L',
        price: 2.50,
        category: 'Kaltgetränk',
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Clue Energy 0.25L',
        price: 2.30,
        category: 'Kaltgetränk',
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Pepsi 0.5L',
        price: 2.50,
        category: 'Kaltgetränk',
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Coca Cola 0.5L',
        price: 2.50,
        category: 'Kaltgetränk',
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Red Bull',
        price: 2.80,
        category: 'Kaltgetränk',
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Aloe King 0.5L',
        price: 3.00,
        category: 'Kaltgetränk',
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Kakao 0.5L',
        price: 2.50,
        category: 'Kaltgetränk',
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Lattella 0.5L',
        price: 2.50,
        category: 'Kaltgetränk',
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      
      
      // WARMGETRÄNKE
      {
        name: 'Cafe to Go',
        price: 2.50,
        category: 'Warmgetränk',
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Verlängerter Schwarz/Braun',
        price: 2.50,
        category: 'Warmgetränk',
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Melange',
        price: 2.50,
        category: 'Warmgetränk',
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Cappuccino',
        price: 2.50,
        category: 'Warmgetränk',
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Mocca',
        price: 2.50,
        category: 'Warmgetränk',
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Tee (div. Sorten)',
        price: 2.00,
        category: 'Warmgetränk',
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
        'Vöslauer Balance 0.5L',
        'Vöslauer Sport Still 0.75L',
        'Eistee 0.5L',
        'Fruchtsäfte 0.5L',
        'Multivitamin 0.5L',
        'Clue Energy 0.25L',
        'Pepsi 0.5L',
        'Aloe King 0.5L',
        'Kakao 0.5L',
        'Lattella 0.5L',
        'Cafe to Go',
        'Verlängerter Schwarz/Braun',
        'Melange',
        'Cappuccino',
        'Mocca',
        'Tee (div. Sorten)',

      ],
    });
  },
};
