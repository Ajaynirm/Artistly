"use client";
import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Loading from "@/app/loading";
import { toast } from "sonner";

const schema = yup.object({
  name: yup.string().required(),
  bio: yup.string().required(),
  category: yup.array().of(yup.string()).min(1),
  location: yup.string().required(),
  feeRangeStart: yup.number().required(),
  feeRangeEnd: yup.number().required(),
  languages: yup.array().of(yup.string()).min(1),
});

const steps = [Step1, Step2, Step3];

export default function ArtistFormWrapper() {
  const methods = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const CurrentStep = steps[step];

  const handleNext = () => setStep((s) => s + 1);
  const handleBack = () => setStep((s) => s - 1);

  const onSubmit = (data: any) => {
    setLoading(true);
    setTimeout(() => {
      const existing = JSON.parse(localStorage.getItem("mockData") || "[]");
      const updated = [...existing, { id: Date.now(), ...data }];
      localStorage.setItem("mockData", JSON.stringify(updated));

      toast("Form submitted successfully!", {
        description: new Date().toLocaleString(),
        position: "top-center",
        duration: 5000,
      });
      setLoading(false);
      methods.reset();
      setStep(0);
    }, 2000);
  };

  if (loading) return <Loading />;

  return (
    <FormProvider {...methods}>
      <form
       onSubmit={methods.handleSubmit((data) => {
        if (step === steps.length - 1) {
          onSubmit(data); // Final submit
          toast("hi1");
        } else {
          handleNext(); // Move to next step
          toast("JhI3");
        }
      })}
      
          
        className="space-y-6 max-w-xl mx-auto p-4"
      >
        <CurrentStep />

        <div className="flex justify-between">
          {step > 0 && (
            <button
              type="button"
              onClick={handleBack}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Back
            </button>
          )}
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            {step === steps.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </form>
    </FormProvider>
  );
}
