// validation/hospitalSchema.ts
import { z } from 'zod';

const hospitalSchema = z.object({
    name: z.string().min(1, "Hospital name is required"),
    address: z.string().min(1, "Address is required"),
    contactEmail: z.string().email("Invalid email address"),
    contactPhone: z.string().min(10, "Phone number should be at least 10 digits"),
    hospitalType: z.string(),
    // adminId: z.number().positive("Admin ID must be a positive number"),
    doctorProfileId: z.number().positive("Doctor Profile ID must be a positive number"),
});

export default hospitalSchema;
