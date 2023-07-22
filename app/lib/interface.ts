export interface Post {
    title: string;
    overview: string;
    content: any;
    _id: string;
    slug: {
        current: string;
    };
    _createdAt: string;
    authorName: string;
    authorImage: {
        alt: string; // Alternative text for the image
        asset: {
            _ref: string; // The reference to the image asset in Sanity
            _type: "reference"; // The type of the reference (always "reference" for Sanity image assets)
        };
    };
}

export interface Testimonial {
    testimonial: string;
    jobTitle: string;
    company: string;
    content: any;
    _id: string;
    slug: {
        current: string;
    }
}