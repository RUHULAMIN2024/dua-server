import { model, Schema } from 'mongoose';
import { ICategories } from './categories.interface';

const categoriesSchema = new Schema<ICategories>(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    cat_id: {
      type: Number,
      required: true,
      unique: true,
    },
    cat_name_bn: {
      type: String,
      required: true,
    },
    cat_name_en: {
      type: String,
      required: true,
    },
    no_of_subcat: {
      type: Number,
      required: true,
    },
    no_of_dua: {
      type: Number,
      required: true,
    },
    cat_icon: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Categories = model('categorie', categoriesSchema);
