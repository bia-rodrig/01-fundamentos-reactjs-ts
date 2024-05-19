import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar' 
import {Post, PostType} from './components/Post'

import './global.css'
import styles from './App.module.css'


//e agora diz que os posts são do tipo PostType e em array
const posts: PostType[]= [
	{
		id: 1, //e por causa desse id declarado aqui, tem que inserir no PostType tambem
		author: {
			avatarUrl: 'https://github.com/bia-rodrig.png',
			name: 'Bianca Rodrigues',
			role: 'Fullstack developer'
		},
		content: [
			{ type: 'paragraph', content: 'Fala galera 👋' },
			{ type: 'paragraph', content: 'Hoje é sexta-feira, dia 17/05/2024 e eu estou cansada. 🚀' },
			{ type: 'link', content: 'https://github.com/bia-rodrig' }
		],
		publishedAt: new Date('2022-05-03 20:00:00')
	},{
		id: 2,
		author: {
			avatarUrl: 'https://github.com/maykbrito.png',
			name: 'Mayk Brito',
			role: 'Educator @Rocketseat'
		},
		content: [
			{ type: 'paragraph', content: 'Fala galera 👋' },
			{ type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
			{ type: 'link', content: 'jane.design/doctorcare' }
		],
		publishedAt: new Date('2022-05-10 20:00:00')
	}
];


export function App() {
	return (
		<div>
		<Header />

		<div className={styles.wrapper}>
			<Sidebar /> 
			<main>
				{
					posts.map(post => {
						return (
							<Post 
								key={post.id}
								post={post}
							/>
						)
					})
				}
			</main>
		</div>
		
		</div>
	)
}