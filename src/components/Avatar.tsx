import {ImgHTMLAttributes} from 'react';

import styles from './Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
	hasBorder?: boolean; //o ponto de interrogação indica que a propriedade é opcional
	//src: string; essas propriedades que são comuns à tag Image, não precisa colocar
	//alt?:string;
}

//o ...props (conhecido como spread operator) diz que é pra pegar todos os outros atributos comuns ao Image
export function Avatar({hasBorder  = true, ...props}: AvatarProps){
	return (
		<img 
			className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
			{...props}
			//em nenhum momento passa o source, mas o código está funcionando normalmente
		/>
	)
}