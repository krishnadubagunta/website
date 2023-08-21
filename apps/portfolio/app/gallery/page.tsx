import H3 from "kd-ui/ui/typography/h3";
import { CardImage } from 'kd-ui/ui/card'


export default async function Gallery() {
  return (
    <div className="pt-6 flex flex-col w-full">
      <H3>gallery&nbsp;&nbsp;&nbsp;📸</H3>
      <div id="image-gallery" className="pt-6 flex flex-wrap justify-items-start">
        <div className="scale-90 2xl:scale-100">
          <CardImage
            src="/images/me.jpg"
            alt="description"
            title="Me in the middle of nowhere a really long title"
            description="Some rando description"
            price="35"
          />
        </div>
        <div className="scale-90 2xl:scale-100">
          <CardImage
            src="/images/me.jpg"
            alt="description"
            title="Me in the middle of nowhere a really long title"
            description="Some rando description"
            price="35"
          />
        </div>
        <div className="scale-90 2xl:scale-100">
          <CardImage
            src="/images/me.jpg"
            alt="description"
            title="Me in the middle of nowhere a really long title"
            description="Some rando description"
            price="35"
          />
        </div>
        <div className="scale-90 2xl:scale-100">
          <CardImage
            src="/images/me.jpg"
            alt="description"
            title="Me in the middle of nowhere a really long title"
            description="Some rando description"
            price="35"
          />
        </div>
        <div className="scale-90 2xl:scale-100">
          <CardImage
            src="/images/me.jpg"
            alt="description"
            title="Me in the middle of nowhere a really long title"
            description="Some rando description"
            price="35"
          />
        </div>
        <div className="scale-90 2xl:scale-100">
          <CardImage
            src="/images/me.jpg"
            alt="description"
            title="Me in the middle of nowhere a really long title"
            description="Some rando description"
            price="35"
          />
        </div>
      </div>
    </div>
  );
}
