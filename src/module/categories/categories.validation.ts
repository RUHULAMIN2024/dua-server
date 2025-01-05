import { z } from 'zod';

export const CategoriesValidationSchema = z.object({
  id: z.number().int().min(1),
  cat_id: z.number().int().min(1),
  cat_name_bn: z.string().min(1, 'Category name (BN) is required'),
  cat_name_en: z.string().min(1, 'Category name (EN) is required'),
  no_of_subcat: z.number().int().min(0),
  no_of_dua: z.number().int().min(0),
  cat_icon: z.string().min(1, 'Category icon is required'),
});

export type ICategory = z.infer<typeof CategoriesValidationSchema>;
