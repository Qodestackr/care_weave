// import Link from "next/link";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RatingGroup } from "@/imported/components/ui/rating";
import { ClipboardType, Stethoscope, FlaskConical, User, Newspaper, GitPullRequestCreateArrow } from "lucide-react";
import Link from "next/link";
import UpcomingLabTest from "./lab/UpcomingLabTest";
import { ScrollArea } from "@/components/ui/scroll-area";
import DashboardLabModule from "@/imported/components/admin-panel/lab/DashboardLabModule";
import DoctorLabAssoci from "@/imported/components/admin-panel/lab/DoctorLabAssoci";
import { PatientTable } from "@/imported/components/tables/patient-tables/patient-table";
import LabResults from "./patient/medical-report";
import { labColumns } from "@/imported/components/tables/patient-tables/columns";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextAppointment } from "@/imported/ui-components/Heute";
import { RecentTransactions } from "@/imported/components/recent-sales";
import { UpcomingPatientSchedule } from "@/imported/ui-components/page";

export default async function DashboardMain() {

  const session = await getServerSession(authOptions);

  const user = {
    isDoctor: false,
    isLab: true,
    isPatient: false,
  }

  /*************************************/

  const searchParams = {
    page: 2,
    limit: 10,
    search: 'country'
  };

  const page = Number(searchParams.page) || 1;
  const pageLimit = Number(searchParams.limit) || 10;
  const country = searchParams.search || null;
  const offset = (page - 1) * pageLimit;

  const employeeRes = {
    success: true,
    message: "Sample data for testing and learning purposes",
    total_users: 1000,
    offset: offset,
    limit: pageLimit,
    users: [
      {
        id: "ORD123456",
        order_id: 'lab-101',
        patient_first_name: "Kayla",
        patient_last_name: "Lopez",
        test_name: "Complete Blood Count",
        gender: "female",
        order_date: "2023-04-26T00:00:00",
        status: "Pending",
        physician_name: "Dr. John Doe",
        priority: "Routine",
        patient_gender: "female",
        patient_dob: "2002-04-26T00:00:00",
        insurance_scheme: "Medicare",
        country: "Uganda",
        email: "kayla.lopez.1@slingacademy.com",
        phone: "+1-697-415-3345x5215",
        city: "Humphreyfurt",
        zipcode: "79574",
        street: "3388 Roger Wells Apt. 010",
        state: "Vermont"
      },
      {
        id: "ORD654321",
        order_id: 'lab-102',
        patient_first_name: "Timothy",
        patient_last_name: "Mwaura",
        gender: "male",
        test_name: "Lipid Panel",
        order_date: "2023-04-25T00:00:00",
        status: "Completed",
        physician_name: "Dr. Jane Smith",
        priority: "High",
        patient_gender: "male",
        patient_dob: "1903-03-30T00:00:00",
        insurance_scheme: "NHIF",
        country: "Kenya",
        email: "timothy.mwaurz.10@gmail.com",
        phone: "615-244-8902",
        city: "Cooperborough",
        zipcode: "85674",
        street: "4545 Ashley Plains",
        state: "Utah"
      }
    ]
  };
  const totalUsers = employeeRes.total_users; // 1000u
  const pageCount = Math.ceil(totalUsers / pageLimit);
  const employee = employeeRes.users;

  const auth_user = session?.user

  /*************************************/

  return (
    <ScrollArea className='container mt-10 mx-auto h-[90vh]'>
      <div className="flex items-center justify-between container mx-auto dark:bg-black dark:text-gray-50">
        {(user?.isDoctor || user?.isLab) ? null : (
          <div className="hidden md:flex items-center space-x-2">
            <Link href={'/dashboard/book-appointment'}>
              <button className="px-8 py-2 rounded-full relative bg-slate-700 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600">
                <div className="absolute inset-x-0 h-[2px] w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
                <span className="relative z-20">
                  Request Consultation
                </span>
              </button>
            </Link>
          </div>
        )}
      </div>

      {/* <FilePreview file /> */}
      <RatingGroup
      // readonly
      //Icon={''} customLabel="This is a custom Label"
      />

      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6 dark:bg-black dark:text-gray-50">

        <Tabs defaultValue={user?.isDoctor ? 'analytics' : 'overview'}>

          <TabsList className="overflow-x-auto scrollbar-hide">
            {user?.isDoctor ? null : <TabsTrigger value="overview">Overview</TabsTrigger>}

            {user?.isDoctor && <TabsTrigger value="analytics">Analytics</TabsTrigger>}
            {user?.isDoctor && <TabsTrigger value="lab_orders">Lab Orders</TabsTrigger>}

            {user?.isDoctor ? (
              <TabsTrigger value="doc_appointment">Doctor appointments</TabsTrigger>
            ) : null}

          </TabsList>
          {user?.isPatient && (
            <TabsContent value="overview">
              <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="col-span-1">
                  <Link href={'/dashboard/e-triage'}>
                    <div className="bg-blue-300 rounded-lg shadow-lg p-6 flex justify-start items-center gap-2">
                      <ClipboardType className='w-10 h-8 text-gray-50' />
                      <h3 className="text-lg text-white font-semibold mb-2">E-Triage</h3>
                    </div>
                  </Link>
                </div>
                <div className="col-span-1">
                  <Link href={'/dashboard/doctor'}>
                    <div className="bg-blue-300 rounded-lg shadow-lg p-6 flex justify-start items-center gap-2">
                      <Stethoscope className='w-10 h-8 text-gray-50' />
                      <h3 className="text-md text-white font-semibold mb-2">Consult a Doctor(G.P)</h3>
                    </div>
                  </Link>
                </div>
                <div className="col-span-1">
                  <Link href={'/dashboard/lab'}>
                    <div className="bg-slate-500 rounded-lg shadow-lg p-6 flex justify-start items-center gap-2">
                      <FlaskConical className='w-10 h-8 text-gray-50' />
                      <h3 className="text-lg text-white font-semibold mb-2">Lab</h3>
                    </div>
                  </Link>
                </div>
                <div className="col-span-1">
                  <Link href={'/dashboard/pharmacy'}>
                    <div className="bg-blue-700 rounded-lg shadow-lg p-6 flex justify-between items-center gap-2">
                      <h3 className="text-lg text-white font-semibold mb-2">Pharmacy</h3>
                    </div>
                  </Link>
                </div>
                <div className="col-span-1">
                  <Link href={'/dashboard/doctor'}>
                    <div className="bg-blue-400 rounded-lg shadow-lg p-6 flex justify-start items-center gap-2">
                      <h3 className="text-md text-white font-semibold mb-2">Consult a Specialist</h3>
                    </div>
                  </Link>
                </div>
                <div className="col-span-1">
                  <Link href={'/dashboard/admissions'}>
                    <div className="bg-slate-400 rounded-lg shadow-lg p-6 flex justify-start items-center gap-2">
                      <GitPullRequestCreateArrow className='w-10 h-8 text-gray-50' />
                      <h3 className="text-lg text-white font-semibold mb-2">Admissions</h3>
                    </div>
                  </Link>
                </div>

                {/* Third Row */}
                <div className="col-span-1">
                  <Link href={'/dashboard/settings'}>
                    <div className="bg-slate-700 rounded-lg shadow-lg p-6 flex justify-start items-center gap-2">
                      <User className='w-10 h-8 text-gray-50' />
                      <h3 className="text-lg text-white font-semibold mb-2">Manage Account</h3>
                    </div>
                  </Link>
                </div>
                <div className="col-span-1">
                  <Link href={'/dashboard/vaccination'}>
                    <div className="bg-slate-700 rounded-lg shadow-lg p-6 flex justify-start items-center gap-2">
                      <User className='w-10 h-8 text-gray-50' />
                      <h3 className="text-lg text-white font-semibold mb-2">Vaccination</h3>
                    </div>
                  </Link>
                </div>
                <div className="col-span-1">
                  <Link href={'/dashboard/home-care'}>
                    <div className="bg-blue-500 rounded-lg shadow-lg p-6 flex justify-start items-center gap-2">
                      <Newspaper className='w-10 h-8 text-gray-50' />
                      <h3 className="text-lg text-white font-semibold mb-2">Home Care</h3>
                    </div>
                  </Link>
                </div>
              </div>
            </TabsContent>
          )}

          {
            user?.isDoctor && (
              <TabsContent value="lab_orders" className="space-y-4">
                <PatientTable
                  searchKey="name"
                  pageNo={page}
                  columns={labColumns}
                  data={employee}
                  totalUsers={totalUsers}
                  pageCount={pageCount}
                />

                {/* <ERXResult /> */}
                <LabResults />
              </TabsContent>
            )
          }

          {user?.isDoctor && (
            <TabsContent value="analytics" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card className='p-2'>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 p-2">
                    <CardTitle className="text-sm font-medium">
                      Total Revenue
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-semibold">
                      <span className='text-sm'>KES.</span> {'45,231.89'}</div>
                    <p className="text-xs text-muted-foreground">
                      +20.1% from last month
                    </p>
                  </CardContent>

                </Card>
                <Card className='p-2'>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 p-2">
                    <CardTitle className="text-sm font-medium">
                      Transactions
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-semibold">
                      <span className='text-sm'>+</span>2350</div>
                    <p className="text-xs text-muted-foreground">
                      +180.1% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card className='p-2'>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 p-2">
                    <CardTitle className="text-sm font-medium">Consultations Completed</CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <rect width="20" height="14" x="2" y="5" rx="2" />
                      <path d="M2 10h20" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-semibold">
                      <span className='text-sm'>+</span>12,234</div>
                    <p className="text-xs text-muted-foreground">
                      +19% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card className='p-2'>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 p-2">
                    <CardTitle className="text-sm font-medium">
                      Monthly Active Users
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      <span className='text-sm'>+</span>573</div>
                    <p className="text-xs text-muted-foreground">
                      +201 since last week.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
                <div className="col-span-4">
                  <NextAppointment />
                </div>
                <Card className="col-span-4 md:col-span-3 p-3">
                  <CardHeader>
                    <CardTitle>
                      Recent Transactions
                    </CardTitle>
                    <CardDescription>
                      You made 265 Transactions this month.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RecentTransactions />
                  </CardContent>
                </Card>
              </div>

              {/*  */}
              <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                <div className="flex flex-col">
                  <h1>Lab Results</h1>
                  <UpcomingLabTest name='General Health' time='12:30 PM' />
                </div>
                <div className="flex flex-col">
                  <h1>Upcoming Labs</h1>
                  <UpcomingLabTest name='General Health' time='12:30 PM' />
                </div>
              </div>
              {/*  */}
            </TabsContent>
          )}

          {user?.isDoctor && (
            <TabsContent value="doc_appointment" className="space-y-4">
              <UpcomingPatientSchedule />
              <hr />
              <UpcomingPatientSchedule />
              <hr />
              <UpcomingPatientSchedule />
              <hr />
              <UpcomingPatientSchedule />
            </TabsContent>
          )}
        </Tabs>
      </div>

      {/* <LabTestOrSomething /> */}

      {
        user?.isLab && (
          <>
            <DashboardLabModule />
            <DoctorLabAssoci />
          </>
        )
      }

    </ScrollArea>
  );
}
