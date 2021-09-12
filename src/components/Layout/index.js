import s from "./style.module.css";

const Layout = ({ title, urlBg, colorBg, children }) => {
  const styleBg = {
    background: urlBg ? `url(${urlBg}) ` : colorBg,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "centre",
  };
  return (
    <section className={s.root}>
      <div style={styleBg} className={s.wrapper}>
        <article>
          <div className={s.title}>
            <h3> {title}</h3>
            <span className={s.separator}></span>
          </div>
          <div className={`${s.desc} ${s.full}`}>{children}</div>
        </article>
      </div>
    </section>
  );
};

export default Layout;
