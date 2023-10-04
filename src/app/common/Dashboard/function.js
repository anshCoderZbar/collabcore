const date = new Date();
const day = date.getDate().toString();
const month = date.getMonth() + 1;
const year = date.getFullYear().toString();
export const Today =
  day + "-" + (month.toString().length < 2 ? "0" : "") + month + "-" + year;

const yesterdayDate = new Date(date);
yesterdayDate.setDate(date.getDate() - 1);
const yesterdayDay = yesterdayDate.getDate().toString();
const yesterdayMonth = yesterdayDate.getMonth() + 1;
const yesterdayYear = yesterdayDate.getFullYear().toString();
export const Yesterday =
  yesterdayDay +
  "-" +
  (yesterdayMonth.toString().length < 2 ? "0" : "") +
  yesterdayMonth +
  "-" +
  yesterdayYear;
