'use client';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  name: yup.string().required('Name is required'),
  bio: yup.string().required('Bio is required'),
  category: yup.array().min(1, 'Select at least one category'),
  location: yup.string().required('Location is required'),
  feeRange: yup.string().required('Fee range is required'),
});

const categories = ['Singer', 'Dancer', 'DJ', 'Speaker'];
const feeRanges = ['₹5000 - ₹10,000', '₹10,000 - ₹20,000', '₹20,000+'];
const languages = ['English', 'Hindi', 'Tamil', 'Punjabi'];

export default function ArtistForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log('Submitted:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Artist Onboarding</h2>

      {/* Name */}
      <div>
        <label className="block mb-1">Name</label>
        <input {...register('name')} className="input" />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      </div>

      {/* Bio */}
      <div>
        <label className="block mb-1">Bio</label>
        <textarea {...register('bio')} className="input h-24" />
        {errors.bio && <p className="text-red-500 text-sm">{errors.bio.message}</p>}
      </div>

      {/* Category (checkbox multi-select) */}
      <div>
        <label className="block mb-1">Category</label>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <label key={cat} className="flex items-center gap-1">
              <input
                type="checkbox"
                value={cat}
                {...register('category')}
                className="accent-blue-600"
              />
              {cat}
            </label>
          ))}
        </div>
        {errors.category && (
          <p className="text-red-500 text-sm">{errors.category.message as string}</p>
        )}
      </div>

      {/* Languages Spoken (optional, no validation) */}
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
      </div>

      {/* Fee Range */}
      <div>
        <label className="block mb-1">Fee Range</label>
        <select {...register('feeRange')} className="input">
          <option value="">Select</option>
          {feeRanges.map((range) => (
            <option key={range} value={range}>
              {range}
            </option>
          ))}
        </select>
        {errors.feeRange && <p className="text-red-500 text-sm">{errors.feeRange.message}</p>}
      </div>

      {/* Location */}
      <div>
        <label className="block mb-1">Location</label>
        <input {...register('location')} className="input" />
        {errors.location && <p className="text-red-500 text-sm">{errors.location.message}</p>}
      </div>

      {/* Profile Image (optional) */}
      <div>
        <label className="block mb-1">Profile Image</label>
        <input type="file" {...register('profileImage')} className="input" />
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
