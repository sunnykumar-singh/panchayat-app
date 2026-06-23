// Mock data layer. Swap these exports for real API calls later
// (see src/services/api.js) without touching any screen code.

export const SOCIETY = {
  name: 'Green Valley Society',
  sub: 'Block A',
  members: 248,
  households: 86,
  openIssues: 12,
};

export const NOTICES = [
  {
    id: 'n1',
    text: 'Water supply will be off on June 21, 7–11 AM due to maintenance work.',
  },
];

export const EVENTS = [
  {
    id: 'e1',
    day: '22',
    month: 'Jun',
    title: 'Annual General Meeting',
    location: 'Community Hall',
    time: '5:00 PM',
    note: 'Agenda: Budget review, new proposals',
    status: 'Mandatory',
    statusType: 'amber',
  },
  {
    id: 'e2',
    day: '15',
    month: 'Jun',
    title: 'Cleanliness Drive',
    location: 'Society Compound',
    time: '',
    status: 'Completed',
    statusType: 'green',
    past: true,
  },
  {
    id: 'e3',
    day: '28',
    month: 'Jun',
    title: 'Yoga & Wellness Camp',
    location: 'Open Ground',
    time: '6:30 AM',
    status: 'Free Entry',
    statusType: 'green',
  },
  {
    id: 'e4',
    day: '4',
    month: 'Jul',
    title: 'Maintenance Committee Meet',
    location: "Secretary's Office",
    time: '7:00 PM',
    status: 'Members only',
    statusType: 'amber',
  },
  {
    id: 'e5',
    day: '15',
    month: 'Jul',
    title: "Children's Drawing Competition",
    location: 'Community Hall',
    time: '10:00 AM',
    status: 'Age 5–14',
    statusType: 'green',
  },
];

export const CONTACTS = {
  officials: [
    {
      id: 'c1',
      name: 'Rajendra Singh',
      role: 'Sarpanch / President',
      phone: '+91 98765 43210',
      available: 'Available 9AM–8PM',
      initials: 'RS',
      color: 'green',
    },
    {
      id: 'c2',
      name: 'Priya Desai',
      role: 'Society Secretary',
      phone: '+91 98765 43211',
      available: 'Available 10AM–6PM',
      initials: 'PD',
      color: 'purple',
    },
  ],
  staff: [
    {
      id: 's1',
      name: 'Maintenance',
      sub: 'Suresh Kumar · +91 98765 43212',
      icon: 'construct-outline',
      color: 'green',
    },
    {
      id: 's2',
      name: 'Security Desk',
      sub: '24×7 · +91 98765 43213',
      icon: 'shield-outline',
      color: 'amber',
    },
    {
      id: 's3',
      name: 'Emergency',
      sub: '112 · Fire: 101 · Ambulance: 108',
      icon: 'medkit-outline',
      color: 'red',
    },
  ],
};

export const RULES = [
  {
    id: 'r1',
    title: 'Maintenance dues',
    text: 'Monthly maintenance of ₹1,500 must be paid by the 10th of each month. Late payment attracts ₹50 per day penalty.',
  },
  {
    id: 'r2',
    title: 'Visitor entry',
    text: 'All visitors must register at the gate. Overnight guests must be informed to the secretary 24 hours in advance.',
  },
  {
    id: 'r3',
    title: 'Noise restriction',
    text: 'No loud music or gatherings after 10:00 PM. Community events require prior written approval from the secretary.',
  },
  {
    id: 'r4',
    title: 'Parking rules',
    text: 'Each flat is allotted one parking space. Visitor parking must be cleared by 9:00 PM daily.',
  },
  {
    id: 'r5',
    title: 'Waste segregation',
    text: 'Dry and wet waste must be segregated before disposal. Garbage collection at Gate 2 between 7–9 AM daily.',
  },
  {
    id: 'r6',
    title: 'Pet policy',
    text: 'Pets are allowed with prior registration. Owners must keep pets leashed in common areas.',
  },
];

export const COMPLAINTS = [
  {
    id: '#CMP-2024-047',
    title: 'Water leakage in stairwell',
    status: 'In progress',
    statusType: 'amber',
    progress: 0.6,
    steps: ['Filed', 'Reviewed', 'Assigned', 'Resolved'],
    doneSteps: 3,
  },
  {
    id: '#CMP-2024-038',
    title: 'Broken gate light, Block B',
    status: 'Resolved',
    statusType: 'green',
    progress: 1,
    steps: ['Filed', 'Reviewed', 'Assigned', 'Resolved'],
    doneSteps: 4,
  },
];

export const COMPLAINT_CATEGORIES = [
  'Water & Drainage',
  'Electricity',
  'Security',
  'Parking',
  'Noise',
  'Maintenance',
  'Other',
];
