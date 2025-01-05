import { model, Schema } from 'mongoose';
import { IDuas } from './duas.interface';

const duasSchema = new Schema<IDuas>(
  {
    id: { type: Number, required: true },
    cat_id: { type: Number, required: true },
    subcat_id: { type: Number, required: true },
    dua_id: { type: Number, required: true },
    dua_name_bn: { type: String, required: true },
    dua_name_en: { type: String, required: true },
    top_bn: { type: String, required: true },
    top_en: { type: String, required: true },
    dua_arabic: { type: String, default: null },
    dua_indopak: { type: String, default: null },
    clean_arabic: { type: String, default: null },
    transliteration_bn: { type: String, default: null },
    transliteration_en: { type: String, default: null },
    translation_bn: { type: String, default: null },
    translation_en: { type: String, default: null },
    bottom_bn: { type: String, default: null },
    bottom_en: { type: String, default: null },
    refference_bn: { type: String, required: true },
    refference_en: { type: String, required: true },
    audio: { type: String, default: null },
  },
  { timestamps: true },
);
export const Duas = model('dua', duasSchema);
