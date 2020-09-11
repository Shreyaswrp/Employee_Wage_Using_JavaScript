var msg = "Welcome to employee wage computation program";
console.log(msg);

//Constants
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const EMP_RATE_PER_HOUR = 20;
const MAX_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 10;

//Variables
let empHrs = 0;
let totalEmpWage = 0;
let totalWorkingDays = 0;
let totalEmpHrs = 0;
let empDailyWage = new Array();
let dailyWage = new Map();

function getWorkHours(empCheck) {
  switch (empCheck) {
    case IS_PART_TIME:
      empHrs = 4;
      break;
    case IS_FULL_TIME:
      empHrs = 8;
      break;
    default:
      empHrs = 0;
  }
  return empHrs;
}

function calculateWage(empHrs) {
  return empHrs * EMP_RATE_PER_HOUR;
}

while (
  totalEmpHrs <= MAX_HRS_IN_MONTH &&
  totalWorkingDays <= MAX_WORKING_DAYS
) {
  totalWorkingDays++;
  let empCheck = Math.floor(Math.random() * 3);
  empHrs = getWorkHours(empCheck);
  dailyWage[totalWorkingDays] = calculateWage(empHrs);
  totalEmpHrs += empHrs;
  empDailyWage.push(calculateWage(empHrs));
}

totalEmpWage = calculateWage(totalEmpHrs);
console.log(totalEmpWage);

console.log(dailyWage);
console.log(empDailyWage);