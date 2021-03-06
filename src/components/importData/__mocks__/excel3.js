// STATE FORMAT OBJECT
export const formatObject3 = {
  Name: {
    checked: false,
    isMulti: true,
    value: [
      { value: 'first name', label: 'first name' },
      { value: 'middle initial', label: 'middle initial' },
      { value: 'last name', label: 'last name' }
    ],
    map1: '',
    map2: ''
  },
  'Street Address': {
    checked: false,
    isMulti: true,
    value: [
      { value: 'street address ', label: 'street address ' },
      { value: 'apt #', label: 'apt #' }
    ],
    map1: '',
    map2: ''
  },
  Zip: {
    checked: false,
    isMulti: true,
    value: [{ value: 'zip', label: 'zip' }],
    map1: '',
    map2: ''
  },
  Longitude: {
    checked: true,
    isMulti: false,
    value: { value: 'location', label: 'location' },
    map1: { label: 'map1', value: ' ' },
    map2: { label: 'map2', value: 0 }
  },
  Latitude: {
    checked: true,
    isMulti: false,
    value: { value: 'location', label: 'location' },
    map1: { label: 'map1', value: ' ' },
    map2: { label: 'map2', value: 1 }
  }
};

// EXCEL FILE HEADER
export const testHeaders3 = [
  'voter id',
  'first name',
  'middle initial',
  'last name',
  'suffix',
  'street #',
  'street address ',
  'apt #',
  'city ',
  'state',
  'zip',
  'location'
];

export const testBody3 = [
  [
    '1092839',
    'HAYDEE',
    '',
    'ACEVEDO',
    '',
    '235',
    'CANAL ST',
    '',
    'ELLENVILLE',
    'NY',
    '12428',
    '1234 5677'
  ],
  [
    '1131851',
    'LEON',
    '',
    'AGUIRRE',
    '',
    '240',
    'CANAL ST',
    '3',
    'ELLENVILLE',
    'NY',
    '12428',
    '1.43333 6.84383'
  ]
];
