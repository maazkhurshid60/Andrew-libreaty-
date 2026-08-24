import PropertyMap from "../../property/[slug]/PropertyMap";

export default function OfficeMap() {
  return (
    <section className="contact-map-band" id="office-map">
      <div className="container">
        <div className="contact-map-head">
          <p className="eyebrow">Find Us</p>
          <h2 className="contact-map-title">Visit the Office</h2>
          <p className="contact-map-addr">12001 Ventura Pl Ste 100, Studio City, CA 91604</p>
        </div>
        <PropertyMap lat={34.1479} lng={-118.396} label="Andrew Liberty Team" />
      </div>
    </section>
  );
}
