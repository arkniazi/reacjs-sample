import ImageGallery from 'react-image-gallery';


export const ImageGalleryComponent = ({ images }) => {
    return (
        <ImageGallery
            lazyLoad
            showPlayButton={false}
            showFullscreenButton={false}
            showNav={false}
            onErrorImageURL={'/images/products/demo_product_gallery_01.jpg'}
            items={images}
        />
    )
}




