// data.js
// export interface Note {
//   title: string;
//   description: string;
//   date: string;
// }

export interface Note {
  title: string;
  description: string;
  date: string;
  teacher: string;
}

export interface TimetableEntry {
  subject: string;
  time: string;
}

export interface Subject {
  subject: string;
  notes: Note[];
}

export interface Lecture {
  title: string;
  duration: string;
  instructor: string;
}

export interface Assignment {
  title: string;
  dueDate: string;
  status: "pending" | "submitted" | "late";
  description: string;
  teacher: string;
}


export interface Payment {
  id: number;
  type: string;
  term?: string;
  amount: string;
  dueDate: string;
  status: "Paid" | "Pending";
}


export interface TimetableEntry {
  subject: string;
  time: string;
}

export interface AssignmentInClassTimeTable {
  title: string;
  description: string;
  dueDate: string;
  teacher: string;
}

export const notesData = [
  {
    subject: "Mathematics",
    notes: [
      {
        title: "Integration Short Notes - Ch8",
        subtitle: "Integration notes for Chapter 8",
        date: "Uploaded on 22 Nov 2024",
        teacher: "Teacher Name",
      },
      {
        title: "Differentiation Important Questions",
        subtitle: "Differentiation notes for all units",
        date: "Uploaded on 22 Nov 2024",
        teacher: "Teacher Name",
        important: true,
      },
    ],
  },
  {
    subject: "Accountancy",
    notes: [
      {
        title: "Integration Short Notes - Ch8",
        subtitle: "Integration notes for Chapter 8",
        date: "Uploaded on 22 Nov 2024",
        teacher: "Teacher Name",
      },
      {
        title: "Differentiation Important Questions",
        subtitle: "Differentiation notes for all units",
        date: "Uploaded on 22 Nov 2024",
        teacher: "Teacher Name",
        important: true,
      },
    ],
  },
];

export const lectureData = [
  {
    title: "Integration Ch8 One Shot",
    date: "Uploaded on 22 Nov 2024",
    subtitle: "Integration notes for Chapter 8",
    teacher: "Teacher Name",
  },
];

export const assignmentData = [
  {
    title: "Computer Lab Record",
    dueDate: "Due on 22 Nov 2024",
    status: "pending",
    description: "Submit Lab Exp-6 of Computer Lab",
    teacher: "Teacher name"
  },
  {
    title: "Physics Assignment",
    dueDate: "Due on 25 Nov 2024",
    status: "submitted",
    description: "Solve 10 numerical problems from Chapter 3",
    teacher: "Teacher name"
  },
  {
    title: "Math Homework",
    dueDate: "Due on 23 Nov 2024",
    status: "pending",
    description: "Complete exercises 1-10 from Chapter 5",
    teacher: "Teacher name"
  },
  {
    title: "Chemistry Lab Report",
    dueDate: "Due on 26 Nov 2024",
    status: "late",
    description: "Write up results from last week's experiment",
    teacher: "Teacher name"
  }
];

export const recentPayments: Payment[] = [
  { id: 1, type: "School Fee", term: "Term 2", amount: "Rs. 36,800.00", dueDate: "18 Nov '24", status: "Paid" },
  { id: 2, type: "Commerce APC Fee", term: "One Time", amount: "Rs. 250.00", dueDate: "18 Nov '24", status: "Pending" },
  { id: 3, type: "Book Fee", term: "One Time", amount: "Rs. 250.00", dueDate: "18 Nov '24", status: "Paid" },
];

export const upcomingPayments: Payment[] = [
  { id: 4, type: "Examination Fee", term: "Term 2", amount: "Rs. 3,800.00", dueDate: "18 Dec '24", status: "Pending" },
  { id: 5, type: "Examination Fee", term: "Term 2", amount: "Rs. 3,800.00", dueDate: "18 Dec '24", status: "Pending" },
  { id: 6, type: "Examination Fee", term: "Term 2", amount: "Rs. 3,800.00", dueDate: "18 Dec '24", status: "Pending" },
];

export const timetableData: TimetableEntry[] = [
  { subject: "Mathematics", time: "7:30-8:30" },
  { subject: "Accountancy", time: "8:30-9:30" },
  { subject: "Business Studies", time: "9:45-10:45" },
];

export const assignments: AssignmentInClassTimeTable[] = [
  {
    title: "Computer Science",
    description: "Complete Experiment 6 in Lab Record and submit the copy in cabin. Prepare for Viva for Experiment 4 and 5.",
    dueDate: "28 Nov'24",
    teacher: "Teacher Name",
  },
  {
    title: "Mathematics",
    description: "Quiz will be conducted for Chapters 6 and 7 on 28 Nov’24, Thursday. Be prepared.",
    dueDate: "28 Nov'24",
    teacher: "Teacher Name",
  },
];


