import logo from "../../assets/footerLogo.png";

const Footer = () => {
  return (
    <footer className="bg-[#FF630B] text-white py-4">
      {/* Desktop View */}
      <div className="">
        <div className="container mx-auto py-8 px-4">
          <div className="md:flex justify-between mb-20">
            <div className="col-span-1">
              <img className="block mx-auto" src={logo} alt="" />
            </div>
            <div className="col-span-1">
              <h4 className="text-lg font-bold">Product</h4>
              <ul className="mt-4 ">
                <li>Borrowing</li>
                <li>eAudio</li>
                <li>Magazine</li>
                <li>eVideos</li>
                <li>My Library</li>
              </ul>
            </div>
            <div className="col-span-1">
              <h4 className="text-lg font-bold">Product</h4>
              <ul className="mt-4 ">
                <li>Borrowing</li>
                <li>eAudio</li>
                <li>Magazine</li>
                <li>eVideos</li>
                <li>My Library</li>
              </ul>
            </div>
            <div className="col-span-1">
              <h4 className="text-lg font-bold">Product</h4>
              <ul className="mt-4 ">
                <li>Borrowing</li>
                <li>eAudio</li>
                <li>Magazine</li>
                <li>eVideos</li>
                <li>My Library</li>
              </ul>
            </div>
            <div className="col-span-1">
              <h4 className="text-lg font-bold">Product</h4>
              <ul className="mt-4 ">
                <li>Borrowing</li>
                <li>eAudio</li>
                <li>Magazine</li>
                <li>eVideos</li>
                <li>My Library</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-t border-white" />
      <div>
        <ul className="flex justify-center">
          <li className="p-2">Terms of Use</li>
          <li className="p-2">Privacy policy </li>
          <li className="p-2">Cookie policy</li>
        </ul>
        <p className="text-center">
          &copy; <span>2022 Chyra Library</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
