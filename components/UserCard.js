const UserCard = () => {
  return (
    <div className="UserCard">
      <section className="User__img">
        <img src='/images/me.png' alt="user" />
      </section>

      <section className="User__info">
        <p>
          {" "}
          <span className="faint">I am</span> a Software Engineer, Speaker, and Occasional Model
        </p>
        <p>
          {" "}
          <span className="faint">I like</span> Cats, Wine, and Black dresses
        </p>

        <p className="User__info__details User__info__divider faint">
          <span>Name: </span>
          <span>Natthakit Iewprasert</span>
        </p>
        <p className="User__info__details faint">
          <span>Location: </span>
          <span>Thailand</span>
        </p>
      </section>
    </div>
  )
}

export default UserCard;
