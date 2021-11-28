import emailjs from 'emailjs-com';

import './Contacts.css';

emailjs.init('user_cHmfISm7sED5Rr2y3J6Uv');

function Contacts() {

    function renderMap() {
        loadScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyD4L8RDcj8kbyrnKW8IOdNcaONvuGAYUGY&callback=initMap&libraries=&v=weekly')
        window.initMap = initMap;
    }
    renderMap();

    function initMap() {
        // The location of Uluru

        const uluru = { lat: 44.436290, lng: 26.103575 };
        // The map, centered at Uluru
        const map = new window.google.maps.Map(document.getElementById("map"), {
            zoom: 8,
            center: uluru,
        });

        const marker = new window.google.maps.Marker({
            position: uluru,
            map: map
        })

        return {
            map,
            marker
        };
    }

    async function sendMail(e) {
        e.preventDefault();
        try {
            const result = await emailjs.sendForm('service_qv0stx3', 'template_lpz2ikm', e.target, 'user_cHmfISm7sED5Rr2y3J6Uv');

            alert("Message Sent, We will get back to you shortly", result.text);
            e.target.name.value = '';
            e.target.email.value = '';
            e.target.subject.value = '';

        } catch (err) {
            console.log(err);
            alert(`An error occurred, Please try again ${err.text}`);
        }
    }


    return (
        <section className="container">
            <h1>Искате ли да се свържете с нас?</h1>
            <form onSubmit={sendMail}>
                <label htmlFor="name">Име</label>
                <input type="text" id="name" name="name" placeholder="Вашето Име..." />

                <label htmlFor="email">Имейл</label>
                <input type="text" id="email" name="email" placeholder="Вашия Имейл..." />

                <label htmlFor="subject">Съобщение</label>
                <textarea id="subject" name="subject" placeholder="Вашето съобщение..."></textarea>

                <input type="submit" value="Изпрати" />
            </form>

            <div className="map_container">
                <div>
                    <h2>Намерете ни</h2>

                </div>

                <div className="map" id="map"></div>

            </div>

        </section>
    );
}

function loadScript(url) {
    let index = window.document.getElementsByTagName('script')[0];
    let script = window.document.createElement('script');
    script.src = url;
    script.async = true;
    script.defer = true;
    index.parentNode.insertBefore(script, index);
}

export default Contacts;