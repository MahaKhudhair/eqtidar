export default function validate(values) {
  let errors = {};

  if (!values.location) {
    errors.location = 'العنوان مطلوب';
  }
  

  if (!values.size) {
    errors.size = 'المساحه مطلوب';
  }

  if (!values.room){
    errors.room = ' عدد الغرف مطلوب';
  }
  if (!values.bathroom){
    errors.bathroom = 'عدد المرافق  مطلوب';
  }


  if (!values.image){
    errors.image = ' الصورة مطلوبة';
  }

  
  if (!values.phone) {
    errors.phone = 'الرقم  مطلوب';
  } else if (values.phone.length != 11) {
    errors.phone = 'الرقم  يجب ان يكون 11  ';
  }

 
  
  return errors;
}
