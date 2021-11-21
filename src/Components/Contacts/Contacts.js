import './Contacts.css';

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

        return map;
    }


    return (
        <section className="container">
            <h1>Искате ли да се свържете с нас?</h1>
            <form>
                <label for="fname">Your Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.." />

                <label for="lname">Your Email</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

                <label for="subject">Message</label>
                <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

                <input type="submit" value="Submit" />
            </form>

            <div className="map_container">
                <div>
                    <h2>Find Us</h2>
                    <p>Swing by for a cup of coffee, or leave us a message: </p>
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