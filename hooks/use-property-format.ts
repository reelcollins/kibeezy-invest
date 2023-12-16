'use client';

export const usePropertyFormat = (property) => {
    // const address = property.location.map((item) => item.name).join(", ");
    const address = property.location.map((item) => item.name).join(", ");
    const coverPhoto = property.coverPhoto.url;
    const propertyType = `${property.category[0].name}, ${property.category[1].name}`
    const price = property.price.toLocaleString("en-Us", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0});
    const title = property.title;
    const rooms = property.rooms;
    const baths = property.baths;
    const purpose = property.purpose;
    const sqSize = property.area.toFIxed(2);
    const externalID = property.externalID;

    const photos = property.photos?.map((photo) => photo.url) || [];
    const description = property.description;
    const coverVideoUrl = property.coverVideo.url;
    const coverVideo = coverVideoUrl.slice(coverVideoUrl.length - 11);
    const panorama = property.panoramas?.length ? property.panoramas[0].url : [];
    const amenities = property.amenities?.flatMap(({amenities}) => amenities).map((item) => item.text);
    const furnished = property.furnishingStatus;

    // const address = '123 Main St';
    // const coverPhoto = 'url/to/cover/photo.jpg';
    // const propertyType = 'Apartment';
    // const price = 200000;
    // const title = 'Beautiful Apartment for Sale';
    // const rooms = 2;
    // const baths = 1;
    // const purpose = 'For Sale';
    // const sqSize = 1200;
    // const externalID = 'ABC123';
    // const photos = ['url/to/photo1.jpg', 'url/to/photo2.jpg'];
    // const description = 'This is a stunning apartment with great amenities.';
    // const coverVideo = 'url/to/cover/video.mp4';
    // const panorama = 'url/to/panorama/photo.jpg';
    // const amenities = ['Swimming Pool', 'Gym', 'Parking'];
    // const furnished = true;
    
    
    return {
        address,
        coverPhoto,
        propertyType,
        price,
        title,
        rooms,
        baths,
        purpose,
        sqSize,
        externalID,
        photos,
        description,
        coverVideo,
        panorama,
        amenities,
        furnished



    };

    
};