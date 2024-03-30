import { BsCalendar2Date } from "react-icons/bs";
import { IoMdContacts } from "react-icons/io";
import { RiPagesLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Props from 'prop-types';

const ReadBook = ({readBook}) => {
    const {
      bookId,
		author,
		bookName,
		category,
		image,
		rating,
		tags,
		publisher,
		totalPages,
		yearOfPublishing,
	} = readBook;
    return (
        <div className="border-4 rounded-2xl p-4 my-5">
          <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure className="lg:w-[30%]  "><img  className="h-[30%]p-3" src={image} alt="Image"/></figure>
  <div className=" w-[70%] my-auto">
    <section className="card-body space-y-5">
    <h2 className="card-title">{bookName}</h2>
    <p>by:{author}</p>
    <div className="lg:flex  items-center gap-5">
        <div className="lg:flex sm:space-y-2 gap-2">Tag:{tags.map((tag,ix) => <p className="p-1 bg-slate-100 rounded-xl text-green-300" key={ix}>{tag}</p>)} </div>
        <div className="flex items-center gap-4"><BsCalendar2Date></BsCalendar2Date> Year of Publishing: <p className="font-bold">{yearOfPublishing}</p> </div>
    </div>
  <div className="flex items-center">
  <p className="flex items-center gap-1"><IoMdContacts></IoMdContacts>Publisher : {publisher} </p>
  <p className="flex items-center gap-1"><RiPagesLine></RiPagesLine>Pages : {totalPages} </p>
  </div> <hr />
  <div className="lg:flex gap-3 ">
    <p className="p-2 mr-2 text-[#328EFF] rounded-full bg-[#328EFF26]">Category:{category} </p>
    <p className="p-2 mr-2 text-[#328EFF] rounded-full bg-[#FFAC3326]">Rating:{rating} </p>
   <Link to={`bookDetails/${bookId}`}> <button className="p-2 text-[#FFFFFF] rounded-full bg-[#23BE0A]">View Details</button></Link>
  </div>
    </section>
  </div>
</div>
        </div>
    );
};
ReadBook.propTypes = {
ReadBook:Props.object}
export default ReadBook;