"use client";
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CheckCircle, CreditCard, Edit } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Checkbox } from "../ui/checkbox";
import STKPushInitiated from "./stk-push-initiated";

export type PaymentMethod = "mpesa" | "card" | "insurance" | "google-pay";

export default function AppointmentPaymentMethod() {
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod | any>("insurance");

  const [transactionStatus, setTransactionStatus] = useState(false);
  const [initiateSTKPush, setInitiateSTKPush] = useState(false);
  const [disableAllowEditMpesaNumber, setAllowEditMpesaNumber] = useState(true);
  const [mpesaNumber, setMpesaNumber] = useState("0700652437");

  const handleLipaNaMpesa = (e: any) => {
    e.preventDefault();
    setInitiateSTKPush(true);
    setTimeout(() => {
      setTransactionStatus(true);
    }, 3000);
  };

  const handleDisableMpesaNumberInput = (e: any) => {
    e.preventDefault();
    setAllowEditMpesaNumber(false);
  };

  const handleEditMpesaNumber = (e: any) => {
    e.preventDefault();
    setMpesaNumber(e.target.value);
  };

  return (
    <Card className="container mx-auto w-full sm:w-2/3 my-7 dark:bg-gray-800 dark:text-white">
      <div className="my-4 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div
          onClick={() => setSelectedMethod("insurance")}
          className={`group cursor-pointer rounded-lg border-2 ${selectedMethod === "insurance" ? "border-green-700" : "border-gray-200"} bg-white p-6 transition-all dark:border-gray-800 dark:bg-gray-900`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Image src={"/insurance-001.png"} alt="pay afyamed payment" width={34} height={48} />
              <span className="text-lg font-light">NHIF</span>
            </div>
            <div className="rounded-full bg-gray-100 p-2 transition-colors dark:bg-gray-800">
              <CheckCircle className={`h-5 w-5 ${selectedMethod === "insurance" ? "text-green-700" : "text-gray-500"} transition-colors dark:text-gray-400`} />
            </div>
          </div>
        </div>

        <div
          onClick={() => setSelectedMethod("mpesa")}
          className={`group cursor-pointer rounded-lg border-2 ${selectedMethod === "mpesa" ? "border-green-700" : "border-gray-200"} bg-white p-6 transition-all dark:border-gray-800 dark:bg-gray-900`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Image src={"/512px-M-PESA_LOGO-01.svg.png"} alt="pay afyamed consultation with mpesa" width={34} height={34} />
              <span className="text-lg font-light">Lipa Na Mpesa</span>
            </div>
            <div className="rounded-full bg-gray-100 p-2 transition-colors dark:bg-gray-800">
              <CheckCircle className={`h-5 w-5 ${selectedMethod === "mpesa" ? "text-green-700" : "text-gray-500"} transition-colors dark:text-gray-400`} />
            </div>
          </div>
        </div>

        <div
          onClick={() => setSelectedMethod("card")}
          className={`group cursor-pointer rounded-lg border-2 ${selectedMethod === "card" ? "border-green-700" : "border-gray-200"} bg-white p-6 transition-all dark:border-gray-800 dark:bg-gray-900`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <CreditCard className={`h-8 w-8 ${selectedMethod === "card" && "text-green-700"}`} />
              <span className="text-lg font-light">Card</span>
            </div>
            <div className="rounded-full bg-gray-100 p-2 transition-colors dark:bg-gray-800">
              <CheckCircle className={`h-5 w-5 ${selectedMethod === "card" ? "text-green-700" : "text-gray-500"} transition-colors dark:text-gray-400`} />
            </div>
          </div>
        </div>
      </div>

      {selectedMethod === "card" && (
        <div>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="First Last" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="number">Card number</Label>
              <Input id="number" placeholder="" />
            </div>
          </CardContent>

          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="billingPeriod">Billing Period</Label>
              <Select>
                <SelectTrigger aria-label="Billing Period" id="billingPeriod">
                  <SelectValue placeholder="Select Billing Period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="monthly">Monthly</SelectItem>
                  <SelectItem value="quarterly">Quarterly</SelectItem>
                  <SelectItem value="annual">Annual</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="paymentMethod">Payment Method</Label>
              <Select>
                <SelectTrigger aria-label="Payment Method" id="paymentMethod">
                  <SelectValue placeholder="Select Payment Method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="creditCard">Credit Card</SelectItem>
                  <SelectItem value="debitCard">Debit Card</SelectItem>
                  <SelectItem value="paypal">Paypal</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="promoCode">Promo Code</Label>
              <Input id="promoCode" placeholder="Enter your promo code" />
            </div>
          </CardContent>
          <CardContent className="grid gap-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="grid gap-2">
                <Label>Expires</Label>
                <Select>
                  <SelectTrigger id="month">
                    <SelectValue placeholder="Month" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">January</SelectItem>
                    <SelectItem value="2">February</SelectItem>
                    <SelectItem value="3">March</SelectItem>
                    <SelectItem value="4">April</SelectItem>
                    <SelectItem value="5">May</SelectItem>
                    <SelectItem value="6">June</SelectItem>
                    <SelectItem value="7">July</SelectItem>
                    <SelectItem value="8">August</SelectItem>
                    <SelectItem value="9">September</SelectItem>
                    <SelectItem value="10">October</SelectItem>
                    <SelectItem value="11">November</SelectItem>
                    <SelectItem value="12">December</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label>Year</Label>
                <Select>
                  <SelectTrigger id="year">
                    <SelectValue placeholder="Year" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 10 }, (_, i) => (
                      <SelectItem key={i} value={`${new Date().getFullYear() + i}`}>
                        {new Date().getFullYear() + i}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label>CVC</Label>
                <Input id="cvc" placeholder="CVC" />
              </div>
            </div>
          </CardContent>

          <CardFooter>
            <Link href={"/dashboard/e-triage/hospital-waiting-lobby"}>
              <Button className="ml-auto">Submit</Button>
            </Link>
          </CardFooter>
        </div>
      )}

      {selectedMethod === "insurance" && (
        <div className="flex flex-col gap-2 justify-center items-start my-2">
          <h3 className="my-5 text-2xl">Add Your Insurance Info</h3>

          <Card className="w-full p-4 rounded-sm bg-gray-100 dark:bg-gray-900">
            <div>
              <div className="flex justify-between items-center">
                <h3 className="text-[#283779] font-light text-2xl my-1 dark:text-[#A1C4FF]">
                  Your information
                </h3>
                <Button>
                  <span>
                    <Edit />
                  </span>
                </Button>
              </div>

              <div>
                <div className="my-4">
                  <p className="text-slate-800 dark:text-gray-300 text-lg">Legal Full Name:</p>
                  <p>{"Wilson"} {"Gichuhi"}</p>
                </div>

                <div className="my-4">
                  <p className="text-slate-800 dark:text-gray-300 text-lg">Date of Birth:</p>
                  <p>12/12/1999</p>
                </div>
              </div>
            </div>
          </Card>

          <Label htmlFor="insurance_provider">Insurance Provider</Label>
          <Input id="insurance_provider" placeholder="+254700 652 437" />

          <Label htmlFor="member_id">Member ID</Label>
          <Input id="member_id" placeholder="JQ212FS232" />
          <span>Add your full Member ID. Include all letters and numbers.</span>

          <div className="flex justify-center items-center gap-2">
            <Checkbox /> I am a dependent on this insurance policy
          </div>
          <span className="text-red-500 text-sm">
            The name you entered doesn&apos;t match what&apos;s on the health plan record.
            <br />
            Please enter the name listed on your insurance card.
          </span>
          <Button className="px-2 py-7 w-full sm:w-1/2 font-light">
            <Link href={"/dashboard/book-appointment/book"}>Add NHIF</Link>
          </Button>
        </div>
      )}

      {selectedMethod === "mpesa" && (
        <div className="flex flex-col gap-2 justify-start items-start my-2">
          <Label htmlFor="change_phone">
            <span className="block text-sm text-slate-800 dark:text-gray-300">Click the edit icon to change number.</span>
          </Label>
          <div className="relative flex items-center">
            <Input onChange={handleEditMpesaNumber} placeholder="0700 652 437" value={mpesaNumber} disabled={disableAllowEditMpesaNumber} className="dark:bg-gray-800" />
            <Edit onClick={handleDisableMpesaNumberInput} className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-500 cursor-pointer" />
          </div>
          <Button className="flex-start text-white rounded-sm dark:bg-green-700" onClick={handleLipaNaMpesa}>Lipa na Mpesa</Button>
          {initiateSTKPush && <STKPushInitiated />}
        </div>
      )}

      <Card className="flex justify-between items-center rounded-sm p-4 my-4 dark:bg-gray-900">
        <h1 className="font-normal">Total: </h1>
        <h1 className="font-light">KES. 860</h1>
      </Card>
    </Card>
  );
}
