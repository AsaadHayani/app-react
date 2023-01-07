const About = () => {
  return (
    <section className="about p-3">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="info">
          <h2>About Me</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
            fuga porro iure non saepe voluptates perferendis, distinctio dicta
            vero, libero ratione facilis tempora quam vitae cum et sint incidunt
            expedita. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quos porro dignissimos temporibus, a corporis, soluta qui
            accusantium voluptatum officiis aspernatur illum.
          </p>
          <ul className="m-0 p-0 list-unstyled">
            <li>
              <i className="fas fa-check"></i>Address: Syria Idleb
            </li>
            <li>
              <i className="fas fa-check"></i>Whatsapp:{" "}
              <a href="https://wa.me/+84867194700" target="_blank">
                My Phone
              </a>
            </li>
            <li>
              <i className="fas fa-check"></i>Email:{" "}
              <a href="mailto:asaad99hayani@gmail.com">My Email</a>
            </li>
            <li>
              <i className="fas fa-check"></i>LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/asaad-hayani-19308b193/"
                target="_blank"
              >
                Asaad Hayani
              </a>
            </li>
          </ul>
        </div>
        <img
          src="https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Asaad Hayani"
          width="280px"
          height="270px"
        />
      </div>
    </section>
  );
};

export default About;
