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
      images: [
        { url: '/images/cow-ghee/IMG_9685.JPG', altText: 'Alt text 1' },
        { url: '/images/cow-ghee/IMG_9770.JPG', altText: 'Alt text 2' },
        { url: '/images/cow-ghee/IMG_9782.JPG', altText: 'Alt text 3' },
        { url: '/images/cow-ghee/IMG_9813.JPG', altText: 'Alt text 4' },
        { url: '/images/cow-ghee/IMG_9821.JPG', altText: 'Alt text 5' },
        { url: '/images/cow-ghee/IMG_9828.JPG', altText: 'Alt text 6' },
        { url: '/images/cow-ghee/IMG_9869.JPG', altText: 'Alt text 7' },
      ],
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
      images: [
        { url: '/images/cow-ghee/IMG_9685.JPG', altText: 'Alt text 1' },
        { url: '/images/cow-ghee/IMG_9770.JPG', altText: 'Alt text 2' },
        { url: '/images/cow-ghee/IMG_9782.JPG', altText: 'Alt text 3' },
        { url: '/images/cow-ghee/IMG_9813.JPG', altText: 'Alt text 4' },
        { url: '/images/cow-ghee/IMG_9821.JPG', altText: 'Alt text 5' },
        { url: '/images/cow-ghee/IMG_9828.JPG', altText: 'Alt text 6' },
        { url: '/images/cow-ghee/IMG_9869.JPG', altText: 'Alt text 7' },
      ],
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
  banners: [
    {
      name: 'Label front',
      slug: 'label-front',
      image: '/images/banner3.png',
    },
    {
      name: 'Label Back',
      slug: 'label-back',
      image: '/images/banner4.png',
    },
  ],

  faqs: [
    {
      question: 'Why is Nani Bilona Ghee costly as compared to other ghee?',
      answer:
        'Nani Bilona A2 Desi Cow Ghee is made entirely from the milk extracted from desi cows. The indigenous cow gives around 2-3 litres of milk per day which is more nutritious than foreign breeds that produce more milk. The cows are neither forced nor injected with hormones to enhance milk production. Our ghee is bi-directionally bilona churned with a wooden churner. This is why our A2 cow ghee has a grainy texture, thicker consistency, tempting aroma, superior flavour, and is much healthier. Hence, A2 Desi Cow Ghee is costlier and better than regular ghee.',
    },
    {
      question: 'What should the consistency of my ghee be?',
      answer:
        'Generally, the consistency of ghee depends on the temperature at which you store it. At room temperature, it usually remains soft, and during winters, it solidifies. Depending on the temperature outside the jar, this process may happen quickly or slowly. It is perfectly normal for ghee to be liquid, solid, or a combination of consistencies.',
    },
    {
      question: 'How can we identify pure cow ghee?',
      answer:
        'The easiest method to check the purity is to do a pan test. Add a teaspoon of ghee to a pan and heat it. If the ghee starts melting immediately and turns dark brown, it is pure. However, if it takes time to melt and is yellow in colour, then it is adulterated.',
    },
    {
      question: 'What are cows being fed?',
      answer:
        'Our cows graze freely and are given natural fodder. The buttermilk obtained in ghee making is also given to our cows. We believe in a cruelty-free environment, and therefore we do not inject hormones in cows.',
    },
    {
      question:
        'How is the taste of your ghee different from any other ghee in the market?',
      answer:
        'Our ghee is obtained by churning curd and not cream (malai). So the nutritional content is more as compared to others. Therefore our ghee tastes a lot tastier and aromatic because it preserves the all-natural nourishment of ghee.',
    },
  ],
}

export default data
