import { useNavigate } from 'react-router-dom'
import { useRef,} from 'react'
import s from './Signin.module.scss'
export default function Signin(){
    const navigate = useNavigate()

    // const [Form, setForm] = useState({})

    const nicknameRef = useRef(null);
    const mailRef = useRef(null);
    const passwordRef = useRef(null);



    // const SendForm = async (event) => {
    //     event.preventDefault()
    //     let newForm = {
    //         name: nicknameRef.current.value,
    //         mail: mailRef.current.value,
    //         password: passwordRef.current.value,
    //     }
    //     console.log(newForm);

    //     try{
    //         const response = await fetch('https://database/users.php',{
    //             method: 'POST',
    //             headers: {
    //                 'Content-type': 'application/json',
    //             },
    //             body: JSON.stringify(newForm),
    //         });
    //         const result = await response.json();
    //         console.log('Ответ от сервера:', result)
    //     } catch(error){
    //         console.error('Ошибка:', error)
    //     }
    // }
    return(
        <form  className={s.form}>
            <div className={s.form__div}>
                <label htmlFor="text">name</label>
                <input ref={nicknameRef} type="text" name="name" required/>
            </div>
            <div className={s.form__div}>
                <label htmlFor="text">nickname(unique)</label>
                <input ref={nicknameRef} type="text" name="nickname" required/>
            </div>
            <div className={s.form__div}>
                <label htmlFor="text">mail</label>
                <input ref={mailRef} type="text" autoComplete='username' name="mail" required/>
            </div>
            <div className={s.form__div}>
                <label htmlFor="password">password</label>
                <input ref={passwordRef} type="password" autoComplete='current-password' name="password" required/>
            </div>
            <input type="submit" value={'Sign in'}/>
            <a className={s.form__a} onClick={()=> navigate('/ts-chat/Login')}>have an account? login</a>
        </form>
    )
}