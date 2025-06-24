'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Loading from '@/app/loading';


const schema = yup.object({
  name: yup.string().required('Name is required'),
  bio: yup.string().required('Bio is required'),
  category: yup.array().of(yup.string()).min(1, 'Select at least one category'),
  location: yup.string().required('Location is required'),
  feeRangeStart: yup
    .number()
    .typeError('Select a fee start')
    .required('Fee start range is required'),
  feeRangeEnd: yup
    .number()
    .typeError('Select a fee end')
    .required('Fee end range is required'),
  languages: yup.array().of(yup.string()).min(1, 'Select at least one language'),
});


const categories = ['Singer', 'Dancer', 'DJ', 'Speaker'];
const languages = ['English', 'Hindi', 'Tamil', 'Punjabi', 'Malay', 'Marathi'];
const priceStarts = [1000, 5000, 10000, 20000];
const priceEnds = [50000, 100000, 200000, 500000, 1000000];
const locations = ['Mumbai', 'Delhi', 'Chennai', 'Kolkata', 'Malasiya'];

export default function ArtistForm() {
  
  const {
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
    setTimeout(()=>{
      console.log('Saved to mock data.json:', data);
      alert('Form submitted successfully!');
      reset();
      setLoading(false);
    },2000)
  

};
if(loading){
  return <Loading />;
}

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Artist Onboarding</h2>

      {/* Name */}
      <div>
        <label className="block mb-1">Name</label>
        <input {...register('name')} className="input border px-3 py-2 w-full" />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      </div>

      {/* Bio */}
      <div>
        <label className="block mb-1">Bio</label>
        <textarea {...register('bio')} className="input border px-3 py-2 w-full" />
        {errors.bio && <p className="text-red-500 text-sm">{errors.bio.message}</p>}
      </div>

      {/* Category */}
      <div>
        <label className="block mb-1">Category</label>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <label key={cat} className="flex items-center gap-1">
              <input type="checkbox" value={cat} {...register('category')} />
              {cat}
            </label>
          ))}
        </div>
        {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
      </div>

      {/* Languages */}
      <div>
        <label className="block mb-1">Languages Spoken</label>
        <div className="flex flex-wrap gap-2">
          {languages.map((lang) => (
            <label key={lang} className="flex items-center gap-1">
              <input type="checkbox" value={lang} {...register('languages')} />
              {lang}
            </label>
          ))}
        </div>
        {errors.languages && <p className="text-red-500 text-sm">{errors.languages.message}</p>}
      </div>

      {/* Fee Range Start */}
      <div>
        <label className="block mb-1">Fee Range Start</label>
        <select {...register('feeRangeStart')} className="input border px-3 py-2 w-full">
          <option value="">Select</option>
          {priceStarts.map((range) => (
            <option key={range} value={range}>
              ₹{range}
            </option>
          ))}
        </select>
        {errors.feeRangeStart && (
          <p className="text-red-500 text-sm">{errors.feeRangeStart.message}</p>
        )}
      </div>

      {/* Fee Range End */}
      <div>
        <label className="block mb-1">Fee Range End</label>
        <select {...register('feeRangeEnd')} className="input border px-3 py-2 w-full">
          <option value="">Select</option>
          {priceEnds.map((range) => (
            <option key={range} value={range}>
              ₹{range}
            </option>
          ))}
        </select>
        {errors.feeRangeEnd && (
          <p className="text-red-500 text-sm">{errors.feeRangeEnd.message}</p>
        )}
      </div>

      {/* Location */}
      <div>
        <label className="block mb-1">Location</label>
        <select {...register('location')} className="input border px-3 py-2 w-full">
          <option value="">Select</option>
          {locations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
        {errors.location && <p className="text-red-500 text-sm">{errors.location.message}</p>}
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </form>
  );
}
