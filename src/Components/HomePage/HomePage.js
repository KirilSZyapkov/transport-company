import { Link } from 'react-router-dom';

import './HomePage.css';

function HomePage() {
    return (
        <section className='homepage'>
            <article className='homepage_transports'>
                <p className="homepage_transports_links"><Link to="/"><img src='/static/truck.png' alt='Road Transport' /> <p>СУХОПЪТЕН ТРАНСПОРТ</p></Link></p>
                <p className="homepage_transports_links"><Link to="/"><img src='/static/plain.png' alt='Air Transport' /> <p>ВЪЗДУШЕН ТРАНСПОРТ</p></Link></p>
                <p className="homepage_transports_links"><Link to="/"><img src='/static/boat.png' alt='Sea Transport' /> <p>МОРСКИ ТРАНСПОРТ</p></Link></p>
            </article>
            <article className='homepage_topics'>
                <div>
                    <h2>Topic</h2>
                    <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptate officiis sunt omnis perferendis molestiae, ullam voluptas a similique? Cupiditate atque, in odit nobis reiciendis iste repellendus fuga voluptatem pariatur inventore dolor maiores expedita quos temporibus. Nihil temporibus quae assumenda neque, accusamus corrupti reiciendis ratione quia, quo excepturi autem nobis. Distinctio fuga, facere sunt deleniti tenetur animi rem harum eaque iusto odit sapiente. Cum doloremque dicta harum quia nostrum. Corporis exercitationem nemo omnis veniam fugiat adipisci eveniet illum perspiciatis consectetur nesciunt, dolore, atque eligendi, in necessitatibus? Sequi corrupti praesentium incidunt? Cumque beatae fugiat harum laudantium explicabo minus nulla tenetur facilis.</p>
                </div>
                <div>
                    <h2>Topic</h2>
                    <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptate officiis sunt omnis perferendis molestiae, ullam voluptas a similique? Cupiditate atque, in odit nobis reiciendis iste repellendus fuga voluptatem pariatur inventore dolor maiores expedita quos temporibus. Nihil temporibus quae assumenda neque, accusamus corrupti reiciendis ratione quia, quo excepturi autem nobis. Distinctio fuga, facere sunt deleniti tenetur animi rem harum eaque iusto odit sapiente. Cum doloremque dicta harum quia nostrum. Corporis exercitationem nemo omnis veniam fugiat adipisci eveniet illum perspiciatis consectetur nesciunt, dolore, atque eligendi, in necessitatibus? Sequi corrupti praesentium incidunt? Cumque beatae fugiat harum laudantium explicabo minus nulla tenetur facilis.</p>
                </div>
                <div>
                    <h2>Topic</h2>
                    <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptate officiis sunt omnis perferendis molestiae, ullam voluptas a similique? Cupiditate atque, in odit nobis reiciendis iste repellendus fuga voluptatem pariatur inventore dolor maiores expedita quos temporibus. Nihil temporibus quae assumenda neque, accusamus corrupti reiciendis ratione quia, quo excepturi autem nobis. Distinctio fuga, facere sunt deleniti tenetur animi rem harum eaque iusto odit sapiente. Cum doloremque dicta harum quia nostrum. Corporis exercitationem nemo omnis veniam fugiat adipisci eveniet illum perspiciatis consectetur nesciunt, dolore, atque eligendi, in necessitatibus? Sequi corrupti praesentium incidunt? Cumque beatae fugiat harum laudantium explicabo minus nulla tenetur facilis.</p>
                </div>
            </article>
        </section>

    );
}

export default HomePage;