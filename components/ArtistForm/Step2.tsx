'use client';

import { useFormContext } from 'react-hook-form';
import { Label } from "@/components/ui/label"


const categories = ['Singer', 'Dancer', 'DJ', 'Speaker'];
const languages = ['English', 'Hindi', 'Tamil', 'Punjabi'];

export default function Step2Categories() {
  const { register, formState: { errors} } = useFormContext();

  return (
    <>
      <Label htmlFor="bio">Categories</Label>
      <div className="flex gap-2 flex-wrap">
        {categories.map((cat) => (
          <label key={cat}>
            <input type="checkbox" value={cat} {...register("category")} />
            {cat}
          </label>
        ))}
      </div>
      {errors.category && <p className="text-red-500">{errors.category.message}</p>}

    
      <Label htmlFor="bio">Languages</Label>
      <div className="flex gap-2 flex-wrap">
        {languages.map((lang) => (
          <label key={lang}>
            <input type="checkbox" value={lang} {...register("languages")} />
            {lang}
          </label>
        ))}
      </div>
      {errors.languages && <p className="text-red-500">{errors.languages.message}</p>}
    </>
  );
}
