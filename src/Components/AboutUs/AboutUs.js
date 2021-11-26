import './AboutUs.css';

function AboutUs() {
    return (
        <section className='about-us'>
            <h1 className='about-us-title'>TRANSPORT COMPANY</h1>
            <h2 className='about-us-title'>Дейности</h2>

            <p className='about-us-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptate officiis sunt omnis perferendis molestiae,
                ullam voluptas a similique? Cupiditate atque, in odit nobis reiciendis iste repellendus fuga voluptatem pariatur
                inventore dolor maiores expedita quos temporibus. Nihil temporibus quae assumenda neque, accusamus corrupti
                reiciendis ratione quia, quo excepturi autem nobis. Distinctio fuga, facere sunt deleniti tenetur animi rem harum
                eaque iusto odit sapiente. Cum doloremque dicta harum quia nostrum. Corporis exercitationem nemo omnis veniam fugiat
                adipisci eveniet illum perspiciatis consectetur nesciunt, dolore, atque eligendi, in necessitatibus? Sequi corrupti
                praesentium incidunt? Cumque beatae fugiat harum laudantium explicabo minus nulla tenetur facilis.
            </p>

            <article className='about-us-services'>
                <h2>Предлагани услуги</h2>
                <ul>
                    <li>Сухопътен групажен транспорт в Европа</li>
                    <li>Частични и цели товари (България и Европа)</li>
                    <li>Вътрешна дистрибуция</li>
                    <li>Морски и въздушен транспорт</li>
                    <li>Складиране и логистика</li>
                    <li>Митническо представителство</li>
                    <li>Фериботни резервации</li>
                </ul>
            </article>

            <article className='about-us-your-choice'>
                <h2>Вашият товар е в сигурни ръце</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis nihil libero repellendus maxime mollitia
                    doloremque accusamus eveniet quasi, dignissimos architecto.
                </p>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita nemo soluta libero. Pariatur numquam placeat unde
                    magnam. Nemo dicta fugit voluptatibus vitae molestiae aspernatur, vel impedit enim delectus in. Facilis enim dolores
                    excepturi voluptates iste eos dignissimos ab ipsum, voluptatum dolorem suscipit aperiam commodi harum voluptatibus
                    fuga consectetur vero non. Deleniti fugit exercitationem quod omnis cumque dolorum aspernatur laborum labore.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur modi, harum sit hic iure autem quibusdam quod
                    perferendis vel deserunt, esse unde voluptates et aliquid.
                </p>

            </article>

            <article className='about-us-group'>
                <h2>За групата</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita nemo soluta libero. Pariatur numquam placeat unde
                    magnam. Nemo dicta fugit voluptatibus vitae molestiae aspernatur, vel impedit enim delectus in. Facilis enim dolores
                    excepturi voluptates iste eos dignissimos ab ipsum, voluptatum dolorem suscipit aperiam commodi harum voluptatibus
                    fuga consectetur vero non. Deleniti fugit exercitationem quod omnis cumque dolorum aspernatur laborum labore.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur modi, harum sit hic iure autem quibusdam quod
                    perferendis vel deserunt, esse unde voluptates et aliquid.
                </p>

            </article>

            <article className='about-us-marks'>
                <section>
                    <h2>Това, което ни отличава</h2>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita nemo soluta libero. Pariatur numquam placeat unde
                        magnam. Nemo dicta fugit voluptatibus vitae molestiae aspernatur, vel impedit enim delectus in. Facilis enim dolores
                        excepturi voluptates iste eos dignissimos ab ipsum, voluptatum dolorem suscipit aperiam commodi harum voluptatibus
                        fuga consectetur vero non. Deleniti fugit exercitationem quod omnis cumque dolorum aspernatur laborum labore.
                    </p>
                </section>
                <br/>
                <section className='about-us-marks-icons'>
                    <div className='about-us-marks-icons-items' >
                        <i class="fas fa-handshake"></i>
                        <p>Високо качество на услугите</p>
                    </div>
                    <div className='about-us-marks-icons-items' >
                        <i class="fas fa-users"></i>
                        <p>Персонална грижа за клиентите</p>
                    </div>
                    <div className='about-us-marks-icons-items' >
                        <i class="fas fa-chart-line"></i>
                        <p>По-голяма производителност</p>
                    </div>
                    <div className='about-us-marks-icons-items' >
                        <i class="fas fa-wallet"></i>
                        <p>Намаляване на разходите</p>
                    </div>
                </section>
            </article>

        </section>
    );
}

export default AboutUs;