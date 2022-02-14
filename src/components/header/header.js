import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <header className="p-3 bg-dark text-white">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                        <img className="bi me-2" width="40" src="http://php-advanced/lesson8/images/logo.png" />
                    </Link>

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li>
                            <Link to="/" className="nav-link px-2 text-secondary">Главная</Link>
                        </li>
                        <li>
                            <Link to="/cart" className="nav-link px-2 text-white">Корзина</Link>
                        </li>
                    </ul>

                    {/* <div className="text-end d-flex align-items-center">
                        {% if links.loginMessage %}
                            <p className="text-muted me-2">{{ links.loginMessage }}</p>
                        {% endif %}
                        {% if links.loginLink %}
                            <a className="btn btn-outline-light me-2" href="{{links.loginLink.href}}">{{links.loginLink.text}}</a>
                        {% endif %}
                        {% if links.personalLink %}
                            <a className="btn btn-outline-light me-2" href="{{links.personalLink.href}}">{{links.personalLink.text}}</a>
                        {% endif %}
                        {% if links.adminLink %}
                        <div className="dropdown">
                            <button className="btn btn-outline-light me-2 dropdown-toggle" type="button" id="dropdownMenuButton"
                            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Панель управления
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="{{links.adminLink.manageGoods}}">Управление товарами</a>
                                <a className="dropdown-item" href="{{links.adminLink.manageOrders}}">Управление заказами</a>
                            </div>
                        </div>
                        {% endif %}
                        {% if links.regLink %}
                        <a className="btn btn-warning" href="{{links.regLink.href}}">Зарегистрироваться</a>
                        {% endif %}
                    </div> */}
                </div>
            </div>
        </header>
    )
}