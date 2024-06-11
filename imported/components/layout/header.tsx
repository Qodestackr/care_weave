"use client";
import { cn } from "@/lib/utils";
import { MobileSidebar } from "./mobile-sidebar";
import { UserNav } from "./user-nav";
import Link from "next/link";
import { ModeToggle } from "./ThemeToggle/theme-toggle";
import { FileQuestion } from "lucide-react";
// import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import React from "react";
import { Session } from "next-auth";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export default function DashboardHeader({ session }: { session: Session | null }) {

  const id = React.useId();
  const user = session?.user;

  return (
    <div className="fixed top-0 left-0 right-0 supports-backdrop-blur:bg-background/60 border-b bg-background/95 backdrop-blur z-20">
      <nav className="h-14 flex items-center justify-between px-4">
        <div className={cn("block lg:!hidden")}>
          <MobileSidebar />
        </div>

        {/* ************ */}

        <div className="hidden lg:block">
          <Link
            href={'/dashboard'}
            className="font-medium text-xl hover:scale-110 transition-transform duration-300"
          >
            <span className="text-blue-600 font-light text-3xl mr-1">A</span>
            <span className="text-red-600 font-semibold text-3xl mr-1">f</span>
            <span className="text-yellow-600 font-bold text-3xl mr-1">y</span>
            <span className="text-green-600 font-bold text-3xl mr-1">a</span>
            <span className="text-green-600 font-bold text-3xl mr-1">T</span>
            <span className="text-green-600 font-bold text-3xl mr-1">e</span>
            <span className="text-green-600 font-bold text-3xl mr-1">le</span>
            <span className="text-indigo-600 font-bold text-3xl mr-1">M</span>
            <span className="text-purple-600 font-bold text-3xl">e</span>
            <span className="text-md text-gray-600 font-semibold ml-1">d</span>
          </Link>
        </div>

        {/* ************ */}

        <div className="flex items-center gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <FileQuestion className="hover:cursor-pointer" />
            </DialogTrigger>

            <DialogContent>
              <CardHeader>
                <CardTitle>Report an issue</CardTitle>
                <CardDescription>
                  What area are you having problems with?
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label>Area</Label>
                    <Select defaultValue="insurance">
                      <SelectTrigger id={`area-${id}`} aria-label="Area">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="e-triage">E-Triage</SelectItem>
                        <SelectItem value="insurance">Insurance</SelectItem>
                        <SelectItem value="account">Account/Profile</SelectItem>
                        <SelectItem value="book_appointment">Booking Appointments</SelectItem>
                        <SelectItem value="support">Support</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label>Security Level</Label>
                    <Select defaultValue="2">
                      <SelectTrigger
                        id={`security-level-${id}`}
                        className="line-clamp-1 w-full truncate"
                        aria-label="Security Level"
                      >
                        <SelectValue placeholder="Select level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">Severity 1 (Highest)</SelectItem>
                        <SelectItem value="2">Severity 2</SelectItem>
                        <SelectItem value="3">Severity 3</SelectItem>
                        <SelectItem value="4">Severity 4 (Lowest)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label>Subject</Label>
                  <Input id={`subject-${id}`} placeholder="I need help with..." />
                </div>
                <div className="grid gap-2">
                  <Label>Description</Label>
                  <Textarea
                    id={`description-${id}`}
                    placeholder="Please include all information relevant to your issue."
                  />
                </div>
              </CardContent>
              {/*  */}
              <CardFooter className="justify-between space-x-2">
                <Button>Cancel</Button>
                <Button>Submit</Button>
              </CardFooter>
              {/*  */}
            </DialogContent>
          </Dialog>

          <UserNav user={user} />

          <ModeToggle />
        </div>
      </nav>
    </div>
  );
}
