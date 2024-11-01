import { useLoaderData, useParams } from "react-router-dom";
import { setDataToLocalStorage } from "../../../utilities/MarkAsRead";
import { setWishListDataToLocalStorage } from "../../../utilities/WishList";

const BookDetails = () => {
  const params = useParams();
  const data = useLoaderData();
  const dataAccordingToId = data.find((item) => item.bookId == params.bookId);
  console.log(dataAccordingToId);
  const { bookId, author, bookName, category, rating, image, tags, review } =
    dataAccordingToId;

  const ReadHandler = (bookId) => {
    setDataToLocalStorage(bookId);
  };

  const wishlistHandler = (bookId) => {
    setWishListDataToLocalStorage(bookId);
  };

  return (
    <div className="grid lg:grid-cols-2 gap-12 mt-8">
      <div className="bg-base-200 p-16 rounded-3xl flex justify-center items-center">
        <div className="h-96">
          <img className="h-full rounded-lg" src={image} alt="" />
        </div>
      </div>
      <div>
        <h2 className="text-4xl font-bold text-base-content">{bookName}</h2>
        <p className="text-xl mt-4 font-medium text-base-content-secondary">
          By: {author}
        </p>
        <div className="mt-6 py-4 border-t border-b">
          <span className="text-xl font-medium text-base-content-secondary">
            {category}
          </span>
        </div>
        <p className="mt-6">
          <span className="font-bold">Review:</span>
          <span className="text-base-content-secondary">{review}</span>
        </p>
        <div className="flex gap-6 mt-8">
          <button
            onClick={() => ReadHandler(bookId)}
            className="border py-4 px-7 rounded-lg hover:bg-base-200"
          >
            Read
          </button>
          <button
            onClick={() => wishlistHandler(bookId)}
            className="border py-4 px-7 rounded-lg bg-secondary text-secondary-content hover:bg-secondary/80"
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
