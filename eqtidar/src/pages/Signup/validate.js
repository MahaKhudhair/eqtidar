export default function validate(values) {
  let errors = {};

  if (!values.full_name) {
    errors.full_name = 'الاسم الكامل مطلوب';
  }
  if (!values.phone_number){
    errors.phone_number = 'رقم الهاتف مطلوب';
  } else if (values.phone_number.length == 11){
    errors.phone_number = 'الرقم الذي ادخلته غير صالح';
  }
  if (!values.email) {
    errors.email = 'البريد الالكتروني مطلوب';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'البريد الالكتروني غير موجود';
  }
  if (!values.password1) {
    errors.password1 = 'الرقم السري مطلوب';
  } else if (values.password1.length < 8) {
    errors.password1 = 'الرقم السري يجب ان يكون 8 او اكثر';
  }

  if (!values.password2) {
    errors.password2 = 'الرقم السري مطلوب';
  } else if (values.password2 !== values.password1) {
    errors.password2 = 'الرقم السري غير متطابق';
  }
  return errors;
}
