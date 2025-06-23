import s from "./leftBar.module.less";

const LeftBar = () => {
  return (
    <div className={s.leftBar}>
      <div className={s.menuIcons}>
        <a href="/" className={s.menuIcon}>
          <img src="/general/logo.png" alt="" />
        </a>
        <a href="/" className={s.menuIcon}>
          <img src="/general/home.svg" alt="" />
        </a>
        <a href="/" className={s.menuIcon}>
          <img src="/general/create.svg" alt="" />
        </a>
        <a href="/" className={s.menuIcon}>
          <img src="/general/updates.svg" alt="" />
        </a>
        <a href="/" className={s.menuIcon}>
          <img src="/general/messages.svg" alt="" />
        </a>
      </div>
      <a href="/" className={s.menuIcon}>
        <img src="/general/messages.svg" alt="" />
      </a>
    </div>
  );
};

export default LeftBar;
