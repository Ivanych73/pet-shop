export const Footer = () => {
    const year = (new Date()).getFullYear();
    return (
        <footer className="footer flex-shrink-0 py-4 bg-dark text-white-50">
            <div className="container">
            <span className="text-muted">&copy; Ivanych73 {year} All rights reserved</span>
            </div>
        </footer>
    );
}