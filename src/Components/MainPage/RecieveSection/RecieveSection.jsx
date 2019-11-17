import React from 'react';
import './RecieveSection.css';

const RecieveSection = () =>{
	return(
		<div id='recieve' className='RecieveSection'>
			<h3>Що ви отримуєте?</h3>
			<p>Вам треба оскаржити штраф за перевищення швидкості. 
				Уявіть, що ви вже звернулись до нас.
			</p>
			<div className='cards'>
				<div>
					<img src={process.env.PUBLIC_URL + 'img/creditcard.svg'} alt="card"/>
					<h4>Позов</h4>
					<p>Ви приємно здивувались, 
						як швидко ми підготували позовну заяву, 
						яка обґрунтує
						оскарження штрафу.
					</p>
				</div>
				<div>
					<img src={process.env.PUBLIC_URL + 'img/creditcard.svg'} alt="card"/>
					<h4>Оскарження</h4>
					<p>Ми ознайомили вас з усіма деталями і розказали алгоритм дій, щоб ви були впевнені
						та спокійні протягом всієї процедури оскарження. Але якщо у вас виникнуть будь-які
						запитання чи уточнення — звертайтесь! Радо підкажемо та допоможемо!
					</p>
				</div>
				<div>
					<img src={process.env.PUBLIC_URL + 'img/creditcard.svg'} alt="card"/>
					<h4>Перемога</h4>
					<p>
						Подаєте позов до суду та очікуєте своєї перемоги.
					</p>
				</div>
			</div>
		</div>
	)
}

export default RecieveSection;