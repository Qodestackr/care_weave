"use client";
import { Button } from "@/components/ui/button";
import { useFormStatus } from 'react-dom';


import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader, User2 } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleButton } from "./GoogleLogin";

import { doCredentialLogin } from "@/actions/auth.actions";

import { signIn } from '@/actions/sign-in'


const formSchema = z.object({
  email: z.string().email({ message: "Enter a valid email address" }),
  // password: z.string().min(6),
});

type UserFormValue = z.infer<typeof formSchema>;

export default function UserAuthForm() {
  const { pending } = useFormStatus();

  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter()
  const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm()

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const [loading, setLoading] = useState(false);
  const defaultValues = {
    email: "demo@gmail.com",
  };
  const form = useForm<UserFormValue>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSigninSubmit = async (data: any /**UserFormValue */) => {
    // signIn("credentials", {
    //   email: data.email,
    //   callbackUrl: callbackUrl ?? "/dashboard",
    // });

    console.log(data)
    setIsLoading(true);
    // Simulate a network request or actual form submission here


    setTimeout(() => {
      setIsLoading(false);
      // Handle navigation or further steps after account creation
    }, 2000);

    setTimeout(() => {
      toast.success('Sign in successfull!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        // progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }, 2000);

    setTimeout(() => { router.push('/dashboard') }, 3100)

  };

  ////////////////////////////////////
  async function onSubmit(event: any) {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);

      const response = await doCredentialLogin(formData);

      if (!!response.error) {
        console.error(response.error);
        // setError(response.error.message);
      } else {
        router.push("/home");
      }
    } catch (e) {
      console.error(e);
      // setError("Check your Credentials");
    }
  }
  ///////////////////////////////////

  return (
    <div className="w-2/3 mx-auto bg-gray-100 rounded-md p-4">
      <h2>TeleMed</h2>

      <GoogleButton />
      <form
        // onSubmit={handleSubmit(onSigninSubmit)} 
        // onSubmit={onSubmit}
        action={signIn}
        className="mt-4 flex flex-col items-center">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        // transition:Bounce,
        />
        <div className="w-full flex-1">

          <h2 className="my-2 text-xl text-center text-[#283779]">
            Or Use Email/Password
          </h2>

          <div className="w-2/3 mx-auto">
            <Input
              {...register('email', { required: true })}
              className="w-full px-2 py-6 rounded-lg font-light bg-gray-100 border border-gray-200 
                    placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
              type="email" placeholder="Email" />
            {errors?.email && <span className="text-sm font-light text-red-500">Please enter a valid email.</span>}


            <Input
              {...register('password', { required: true })}
              className="w-full px-2 py-6 rounded-lg font-light bg-gray-100 border border-gray-200 
                    placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
              type="password" placeholder="Password" />
            {errors?.password && <span className="text-sm font-light text-red-500">This field is required.</span>}

            <Button
              type='submit'
              className="mt-5 tracking-wide font-light text-white w-full py-6
                             rounded-lg  transition-all duration-300 ease-in-out flex items-center 
                             justify-center focus:shadow-outline focus:outline-none">
              {/* {
                isLoading ? (<>
                  <span className="flex gap-1 text-green-200"><Loader className="animate-spin" />{' '} Signing in....</span>
                </>) : (<>
                  <User2 />
                  <span className="mx-2">
                    Sign In
                  </span>
                </>)
              } */}
              <span className="mx-2">
                {pending ? 'Signing in...' : 'Sign In'}
              </span>
            </Button>

            <span className="block text-gray-800 my-3">
              No account yet?
              <Link href={'/auth/signup'} className="text-green-800">
                {'  '} Register instead
              </Link>
            </span>

            <span className="block text-blue-500 my-3">
              <Link href={'/auth/reset-password'} className="text-blue-600">
                {'  '} Reset Password
              </Link>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}
