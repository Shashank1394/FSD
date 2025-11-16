function Contact() {
  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" rows="4"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
