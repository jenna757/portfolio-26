export const menuName = [
  { id: 'menu1', label: 'About' },
  { id: 'menu2', label: 'Carrer' },
  { id: 'menu3', label: 'Projects' },
] as const;

const Menu = () => {
  return (
    <nav>
      <ul>
        {menuName.map(({ id, label }) => {
          return (
            <li key={id}>
              <a href={`#${label.toLowerCase()}`}></a>
              {label}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Menu;
