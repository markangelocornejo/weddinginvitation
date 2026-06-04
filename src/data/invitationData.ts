export const invitationData = {
  couple: {
    bride: 'Ruby',
    groom: 'Ray',
    displayNames: 'Ray & Ruby',
    initials: 'R & R',
  },
  weddingDate: '2026-08-22T10:00:00+03:00',
  displayDate: 'August 22, 2026',
  saveTheDate: {
    title: 'Save the Date',
    subtitle: '18 years in the making',
    tagline: 'The best things take time',
  },
  heroImage:
    'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=88',
  music: '/audio/Bruno%20Mars%20-%20Risk%20It%20All%20%5BOfficial%20Music%20Video%5D.mp3',
  musicFallbackLabel: 'Wedding song is unavailable. Please check the file in public/audio.',
  invitation: {
    eyebrow: '18 years in the making',
    message:
      'After 18 beautiful years of love, laughter, and building our life together, we have decided to make it official.',
    note: 'The best things take time.',
    story: [],
  },
  rsvp: {
    deadline: 'To be confirmed',
    deadlineNote: 'Please let us know if you can join us. The RSVP deadline will be announced soon.',
    guestLimit: 5,
    promptTitle: 'Will you join us?',
    promptMessage: 'We would be delighted to celebrate this beautiful day with you.',
    responseNote: 'Your RSVP will be noted locally for this preview.',
  },
  event: {
    ceremony: {
      title: 'Wedding Ceremony',
      date: 'August 22, 2026',
      time: '10:00 AM',
      venue: 'St Mary Catholic Parish',
      address: 'Mäntytie 2, 00270 Helsinki',
      note: 'Wedding ceremony',
      illustration: 'chapel',
    },
    reception: {
      title: 'Wedding Reception',
      date: 'August 22, 2026',
      time: '12:00 NN',
      venue: 'Ravintola Sitrus',
      address: 'Hankasuontie 8, 00390 Helsinki',
      note: 'Reception follows',
      illustration: 'reception',
    },
    mapLink: 'https://www.google.com/maps/search/?api=1&query=St%20Mary%20Catholic%20Parish%2C%20M%C3%A4ntytie%202%2C%2000270%20Helsinki',
    receptionMapLink: 'https://www.google.com/maps/search/?api=1&query=Ravintola%20Sitrus%2C%20Hankasuontie%208%2C%2000390%20Helsinki',
  },
  timeline: [
    { time: '10:00 AM', title: 'Ceremony', detail: 'St Mary Catholic Parish', icon: 'ceremony' },
    { time: '12:00 NN', title: 'Reception', detail: 'Ravintola Sitrus', icon: 'reception' },
  ],
  gallery: [
    'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=900&q=82',
    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=82',
    'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=82',
    'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?auto=format&fit=crop&w=900&q=82',
    'https://images.unsplash.com/photo-1519741347686-c1e0a0df3f90?auto=format&fit=crop&w=900&q=82',
    'https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=900&q=82',
  ],
  dressCode: {
    title: 'Garden Formal',
    note: 'We would love to see you in muted, romantic hues. Please reserve white and ivory for the bride.',
    exclusions: 'Kindly avoid white, ivory, and overly casual attire.',
    colors: ['#C9B7A3', '#D8C6C1', '#A7B1A0', '#B7A9B8', '#8D9A84'],
  },
  motif: {
    title: 'Wedding Motif',
    message:
      'We would love to see our guests in colors inspired by champagne, beige, and soft brown.',
    attireNote: 'Kindly avoid wearing white, ivory, and overly casual attire.',
    colors: [
      { name: 'Champagne', value: '#D5B892' },
      { name: 'Beige', value: '#DCC8AA' },
      { name: 'Caramel', value: '#C08A5A' },
      { name: 'Soft Brown', value: '#7A5A3A' },
    ],
  },
  gift: {
    note: 'Your presence is the greatest gift of all. Should you wish to honor us with a gift, a contribution toward our future together would be deeply appreciated.',
    type: 'Gift details',
    provider: 'To be confirmed',
    accountName: '',
    accountNumber: '',
  },
  unpluggedCeremony: {
    title: 'Unplugged Ceremony',
    message: 'We invite you to be fully present with us. Please keep phones and cameras away during the ceremony.',
  },
  closing: {
    message: 'We cannot wait to celebrate this beautiful chapter with you.',
    signature: 'With love, Ray & Ruby',
  },
}

export type InvitationData = typeof invitationData
