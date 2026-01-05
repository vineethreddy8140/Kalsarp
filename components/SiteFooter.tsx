import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        {/* Left */}
        <div className="footer-block">
          <div className="footer-title">Shree Ajit Vasant Chandwadkar</div>
          <p className="footer-text">
            Sacred Vedic rituals performed by Authorized Brahmin (Tirth Purohit)
            at Shree Kshetra Trimbakeshwar.
          </p>

          <p className="footer-small">
            © {new Date().getFullYear()} Trimbakeshwar Services
          </p>
        </div>

        {/* Middle */}
        <div className="footer-block">
          <div className="footer-heading">Contact</div>

          <a
            href="https://wa.me/919371004172"
            target="_blank"
            className="footer-link whatsapp"
          >
            💬 WhatsApp: +91 9371004172
          </a>

          <p className="footer-text">
            📞 +91 9822222530 <br />
            ☎️ 02594234070
          </p>

          <p className="footer-text">
            📧 ajit@trambakeshwar.com
          </p>
        </div>

        {/* Right */}
        <div className="footer-block">
          <div className="footer-heading">Address</div>

          <p className="footer-text">
            170, Main Road, Opp. Satyanarayan Mandir <br />
            Near Kushavarta Kund <br />
            Trimbakeshwar, Nashik – 422212
          </p>

          <div style={{ marginTop: 10 }}>
  <Link href="/contact" className="footer-link">
    View full contact details →
  </Link>

  <br />

  <Link href="/how-to-reach" className="footer-link">
    How to Reach →
  </Link>
</div>

        </div>
      </div>

      <div className="footer-bottom">
        ॐ Namah Shivaya
      </div>
    </footer>
  );
}
