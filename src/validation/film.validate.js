import * as yup from "yup";

export const postFilmValidation = yup.object().shape({
  body: yup.object().shape({
    title: yup.string().required("Title is required").min(1).max(255),
    description: yup
      .string()
      .required("Description is required")
      .min(1)
      .max(65535),
    release_year: yup
      .number()
      .required("Release year is required")
      .min(1900)
      .max(2100),
    language_id: yup
      .number()
      .required("Language id is required")
      .min(1)
      .max(10),
    original_language_id: yup.number().min(1).max(10),
    rental_duration: yup
      .number()
      .required("Rental duration is required")
      .min(1)
      .max(10),
    rental_rate: yup
      .number()
      .required("Rental rate is required")
      .min(1)
      .max(10),
    length: yup.number().required("Length is required").min(1),
    replacement_cost: yup
      .number()
      .required("Replacement cost is required")
      .min(1)
      .max(20),
    rating: yup.string().required("Rating is required").min(1).max(125),
    special_features: yup
      .string()
      .required("Special features is required")
      .min(1)
      .max(255),
  }),
});
