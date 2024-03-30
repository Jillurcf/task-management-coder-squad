import image from '../../assets/images/seaonalMenu.jpg'

const SeasonalMenu = () => {
  return (
    <div className='mt-36'>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/XJMC27f/eden-constantino-i-Jg1-Yzs-Efqo-unsplash.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">More About Tasks</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-outline btn-secondary">Discover More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeasonalMenu;
