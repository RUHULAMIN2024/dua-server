import { z } from 'zod';

export const DuasValidationSchema = z.object({
  id: z.number(),
  cat_id: z.number(),
  subcat_id: z.number(),
  dua_id: z.number(),
  dua_name_bn: z.string(),
  dua_name_en: z.string(),
  top_bn: z.string(),
  top_en: z.string(),
  dua_arabic: z.string().nullable(),
  dua_indopak: z.string().nullable(),
  clean_arabic: z.string().nullable(),
  transliteration_bn: z.string().nullable(),
  transliteration_en: z.string().nullable(),
  translation_bn: z.string().nullable(),
  translation_en: z.string().nullable(),
  bottom_bn: z.string().nullable(),
  bottom_en: z.string().nullable(),
  refference_bn: z.string(),
  refference_en: z.string(),
  audio: z.string().nullable(),
});
