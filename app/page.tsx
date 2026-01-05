import Reveal from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";

export default function HomePage() {
  const sections = [
    { id: "overview", title: "About Trimbakeshwar" },
    { id: "temple", title: "Trimbakeshwar Temple" },
    { id: "kushavarta", title: "Kushavarta" },
    { id: "bramhagiri", title: "Bramhagiri" },
    { id: "gangadwar", title: "Gangadwar" },
    { id: "nil-parvat", title: "Nil Parvat (Mountain)" },
    { id: "gautam-tirtha", title: "Gautam Tirtha" },
    { id: "bilwa-tirtha", title: "Bilwa Tirtha" },
    { id: "indra-tirtha", title: "Indra Tirtha" },
    { id: "ahilya-sangam", title: "Ahilya Sangam Tirtha" },
    { id: "nivruttinath", title: "Nivruttinath Temple" },
  ];

  return (
    <>
      {/* Hero */}
      <Reveal>
        <section className="hero-card">
          <h1 className="hero-title">
            Trimbakeshwar — A Sacred Jyotirlinga & Holy Tirtha Near Nashik
          </h1>

          <p className="hero-desc">
            Trimbakeshwar is one of the holiest places not only in Maharashtra but across India.
            It is one of the twelve Jyotirlingaas of Lord Shiva.
          </p>

          <div className="hero-badge">
            Temple Timing: <strong>5:30 AM – 9:00 PM</strong>
          </div>
        </section>
      </Reveal>

      <div className="divine-divider">ॐ</div>

      {/* Table of contents */}
      <Reveal>
        <section className="toc-card">
          <h2 className="toc-title">On this page</h2>

          <div className="toc-chips">
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="toc-chip">
                {s.title}
              </a>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Overview */}
      <Reveal>
        <section id="overview" className="content-section">
          <h2 className="section-title">Trimbakeshwar</h2>

          <p className="content-text">
            The following verse explains the importance of this sacred place: anybody who visits
            Trimbakeshwar attains salvation. There is no sacred place like Trimbakeshwar, no river
            like Godavari, no mountain like Bramhagiri.
          </p>

          <p className="content-text">
            Reasons for its sacredness include the origin of the Godavari river, Tri-Sandhya Gayatri,
            the birthplace of Lord Ganesha, and association with Nath Sampradaya and saints like
            Nivruttinath.
          </p>

          <p className="content-text emphasis">
            Trimbakeshwar is considered the holiest place to perform Shradha ceremonies like Narayan
            Nagbali.
          </p>
        </section>
      </Reveal>

      {/* Temple */}
      <Reveal>
        <section id="temple" className="content-section">
          <h2 className="section-title">Trimbakeshwar Temple</h2>

          <p className="content-text">
            Trimbakeshwar Temple is revered as one of the 12 Jyotirlingaas of Lord Shiva and lies in
            the foothills of Bramhagiri, the origin of the Godavari river.
          </p>

          <p className="content-text">
            The temple uniquely houses three lingas representing Brahma, Vishnu and Shiva within a
            single hollow Shivlingam.
          </p>

          <p className="content-text">
            Built by Shri Nana Saheb Peshwa (1755–1786 AD), the temple is constructed with black stone
            and surrounded by a 20–25 ft high stone wall.
          </p>

          <p className="content-text">
            The darshan queue passes through the Nandi temple before entering the main sanctum, which
            has a large domed hall.
          </p>
        </section>
      </Reveal>

      {/* Services */}
      <Reveal>
        <section className="content-section" id="services">
          <h2 className="section-title">Pooja & Ritual Services</h2>

          <p className="content-text">
            Sacred Vedic rituals performed by authorized Brahmin Pandits at Trimbakeshwar, following
            authentic traditions.
          </p>

          <div className="services-grid">
            <ServiceCard
              title="KalSarpa Yog"
              desc="A sacred ritual to remove doshas caused by planetary alignments."
              href="/kalsarpa"
            />

            <ServiceCard
              title="Narayan Nagbali"
              desc="Performed to resolve ancestral karmic issues and pitru dosha."
              href="/narayan-nagbali"
            />

            <ServiceCard
              title="Tripindi Shraddha"
              desc="A powerful shraddha ceremony for unsatisfied ancestors."
              href="/tripindi"
            />

            <ServiceCard
              title="Mahamrityunjaya Jap"
              desc="For health, longevity, and protection through Shiva mantra."
              href="/mahamritunjay"
            />

            <ServiceCard
              title="Rudra Abhishek"
              desc="Sacred abhishek performed to please Lord Shiva."
              href="/rudra-abhishek"
            />

            <ServiceCard
              title="Muhurtas"
              desc="Auspicious timings for marriage, griha pravesh, and rituals."
              href="/muhurtas"
            />
          </div>
        </section>
      </Reveal>

      {/* Kushavarta */}
      <Reveal>
        <section id="kushavarta" className="content-section">
          <h2 className="section-title">Kushavarta</h2>

          <p className="content-text">
            Kushavarta is a sacred pond near the temple from where Godavari flows onward. A holy dip
            here is believed to wash away sins.
          </p>

          <p className="content-text">
            Sage Gautam is believed to have cleansed his sin here, after which the pond became
            sacred. It is also the starting point of the Kumbh Mela.
          </p>

          <p className="content-text">
            Shaiva saints bathe here during Kumbh, while Vaishnav saints bathe at Ram Kund.
          </p>
        </section>
      </Reveal>

      {/* Bramhagiri */}
      <Reveal>
        <section id="bramhagiri" className="content-section">
          <h2 className="section-title">Bramhagiri</h2>

          <p className="content-text">
            Bramhagiri Hill is the origin of the Godavari river. Around 700 steps lead to the top,
            traditionally taking several hours to climb.
          </p>

          <p className="content-text">
            Godavari flows in three directions from this mountain and meets other sacred rivers at
            different tirthas.
          </p>

          <p className="content-text">
            The mountain has five peaks symbolizing the five faces of Lord Shiva.
          </p>
        </section>
      </Reveal>

      {/* Gangadwar */}
      <Reveal>
        <section id="gangadwar" className="content-section">
          <h2 className="section-title">Gangadwar</h2>

          <p className="content-text">
            Gangadwar lies halfway up Bramhagiri and marks the first visible appearance of Ganga
            after disappearing in the mountain.
          </p>

          <p className="content-text">
            The site has 750 stone steps and a sacred idol of Ganga with water flowing drop by drop.
          </p>
        </section>
      </Reveal>

      {/* Nil Parvat */}
      <Reveal>
        <section id="nil-parvat" className="content-section">
          <h2 className="section-title">Nil Parvat</h2>

          <p className="content-text">
            Nil Parvat houses temples of Nilambika Devi, Nilkantheshwar Mahadev, Parashuram, and
            Sadguru Dattatraya, accessible via stone steps.
          </p>
        </section>
      </Reveal>

      {/* Gautam Tirtha */}
      <Reveal>
        <section id="gautam-tirtha" className="content-section">
          <h2 className="section-title">Gautam Tirtha</h2>

          <p className="content-text">
            Gautam Tirtha is a large sacred tank granted by Varun to Sage Gautam as a permanent water
            source.
          </p>
        </section>
      </Reveal>

      {/* Bilwa Tirtha */}
      <Reveal>
        <section id="bilwa-tirtha" className="content-section">
          <h2 className="section-title">Bilwa Tirtha</h2>

          <p className="content-text">
            Bilwa Tirtha is one of the five sacred tirthas and houses the Bilvakeshwar Mahadev temple.
          </p>
        </section>
      </Reveal>

      {/* Indra Tirtha */}
      <Reveal>
        <section id="indra-tirtha" className="content-section">
          <h2 className="section-title">Indra Tirtha</h2>

          <p className="content-text">
            Indra Tirtha is believed to have freed Indra from his curse. The octagonal tank and
            Indreshwar Mahadev temple stand here.
          </p>
        </section>
      </Reveal>

      {/* Ahilya Sangam */}
      <Reveal>
        <section id="ahilya-sangam" className="content-section">
          <h2 className="section-title">Ahilya Sangam Tirtha</h2>

          <p className="content-text">
            Ahilya Sangam is where Ganga and Godavari unite. It is associated with the story of Sage
            Gautam and Ahilya.
          </p>
        </section>
      </Reveal>

      {/* Nivruttinath */}
      <Reveal>
        <section id="nivruttinath" className="content-section">
          <h2 className="section-title">Nivruttinath Temple</h2>

          <p className="content-text">
            Nivruttinath Temple is near Gangadwar. Saint Nivruttinath received divine knowledge here
            and guided his siblings toward self-realization.
          </p>
        </section>
      </Reveal>
    </>
  );
}
