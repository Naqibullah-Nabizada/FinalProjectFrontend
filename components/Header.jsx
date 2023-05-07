import Button from "./Button"
import Navbar from "./Navbar"
import Search from "./Search"

const Header = ({href}) => {
  return (
    <>
      <div className="w-[40%] flex">
        <Button href={href} text={'اضافه کردن'} />
      </div>
      <div className="w-[20%]">
        <Navbar />
      </div>
      <div className="w-[40%]">
        <Search />
      </div>
    </>
  )
}

export default Header