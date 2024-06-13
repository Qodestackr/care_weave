import { User } from "lucide-react";

export type User = {
  id: number;
  name: string;
  plan: string;
  role: string;
  verified: boolean;
  status: string;
};
export const users: User[] = [
  {
    id: 1,
    name: "Candice Schiner",
    plan: "SHIF",
    role: "Patient",
    verified: false,
    status: "Active",
  },
  {
    id: 2,
    name: "John Doe",
    plan: "SHIF",
    role: "Doctor",
    verified: true,
    status: "Active",
  },
  {
    id: 3,
    name: "Alice Johnson",
    plan: "SHIF",
    role: "Content-Writer",
    verified: true,
    status: "Active",
  },
  {
    id: 4,
    name: "David Smith",
    plan: "SHIF",
    role: "Lab",
    verified: false,
    status: "Inactive",
  },
  {
    id: 5,
    name: "Emma Wilson",
    plan: "SHIF",
    role: "ProductManager",
    verified: true,
    status: "Active",
  },
  {
    id: 6,
    name: "James Brown",
    plan: "SHIF",
    role: "Marketing",
    verified: false,
    status: "Active",
  },
  {
    id: 7,
    name: "Laura White",
    plan: "SHIF",
    role: "Sales-Team",
    verified: true,
    status: "Active",
  },
  {
    id: 8,
    name: "Michael Lee",
    plan: "Private Insurance",
    role: "DevOps-Engineer",
    verified: false,
    status: "Active",
  },
  {
    id: 9,
    name: "Olivia Green",
    plan: "Custom",
    role: "Data-Engineer",
    verified: true,
    status: "Active",
  },
  {
    id: 10,
    name: "Robert Taylor",
    plan: "SHIF",
    role: "Patient",
    verified: false,
    status: "Active",
  },
];

export type Patient = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  gender: string;
  date_of_birth: string; // Consider using a proper date type if possible
  street: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
  longitude?: number; // Optional field
  latitude?: number; // Optional field
  job: string;
  profile_picture?: string | null; // Profile picture can be a string (URL) or null (if no picture)
};

export interface NavItem {
  isChidren: any;
  // color(arg0: string, color: any): unknown;
  children: any;
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: any; //keyof typeof Icons;
  label?: string;
  description?: string;
}

export const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: "dashboard",
    label: "Dashboard",
    isChidren: undefined,
    children: undefined,
  },
  // Financial Account Details
  // Revenue Insights
  // Treatment Plans
  // Patient Management
  // Messages
  {
    title: "Doctor",
    href: "/dashboard/doctors",
    icon: "message",
    label: "Doctor",
    isChidren: undefined,
    children: undefined,
  },
  {
    title: "Analytics",
    href: "/dashboard/analytics",
    icon: "analytics",
    label: "Analytics",
    isChidren: undefined,
    children: undefined,
  },
  {
    title: "E-Triage",
    href: "/dashboard/e-triage",
    icon: "triage",
    label: "E-Triage",
    isChidren: undefined,
    children: undefined,
  },

  {
    title: "Messages",
    href: "/dashboard/messages",
    icon: "message",
    label: "Messages",
    isChidren: undefined,
    children: undefined,
  },
  {
    title: "Financial Details",
    href: "/dashboard/financial-details",
    icon: "billing",
    label: "Financial Details",
    isChidren: undefined,
    children: undefined,
  },
  {
    title: "Prescriptions",
    href: "/dashboard/patient/prescriptions",
    icon: "pill",
    label: "Financial Details",
    isChidren: undefined,
    children: undefined,
  },
  // {
  //   title: "User Management",
  //   href: "/dashboard/user",
  //   icon: "user",
  //   label: "user",
  // },
  {
    title: "Insurance",
    href: "/dashboard/insurance",
    icon: "billing",
    label: "Insurance",
    isChidren: undefined,
    children: undefined,
  },
  {
    title: "Patients",
    href: "/dashboard/patient",
    icon: "employee",
    label: "employee",
    isChidren: undefined,
    children: undefined,
  },
  {
    title: "Profile",
    href: "/dashboard/doctor/settings",
    icon: "profile",
    label: "profile",
    isChidren: undefined,
    children: undefined,
  },
  {
    title: "Book an Appointment",
    href: "/dashboard/book-appointment",
    icon: "appointment",
    label: "book-an-appointment",
    isChidren: undefined,
    children: undefined,
  },
  {
    title: "Appointment Manager",
    href: "/dashboard/appointment-manager",
    icon: "kanban",
    label: "kanban",
    isChidren: undefined,
    children: undefined,
  },
  {
    title: "Hospital Demo",
    href: "/dashboard/hospital",
    icon: "kanban",
    label: "kanban",
    isChidren: undefined,
    children: undefined,
  },
];

export const sidebarLinks = [
  { imgURL: "/icons/Home.svg", route: "/", label: "Home" },
  { imgURL: "/icons/upcoming.svg", route: "/upcoming", label: "Upcoming" },
  { imgURL: "/icons/previous.svg", route: "/previous", label: "Previous" },
  { imgURL: "/icons/Video.svg", route: "/recordings", label: "Recordings" },
  {
    imgURL: "/icons/add-personal.svg",
    route: "/personal-room",
    label: "Personal Room",
  },
];

export const avatarImages = [
  "/images/avatar-1.jpeg",
  "/images/avatar-2.jpeg",
  "/images/avatar-3.png",
  "/images/avatar-4.png",
  "/images/avatar-5.png",
];

/********************************************************************/
export const userData = [
  {
    id: 1,
    avatar: "/User1.png",
    messages: [
      {
        id: 1,
        avatar: "/User1.png",
        name: "Dr. John Mwangi",
        message: "Hey, Jakob. How are you feeling today?",
      },
      {
        id: 2,
        avatar: "/LoggedInUser.jpg",
        name: "Jakob Hoeg",
        message: "Hey!",
      },
      {
        id: 3,
        avatar: "/User1.png",
        name: "Dr. John Mwangi",
        message: "How are you?",
      },
      {
        id: 4,
        avatar: "/LoggedInUser.jpg",
        name: "Jakob Hoeg",
        message: "I am good, you?",
      },
      {
        id: 5,
        avatar: "/User1.png",
        name: "Dr. John Mwangi",
        message: "I am good too!",
      },
      {
        id: 6,
        avatar: "/LoggedInUser.jpg",
        name: "Jakob Hoeg",
        message: "That is good to hear!",
      },
      {
        id: 7,
        avatar: "/User1.png",
        name: "Dr. John Mwangi",
        message: "How has your day been so far?",
      },
      {
        id: 8,
        avatar: "/LoggedInUser.jpg",
        name: "Jakob Hoeg",
        message:
          "It has been good. I went for a run this morning and then had a nice breakfast. How about you?",
      },
      {
        id: 9,
        avatar: "/User1.png",
        name: "Dr. John Mwangi",
        message: "I had a relaxing day. Just catching up on some reading.",
      },
    ],
    name: "Dr. John Mwangi",
  },
  {
    id: 2,
    avatar: "/User2.png",
    name: "Dr. John Mwangi",
  },
  // {
  //     id: 3,
  //     avatar: '/User3.png',
  //     name: 'Elizabeth Smith',
  // },
  // {
  //     id: 4,
  //     avatar: '/User4.png',
  //     name: 'John Smith',
  // }
];

export type UserData = (typeof userData)[number];

export const loggedInUserData = {
  id: 5,
  avatar: "/LoggedInUser.jpg",
  name: "Jakob Hoeg",
};

export type LoggedInUserData = typeof loggedInUserData;

export interface Message {
  id: number;
  avatar: string;
  name: string;
  message: string;
}
