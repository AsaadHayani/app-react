const Work = () => {
  return (
    <section className="work text-center p-2">
      <div className="heading my-3">
        <h2>Our Works</h2>
      </div>
      <div className="d-flex justify-content-evenly">
        <img
          src="https://fokussprachen.com/wp-content/uploads/2020/06/Workshop.jpg"
          alt=""
        />
        <img
          src="https://api.assemblestudio.co.uk/wp-content/uploads/blackhorse-workshop_2013_group-lesson-at-benches_ben-quinton-1600x1280.jpg"
          alt=""
        />
        <img
          src="https://ciirc.res.in/wp-content/uploads/2022/03/1_MVAwaxXSO17y7vG7xLdGCg.jpeg"
          alt=""
        />
        <img
          src="https://miro.com/blog/wp-content/uploads/2021/02/Interactive-Workshop-Activities-for-Virtual-Collaboration.png"
          alt=""
        />
      </div>
      <div className="arrows mt-3">
        <i className="fas fa-chevron-left"></i>
        <i className="fas fa-chevron-right"></i>
      </div>
    </section>
  );
};

export default Work;
