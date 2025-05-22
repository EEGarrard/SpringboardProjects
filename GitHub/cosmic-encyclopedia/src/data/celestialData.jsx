const celestialData = [
  {
    id: 'earth',
    category: 'planets',
    title: 'Earth',
    shortDescription: 'Our home planet, the only known place with life',
    description: 'Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 29% of Earth\'s surface is land consisting of continents and islands.',
    imageUrl: 'https://images.unsplash.com/photo-1614730321146-b6fa91a6714f',
    facts: [
      'Earth is approximately 4.54 billion years old',
      '71% of Earth\'s surface is covered in water',
      'Earth has a powerful magnetic field that protects it from solar winds',
      'The Earth\'s rotation is gradually slowing'
    ]
  },
  {
    id: 'mars',
    category: 'planets',
    title: 'Mars',
    shortDescription: 'The Red Planet, future home of humanity?',
    description: 'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. Named after the Roman god of war, it is often referred to as the "Red Planet".',
    imageUrl: 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031',
    facts: [
      'Mars has the largest dust storms in the solar system',
      'Mars has two moons named Phobos and Deimos',
      'Mars has about one-third the gravity of Earth',
      'The tallest mountain in the Solar System is on Mars (Olympus Mons)'
    ]
  },
  {
    id: 'sun',
    category: 'stars',
    title: 'The Sun',
    shortDescription: 'Our nearest star, the source of all energy for life on Earth',
    description: 'The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma, heated to incandescence by nuclear fusion reactions in its core, radiating the energy mainly as visible light and infrared radiation.',
    imageUrl: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9',
    facts: [
      'The Sun accounts for 99.86% of the mass in the solar system',
      'Over one million Earths could fit inside the Sun',
      'The Sun travels at 220 km per second',
      'The Sun is middle-aged (about 4.5 billion years old)'
    ]
  },
  {
    id: 'betelgeuse',
    category: 'stars',
    title: 'Betelgeuse',
    shortDescription: 'Red supergiant star in Orion constellation',
    description: 'Betelgeuse is a red supergiant star in the constellation of Orion. It is usually the tenth-brightest star in the night sky and, after Rigel, the second-brightest in Orion.',
    imageUrl: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564',
    facts: [
      'Betelgeuse is about 700 times larger than the Sun',
      'It is expected to explode as a supernova within the next 100,000 years',
      'Betelgeuse is approximately 642 light-years from Earth',
      'The star is losing mass at a significant rate'
    ]
  },
  {
    id: 'orion',
    category: 'nebulae',
    title: 'Orion Nebula',
    shortDescription: 'A stellar nursery visible to the naked eye',
    description: 'The Orion Nebula is a diffuse nebula situated in the Milky Way, south of Orion\'s Belt in the constellation of Orion. It is one of the brightest nebulae and is visible to the naked eye in the night sky.',
    imageUrl: 'https://images.unsplash.com/photo-1464802686167-b939a6910659',
    facts: [
      'The nebula is about 1,344 light-years away',
      'It is 24 light-years across',
      'Contains the Trapezium cluster of young, massive stars',
      'A stellar nursery with many protoplanetary disks'
    ]
  },
  {
    id: 'milkyway',
    category: 'galaxies',
    title: 'Milky Way',
    shortDescription: 'Our home galaxy containing our solar system',
    description: 'The Milky Way is the galaxy that contains our Solar System. The name describes the galaxy\'s appearance from Earth: a hazy band of light seen in the night sky formed from stars that cannot be individually distinguished by the naked eye.',
    imageUrl: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986',
    facts: [
      'Contains 100-400 billion stars',
      'About 100,000 light-years in diameter',
      'Our Sun is about 27,000 light-years from the galactic center',
      'Has a supermassive black hole at its center (Sagittarius A*)'
    ]
  }
];

export default celestialData;