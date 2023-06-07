import * as Yup from 'yup';
import { parse, isDate } from 'date-fns';

/**
 * Transforms date if needed
 * @param {Date} value Date to consider
 * @param {Date} original Date entered
 * @return {Date} Parsed date
 */
function validateDate(value, original) {
  const parsedDate = isDate(original) ? original : parse(original, 'yyyy-MM-dd', new Date());
  return parsedDate;
}

const regSchema = Yup.object().shape({
  name: Yup.string().required('Please enter your name').min(3, 'Please type valid name'),
  contact: Yup.number()
    .required('Please enter Number')
    .min(999999999, 'Minimum 10 characters required')
    .max(9999999999, 'Maximum cannot exceed 10 digit'),
  compName: Yup.string().required('Competition Name is required'),
  dob: Yup.date().transform(validateDate).max(new Date(), 'Invalid').required('Please enter Date of Birth'),
  recptNo: Yup.string().required('Please enter Recipt Number'),
  recptSSN: Yup.mixed()
    .required('Please provide screenshot')
    .test('fileSize', 'File Size is too large max size 5 MB', function () {
      return this.parent.recptSSN && this.parent.recptSSN.size <= 1887437;
    })
    .test('fileType', 'Unsupported File Format', function () {
      return (
        this.parent.recptSSN &&
        ['image/jpeg', 'image/png', 'image/heic', 'application/pdf'].indexOf(this.parent.recptSSN.type) !== -1
      );
    }),
  file: Yup.mixed()
    .required('Please provide sample')
    .test('fileSize', 'File Size is too large max size 500 MB', function () {
      return this.parent.file && this.parent.file.size <= 188743700;
    })
    .test('fileType', 'Unsupported File Format', function () {
      return (
        this.parent.file &&
        ['image/jpeg', 'image/png', 'image/heic', 'video/mp4', 'application/pdf'].indexOf(this.parent.file.type) !== -1
      );
    })
});

export { regSchema };
