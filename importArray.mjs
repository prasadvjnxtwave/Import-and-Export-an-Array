//index.mjs

import { StudentDetails, CarDetails } from "./sample.mjs";

const newStudentDetails = new StudentDetails("Ram", 15);
console.log(newStudentDetails);
console.log(newStudentDetails.name);

const newCarDetails = new CarDetails("Alto", "60kmph");
console.log(newCarDetails);
console.log(newCarDetails.name);
