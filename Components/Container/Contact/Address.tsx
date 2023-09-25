//
export default function ContactAddress() {
  return (
    <section className='contact__address'>
      <div className='contact__address-content'>
        <h2 className='contact__address-heading'>General Information</h2>
        <div className='contact__address-field'>
          <p className='contact__address-field-name'>Email</p>
          <a href='mailto:hello@cloudbank.ng' className='contact__address-field-link'>
            hello@cloudbank.ng
          </a>
        </div>
        <div className='contact__address-field'>
          <p className='contact__address-field-name'>Phone</p>
          <a href='tel:+23412279283' className='contact__address-field-value'>
            +234 122 792 83
          </a>
          <p>
            <strong>Active call time:</strong> 7am - 6pm Monday to Friday
          </p>
          <p>
            <strong>WhatsApp messages active time:</strong> 8am - 8pm Monday - Friday
          </p>
          <p>
            <strong>Saturday Only WhatsApp message:</strong> 10am - 4pm
          </p>
        </div>
        <div className='contact__address-field'>
          <p className='contact__address-field-name'>Address</p>
          <p>
            <a href='mailto:hello@cloudbank.ng' className='contact__address-field-value'>
              <strong>Lagos: </strong> No. 3, John Great Court, Alternative Route, Chevron, Lekki,
              Lagos, Nigeria.{' '}
            </a>
          </p>
          <p>
            <a href='mailto:hello@cloudbank.ng' className='contact__address-field-value'>
              <strong>Abuja: </strong>Wuse II Abuja, Nigeria.
            </a>
          </p>
          <p>
            <a href='mailto:hello@cloudbank.ng' className='contact__address-field-value'>
              <strong>Kano: </strong>No. 10, Shanono, Kano, Kano State, Nigeria.
            </a>
          </p>
        </div>
      </div>

      <div className='contact__address-map'>
        <iframe
          className='contact__address-frame'
          title='CloudBank Address Map Frame'
          src='https://maps.google.com/maps?q=Miraton%20Rose%20Renewable%20Energy%20Limited,%203,%20John%20Great%20Court,%20Alternative%20Route,%20Chevron%20Drive,%20Eti-Osa%20102105,%20Lekki&t=&z=13&ie=UTF8&iwloc=&output=embed'
        ></iframe>
      </div>
    </section>
  );
}
