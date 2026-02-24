export default function DisclaimerPage() {
  return (
    <div className="section py-10 md:py-14">
      <header className="max-w-3xl">
        <p className="eyebrow">Disclaimer</p>
        <h1 className="heading-xl mt-3">Important information.</h1>
        <p className="body-lg mt-4">
          The statements below are sample disclaimer language only and do not
          replace a formal disclaimer tailored to Leaf Advocates LLC or any
          applicable regulatory requirements.
        </p>
      </header>

      <section className="mt-10 space-y-8 body-md">
        <div className="card">
          <div className="card-inner space-y-3">
            <h2 className="heading-md">1. No legal advice</h2>
            <p>
              The content on this website is for general information purposes
              only. It is not intended to, and does not, constitute legal advice
              and should not be relied upon as such. You should obtain specific
              legal advice before making decisions based on any information
              contained here.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-inner space-y-3">
            <h2 className="heading-md">2. No advocate–client relationship</h2>
            <p>
              Visiting this website, sending a message, or booking a
              consultation does not in itself create an advocate–client
              relationship. Such a relationship is only formed when the firm
              confirms it is able to act for you and you agree to the terms of
              engagement.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-inner space-y-3">
            <h2 className="heading-md">3. Accuracy of information</h2>
            <p>
              While reasonable efforts may be made to ensure that information on
              this site is accurate and up to date, no representation or
              warranty is given that it is complete, current, or free from
              error. The firm is not obliged to update or correct any content.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-inner space-y-3">
            <h2 className="heading-md">4. External links</h2>
            <p>
              This site may refer to or link to external websites that are not
              operated or controlled by the firm. The inclusion of any link does
              not imply endorsement, and the firm is not responsible for the
              content or operation of such external sites.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

