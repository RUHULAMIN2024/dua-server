import { z } from 'zod';

export const SubCategoriesValidationSchema = z.object({
  id: z.number().int().min(1, 'ID must be a positive integer'),
  cat_id: z.number().int().min(1, 'Category ID must be a positive integer'),
  subcat_id: z
    .number()
    .int()
    .min(1, 'Subcategory ID must be a positive integer'),
  subcat_name_bn: z.string().min(1, 'Subcategory name (BN) is required'),
  subcat_name_en: z.string().min(1, 'Subcategory name (EN) is required'),
  no_of_dua: z
    .number()
    .int()
    .min(0, 'Number of duas must be a non-negative integer'),
});
