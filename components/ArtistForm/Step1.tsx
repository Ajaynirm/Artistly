// components/forms/Step1.tsx
"use client";

import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";

export default function Step1() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <h2 className="text-xl font-bold">Step 1 - Basic Info</h2>

      <div>
        <Input {...register("name")} placeholder="Name" />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      </div>

      <div>
        <Input {...register("bio")} placeholder="Bio" />
        {errors.bio && <p className="text-red-500 text-sm">{errors.bio.message}</p>}
      </div>
    </>
  );
}
