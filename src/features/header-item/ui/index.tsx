import { Link } from 'react-router'

interface HeaderItemProps {
  path: string;
  name: string;
}

export const HeaderItem = ({ path, name }: HeaderItemProps) => {
  return (
    <li className="text-sm font-medium hover:opacity-50 duration-300">
      <Link to={path}>{name}</Link>
    </li>
  )
}
