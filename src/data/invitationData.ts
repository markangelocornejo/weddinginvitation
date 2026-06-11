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
  heroImage: '/images/Artboard%201.jpg',
  music: '/audio/Can%27t%20Help%20Falling%20In%20Love%20%28Instrumental%29%20Wedding%20March.mp3',
  musicFallbackLabel: 'Wedding song is unavailable. Please check the file in public/audio.',
  invitation: {
    eyebrow: '18 years in the making',
    message:
      'After 18 beautiful years of love, laughter, and building our life together, we have decided to make it official.',
    note: 'The best things take time.',
    story: [],
  },
  rsvp: {
    deadline: 'July 20, 2026',
    deadlineNote: 'Please let us know if you can join us by July 20, 2026 so we can reserve your seat.',
    guestLimit: 5,
    submissionEndpoint: 'https://script.google.com/macros/s/AKfycby2AAz9SjcAxbZHm3CrGq5IrJip_sJ9t2qq0V_bsRe77XGo75sGoxUgXnlFdo_uTmGT/exec',
    promptTitle: 'Will you join us?',
    promptMessage: 'We would be delighted to celebrate this beautiful day with you.',
    responseNote: 'Your RSVP has been sent.',
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
      time: '12:00 PM',
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
    { time: '12:00 PM', title: 'Reception', detail: 'Ravintola Sitrus', icon: 'reception' },
  ],
  gallery: [
    '/images/dcb3d03c-e24d-46fb-9952-e75208882cf6.jpg',
    '/images/45fee306-beb6-4e44-a6c8-7ab50d76eb74.jpg',
    '/images/800d12bb-9424-47e2-89b5-b2eae6861c78.jpg',
    '/images/138c57ae-c2da-4e6a-9807-e66a2da19952.jpg',
    '/images/a2f9a558-161e-4a33-b6a2-8a717bd3a2c3.jpg',
    '/images/981e4a22-6810-4fc2-bb46-0caee2dd84f2.jpg',
    '/images/8b7ea895-1835-4f74-a399-3ac475c2199d.jpg',
    '/images/att.iV7C47zig5fX--YmYcO4N2JEsxUFuJkD36n4q0SWA4c.jpeg',
    '/images/att.lzOK1AUc22G5AtOyoRRmSM5ufMzJ4dN_46qnWCA9_Ms.jpeg',
    '/images/att.QddXWWcNIUsnCv_zMusF403TXu9ch0gHSAy1R76L3IQ.jpeg',
  ],
  motif: {
    title: 'Wedding Motif',
    message:
      'We would love to see our guests in colors inspired by champagne, beige, and soft brown.',
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
