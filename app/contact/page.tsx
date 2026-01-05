import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact Authorized Pandit | Trimbakeshwar | Shree Ajit Vasant Chandwadkar",
  description:
    "Contact Authorized Brahmin (Tirth Purohit) from Shree Kshetra Trimbakeshwar Purohit Sangh (F-352).",
};

export default function Page() {
  return (
    <>
      {/* Hero */}
      <Reveal>
        <section className="hero-card">
          <h1 className="hero-title">
            Authorized Pandit / Brahmin (Tirth Purohit)
          </h1>
          <h2 className="hero-title">
            Shree Ajit Vasant Chandwadkar
          </h2>

          <p className="hero-desc">
            Perform sacred Vedic Poojas at Trimbakeshwar only through
            <strong> Authorized Brahmins</strong> from Shree Kshetra
            Trimbakeshwar Purohit Sangh (Reg. No. F-352).
          </p>
        </section>
      </Reveal>

      <div className="divine-divider">ॐ</div>

      {/* Contact Card */}
      <Reveal>
        <section className="content-section card">
          <h2 className="section-title">Contact Details</h2>

          <div className="contact-grid">
            <div>
              <h3 className="contact-name">
                Shree Ajit Vasant Chandwadkar
              </h3>
              <p className="contact-sub">
                Sau. Manasi Ajit Chandwadkar
              </p>

              <p className="content-text">
                170, Main Road, Opp. Satyanarayan Mandir <br />
                Near Kushavarta Kund, <br />
                Trimbakeshwar, Nashik – 422212
              </p>
            </div>

            <div>
              <h4 className="contact-label">Phone</h4>
              <p className="content-text">
                📞 +91 937 100 4172 <br />
                📞 +91 982 222 2530 <br />
                ☎️ +91 259 423 4070
              </p>

              <h4 className="contact-label">Email</h4>
              <p className="content-text">
                📧 ajit@trambakeshwar.com
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Important Notice */}
      <Reveal>
        <section className="content-section warning-card">
          <h2 className="section-title">Important Request to Devotees</h2>

          <p className="content-text">
            We humbly request all devotees to perform any type of Pooja at
            Trimbakeshwar only through
            <strong> Authorized Brahmins</strong> from
            <strong> Shree Kshetra Trimbakeshwar Purohit Sangh (F-352)</strong>.
          </p>

          <p className="content-text">
            These Brahmins are local, born and brought up at Trimbakeshwar and
            have been performing Vedic rituals for generations. Due to their
            credentials, the Supreme Court has accepted their representative as
            a Trustee of the Trimbakeshwar Temple Trust.
          </p>
        </section>
      </Reveal>

      {/* How to Identify Authorized Pandit */}
      <Reveal>
        <section className="content-section card">
          <h2 className="section-title">How to Identify an Authorized Brahmin</h2>

          <ul className="list">
            <li>
              Authorized Brahmins carry the <strong>Purohit Sangh logo</strong>
              on their website, visiting card, or nameplate.
            </li>
            <li>
              Their residence is <strong>within Trimbakeshwar town</strong>,
              near Kushavarta Kund or the temple.
            </li>
            <li>
              They will always use their <strong>full surname</strong> and not
              hide behind generic titles like “Pandit” or “Guruji”.
            </li>
            <li>
              They will never approach you with marketing calls or claims of
              “special” or “different” pooja procedures.
            </li>
            <li>
              They will never ask to meet you at railway stations, hotels, or
              road corners.
            </li>
          </ul>
        </section>
      </Reveal>

      {/* Warning */}
      <Reveal>
        <section className="content-section danger-card">
          <h2 className="section-title">Beware of Fake Pandits</h2>

          <ul className="list">
            <li>
              Do not trust anyone guaranteeing <strong>100% pooja results</strong>.
            </li>
            <li>
              Do not send <strong>Dakshina in advance</strong> (online or offline).
            </li>
            <li>
              Always meet the Brahmin personally before finalizing the pooja.
            </li>
            <li>
              Dakshina should be given <strong>only after pooja completion</strong>.
            </li>
          </ul>
        </section>
      </Reveal>
    </>
  );
}
