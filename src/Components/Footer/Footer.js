import './Footer.css';

function Footer() {
    return (
        <section className="footer">
            <section className="footer_contacts">
                <article className="footer_contacts_social">
                    <p className="social"><i className="fab fa-facebook"></i><a className="contacts_details_social" href="facebook.com">Facebook</a></p>
                    <p className="social"><i className="fab fa-instagram"></i><a className="contacts_details_social" href="instagram.com">Instagram</a></p>
                    <p className="social"><i className="fab fa-twitter"></i><a className="contacts_details_social" href="twitter.com">Twitter</a></p>
                    <p className="social"><i className="fab fa-discord"></i><a className="contacts_details_social" href="discord.com">Discord</a></p>
                    
                </article>
                <article className="footer_contacts_details">
                    <p className="paragraphs"><i className="fas contacts_details_icon fa-phone"></i>+123456789</p>
                    <p className="paragraphs"><i className="fas contacts_details_icon fa-fax"></i>+123456789</p>
                    <p className="paragraphs"><i className="far contacts_details_icon fa-envelope"></i><a className="contacts_details_mails" href="mailto:someone@yoursite.com">За клиенти</a></p>
                    <p className="paragraphs"><i className="far contacts_details_icon fa-envelope"></i><a className="contacts_details_mails" href="mailto:someone@yoursite.com">За превозвачи</a></p>
                    <p className="paragraphs"><i className="far contacts_details_icon fa-envelope"></i><a className="contacts_details_mails" href="mailto:someone@yoursite.com">Допълнителни въпроси</a></p>
                </article>
            </section>
            <article className="footer_rights">
                <p className="footer_rights_paragraph">Created by Kiril®</p>
            </article>
        </section>
    );
}

export default Footer;