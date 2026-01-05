import Reveal from "@/components/Reveal";

export default function HowToReach() {
  return (
    <Reveal>
      <section className="section card reach-card">
        <h2 className="section-title">How to Reach Trimbakeshwar</h2>

        <p className="reach-intro">
          Trimbakeshwar, near Nashik, is approximately <strong>200 km from Mumbai</strong>.
          Major cities like Mumbai and Pune are well connected to Nashik by road and rail.
          From Nashik, Trimbakeshwar is easily accessible by bus and taxi services.
        </p>

        <div className="reach-grid">
          <div className="reach-item">
            <h3>✈️ By Air</h3>
            <p>Nearest airport: <strong>Nashik Airport</strong> (39 km)</p>
          </div>

          <div className="reach-item">
            <h3>🚆 By Rail</h3>
            <p>
              Nearest railhead: <strong>Nashik Road</strong> (44 km) <br />
              Central Railway
            </p>
          </div>

          <div className="reach-item">
            <h3>🛣️ By Road</h3>
            <ul>
              <li>Mumbai → Trimbakeshwar: <strong>180 km</strong></li>
              <li>Nashik → Trimbakeshwar: <strong>28 km</strong></li>
              <li>State Transport buses run frequently</li>
            </ul>
          </div>
        </div>

        <div className="reach-extra">
          <div>
            <h3>🏨 Accommodation</h3>
            <p>Self-contained rooms and halls are available in Trimbakeshwar and Nashik.</p>
          </div>

          <div>
            <h3>🏨 Nearby Hotels</h3>
            <ul>
              <li>Shree Gajanan Maharaj Bhakt Niwas – <strong>+91 2594 233048 / 234048</strong></li>
              <li>Hotel Devendra Palace – <strong>+91 2594 233390</strong></li>
              <li>Omkar Palace – <strong>+91 2594 233777</strong></li>
            </ul>
          </div>
        </div>

        <div className="reach-actions">
          <a href="/road-map.pdf" className="btn-outline">
            📄 Download Road Map (PDF)
          </a>

          <a
            href="https://maps.app.goo.gl/dSXnJ8A6W4gJ3Cdj7"
            target="_blank"
            className="btn-primary"
          >
            📍 Open in Google Maps
          </a>
        </div>
      </section>
    </Reveal>
  );
}
