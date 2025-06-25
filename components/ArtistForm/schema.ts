import * as yup from 'yup';

export const artistSchema = yup.object({
  name: yup.string().required("Name is required"),
  bio: yup.string().required("Bio is required"),
  category: yup.array().of(yup.string()).min(1, "Select at least one category"),
  location: yup.string().required("Location is required"),
  feeRangeStart: yup.number().typeError("Required").required(),
  feeRangeEnd: yup.number().typeError("Required").required(),
  languages: yup.array().of(yup.string()).min(1, "Select at least one language"),
});
