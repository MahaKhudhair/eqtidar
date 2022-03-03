export default function validate(values) {
  let errors = {};

  if (!values.adress) {
    errors.adress = 'العنوان مطلوب';
  }
  

  if (!values.location) {
    errors.location = 'الموقع مطلوب';
  }

  if (!values.area) {
    errors.area = 'المساحه مطلوب';
  }
  
  if (!values.width){
    errors.width = 'عرض الواجهه  مطلوب';
  }
  
  if (!values.home){
    errors.home = ' النزال مطلوب';
  }

  if (!values.room){
    errors.room = ' عدد الغرف مطلوب';
  }
  if (!values.bath){
    errors.bath = 'عدد المرافق  مطلوب';
  }


  if (!values.imge){
    errors.imge = ' الصوره مطلوبه';
  }

  
  if (!values.phone) {
    errors.phone = 'الرقم  مطلوب';
  } else if (values.phone.length != 11) {
    errors.phone = 'الرقم  يجب ان يكون 11  ';
  }

 
  
  return errors;
}
