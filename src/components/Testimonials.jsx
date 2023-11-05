import data from "../data/index.json";

export default function Testimonial() {
  return (
    <div className="portfolio--section--container">
  {data?.testimonial.map((item, index) => (  // "testimonial" is an array
    <div key={index} className="testimonial--section--card">
      <div className="testimonial--section--card--review">
        {/* {Array.from({ length: 5 }, (reviews, index) => (
          // Your SVG code here
        ))} */}
      </div>
      <p className="text-md">{item.description}</p>  // Use "item.description" for the description
      <div className="testimonial--section--card--author--detail">
        <img src={item.src} alt="Avatar" />  // Use "item.src" for the image source
        <div>
          <p className="text-md testimonial--author--name">
            {item.author_name}  // Use "item.author_name" for the author's name
          </p>
          <p className="text-md testimonial--author--designation">
            {item.author_designation}  // Use "item.author_designation" for the author's designation
          </p>
        </div>
      </div>
    </div>
  ))}
</div>

  );
}