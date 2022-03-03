export default function validateInfo(values) {
    let errors = {};
    if (!values.email) {
      errors.email = 'البريد الالكتروني مطلوب';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'البريد الالكتروني غير صالح';
    }
    if (!values.password) {
      errors.password = 'الرقم السري مطلوب';
    }
    return errors;
}
