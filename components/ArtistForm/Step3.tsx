import { useFormContext } from 'react-hook-form';
import { Label } from "@/components/ui/label"

const priceStarts = [1000, 5000, 10000];
const priceEnds = [50000, 100000, 200000];
const locations = ["Mumbai", "Delhi", "Chennai", "Kolkata"];

export default function Step3PricingLocation() {
  const { register, formState: { errors } } = useFormContext();

  return (
    <>
      <label>Fee Range Start</label>
      <select {...register("feeRangeStart")} className="input border px-3 py-2 w-full">
        <option value="">Select</option>
        {priceStarts.map((p) => (
          <option key={p} value={p}>₹{p}</option>
        ))}
      </select>
      {errors.feeRangeStart && <p className="text-red-500">{errors.feeRangeStart.message}</p>}

      <label>Fee Range End</label>
      <select {...register("feeRangeEnd")} className="input border px-3 py-2 w-full">
        <option value="">Select</option>
        {priceEnds.map((p) => (
          <option key={p} value={p}>₹{p}</option>
        ))}
      </select>
      {errors.feeRangeEnd && <p className="text-red-500">{errors.feeRangeEnd.message}</p>}

      <label>Location</label>
      <select {...register("location")} className="input border px-3 py-2 w-full">
        <option value="">Select</option>
        {locations.map((loc) => (
          <option key={loc} value={loc}>{loc}</option>
        ))}
      </select>
      {errors.location && <p className="text-red-500">{errors.location.message}</p>}
    </>
  );
}
