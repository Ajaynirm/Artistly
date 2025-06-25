"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Loading from "@/app/loading";
import { toast } from "sonner";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "../ui/label";

const schema = yup.object({
  name: yup.string().required("Name is required"),
  bio: yup.string().required("Bio is required"),
  category: yup
    .array()
    .of(yup.string())
    .typeError("Choose a Category")
    .min(1, "Select at least one category"),
  location: yup
    .string()
    .typeError("Select Your location")
    .required("Location is required"),
  feeRangeStart: yup
    .number()
    .typeError("Select a fee start")
    .required("Fee start range is required"),
  feeRangeEnd: yup
    .number()
    .typeError("Select a fee end")
    .required("Fee end range is required"),
  languages: yup
    .array()
    .of(yup.string())
    .typeError("choose a list of language")
    .min(1, "Select at least one language"),
});

const categories = ["Singer", "Dancer", "DJ", "Speaker"];
const languages = ["English", "Hindi", "Tamil", "Punjabi", "Malay", "Marathi"];
const priceStarts = [1000, 5000, 10000, 20000];
const priceEnds = [50000, 100000, 200000, 500000, 1000000];
const locations = ["Mumbai", "Delhi", "Chennai", "Kolkata", "Malasiya"];

export default function ArtistForm() {
  type FormValues = {
    name: string;
    bio: string;
    category: string[];
    languages: string[];
    location: string;
    feeRangeStart: number;
    feeRangeEnd: number;
  };

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = (data: any) => {
    setLoading(true);
    setTimeout(() => {
      const existing = JSON.parse(localStorage.getItem("mockData") || "[]");
      const newData = { id: Date.now(), ...data };

      const updated = [...existing, newData];
      localStorage.setItem("mockData", JSON.stringify(updated));

      console.log("Saved to localStorage:", updated);

      toast("Form submitted successfully!", {
        description: new Date().toLocaleString(),
        position: "top-center",
        duration: 10000,
      });
      reset();
      setLoading(false);
    }, 4000);
  };
  if (loading) {
    return <Loading />;
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 max-w-xl mx-auto p-4"
    >
      <h2 className="text-2xl font-bold mb-4">Artist Onboarding</h2>
      {/* test name */}

      {/* test name end*/}

      {/* /* Name */}
      <div>
        <Label className="block mb-1 p-2">Name</Label>
        <Input
          placeholder="Name"
          {...register("name")}
          className="input border px-3 py-2 w-full"
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1 p-2">{errors.name.message}</p>
        )}
      </div>

      {/* /* Bio */}
      <div>
        <Label className="block mb-1 p-2">Tell about the artist</Label>
        <Textarea
          placeholder="Add Bio of the Artists..."
          {...register("bio")}
          className="input border px-3 py-2 w-full"
        />
        {errors.bio && (
          <p className="text-red-500 text-xs mt-1 p-2">{errors.bio.message}</p>
        )}
      </div>

      {/* Category */}
      <div className="input border px-3 py-2 w-full">
        <Label className="block mb-1 p-2">Category</Label>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <label key={cat} className="flex items-center gap-1">
              <input type="checkbox" value={cat} {...register("category")} />
              {cat}
            </label>
          ))}
        </div>
        {errors.category && (
          <p className="text-red-500 text-xs mt-1 p-2">
            {errors.category.message}
          </p>
        )}
      </div>

      {/* Languages */}
      <div className="input border px-3 py-2 w-full">
        <Label className="block mb-1 p-2">Languages Spoken</Label>
        <div className="flex flex-wrap gap-2">
          {languages.map((lang) => (
            <label key={lang} className="flex items-center gap-1">
              <input type="checkbox" value={lang} {...register("languages")} />
              {lang}
            </label>
          ))}
        </div>
        {errors.languages && (
          <p className="text-red-500 text-xs mt-1 p-2">
            {errors.languages.message}
          </p>
        )}
      </div>

      {/* Fee Range Start */}

      <div className="input border px-3 py-2 w-full hidden md:block">
        <Label className="block mb-1 p-2">Fee Range Start</Label>
        <Controller
          name="feeRangeStart"
          control={control}
          render={({ field }) => (
            <Select
              onValueChange={(value) => field.onChange(parseInt(value))}
              value={field.value ? String(field.value) : ""}
            >
              <SelectTrigger className="w-[500px]">
                <SelectValue placeholder="Select fee start" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fee Start Range</SelectLabel>
                  {priceStarts.map((range) => (
                    <SelectItem key={range} value={String(range)}>
                      ₹{range}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        />
        {errors.feeRangeStart && (
          <p className="text-red-500 text-xs mt-1 p-2">
            {errors.feeRangeStart.message}
          </p>
        )}
      </div>

      {/* Fee Range End */}
      <div className="input border px-3 py-2 w-full hidden md:block">
        <Label className="block mb-1">Fee Range End</Label>
        <Controller
          name="feeRangeEnd"
          control={control}
          render={({ field }) => (
            <Select
              onValueChange={(value) => field.onChange(parseInt(value))}
              value={field.value ? String(field.value) : ""}
            >
              <SelectTrigger className="w-[500px]">
                <SelectValue placeholder="Select fee end" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fee End Range</SelectLabel>
                  {priceEnds.map((range) => (
                    <SelectItem key={range} value={String(range)}>
                      ₹{range}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        />
        {errors.feeRangeEnd && (
          <p className="text-red-500 text-xs mt-1 p-2">
            {errors.feeRangeEnd.message}
          </p>
        )}
      </div>

      {/* fee for mobile screen */}

      <div className="input border px-3 py-2 w-full block md:hidden">
        <Label className="block mb-1 p-2">Fee Range </Label>
        <div className="flex flex-row justify-around">
          <div className="input border px-3 py-2 w-40 ">
            <select
              {...register("feeRangeStart")}
              className="input border px-3 py-2 w-full"
            >
              <option value="">Start Fee</option>

              {priceStarts.map((range) => (
                <option key={range} value={range}>
                  ₹{range}
                </option>
              ))}
            </select>

            {errors.feeRangeStart && (
              <p className="text-red-500 text-sm p-2">
                {errors.feeRangeStart.message}
              </p>
            )}
          </div>

          <div className="input border px-3 py-2 w-40 ">
            <select
              {...register("feeRangeEnd")}
              className="input border px-3 py-2 w-full"
            >
              <option value="">End Fee</option>
              {priceEnds.map((range) => (
                <option key={range} value={range}>
                  ₹{range}
                </option>
              ))}
            </select>
            {errors.feeRangeEnd && (
              <p className="text-red-500 text-sm">
                {errors.feeRangeEnd.message}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Location */}
      <div className="input border px-3 py-2  md:w-full">
        <Label className="block mb-1 p-2">Location</Label>
        <Controller
          name="location"
          control={control}
          render={({ field }) => (
            <Select
              onValueChange={(value) => field.onChange(value)}
              value={field.value ? String(field.value) : ""}
            >
              <SelectTrigger className="w-[500px]">
                <SelectValue placeholder="Select Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Location</SelectLabel>
                  {locations.map((range) => (
                    <SelectItem key={range} value={range}>
                      {range}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        />
        {errors.location && (
          <p className="text-red-500 text-xs mt-1 p-2">
            {errors.location.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
      >
        Submit
      </button>
    </form>
  );
}
