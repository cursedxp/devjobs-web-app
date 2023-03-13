export default function Header() {
  return (
    <header className="">
      <div>
        <div className="brand-name"></div>
        <div className="change-theme">
          <div className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </div>
        </div>
      </div>
      <div className="filter"></div>
    </header>
  );
}
