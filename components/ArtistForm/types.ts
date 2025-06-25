import { InferType } from 'yup';
import { artistSchema } from './Schema';

export type ArtistFormValues = InferType<typeof artistSchema>;
