import bcrypt from 'bcryptjs'
const users = [
    
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
 
    {
        name: 'Sabiha Rubiatunnesa',
        email: 'sabiha@example.com',
        password: bcrypt.hashSync('123456', 10),
    },

    {
        name: 'Faria Mahzabin',
        email: 'faria@example.com',
        password: bcrypt.hashSync('123456', 10),
    }

]
export default users