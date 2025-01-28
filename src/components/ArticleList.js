import React from "react";
import Article from "./Article";


function ArticleList({posts}){ 
    // console.log(articles)
    return (
      <main>
        {posts.map(article => { 
         return <Article
            key={article.id}
            title={article.title}
            date={article.date}
            preview={article.preview}
            minutes={article.minutes}
          />
        })}
      </main>
    )
  }

export default ArticleList