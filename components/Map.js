import React from 'react'

export default function Map() {
  return (
<div className='mx-auto'>
  <iframe
    width="40%"
    height="50%"
    className=" absolute mx-auto "
    // frameBorder={0}
    title="map"
    // marginHeight={0}
    // marginWidth={0}
    scrolling="no"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10417.614998538384!2d90.35336868013292!3d22.60963659984608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30aacb5a50de750f%3A0xd22ec3ec5d6fa0a4!2sChar%20Kaya!5e0!3m2!1sen!2sbd!4v1700036028001!5m2!1sen!2sbd"
    style={{ filter: " contrast(1.2) opacity(0.4)" }}/>
</div>
  )
}