import bcrypt from 'bcryptjs'

const data = {
  users: [
    {
      name: 'John',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Jane',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: '500ml Ghee',
      slug: '500ml-Ghee',
      category: 'Ghee',
      image: '/images/Ghee.png',
      price: 800,
      brand: 'A2-Pure Ghee',
      rating: 4.5,
      numReviews: 3,
      countInStock: 20,
      description: 'Pure ghee made with bilona',
      isFeatured: true,
      banner: '/images/banner2.jpg',
    },
    {
      name: '1l Ghee',
      slug: '1l-Ghee',
      category: 'Ghee',
      image: '/images/Ghee.png',
      price: 800,
      brand: 'A2-Pure Ghee',
      rating: 4.5,
      numReviews: 3,
      countInStock: 20,
      description: 'Pure ghee made with bilona',
      isFeatured: true,
      banner: '/images/banner2.jpg',
    },
  ],
  socials: [
    {
      name: 'Insta1',
      slug: 'Insta1',
      image: '/images/S1.png',
    },
    {
      name: 'Insta2',
      slug: 'Insta2',
      image: '/images/S2.png',
    },
  ],
}

export default data
