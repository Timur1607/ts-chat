import { useNavigate } from 'react-router-dom'
import s from './Login.module.scss'
export default function Login(){
    const navigate = useNavigate()
    return(
        <form className={s.form}>
            <div className={s.form__div}>
                <label htmlFor="text">nickname or mail</label>
                <input type="text" />
            </div>
            <div className={s.form__div}>
                <label htmlFor="password">password</label>
                <input type="password" />
            </div>
            <button type="submit">log in</button>
            <a className={s.form__a} onClick={()=> navigate('/ts-chat')}>don't have an account? create one</a>
        </form>
    )
}