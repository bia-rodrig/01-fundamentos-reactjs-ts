import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import { useState } from 'react'
import styles from './Comment.module.css'

interface CommentProps{
	content: string;
	onDeleteComment: (comment: string) =>void;  //a função recebida como propriedade do pai, não retorna nada. mas é importante informar o tipo de argumento que a função recebe. no caso é uma string
}


export function Comment({ content, onDeleteComment }:CommentProps){
	const [likeCount, setLikeCount] = useState(0)

	function handleDeleteComment(){
		onDeleteComment(content)
	}

	function handleLikeComment(){
		setLikeCount((state) =>{
			return state + 1 
		})
	}

	return (
		<div className={styles.comment}>
			<Avatar 
				hasBorder={false} 
				src="https://github.com/bia-rodrig.png" 
				alt=""
			/>
			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>Bianca Rodrigues</strong>
							<time title="11 de Maio às 08:13" dateTime="2022-05-11 08:13:30">Cerca de uma hora atrás</time>
						</div>
						<button onClick={handleDeleteComment} title="Deletar comentário">
							<Trash size={24} />
						</button>
					</header>
					<p>{content}</p>
				</div>
				<footer>
					<button onClick={handleLikeComment}>
						<ThumbsUp/>
						Aplaudir <span>{likeCount}</span>
					</button>
				</footer>
			</div>
		</div>
	)
}