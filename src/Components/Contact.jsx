import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import ScrollReveal from "scrollreveal";
import Swal from "sweetalert2";
import Cimage from "../assets/images/contact1.png";
import ClipLoader from "react-spinners/ClipLoader";

const Contact = () => {
  const form = useRef();

  // State to manage form inputs, feedback, errors, and button disable state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // State to handle button disabling

  // ScrollReveal animation initialized once
  React.useEffect(() => {
    const srtop = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 1000,
      reset: true,
    });

    srtop.reveal(".contact .container", { delay: 300 });
    srtop.reveal(".contact .container .form-group", { delay: 300 });
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate form data
  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all required fields.");
      Swal.fire({
        icon: "warning",
        title: "Validation Error",
        text: "Please fill in all required fields.",
      });
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Please enter a valid email address.");
      Swal.fire({
        icon: "warning",
        title: "Validation Error",
        text: "Please enter a valid email address.",
      });
      return false;
    }
    setError(""); // Clear errors if validation passes
    return true;
  };

  // Handle form submission
  const sendEmail = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true); // Disable the button during the process

    try {
      // Send the main form data to your configured EmailJS template
      await emailjs.sendForm(
        "service_nnm8qg9", // replace with your EmailJS Service ID
        "template_cx47ffk", // replace with your EmailJS Template ID
        form.current,
        "Rj9zgYs8Q7jEt02WF" // replace with your EmailJS Public Key
      );

      Swal.fire({
        icon: "success",
        title: "Message Sent!",
        text: "Your message was sent successfully!",
      });

      // Optionally, send a response to the user using a different template
      await emailjs.send(
        "service_nnm8qg9", // Same Service ID or another if configured differently
        "template_o99frpd", // Replace with a different Template ID for auto-response
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "Rj9zgYs8Q7jEt02WF" // Replace with your Public Key
      );

      setFormData({ name: "", email: "", phone: "", message: "" }); // Clear form after submission
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Message Failed",
        text: "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false); // Re-enable the button after submission is handled
    }
  };

  return (
    <div>
      <section className="contact" id="contact">
        <h2 className="heading">
          <i className="fas fa-headset" /> Get in <span>Touch</span>
        </h2>
        <div className="container">
          <div className="content">
            <div className="image-box">
              <img draggable="false" src={Cimage} alt="Contact" />
            </div>
            <form ref={form} onSubmit={sendEmail} id="contact-form">
              <div className="form-group">
                <div className="field">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <i className="fas fa-user" />
                </div>
                <div className="field">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <i className="fas fa-envelope" />
                </div>
                <div className="field">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <i className="fas fa-phone-alt" />
                </div>
                <div className="message">
                  <textarea
                    placeholder="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                  <i className="fas fa-comment-dots" />
                </div>
              </div>
              <div className="button-area">
                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <ClipLoader // Show the TailSpin loader when submitting
                      height="20"
                      width="20"
                      color="#ffffff"
                      ariaLabel="loading"
                    />
                  ) : (
                    <>
                      Submit <i className="fa fa-paper-plane" />
                    </>
                  )}
                </button>
              </div>
              {error && <p className="error-message">{error}</p>}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
