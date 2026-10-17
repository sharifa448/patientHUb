// ===== نوبت‌های تقویم =====
export const calendarAppointments = {
  // روز ماه : [{ label, color }]
  4: [{ label: 'Blood Bank', color: '#3b82f6' }],
  5: [
    { label: 'Dr. Madiha', color: '#f59e0b' },
    { label: 'DR. Shamsi', color: '#ef4444' },
  ],
  9: [{ label: 'Apptmts DR.', color: '#f59e0b' }],
  10: [{ label: 'Apptmts DR.', color: '#f59e0b' }],
  11: [
    { label: 'DR. Bilal', color: '#22c55e' },
    { label: 'DR. Ibrahim', color: '#22c55e' },
  ],
  12: [{ label: 'Approved A', color: '#a855f7' }],
  21: [{ label: 'Lab Checkup', color: '#ef4444' }],
};

// ===== نمودار ستونی ماهانه =====
export const monthlyData = [
  { month: 'Jan', emergency: 44, examination: 21, consultation: 11, routine: 13 },
  { month: 'Feb', emergency: 55, examination: 17, consultation: 23, routine: 15 },
  { month: 'Mar', emergency: 41, examination: 25, consultation: 15, routine: 8 },
  { month: 'Apr', emergency: 67, examination: 13, consultation: 15, routine: 17 },
  { month: 'May', emergency: 22, examination: 21, consultation: 13, routine: 7 },
  { month: 'Jun', emergency: 43, examination: 14, consultation: 27, routine: 8 },
];

// ===== Previous Appointments =====
export const previousAppointments = [
  {
    id: 1,
    name: 'Dr. Mustafa',
    type: 'Emergency',
    date: 'Tuesday,\nApril 5',
    avatar: 'https://i.pravatar.cc/150?img=13',
  },
  {
    id: 2,
    name: 'DR. KHIRULLAH',
    type: 'Consultation',
    date: 'Friday,\nNovember 2',
    avatar: 'https://i.pravatar.cc/150?img=12',
  },
  {
    id: 3,
    name: 'DR. Bilal',
    type: 'Examination',
    date: 'Monday,\nMarch 9',
    avatar: 'https://i.pravatar.cc/150?img=11',
  },
];

// ===== Up Coming Appointments =====
export const upcomingAppointments = [
  {
    id: 1,
    name: 'Dr. Mustafa',
    type: 'Emergency',
    date: 'Tuesday,\nApril 5',
    avatar: 'https://i.pravatar.cc/150?img=13',
  },
  {
    id: 2,
    name: 'DR. KHIRULLAH',
    type: 'Consultation',
    date: 'Friday,\nNovember 2',
    avatar: 'https://i.pravatar.cc/150?img=12',
  },
  {
    id: 3,
    name: 'DR. Bilal',
    type: 'Examination',
    date: 'Monday,\nMarch 9',
    avatar: 'https://i.pravatar.cc/150?img=11',
  },
];

// ===== Procedures Line Chart =====
export const proceduresData = [
  { month: 'Apr', value: 45 },
  { month: 'May', value: 52 },
  { month: 'Jun', value: 48 },
  { month: 'Jul', value: 55 },
  { month: 'Aug', value: 60 },
  { month: 'Sep', value: 65 },
  { month: 'Oct', value: 75 },
  { month: 'Nov', value: 80 },
  { month: 'Dec', value: 85 },
];

export const treatmentsData = [
  { month: 'Apr', value: 40 },
  { month: 'May', value: 42 },
  { month: 'Jun', value: 45 },
  { month: 'Jul', value: 50 },
  { month: 'Aug', value: 55 },
  { month: 'Sep', value: 60 },
  { month: 'Oct', value: 70 },
  { month: 'Nov', value: 75 },
  { month: 'Dec', value: 82 },
];