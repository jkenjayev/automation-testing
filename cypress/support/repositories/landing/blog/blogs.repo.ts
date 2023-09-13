
export class BlogsRepo {
	blogs = () => cy.get('[href="/blog"]').eq(0);
	blogFilter = () => cy.get(".blog-tabbar__item");
	blogArticle = () => cy.get(".blog-article__item").eq(0);
	moreBtn = () => cy.contains("Ko'proq ko'rish");
	shareBtn = () => cy.get('.blog-single__share-btn');
	shareSocial = () => cy.get(".blog-single__share-item");
}