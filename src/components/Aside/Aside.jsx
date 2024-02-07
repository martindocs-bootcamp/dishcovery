import Search from '../Search/Search';
import Favourites from '../Favourites/Favourites';

const Aside = () => {
  return (
    <aside className="aside">
        <Search />
        <Favourites />
    </aside>
  )
}

export default Aside;