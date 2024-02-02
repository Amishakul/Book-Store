import React from 'react';
import './productListing.styles.css';
import ProductListingCard from '../../cards/product-listing-card/ProductListingCard';
import { BookData } from '../../../util/BookData';

const ProductListing = () => {
    const selfHelpBookIds = [5, 34, 7, 9];
    const mangaBookIds = [50, 51, 52, 53]; // Replace with actual manga book IDs
    const fictionBookIds = [38, 39, 42, 44]
    const religiousBookIds = [27, 28, 29, 30]
    const trendingBookIds = [5, 10, 24, 47, 61]
    const bestBookIds = [45, 0, 21, 41]
    const bomIds = [1, 18, 19, 57]
    const arrivalIds =[64, 65, 66, 67]
    const internationalIds = [68, 69, 70, 71]
    const marathiIds = [55, 56, 58, 59]

    return (
        <div className="product-listing-container">
            <div className="container">
                <h2>Here are some <span className="text-primary">Self-Help Books</span> that you might like</h2>

                <div className="listing-container">
                    {BookData.filter(book => selfHelpBookIds.includes(book.id)).map((book) => (
                        <ProductListingCard key={book.id} bookData={book} />
                    ))}
                </div>

                <br/><br/><br/><br/>

                <h2>Here are some <span className="text-primary">Manga Books</span> that you might like</h2>

                <div className="listing-container">
                    {BookData.filter(book => mangaBookIds.includes(book.id)).map((book) => (
                        <ProductListingCard key={book.id} bookData={book} />
                    ))}
                </div>

                <br/><br/><br/><br/>

                <h2>Here are some <span className="text-primary">Fiction Books</span> that you might like</h2>

                <div className="listing-container">
                    {BookData.filter(book => fictionBookIds.includes(book.id)).map((book) => (
                        <ProductListingCard key={book.id} bookData={book} />
                    ))}
                </div>

                <br/><br/><br/><br/>

                <h2>Here are some <span className="text-primary">Religions Books</span> that you might like</h2>

                <div className="listing-container">
                    {BookData.filter(book => religiousBookIds.includes(book.id)).map((book) => (
                        <ProductListingCard key={book.id} bookData={book} />
                    ))}
                </div>

                <br/><br/><br/><br/>

                <h2>Here are  <span className="text-primary">Now Trending </span> Books</h2>

                <div className="listing-container">
                   {BookData.filter(book => trendingBookIds.includes(book.id)).map((book) => (
                       <ProductListingCard key={book.id} bookData={book} />
                    ))}
                </div>

                <br/><br/><br/><br/>

                <h2>Here are  <span className="text-primary">Best Selling </span> Books</h2>

                <div className="listing-container">
                   {BookData.filter(book => bestBookIds.includes(book.id)).map((book) => (
                       <ProductListingCard key={book.id} bookData={book} />
                    ))}
                </div>

                <br/><br/><br/><br/>

                <h2>Here are <span className="text-primary">Books of the Month </span> </h2>

                  <div className="listing-container">
                    {BookData.filter(book => bomIds.includes(book.id)).map((book) => (
                       <ProductListingCard key={book.id} bookData={book} />
                    ))}
                </div>

                <br/><br/><br/><br/>

                <h2>Here are <span className="text-primary">New Arrival Books </span> </h2>

                  <div className="listing-container">
                    {BookData.filter(book => arrivalIds.includes(book.id)).map((book) => (
                       <ProductListingCard key={book.id} bookData={book} />
                    ))}
                </div>

                <br/><br/><br/><br/>

                <h2>Here are <span className="text-primary">Best Marathi Classic Books </span> </h2>

                  <div className="listing-container">
                    {BookData.filter(book => marathiIds.includes(book.id)).map((book) => (
                       <ProductListingCard key={book.id} bookData={book} />
                    ))}
                </div>

                <br/><br/><br/><br/>

                <h2>Here are <span className="text-primary">International Bestseller Books </span> </h2>

                  <div className="listing-container">
                    {BookData.filter(book => internationalIds.includes(book.id)).map((book) => (
                       <ProductListingCard key={book.id} bookData={book} />
                    ))}
                </div>


            </div>
        </div>
    );
}

export default ProductListing;
