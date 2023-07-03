export const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      {stats.map(({ label, id, percentage }) => {
        return (
          <ul className="stat-list">
            <li className="item">
              <span className="label">{label}</span>
              <span className="percentage">{percentage}%</span>
            </li>
          </ul>
        );
      })}
    </section>
  );
};
