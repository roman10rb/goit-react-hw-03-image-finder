import css from './ImageGallaryItem.module.css'

export default function ImageGallaryItem({ name, onClick }) {
    



    return (
            
        name.map(({ id, webformatURL, tags, largeImageURL }) =>
            {
            return <li onClick={() => onClick(largeImageURL)}  key={id} className={css.ImageGalleryItem}>
                <img className={css.ImageGalleryItemImage} src={webformatURL} alt={tags} />
                    </li>
            })
            
        )
    
}