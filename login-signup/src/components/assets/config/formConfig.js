import user_icon from '../assets/icons/user.png'
import email_icon from '../assets/icons/mail.png'
import pass_icon from '../assets/icons/padlock.png'


export const formFields = {
    Login:[
        {
            name: 'email',
            type: 'email',
            placeholder: 'Email',
            icon: email_icon,
            required: true
        },
        {
            name: 'password',
            type: 'password',
            placeholder: 'Password',
            icon: pass_icon,
            required: true
        },      
    ],
    SignUp:[
        {
            name: 'name',
            type: 'text',
            placeholder: 'Name',
            icon: user_icon,
            required: true
        },
        {
            name: 'email',
            type: 'email',
            placeholder: 'Email',
            icon: email_icon,
            required: true
        },
        {
            name: 'password',
            type: 'password',
            placeholder: 'Password',
            icon: pass_icon,
            required: true
        }, 
    ],
};