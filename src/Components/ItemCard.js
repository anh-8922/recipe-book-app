
import * as marked from 'marked';
export default function ItemCard (props) {
    const {id, itemImage, itemIngredients, itemInstructions, itemTitle} =props

    const convertMarkdownToPlainText = (markdownContent) => {
      const html = marked.parse(markdownContent);
      const div = document.createElement('div');
      div.innerHTML = html;
      return div.textContent || div.innerText || '';
      // const modifiedContent = markdownContent.replace(/\n\s*\n/g, '___');
      // const html = marked.parse(modifiedContent);
      // const div = document.createElement('div');
      // div.innerHTML = html;
      // let plainText = div.textContent || div.innerText || '';
      // // Replace the special character sequence with an empty line
      // plainText = plainText.replace(/___/g, '\n');
      // return plainText;
    }
   
    const MarkdownText =({ itemInstructions }) => {
      const plainText = convertMarkdownToPlainText(itemInstructions);
      return (
              // We have to change font-family 
              <pre style={{ 
                  whiteSpace: 'pre-wrap', 
                  fontFamily:'sans-serif', 
                  fontSize:'1rem',
                  padding:'1rem 2rem',
                  }}>
                {plainText}
              </pre>
              )
    }
    
    return (
        <div key={id} className="item-card">
          <h1>{itemTitle}</h1>
          <div className="group-1">
            <p><img src={itemImage} alt={itemTitle} style={{width:'400px', height:'300px'}}/></p>
            <ul>
            {itemIngredients.map((ingredient, index) => (
              <li key={index} style={{listStyle:"none"}}>{ingredient}</li>
            ))}
            </ul>
          </div>
          <div><MarkdownText itemInstructions={itemInstructions}/></div>
        </div>
    )
}