

export default function Project() {
    return (
        <article>
            <a href="pages/article-typescript.html">
                <img src="images/articles/article_typescript.jpg" alt="typescript logo" />
                <div className="projectCard"></div>
                <div className="projectCard-text">
                    <h3>Article: The basics of TypeScript</h3>
                    <p>
                        I have been hearing about TypeScript for a while now. I decided
                        it was time to learn what it was all about and wrote an article
                        about it.
                    </p>
                    <div className="codeVariations">
                        <div className="jsChip">typescript</div>
                    </div>
                </div>
            </a>
        </article>
    );
};

