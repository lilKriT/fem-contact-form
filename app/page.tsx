import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <p>Contact Us</p>

      <p>First Name This field is required</p>

      <p>Last Name This field is required</p>

      <p>
        Email Address Please enter a valid email address This field is required
      </p>

      <p>
        Query Type General Enquiry Support Request Please select a query type
      </p>

      <p>Message This field is required</p>

      <p>
        I consent to being contacted by the team To submit this form, please
        consent to being contacted
      </p>

      <p>Submit</p>

      <p>
        Message Sent! Thanks for completing the form. We'll be in touch soon!
      </p>
    </div>
  );
}
