export const Passwordfields = () => {
    return (
        <div>
            <div className="form-group py-3">
                <label htmlFor="InputPassword1">Новый пароль</label>
                <input type="password" className="form-control my-2 w-25" name="newpassword" id="InputPassword1" placeholder="Придумайте пароль" />
            </div>
            <div className="form-group py-3">
                <label htmlFor="InputPassword2">Подтвердите пароль</label>
                <input type="password" className="form-control my-2 w-25" name="confirmpassword" id="InputPassword2" placeholder="Подтвердите пароль" />
            </div>
        </div>
    )
}