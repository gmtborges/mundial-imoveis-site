interface LocationProps {
  address: string;
}
export function Location({address}: LocationProps) {
  const encodedAddress = encodeURIComponent(address);
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${encodedAddress}`;

  return (
    <div className="aspect-video w-full rounded-lg overflow-hidden">
      <iframe
        src={mapSrc}
        width="100%"
        height="100%"
        style={{border: 0}}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
