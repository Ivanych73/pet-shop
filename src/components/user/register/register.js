import { Passwordfields } from "../passwordfields/paswordfields"

export const Register = (props) => {
    return (
        <div className="container">
            <h1 className="display-6">Регистрация нового пользователя</h1>
            <div className="alert alert-warning" role="alert">
                { props.message}
            </div>
            <form action="" method="post">
                <div className="form-group py-2">
                    <label htmlFor="logininput">Придумайте логин</label>
                    <input type="text" name="login" id="logininput" className = "form-control my-2 w-25" />
                </div>
                <Passwordfields />
                <div className="lead action-message" role="alert" id = "passwarning">
                    Не указан пароль либо введенные пароли не совпадают!
                </div>
                <input className = "btn btn-primary my-2 submit-button" disabled = {true} type="submit" value="Зарегистрироваться" />
            </form>
        </div>
    )
}