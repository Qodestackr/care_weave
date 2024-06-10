"use server";

import EmailTemplate from "@/components/Emails/email-template";
import WelcomeEmail from "@/components/Emails/welcome-email";
import { prismaClient } from "@/lib/db";

import { BioDataFormProps, RegisterInputProps } from "@/types/types";
import { DoctorProfile } from "@prisma/client";
import bcrypt from "bcrypt";

import { Resend } from "resend";

export async function createDoctorProfile(formData: any) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const {
    dob,
    firstName,
    gender,
    lastName,
    middleName,
    page,
    trackingNumber,
    userId,
  } = formData;

  console.log("this is the targetuserID", userId, typeof userId);
  console.log("?????????", formData);
  // const parsedId = typeof id === "string" ? parseInt(id, 10) : id;

  try {
    const newProfile = await prismaClient.doctorProfile.create({
      data: {
        // dob,
        firstName,
        gender,
        lastName,
        middleName,
        page,
        trackingNumber,
        userId: parseInt(userId),
      },
    });
    console.log(newProfile);
    return {
      data: newProfile,
      status: 201,
      error: null,
    };
  } catch (error) {
    console.log(error);
    return {
      data: null,
      status: 500,
      error: "Something went wrong",
    };
  }
}
export async function createAvailability(data: any) {
  try {
    const newAvail = await prismaClient.availability.create({
      data,
    });
    console.log(newAvail);
    return newAvail;
  } catch (error) {
    console.log(error);
    return {
      data: null,
      status: 500,
      error: "Something went wrong",
    };
  }
}

export async function updateDoctorProfile(id: string | undefined, data: any) {
  const parsedId = typeof id === "string" ? parseInt(id, 10) : id;

  const { hourlyWage, ...restOfData } = data;

  console?.log("UPDATING DOC PROFILE?", data);

  const parsedHourlyWage =
    typeof hourlyWage === "string" ? parseInt(hourlyWage, 10) : hourlyWage;

  if (id) {
    try {
      const updatedProfile = await prismaClient.doctorProfile.update({
        where: {
          id: parsedId,
        },
        data: {
          ...restOfData,
          hourlyWage: parsedHourlyWage,
        },
      });
      console.log(updatedProfile);
      return {
        data: updatedProfile,
        status: 201,
        error: null,
      };
    } catch (error) {
      console.log(error);
      return {
        data: null,
        status: 500,
        error: "Profile was not updated",
      };
    }
  }
}

export async function updateAvailabilityById(
  id: string | undefined,
  data: any
) {
  const parsedId = typeof id === "string" ? parseInt(id, 10) : id;

  if (id) {
    try {
      const updatedAva = await prismaClient.availability.update({
        where: {
          id: parsedId,
        },
        data,
      });
      console.log(updatedAva);
      return {
        data: updatedAva,
        status: 201,
        error: null,
      };
    } catch (error) {
      console.log(error);
      return {
        data: null,
        status: 500,
        error: "Availability was not updated",
      };
    }
  }
}

export async function getApplicationByTrack(trackingNumber: string) {
  if (trackingNumber) {
    try {
      const existingProfile = await prismaClient.doctorProfile.findUnique({
        where: {
          trackingNumber,
        },
      });
      if (!existingProfile) {
        return {
          data: null,
          status: 404,
          error: "Wrong Tracking Number",
        };
      }
      return {
        data: existingProfile,
        status: 200,
        error: null,
      };
    } catch (error) {
      console.log(error);
      return {
        data: null,
        status: 500,
        error: "Something Went wrong",
      };
    }
  }
}

export async function completeProfile(id: string | undefined, data: any) {
  const parsedId = typeof id === "string" ? parseInt(id, 10) : id;
  const resend = new Resend(process.env.RESEND_API_KEY);
  if (id) {
    try {
      const existingProfile = await prismaClient.doctorProfile.findUnique({
        where: {
          id: parsedId,
        },
      });
      if (!existingProfile) {
        return {
          data: null,
          status: 404,
          error: "Profile Not Found",
        };
      }

      //send a welcome email
      const firstName = existingProfile.firstName;
      const email = existingProfile.email as string;
      const previewText = "Welcome to AfyaTelemed ";
      const message =
        "Thank you for joining AfyaTelemed, we are so grateful that we have onboard ";
      const sendMail = await resend.emails.send({
        from: "marynjugia150@gmail.com", //"Medical App <info@jazzafricaadventures.com>",
        to: email,
        subject: "Welcome to AfyaTelemed",
        react: WelcomeEmail({ firstName, previewText, message }),
      });
      const updatedProfile = await prismaClient.doctorProfile.update({
        where: {
          id: parsedId,
        },
        data,
      });
      console.log(updatedProfile);
      return {
        data: updatedProfile,
        status: 201,
        error: null,
      };
    } catch (error) {
      console.log(error);
      return {
        data: null,
        status: 500,
        error: "Profile was not updated",
      };
    }
  }
}

export async function getDoctorProfileById(userId: string | undefined) {
  const parsedId = typeof userId === "string" ? parseInt(userId, 10) : userId;

  if (userId) {
    try {
      const profile = await prismaClient.doctorProfile.findUnique({
        where: {
          userId: parsedId,
        },
        include: {
          availability: true,
        },
      });
      console.log(profile);
      return {
        data: profile,
        status: 200,
        error: null,
      };
    } catch (error) {
      console.log(error);
      return {
        data: null,
        status: 500,
        error: "Profile was not fetched",
      };
    }
  }
}
