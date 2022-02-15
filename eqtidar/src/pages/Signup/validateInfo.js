export default function validateInfo(values) {
  let errors = {};

  if (!values.fullName) {
    errors.fullName = 'الاسم الكامل مطلوب';
  }
  if (!values.phone){
    errors.phone = 'رقم الهاتف مطلوب';
  } else if (values.email.length == 11){
    errors.phone = 'الرقم الذي ادخلته غير صالح';
  }
  if (!values.email) {
    errors.email = 'البريد الالكتروني مطلوب';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'البريد الالكتروني غير موجود';
  }
  if (!values.password) {
    errors.password = 'الرقم السري مطلوب';
  } else if (values.password.length < 8) {
    errors.password = 'الرقم السري يجب ان يكون 8 او اكثر';
  }

  if (!values.password2) {
    errors.password2 = 'الرقم السري مطلوب';
  } else if (values.password2 !== values.password) {
    errors.password2 = 'الرقم السري غير متطابق';
  }
  return errors;
}
