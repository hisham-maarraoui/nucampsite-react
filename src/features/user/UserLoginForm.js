
// I worked on this code as part of a coding bootcamp curriculum. I followed along with the instructions 
// (i.e. followed/copied instructions from the course/instructors and didn't design everything from scratch myself) while
//  writing code in this project/file. Moreover, I  acknowledge receiving support from and/or working/collaborating
//   with instructors/classmates, generally as is expected from being a participant in the coding bootcamp.

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser, selectCurrentUser } from './userSlice';
import {
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    Label,
    Button
} from 'reactstrap';
import { Formik, Field, Form } from 'formik';
import defaultAvatar from '../../app/assets/img/unicorn.png';
import { ErrorMessage } from 'formik';
import { validateUserLoginForm } from '../../utils/validateUserLoginForm';



const UserLoginForm = () => {
    const [loginModalOpen, setLoginModalOpen] = useState(false);
    const currentUser = useSelector(selectCurrentUser); // it goes out and selects a particular item of state from redux store
    const dispatch = useDispatch()

    const handleLogin = (values) => {
        const currentUser = {
            id: Date.now(), // Date is a js class, and now is a method of that class. Gets current date.
            avatar: defaultAvatar,
            username: values.username,
            password: values.password    // values comes from the submit from the form
        }
        dispatch(setCurrentUser(currentUser));
        setLoginModalOpen(false);
    }


    return (
        <>
            <span className='navbar-text ml-auto'>
                {currentUser ? (
                    <div style={{ width: '4rem', height: '4rem' }}>
                        <img
                            src={currentUser.avatar}
                            alt="user"
                            style={{ width: '100%', height: '100%' }}
                        />
                    </div>
                ) : (
                    <Button
                        outline
                        onClick={() => setLoginModalOpen(true)}
                        style={{ color: 'white', border: '1px solid white' }}
                    >
                        <i className='fa fa-sign-in fa-lg' /> Login
                    </Button>
                )}
            </span>
            <Modal isOpen={loginModalOpen}>
                <ModalHeader toggle={()=> setLoginModalOpen(false)}>
                    Login
                </ModalHeader>
                <ModalBody>
                    <Formik
                    initialValues={{
                        username: '',
                        password: '',
                    }}
                    onSubmit={handleLogin} // in curly brackets. Also, no need for function call
                    validate={validateUserLoginForm}
                    >
                    <Form>
                        <FormGroup>
                            <Label htmlFor='username'>Username</Label>
                            <Field 
                            id='username'
                            name='username'
                            placeholder='Username'
                            className='form-control'
                            />
                            <ErrorMessage name='username'>
                                {(msg) => <p className='text-danger'>{msg}</p>}
                            </ErrorMessage>
                        </FormGroup>
                        <FormGroup>
                        <Label htmlFor='password'>Password</Label>
                            <Field 
                            id='password'
                            name='password'
                            placeholder='Password'
                            className='form-control'
                            />
                            <ErrorMessage name='password'>
                                {(msg) => <p className='text-danger'>{msg}</p>}
                            </ErrorMessage>
                        </FormGroup>
                        <Button type='submit' color='primary'>Login</Button>
                    </Form>
                    </Formik>
                </ModalBody>
            </Modal>
        </>
    )
}

export default UserLoginForm


