import { set } from 'date-fns'
import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar' 
import styles from './Comment.module.css'

export function Comment({ content, onDeleteComment }) {
    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment() {
        onDeleteComment(content);    
    }

    function handleLikeComment() {
      setLikeCount((state) => {
        return state + 1
      })
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false}  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=50" />
            
            <div className={styles.commentBox }>
               <div className={styles.commentContent}>
                  <header>
                    <div className={styles.authorAndTime}>
                        <strong>Diego Fernandes</strong>
                <time title='28 de Janeiro ás 17:41h' dateTime='2023-01-28 17:41:30'>Cerca de 1h atrás</time>
                    </div>

                    <button onClick={handleDeleteComment} title='Deletar comentario'>
                      <Trash size={24}/>
                    </button>
                  </header>
                      
                  <p>{content}</p>
                  </div>  
                 
                  <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                  </footer>
            </div>
        </div>
    )
} 