import Navigation from "../components/Navigation/Navigation"

const images = [
  "https://images.pexels.com/photos/17345405/pexels-photo-17345405/free-photo-of-a-smiling-bride-with-a-sunflower.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/17394414/pexels-photo-17394414/free-photo-of-common-leopard-butterfly-sitting-on-leaf.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/19171623/pexels-photo-19171623/free-photo-of-scenic-view-of-a-mountain-range.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/1564473/pexels-photo-1564473.png?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/20686233/pexels-photo-20686233/free-photo-of-woman-sitting-by-piano.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/27044945/pexels-photo-27044945/free-photo-of-woman-wearing-black-blouse-holding-hands-on-her-neck.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/27152410/pexels-photo-27152410/free-photo-of-a-small-bird-sitting-on-top-of-a-wooden-post.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
];

const renderedGalleryImages: any = []

for (let i = 0; i < images.length; i++) {
  renderedGalleryImages.push(
    <div key={images[i]}>
        <img src={images[i]} className="h-[400px] w-full object-cover object-center rounded-[20px]" alt="Gallery" />
    </div>
  )
}

const Gallery = () => {
  return (
    <>
      <Navigation />
      <div className="mb-[15px]">
          <div><h4 className="text-slate-900 font-black text-[25px] select-none mt-[20px] flex justify-center">Gallery</h4></div>
      </div>
      <div className="grid grid-cols-1 gap-[6px] mt-[30px] mb-[30px] sm:grid-cols-2 md:grid-cols-3 pr-[6px] pl-[6px] lg:grid-cols-4 md:pl-[40px] md:pr-[40px]">
        {renderedGalleryImages}
      </div>
    </>
  )
}

export default Gallery
