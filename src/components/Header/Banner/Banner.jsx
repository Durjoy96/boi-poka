import Button from "../../Buttons/Button";
import BookBanner from "../../../assets/books.png";
import Books from "./Books";

const Banner = () => {
  return (
    <div className="mt-8">
      <div className="hero bg-base-200 py-20 rounded-3xl">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={BookBanner} className="max-w-sm rounded-lg" />
          <div>
            <h1 className="text-5xl font-bold max-w-lg">
              Books to freshen up your bookshelf
            </h1>
            <div className="mt-12">
              <Button isPrimary={true} text="View The List"></Button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Books></Books>
      </div>
    </div>
  );
};

export default Banner;
