import ProductCard from '../product-card/product-card.component';

import { CategoryPrevewContainer, Title, Preview } from  './category-preview.styles';

const CategoryPreview = ({title, products}) => {
    return (
        <CategoryPrevewContainer>
            <h2>
                <Title to={title}>
                    {title.toUpperCase()}
                </Title>
            </h2>
            <Preview>
                {
                    products
                    .filter((_, idx) => idx < 4)
                    .map((product) => 
                    <ProductCard key={product.id} product={product} />)
                }
            </Preview>
        </CategoryPrevewContainer>
    )
};

export default CategoryPreview;