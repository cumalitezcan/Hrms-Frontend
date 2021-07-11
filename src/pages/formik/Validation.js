import * as yup from "yup";
const schema = yup.object().shape({
    applicationDeadline: yup.date().nullable().required("This field is required"),
    description: yup.string().required("This field is required"),
    jobPositionId: yup.string().required("This field is required"),
    openPositionCount: yup.string().required("This field is required").min(1,"Posizyon sayısı 1'den küçük olamaz"),
    cityId: yup.string().required("This field is required").max(82,"Plaka numarası 81'den büyük olamaz"),
    salaryMin: yup.number().required("This field is required").min(0,"0 Dan az olamaz"),
    salaryMax: yup.number().min(0,"0 Dan az olamaz").required("This field is required")
  });

export default  schema;