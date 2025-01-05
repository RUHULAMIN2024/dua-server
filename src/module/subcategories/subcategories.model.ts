import { model, Schema } from 'mongoose';
import { ISubCategories } from './subcategories.interface';

const SubCategoriesSchema = new Schema<ISubCategories>(
  {
    id: { type: Number, required: true },
    cat_id: { type: Number, required: true },
    subcat_id: { type: Number, required: true },
    subcat_name_bn: { type: String, required: true },
    subcat_name_en: { type: String, required: true },
    no_of_dua: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true },
);

export const SubCategories = model('subCategorie', SubCategoriesSchema);
