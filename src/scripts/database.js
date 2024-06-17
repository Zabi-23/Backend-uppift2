

require('dotenv').config();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  try {
    const productList = [
      {
        title: 'appleWatch3',
        price: 1550,
        image: '/images/appleWatch3.jpg'
      },
      {
        title: 'appleWatch4',
        price: 1650,
        image: '/images/applewatch4.jpg'
      },
      {
        title: 'Hörlura Wirles',
        price: 550,
        image: '/images/hörlura svart.jpg'
      },
      {
        title: 'AirPad',
        price: 990,
        image: '/images/hörlura.jpg'
      },
      {
        title: 'Hörlura Samsung',
        price: 450,
        image: '/images/hörluraSamsung.jpg'
      },
      {
        title: 'Hörlura Beats',
        price: 850,
        image: '/images/hörluraB.jpg'
      },
      {
        title: 'Hörlura Wirles',
        price: 550,
        image: '/images/hörlura svart.jpg'
      },
      {
        title: 'Ipad',
        price: 3500,
        image: '/images/ipad.jpg'
      },
      {
        title: 'Iphone15',
        price: 13500,
        image: '/images/iphon15.jpg'
      },
      {
        title: 'Iphone12',
        price: 8750,
        image: '/images/iphone12.jpg'
      },
      {
        title: 'Iphone 13',
        price: 550,
        image: '/images/iphone13.jpg'
      },
      {
        title: 'Iphone14',
        price: 99,
        image: '/images/iphone14.jpg'
      },
      {
        title: 'Hörlura Beats',
        price: 1150,
        image: '/images/hörluraB1.jpg'
      },
      {
        title: 'Kylskåp',
        price: 3400,
        image: '/images/kylskåp.jpg'
      },
      {
        title: 'Kylskåp 2 side',
        price: 550,
        image: '/images/kylskåp2.jpg'
      },
      {
        title: 'Dator Windows',
        price: 4500,
        image: '/images/laptopW.jpg'
      },
      {
        title: 'MacAir',
        price: 12000,
        image: '/images/macAir.jpg'
      },
      {
        title: 'Macbook Pro',
        price: 16500,
        image: '/images/macbook.jpg'
      },
      {
        title: 'Mouse',
        price: 550,
        image: '/images/mouse.jpg'
      },
      {
        title: 'Samsung S21',
        price: 9500,
        image: '/images/samsungA.jpg'
      },
      {
        title: 'Snoy Tv',
        price: 9000,
        image: '/images/sonyTv.jpg'
      },
      {
        title: 'Tvättmaskin LG',
        price: 6500,
        image: '/images/tvättmaskin.jpg'
      },
      {
        title: 'Tvättmaskin',
        price: 550,
        image: '/images/tvättmaskin2.jpg'
      },
      {
        title: 'Samsung S21 Ultra',
        price: 9500,
        image: '/images/samsungS2.jpg'
      }
    ];

    for (const productData of productList) {
      await prisma.product.create({
        data: productData,
      });
    }

    console.log('Produkter har lagts till i databasen.');
  } catch (error) {
    console.error('Ett fel uppstod:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
