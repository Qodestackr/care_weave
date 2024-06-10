import * as z from "zod";

export const RegisterSchema = z.object({
  first_name: z.string().min(2, {
    message: "First name must be at least 2 characters long",
  }),
  last_name: z.string().min(2, {
    message: "Last name must be at least 2 characters long",
  }),
  phone: z.string().min(10, {
    message: "Invalid phone number",
  }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters long",
    })
    .max(100)
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, {
      message:
        "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character",
    }),
  terms: z
    .boolean({
      required_error: "Accepting terms and privacy policy is required",
    })
    .default(true),
  notifications: z
    .boolean({
      required_error: "Accepting receiving notifications is required",
    })
    .default(true),
});

export const LogInSchema = z.object({
  email: z.string().email({
    message: "Email address is required",
  }),
  password: z
    .string()
    .min(1, {
      message: "Password is required",
    })
    .max(100, {
      message: "Password is too long",
    }),
});

export const ResetPasswordSchema = z.object({
  email: z.string().email({
    message: "Email address is required",
  }),
});

export const SetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(9, {
        message: "Password must be at least 9 characters long",
      })
      .max(100)
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{9,})/, {
        message:
          "Password must contain at least 9 characters, one uppercase, one lowercase, one number and one special character",
      }),
    confirm: z
      .string()
      .min(9, {
        message: "Password must be at least 9 characters long",
      })
      .max(100)
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{9,})/, {
        message:
          "Password must contain at least 9 characters, one uppercase, one lowercase, one number and one special character",
      }),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ["confirm"],
  });

export const VerificationSchema = z.object({
  userid: z.string().min(2, {
    message: "User id required",
  }),
  token: z.string().min(2, {
    message: "Token required",
  }),
});
