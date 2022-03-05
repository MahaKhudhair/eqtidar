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


  if (!values.imgs){
    errors.imgs = ' الصورة مطلوبة';
  }

  
  if (!values.price) {
    errors.price = 'السعر مطلوب';
  }

 
  
  return errors;
}
