export const Login = (props) => {
    return (
        <div className="container">
            <div className="alert alert-secondary my-2" role="alert">
                {props.message}
            </div>
            <form method = "post">
                <div className="form-group">
                    <label htmlFor="inputLogin">Введите логин</label>
                    <input type="text" className="form-control my-2 w-25" name="login" id="inputLogin" aria-describedby="emailHelp" placeholder="Логин" />
                </div>
                <div className="form-group">
                    <label htmlFor="InputPassword1">Введите пароль</label>
                    <input type="password" className="form-control my-2 w-25" name="pass" id="InputPassword1" placeholder="Пароль" />
                </div>
                <div className="btn-group">
                    <input type="submit" className="btn btn-primary my-2" value = "Войти" />
                </div>
            </form>
        </div>
    )
}