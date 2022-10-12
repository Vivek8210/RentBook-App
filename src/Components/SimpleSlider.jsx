import React, { useState } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
    "https://ychef.files.bbci.co.uk/976x549/p03gg1lc.jpg",
    "https://nextbigwhat.com/wp-content/webpc-passthru.php?src=https://nextbigwhat.com/wp-content/uploads/2021/12/the-7-best-books-to-improve-influencing-skills-2-scaled-1.jpeg&nocache=1",
    "https://www.ecoleglobale.com/blog/wp-content/uploads/2018/12/importance-of-books-in-student-life-1.jpg",
    "https://www.bookbaby.com/images/og/og-homepage.jpg",
    "https://assets.brightspot.abebooks.a2z.com/dims4/default/de3a6d5/2147483647/strip/true/crop/1580x760+0+0/resize/998x480!/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.amazonaws.com%2F72%2F26%2Fd719022c4d128236853b013e9c9f%2Fhugo-awards-carousel.png"
];


const Slideshow = () => {
    const [autoplay, setAutoplay] = useState(true);

    return (
        <>
            <div style={{ width: "100%", height: "100%" }}>
                <Slide autoplay={autoplay}>
                    {slideImages.map((item) => (
                        <div className="each-slide" >
                          
                            <div style={{ width: "100%", height: "400px" }}>
                                <img src={item} style={{ width: "100%",  height: "400px" }} />
                            </div>
                        </div>
                    ))}

                </Slide>
            </div >
        </>
    )
};

export default Slideshow;