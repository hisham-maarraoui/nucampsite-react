
// I worked on this code as part of a coding bootcamp curriculum. I followed along with the instructions 
// (i.e. followed/copied instructions from the course/instructors and didn't design everything from scratch myself) while
//  writing code in this project/file. Moreover, I  acknowledge receiving support from and/or working/collaborating
//   with instructors/classmates, generally as is expected from being a participant in the coding bootcamp.

export const validateUserLoginForm = (values) => {
    const errors = {};

    if (!values.username) {
        errors.username = 'Required';
    } else  if (values.username.length < 6) {
        errors.username = 'Must be at least 6 characters.';
    } else if (values.username.length > 15) {
        errors.username = 'Must be less than 15 characters.';
    }



    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length < 8) {
        errors.password = "Must be at least 8 characters." 
    }

    return errors;
};


