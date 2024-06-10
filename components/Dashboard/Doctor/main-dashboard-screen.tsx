import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { labColumns } from '@/imported/components/tables/patient-tables/columns';
import { PatientTable } from '@/imported/components/tables/patient-tables/patient-table'
import React from 'react'
import LabResults from '../lab/LabResults';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { NextAppointment } from '@/imported/ui-components/Heute';
import { RecentTransactions } from '@/imported/components/recent-sales';
import UpcomingLabTest from '@/app/(back)/dashboard/importeddashboard/dashboard/lab/UpcomingLabTest';
import { UpcomingPatientSchedule } from '@/imported/ui-components/page';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
// 
export default function DoctorMaindDashboardScreen() {
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


    return (
        <div className="flex-1 space-y-4 p-4 md:p-8 pt-6 dark:bg-black dark:text-gray-50">

            <Tabs defaultValue={'analytics'}>
                <TabsList>
                    <TabsTrigger value="analytics">Analytics</TabsTrigger>
                    <TabsTrigger value="lab_orders">Lab Orders</TabsTrigger>
                </TabsList>

                <TabsContent value="lab_orders" className="space-y-4">
                    {/* <div className="w-1/2 mx-auto">
                        <PatientTable
                            searchKey="name"
                            pageNo={page}
                            columns={labColumns}
                            data={employee}
                            totalUsers={totalUsers}
                            pageCount={pageCount}
                        />
                    </div> */}
                    {/* <ERXResult /> */}
                    <LabResults />
                </TabsContent>

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
                    <div className="grid gap-4 grid-cols-1">

                        <div className="flex flex-1 flex-col gap-6 p-6 md:p-10">
                            <Card className='w-full'>
                                <CardHeader>
                                    <CardTitle>Pending Lab Requests</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Patient</TableHead>
                                                <TableHead>Test</TableHead>
                                                <TableHead>Status</TableHead>
                                                <TableHead className="text-right">Actions</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell className="font-medium">John Doe</TableCell>
                                                <TableCell>CBC</TableCell>
                                                <TableCell>Pending</TableCell>
                                                <TableCell className="text-right">
                                                    <Button variant="outline" size="sm" className="mr-2">
                                                        View
                                                    </Button>
                                                    <Button variant="outline" size="sm" className="mr-2">
                                                        Accept
                                                    </Button>

                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className="font-medium">Jane Smith</TableCell>
                                                <TableCell>Lipid Panel</TableCell>
                                                <TableCell>Pending</TableCell>
                                                <TableCell className="text-right">
                                                    <Button variant="outline" size="sm" className="mr-2">
                                                        View
                                                    </Button>
                                                    <Button variant="outline" size="sm" className="mr-2">
                                                        Accept
                                                    </Button>

                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className="font-medium">Bob Johnson</TableCell>
                                                <TableCell>Urinalysis</TableCell>
                                                <TableCell>Pending</TableCell>
                                                <TableCell className="text-right">
                                                    <Button variant="outline" size="sm" className="mr-2">
                                                        View
                                                    </Button>
                                                    <Button variant="outline" size="sm" className="mr-2">
                                                        Accept
                                                    </Button>

                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </CardContent>
                            </Card>
                        </div>
                        {/* ......................... */}
                        <div>
                            <Card className='w-full'>
                                <CardHeader>
                                    <CardTitle>Lab Results</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Patient</TableHead>
                                                <TableHead>Test</TableHead>
                                                <TableHead>Status</TableHead>
                                                <TableHead className="text-right">Actions</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell className="font-medium">John Doe</TableCell>
                                                <TableCell>CBC</TableCell>
                                                <TableCell>
                                                    <Badge>Completed</Badge>
                                                </TableCell>
                                                <TableCell className="text-right">
                                                    <Button variant="outline" size="sm">
                                                        View Results
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className="font-medium">Jane Smith</TableCell>
                                                <TableCell>Lipid Panel</TableCell>
                                                <TableCell>
                                                    <Badge>Completed</Badge>
                                                </TableCell>
                                                <TableCell className="text-right">
                                                    <Button variant="outline" size="sm">
                                                        View Results
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className="font-medium">Bob Johnson</TableCell>
                                                <TableCell>Urinalysis</TableCell>
                                                <TableCell>
                                                    <Badge>Completed</Badge>
                                                </TableCell>
                                                <TableCell className="text-right">
                                                    <Button variant="outline" size="sm">
                                                        View Results
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </CardContent>
                            </Card>
                        </div>
                        {/* <div className="flex flex-col">
                            <h1>Lab Results</h1>
                            <UpcomingLabTest name='General Health' time='12:30 PM' />
                        </div>
                        <div className="flex flex-col">
                            <h1>Upcoming Labs</h1>
                            <UpcomingLabTest name='General Health' time='12:30 PM' />
                        </div> */}
                    </div>
                </TabsContent>

                {/* <TabsContent value="doc_appointment" className="space-y-4">
                    <UpcomingPatientSchedule />
                    <hr />
                    <UpcomingPatientSchedule />
                    <hr />
                    <UpcomingPatientSchedule />
                    <hr />
                    <UpcomingPatientSchedule />
                </TabsContent> */}
            </Tabs>
        </div>
    )
}
